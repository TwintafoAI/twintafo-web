"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type ContactSuccessToastProps = {
  initialVisible?: boolean;
  variant?: "success" | "error";
  title: string;
  message: string;
};

function buildSearchWithoutSent(searchParams: URLSearchParams) {
  const next = new URLSearchParams(searchParams);
  next.delete("sent");
  next.delete("error");
  return next.toString();
}

export function ContactSuccessToast({
  initialVisible = false,
  variant = "success",
  title,
  message,
}: ContactSuccessToastProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(initialVisible);

  const cleanUrl = useMemo(() => {
    const nextSearch = buildSearchWithoutSent(searchParams);
    return nextSearch ? `${pathname}?${nextSearch}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timer = window.setTimeout(() => {
      setVisible(false);
      router.replace(cleanUrl);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [cleanUrl, router, visible]);

  if (!visible) {
    return null;
  }

  const containerClasses =
    variant === "success"
      ? "rounded-2xl border border-emerald-200/30 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-100"
      : "rounded-2xl border border-rose-200/30 bg-rose-500/10 px-5 py-4 text-sm text-rose-100";
  const titleClasses =
    variant === "success"
      ? "text-base font-medium text-emerald-50"
      : "text-base font-medium text-rose-50";
  const messageClasses =
    variant === "success" ? "text-emerald-100/70" : "text-rose-100/70";
  const buttonClasses =
    variant === "success"
      ? "self-start rounded-full border border-emerald-200/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-emerald-50 transition hover:border-emerald-200/70"
      : "self-start rounded-full border border-rose-200/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-rose-50 transition hover:border-rose-200/70";

  return (
    <div className={containerClasses}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className={titleClasses}>{title}</p>
          <p className={messageClasses}>{message}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setVisible(false);
            router.replace(cleanUrl);
          }}
          className={buttonClasses}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
