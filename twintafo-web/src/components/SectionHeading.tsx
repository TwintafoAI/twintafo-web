import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string | ReactNode;
  description?: string | ReactNode;
  align?: "left" | "center";
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignClass} ${className ?? ""}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-xl text-base leading-relaxed text-emerald-100/70 sm:text-lg ${
            descriptionClassName ?? ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
