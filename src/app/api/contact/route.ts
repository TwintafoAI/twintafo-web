import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

function normalizeFormValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function collectPayload(formData: FormData): ContactPayload {
  return {
    name: normalizeFormValue(formData.get("name")),
    email: normalizeFormValue(formData.get("email")),
    organization: normalizeFormValue(formData.get("organization")),
    message: normalizeFormValue(formData.get("message")),
  };
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? "0");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("Missing SMTP configuration.");
  }

  return { host, port, user, pass };
}

export async function GET(request: Request) {
  return NextResponse.redirect(new URL("/#contact", request.url), 303);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    if (normalizeFormValue(formData.get("website"))) {
      return NextResponse.redirect(new URL("/#contact", request.url), 303);
    }

    const payload = collectPayload(formData);

    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.redirect(
        new URL("/?error=1#contact", request.url),
        303,
      );
    }

    const { host, port, user, pass } = getSmtpConfig();
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false,
      requireTLS: true,
      auth: { user, pass },
    });

    const to = process.env.CONTACT_TO ?? user;
    const from = process.env.CONTACT_FROM ?? user;
    const subject = payload.organization
      ? `Twintafo request a call — ${payload.organization}`
      : "Twintafo request a call";
    const text = [
      "New request a call submission:",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Organization: ${payload.organization || "N/A"}`,
      "",
      "Message:",
      payload.message,
    ].join("\n");

    await transporter.sendMail({
      to,
      from,
      replyTo: payload.email,
      subject,
      text,
    });

    return NextResponse.redirect(new URL("/?sent=1#contact", request.url), 303);
  } catch {
    console.warn("Contact form submission failed.");
    return NextResponse.redirect(
      new URL("/?error=1#contact", request.url),
      303,
    );
  }
}
