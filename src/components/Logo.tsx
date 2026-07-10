import { Link } from "@tanstack/react-router";

type Props = {
  variant?: "color" | "white" | "navy";
  className?: string;
};

export function LogoMark({ variant = "color", className }: Props) {
  const navy = variant === "white" ? "#FFFFFF" : "#0C2D42";
  const orange = variant === "color" ? "#FF6814" : navy;
  const blue = variant === "color" ? "#39A9E0" : navy;
  const coastal = variant === "color" ? "#2E86BD" : navy;
  return (
    <svg viewBox="0 0 56 56" className={className} aria-hidden="true">
      <circle cx="28" cy="28" r="26" fill="none" stroke={navy} strokeWidth="2" />
      {/* half sun */}
      <path d="M14 30 A14 14 0 0 1 42 30" fill={orange} />
      {/* rays */}
      <path
        d="M28 12 v-4 M18 15 l-2-3 M38 15 l2-3 M12 22 l-3-1 M44 22 l3-1"
        stroke={orange}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* water lines with pipe elbow */}
      <path d="M10 34 h14 a3 3 0 0 1 3 3 v3" stroke={coastal} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M31 40 v-3 a3 3 0 0 1 3 -3 h12" stroke={blue} strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M12 44 h32" stroke={blue} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
      {/* palm sprig */}
      <path
        d="M22 18 q-4 -3 -8 -2 M22 18 q-3 -4 -1 -8 M22 18 q4 -3 8 -2"
        stroke={navy}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

export function Logo({ variant = "color", className = "" }: Props) {
  const navy = variant === "white" ? "#FFFFFF" : "#0C2D42";
  const sub = variant === "white" ? "#CBEFFF" : "#2E86BD";
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Florida Coast Plumbing — Home">
      <LogoMark variant={variant} className="h-11 w-11 shrink-0" />
      <span className="leading-none">
        <span
          className="font-display block text-[20px] font-extrabold tracking-tight"
          style={{ color: navy, letterSpacing: "-0.01em" }}
        >
          Florida Coast
        </span>
        <span
          className="mt-0.5 block text-[10px] font-extrabold uppercase tracking-[0.22em]"
          style={{ color: sub }}
        >
          Plumbing
        </span>
      </span>
    </Link>
  );
}