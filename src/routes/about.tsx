import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, HeartHandshake, Wrench, Users, Award } from "lucide-react";
import { CoastalLink } from "../components/CoastalButton";
import { ArchFrame, PalmSilhouette, SunsetLines, WaterDrop, WaveDivider } from "../components/decor";
import { PatternCTA } from "../components/PatternCTA";
import teamVan from "../assets/team-van.jpg";
import techFixture from "../assets/technician-fixture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Florida Coast Plumbing | Local Palm Beach Plumbers" },
      {
        name: "description",
        content:
          "Learn how Florida Coast Plumbing provides clear communication, careful workmanship, and dependable plumbing service throughout Palm Beach County.",
      },
      { property: "og:title", content: "About Florida Coast Plumbing" },
      { property: "og:description", content: "Local plumbing service built around honest communication." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Hero />
      <Story />
      <Values />
      <Team />
      <FloridaHomes />
      <Standards />
      <Stats />
      <PatternCTA compact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FFF7E6" }}>
      <SunsetLines className="pointer-events-none absolute right-8 bottom-6 hidden h-20 w-36 opacity-40 md:block" />
      <PalmSilhouette color="#0C2D42" className="pointer-events-none absolute -left-12 bottom-0 hidden h-64 w-52 opacity-10 md:block" />
      <div className="container-wide grid items-center gap-12 py-20 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">About Florida Coast</p>
          <h1 className="font-display mt-3 text-[44px] font-extrabold leading-[1.05] text-[#0C2D42] md:text-[68px]">
            Local plumbing service built around honest communication.
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-[#1D2B35]">
            Florida Coast Plumbing serves Palm Beach County homeowners with reliable technical work, organized scheduling,
            and clear explanations from the first phone call to the final walkthrough.
          </p>
          <div className="mt-8">
            <CoastalLink to="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}>Contact Our Team</CoastalLink>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <ArchFrame className="mx-auto aspect-[4/5] w-full max-w-[420px]">
            <img src={teamVan} alt="Florida Coast Plumbing team" className="h-full w-full object-cover" width={900} height={1100} loading="eager" />
          </ArchFrame>
          <div className="absolute -bottom-6 -left-4 overflow-hidden rounded-full" style={{ width: 140, height: 140, border: "4px solid #FF6814", background: "#FFFFFF" }}>
            <img src={techFixture} alt="Technician at work" className="h-full w-full object-cover" width={900} height={900} loading="lazy" />
          </div>
          <WaterDrop className="absolute -right-2 top-24 h-10 w-8" color="#39A9E0" />
        </div>
      </div>
      <WaveDivider fill="#FFFFFF" height={70} />
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white py-24">
      <div className="container-wide grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Our Story</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[48px]">Rooted in Palm Beach County.</h2>
        </div>
        <div className="space-y-4 text-[17px] leading-relaxed text-[#1D2B35] lg:col-span-7">
          <p>Florida Coast Plumbing focuses on residential plumbing for a specific stretch of Florida — Boynton Beach, Boca Raton, Delray Beach, West Palm Beach, Wellington, Jupiter, Lake Worth Beach, and Palm Beach Gardens. Working in one region means we recognize the quirks: older coastal piping, hard-water buildup, and seasonal-home considerations.</p>
          <p>We take scheduling seriously. Homeowners receive a real arrival window, a diagnosis in writing, and practical service options before any work begins.</p>
          <p>Long-term relationships come from being straightforward. If a repair is the right answer, we repair. If replacement is the honest recommendation, we explain why — and we never push a bigger job than the situation requires.</p>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const rows = [
    { icon: HeartHandshake, title: "Be Clear", text: "Explain what is happening and what the available options mean." },
    { icon: Wrench, title: "Be Prepared", text: "Arrive with organized tools, equipment, and service information." },
    { icon: CheckCircle2, title: "Protect the Home", text: "Work carefully around floors, fixtures, walls, and cabinets." },
    { icon: Award, title: "Finish Properly", text: "Test the completed work and review it before leaving." },
  ];
  return (
    <section className="py-24" style={{ background: "#F3FBFE" }}>
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Our Values</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[48px]">
            The habits that shape every visit.
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {rows.map(({ icon: I, title, text }) => (
            <div key={title} className="flex items-start gap-5 rounded-[20px] bg-white p-7" style={{ border: "1px solid #D5E5EC" }}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[14px]" style={{ background: "#FFF7E6" }}>
                <I className="h-6 w-6 text-[#FF6814]" strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <h3 className="font-display text-[22px] font-extrabold text-[#0C2D42]">{title}</h3>
                <p className="mt-1 text-[15.5px] leading-relaxed text-[#1D2B35]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const roles = [
    { title: "Customer Care", text: "Answers calls, coordinates scheduling, and keeps you informed." },
    { title: "Service Technicians", text: "Diagnose issues on-site and complete repairs with care." },
    { title: "Installation Specialists", text: "Handle heaters, filtration, and larger install projects." },
    { title: "Field Leadership", text: "Reviews complex jobs and supports the technicians on the road." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Our Team</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[48px]">
            Professional people, not just professional tools.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {roles.map((r) => (
            <div key={r.title} className="rounded-[20px] p-7" style={{ background: "#FFF7E6" }}>
              <span className="grid h-11 w-11 place-items-center rounded-[12px] text-white" style={{ background: "#2E86BD" }}>
                <Users className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="font-display mt-4 text-[20px] font-extrabold text-[#0C2D42]">{r.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#1D2B35]">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloridaHomes() {
  const items = [
    "Hard-water conditions",
    "Humidity considerations",
    "Seasonal occupancy",
    "Older coastal piping",
    "Storm preparation",
    "Outdoor plumbing exposure",
  ];
  return (
    <section className="py-24" style={{ background: "#F3FBFE" }}>
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Local Knowledge</p>
          <h2 className="font-display mt-3 text-[36px] font-extrabold text-[#0C2D42] md:text-[46px]">Why Florida homes are different.</h2>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-[#1D2B35]">
            The coast introduces plumbing considerations you don’t see everywhere. We think about these on every visit — not as scare tactics, just as context for good decisions.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-[14px] bg-white px-4 py-4 text-[15px] font-semibold text-[#0C2D42]" style={{ border: "1px solid #D5E5EC" }}>
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Standards() {
  const items = [
    "Appointment communication",
    "Clear diagnosis",
    "Protection of work areas",
    "Practical service options",
    "Completed-work testing",
    "Final walkthrough",
  ];
  return (
    <section className="py-24" style={{ background: "#0C2D42" }}>
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#39A9E0]">Service Standards</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-white md:text-[48px]" style={{ color: "#FFFFFF" }}>
            What every visit should include.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-[16px] px-5 py-4 text-[15px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <CheckCircle2 className="h-4 w-4 text-[#FF6814]" aria-hidden />
              {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { top: "24/7", bottom: "Urgent Support" },
    { top: "8+", bottom: "Palm Beach Communities" },
    { top: "Residential", bottom: "Plumbing Specialists" },
    { top: "Licensed", bottom: "and Insured" },
  ];
  return (
    <section className="bg-white py-20">
      <div className="container-wide grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((s) => (
          <div key={s.bottom} className="rounded-[20px] p-6 text-center" style={{ background: "#FFF7E6" }}>
            <p className="font-display text-[36px] font-extrabold text-[#FF6814] md:text-[44px]">{s.top}</p>
            <p className="mt-2 text-[13px] font-bold uppercase tracking-widest text-[#0C2D42]">{s.bottom}</p>
          </div>
        ))}
      </div>
    </section>
  );
}