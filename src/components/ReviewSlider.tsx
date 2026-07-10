import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

type Review = { text: string; name: string; city: string; service: string };

const REVIEWS: Review[] = [
  {
    text: "The technician explained what was causing the recurring drain problem and gave us clear options. The work area was spotless when he finished.",
    name: "Maria L.",
    city: "Boynton Beach",
    service: "Drain Cleaning",
  },
  {
    text: "We received appointment updates, the plumber arrived within the scheduled window, and our water heater was working again that afternoon.",
    name: "Daniel K.",
    city: "Wellington",
    service: "Water Heater Repair",
  },
  {
    text: "They located a hidden leak without opening unnecessary areas. Everything was clearly explained before the repair began.",
    name: "Nicole S.",
    city: "Boca Raton",
    service: "Leak Detection",
  },
  {
    text: "Friendly, organized, and professional from the first phone call to the final walkthrough.",
    name: "James R.",
    city: "Delray Beach",
    service: "Pipe Repair",
  },
];

export function ReviewSlider() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduce.current) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % REVIEWS.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (d: number) => setIdx((i) => (i + d + REVIEWS.length) % REVIEWS.length);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Sunset bands */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[42%]" style={{ background: "linear-gradient(180deg,#FF6814 0%,#F8941D 100%)" }} />
        <div className="absolute inset-x-0 top-[42%] h-2" style={{ background: "#FFF7E6" }} />
        <div className="absolute inset-x-0 top-[calc(42%+8px)] bottom-0" style={{ background: "linear-gradient(180deg,#39A9E0 0%,#2E86BD 100%)" }} />
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-16 w-full" aria-hidden>
          <path d="M0 40 Q 360 90 720 40 T 1440 40 L1440 80 L0 80 Z" fill="#0C2D42" />
        </svg>
      </div>

      <div className="container-wide py-24 md:py-28">
        <div className="mx-auto max-w-2xl text-center text-white">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/85">Real customer feedback</p>
          <h2 className="font-display mt-3 text-[42px] font-extrabold md:text-[54px]" style={{ color: "#FFFFFF" }}>
            What your Palm Beach neighbors are saying.
          </h2>
        </div>

        <div
          className="relative mx-auto mt-12 max-w-[820px]"
          onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (startX.current == null) return;
            const dx = e.changedTouches[0].clientX - startX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            startX.current = null;
          }}
          aria-roledescription="carousel"
          aria-label="Customer reviews"
        >
          {/* Card */}
          <article
            key={idx}
            className="relative mx-auto overflow-hidden rounded-[24px] bg-white p-8 md:p-12 shadow-[0_30px_60px_-24px_rgba(12,45,66,0.4)]"
            aria-live="polite"
          >
            <div className="absolute inset-x-0 top-0 h-1.5" style={{ background: "#FF6814" }} />
            <Quote className="absolute right-8 top-8 h-16 w-16 opacity-[0.06]" style={{ color: "#0C2D42" }} aria-hidden />
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5" fill="#FF6814" stroke="#FF6814" aria-hidden />
              ))}
            </div>
            <p className="font-display mt-6 text-[22px] font-semibold leading-snug text-[#0C2D42] md:text-[26px]">
              “{REVIEWS[idx].text}”
            </p>
            <div className="mt-6 flex items-center justify-between gap-4 border-t pt-5" style={{ borderColor: "#D5E5EC" }}>
              <div>
                <div className="text-[15px] font-bold text-[#0C2D42]">
                  {REVIEWS[idx].name} <span className="font-medium text-[#6E7D86]">— {REVIEWS[idx].city}</span>
                </div>
                <div className="text-[13px] text-[#2E86BD]">{REVIEWS[idx].service}</div>
              </div>
              <span className="rounded-full border border-[#D5E5EC] px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[#2E86BD]">
                Verified
              </span>
            </div>
          </article>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid h-11 w-11 place-items-center rounded-[10px] bg-white text-[#0C2D42] shadow-md hover:-translate-y-[1px]"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === idx}
                  onClick={() => setIdx(i)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: i === idx ? 28 : 12,
                    background: i === idx ? "#FFFFFF" : "rgba(255,255,255,0.55)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid h-11 w-11 place-items-center rounded-[10px] bg-white text-[#0C2D42] shadow-md hover:-translate-y-[1px]"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
            <span className="ml-3 text-[13px] font-semibold text-white/90">
              {idx + 1} / {REVIEWS.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}