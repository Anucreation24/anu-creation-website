import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface GoldButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-[10px]",
  md: "px-7 py-3 text-xs",
  lg: "px-9 py-4 text-xs",
};

const variantBase =
  "relative inline-flex items-center justify-center gap-2 font-[family-name:var(--font-inter)] font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300";

const variantStyles: Record<Variant, string> = {
  gold:
    "bg-[#C9A64B] text-[#0A0A0A] hover:bg-[#D8BA67] active:scale-[0.98]",
  outline:
    "border border-[#C9A64B] text-[#C9A64B] hover:bg-[#C9A64B] hover:text-[#0A0A0A] active:scale-[0.98]",
  ghost:
    "text-[#C9A64B] hover:text-[#D8BA67] underline-offset-4 hover:underline active:scale-[0.98]",
};

/**
 * Reusable premium CTA button — can render as <a> or <button>.
 */
export default function GoldButton({
  href,
  onClick,
  children,
  variant = "gold",
  size = "md",
  className,
  external,
  id,
  type = "button",
  disabled,
  ariaLabel,
}: GoldButtonProps) {
  const classes = cn(
    variantBase,
    variantStyles[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <Link href={href} id={id} aria-label={ariaLabel} className={classes} {...externalProps}>
        {children}
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
