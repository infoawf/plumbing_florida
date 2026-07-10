import { Link } from "@tanstack/react-router";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-bold whitespace-nowrap select-none " +
  "transition-all duration-[180ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-[#2E86BD] disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#FF6814] text-white hover:bg-[#E85A0F] hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-12px_rgba(255,104,20,0.7)]",
  secondary:
    "bg-transparent text-[#0C2D42] border-2 border-[#2E86BD] hover:bg-[#2E86BD] hover:text-white",
  dark: "bg-[#0C2D42] text-white hover:bg-[#0A2436] hover:-translate-y-[1px]",
  ghost: "bg-transparent text-[#2E86BD] hover:text-[#0C2D42]",
};

const sizes: Record<Size, string> = {
  sm: "text-[13px] px-4 py-2 rounded-[12px] min-h-[40px]",
  md: "text-[15px] px-5 py-3 rounded-[14px] min-h-[48px]",
  lg: "text-[16px] px-6 py-3.5 rounded-[16px] min-h-[52px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  iconRight?: ReactNode;
};

export const CoastalButton = forwardRef<
  HTMLButtonElement,
  CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
>(function CoastalButton(
  { variant = "primary", size = "md", className = "", children, icon, iconRight, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
});

type LinkProps = CommonProps & {
  to?: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function CoastalLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  iconRight,
  to,
  href,
  external,
  ariaLabel,
}: LinkProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {icon}
        <span>{children}</span>
        {iconRight}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={cls} aria-label={ariaLabel}>
      {icon}
      <span>{children}</span>
      {iconRight}
    </Link>
  );
}