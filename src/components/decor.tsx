import type { CSSProperties } from "react";

export function WaveDivider({
  fill = "#F3FBFE",
  className = "",
  flip = false,
  height = 60,
}: {
  fill?: string;
  className?: string;
  flip?: boolean;
  height?: number;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={className}
      style={{ display: "block", width: "100%", height, transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <path d="M0 40 C 240 80, 480 0, 720 30 C 960 60, 1200 20, 1440 40 L1440 80 L0 80 Z" fill={fill} />
    </svg>
  );
}

export function PalmSilhouette({
  color = "#0C2D42",
  className = "",
  style,
}: {
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 200 260" className={className} style={style} aria-hidden="true">
      <path
        d="M100 260 Q102 180 108 130 Q112 100 118 78"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M118 78 Q80 40 20 46 Q60 60 90 90 M118 78 Q160 30 200 50 Q160 60 128 92 M118 78 Q118 30 90 4 Q110 40 108 80 M118 78 Q170 90 196 140 Q150 110 116 96 M118 78 Q80 100 26 130 Q80 108 112 96"
        fill={color}
        opacity="0.95"
      />
    </svg>
  );
}

export function WaterDrop({
  color = "#39A9E0",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 40 56" className={className} aria-hidden="true">
      <path
        d="M20 2 C 30 20, 38 30, 38 40 A 18 18 0 0 1 2 40 C 2 30, 10 20, 20 2 Z"
        fill={color}
      />
    </svg>
  );
}

export function SunsetLines({
  className = "",
  color = "#FF6814",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg viewBox="0 0 120 60" className={className} aria-hidden="true">
      <path d="M8 44 A52 52 0 0 1 112 44" fill={color} opacity="0.9" />
      <line x1="0" y1="50" x2="120" y2="50" stroke={color} strokeWidth="1.5" opacity="0.55" />
      <line x1="0" y1="54" x2="120" y2="54" stroke={color} strokeWidth="1.5" opacity="0.35" />
      <line x1="0" y1="58" x2="120" y2="58" stroke={color} strokeWidth="1.5" opacity="0.2" />
    </svg>
  );
}

export function Birds({ className = "", color = "#0C2D42" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={className} aria-hidden="true">
      <path d="M4 14 q6 -8 12 0 q6 -8 12 0" stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M44 8 q5 -6 10 0 q5 -6 10 0" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

/** Arched portal frame: 500x620 arch container */
export function ArchFrame({
  children,
  className = "",
  borderColor = "#0C2D42",
  innerColor = "#F3FBFE",
  accent = "#39A9E0",
}: {
  children?: React.ReactNode;
  className?: string;
  borderColor?: string;
  innerColor?: string;
  accent?: string;
}) {
  // Rounded top, flat bottom arch — implemented with border-radius
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: "260px 260px 24px 24px",
        border: `3px solid ${borderColor}`,
        background: innerColor,
        boxShadow: `inset 0 0 0 8px ${accent}22, 0 24px 40px -24px rgba(12,45,66,0.35)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-2"
        style={{
          borderRadius: "252px 252px 18px 18px",
          border: `2px solid ${accent}`,
          opacity: 0.7,
        }}
      />
      {children}
    </div>
  );
}

export function CurvedUnderline({ className = "", color = "#2E86BD" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 220 14" preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d="M2 8 Q 60 -2 120 6 T 218 8" stroke={color} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function PalmBeachMap({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 320" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="ring" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#39A9E0" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#39A9E0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Palm Beach County shape (stylized) */}
      <path
        d="M40 40 L280 30 L320 90 L305 200 L290 260 L200 300 L120 290 L60 250 L40 160 Z"
        fill="#39A9E0"
        stroke="#FFFFFF"
        strokeWidth="3"
      />
      {/* Highlighted service zone */}
      <path
        d="M180 90 L280 70 L300 160 L260 240 L170 250 L120 200 L140 130 Z"
        fill="#FF6814"
        fillOpacity="0.85"
        stroke="#FFFFFF"
        strokeWidth="2"
      />
      <circle cx="220" cy="170" r="90" fill="url(#ring)" />
      {/* Pins */}
      {[
        [220, 130],
        [260, 180],
        [200, 210],
        [170, 160],
        [240, 220],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <path d="M0 -12 C 7 -12 10 -6 10 -2 C 10 6 0 16 0 16 C 0 16 -10 6 -10 -2 C -10 -6 -7 -12 0 -12 Z" fill="#0C2D42" />
          <circle cx="0" cy="-3" r="3" fill="#FFF7E6" />
        </g>
      ))}
    </svg>
  );
}

export function CapsulePattern({ className = "" }: { className?: string }) {
  const shapes = [
    // [x, y, w, h, color]
    [30, 40, 260, 90, "#FFD79C"],
    [340, 20, 380, 90, "#CBEFFF"],
    [780, 40, 300, 90, "#FFFFFF"],
    [1140, 30, 260, 90, "#FFD79C"],
    [80, 170, 300, 90, "#CBEFFF"],
    [430, 170, 220, 90, "#FFD79C"],
    [700, 170, 380, 90, "#CBEFFF"],
    [1130, 170, 260, 90, "#FF6814"],
    [30, 300, 220, 90, "#CBEFFF"],
    [290, 300, 340, 90, "#FFD79C"],
    [680, 300, 260, 90, "#FFFFFF"],
    [980, 300, 400, 90, "#CBEFFF"],
    [40, 430, 380, 90, "#FFD79C"],
    [460, 430, 260, 90, "#CBEFFF"],
    [760, 430, 300, 90, "#FFD79C"],
    [1100, 430, 300, 90, "#CBEFFF"],
    [90, 560, 260, 90, "#CBEFFF"],
    [400, 560, 380, 90, "#FFD79C"],
    [830, 560, 260, 90, "#CBEFFF"],
    [1130, 560, 260, 90, "#FFD79C"],
  ] as const;
  return (
    <svg
      viewBox="0 0 1440 700"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <g className="animate-drift">
        {shapes.map(([x, y, w, h, c], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} rx={45} ry={45} fill={c} opacity={c === "#FF6814" ? 0.85 : 0.85} />
        ))}
      </g>
    </svg>
  );
}