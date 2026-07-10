import { Phone, Calendar } from "lucide-react";
import { CoastalLink } from "./CoastalButton";
import { CapsulePattern } from "./decor";

export function PatternCTA({
  compact = false,
  eyebrow = "Ready to get started?",
  heading = "Let’s get your plumbing back on track.",
  body = "Tell us what’s happening and Florida Coast Plumbing will help you choose the right next step.",
  helper = "Urgent plumbing help is available 24/7.",
}: {
  compact?: boolean;
  eyebrow?: string;
  heading?: string;
  body?: string;
  helper?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden ${compact ? "py-20" : "py-28 md:py-32"}`}
      style={{ background: "#FFF7E6" }}
      aria-labelledby="pattern-cta-heading"
    >
      <CapsulePattern className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="container-wide relative">
        <div
          className="mx-auto max-w-[700px] rounded-[24px] px-8 py-10 text-center md:px-12 md:py-14"
          style={{
            background: "rgba(255,255,255,0.86)",
            border: "1px solid rgba(12,45,66,0.08)",
            boxShadow: "0 30px 60px -30px rgba(12,45,66,0.25)",
          }}
        >
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#FF6814]">{eyebrow}</p>
          <h2
            id="pattern-cta-heading"
            className="font-display mt-3 text-[38px] font-extrabold leading-[1.05] text-[#0C2D42] md:text-[52px]"
          >
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[16px] leading-relaxed text-[#1D2B35]">{body}</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CoastalLink to="/contact" size="lg" icon={<Calendar className="h-4 w-4" aria-hidden />}>
              Book Online
            </CoastalLink>
            <CoastalLink href="tel:+15615550136" variant="secondary" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>
              Call 561-555-0136
            </CoastalLink>
          </div>
          <p className="mt-4 text-[13px] font-medium text-[#6E7D86]">{helper}</p>
        </div>
      </div>
    </section>
  );
}