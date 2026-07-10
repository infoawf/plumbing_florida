import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone, Calendar, ArrowRight, AlertTriangle, Eye, EyeOff, Wrench, Droplets, Flame, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CoastalLink } from "../components/CoastalButton";
import { ArchFrame, WaveDivider, SunsetLines, PalmSilhouette, WaterDrop } from "../components/decor";
import { FaqAccordion } from "../components/FaqAccordion";
import { PatternCTA } from "../components/PatternCTA";
import techFaucet from "../assets/technician-faucet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Plumbing Services in Palm Beach County | Florida Coast Plumbing" },
      {
        name: "description",
        content:
          "Explore plumbing repair, drain, sewer, water-heater, leak-detection, fixture, and filtration services from Florida Coast Plumbing.",
      },
      { property: "og:title", content: "Plumbing Services | Florida Coast Plumbing" },
      { property: "og:description", content: "Repair, drains, sewer, water heaters, leak detection, fixtures, filtration." },
    ],
  }),
  component: ServicesPage,
});

const CATEGORIES = [
  { id: "emergency", label: "Emergency" },
  { id: "drains", label: "Drains" },
  { id: "leaks", label: "Leaks & Pipes" },
  { id: "water-heaters", label: "Water Heaters" },
  { id: "sewer", label: "Sewer" },
  { id: "water-quality", label: "Water Quality" },
  { id: "fixtures", label: "Fixtures" },
];

const SERVICES_FAQ = [
  { q: "Do you offer same-day service?", a: "Yes. Same-day service is often available for urgent issues; we prioritize active leaks, no-water calls, and sewer backups." },
  { q: "Do you guarantee your work?", a: "Every job is finished with a walkthrough, and our workmanship is guaranteed in writing on the service ticket." },
  { q: "Do you install customer-supplied fixtures?", a: "Yes — bring your own fixtures. We’ll verify compatibility and note any warranty considerations before installing." },
  { q: "Do you handle permits when required?", a: "For work requiring permits (heater changeouts, repipes), we coordinate the required permitting on your behalf." },
  { q: "How are prices communicated?", a: "We diagnose first, then present written service options before starting. There are no surprise charges after the fact." },
  { q: "Can I get a rough estimate over the phone?", a: "For simple items we can share ballparks, but final options always follow an on-site diagnosis to protect accuracy." },
];

function ServicesPage() {
  return (
    <>
      <Hero />
      <StickyNav />
      <Emergency />
      <Drains />
      <Leaks />
      <WaterHeaters />
      <Sewer />
      <WaterQuality />
      <Fixtures />
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Service Questions</p>
            <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[52px]">
              Answers before we schedule the visit.
            </h2>
          </div>
          <div className="mt-10"><FaqAccordion items={SERVICES_FAQ} /></div>
        </div>
      </section>
      <PatternCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#0C2D42" }}>
      <PalmSilhouette color="#0A2436" className="pointer-events-none absolute -left-14 bottom-0 hidden h-72 w-56 opacity-30 md:block" />
      <SunsetLines className="pointer-events-none absolute right-6 bottom-4 hidden h-20 w-36 opacity-40 md:block" />
      <WaterDrop className="pointer-events-none absolute left-1/3 bottom-10 h-10 w-8 opacity-60" />
      <div className="container-wide grid items-center gap-12 py-20 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#39A9E0]">Plumbing Services</p>
          <h1 className="font-display mt-3 max-w-2xl text-[44px] font-extrabold leading-[1.05] text-white md:text-[68px]" style={{ color: "#FFFFFF" }}>
            Reliable help for leaks, drains, water heaters, and more.
          </h1>
          <p className="mt-5 max-w-[600px] text-[17px] leading-relaxed text-[#CBEFFF]">
            Explore plumbing repair, installation, maintenance, and water-quality services for homes throughout
            Palm Beach County.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CoastalLink to="/contact" size="lg" icon={<Calendar className="h-4 w-4" aria-hidden />}>Book Online</CoastalLink>
            <CoastalLink href="tel:+15615550136" size="lg" variant="secondary" icon={<Phone className="h-4 w-4" aria-hidden />} className="!border-white !text-white hover:!bg-white hover:!text-[#0C2D42]">
              Call 561-555-0136
            </CoastalLink>
          </div>
        </div>
        <div className="lg:col-span-5">
          <ArchFrame className="mx-auto aspect-[4/5] w-full max-w-[420px]" borderColor="#39A9E0" accent="#FF6814" innerColor="#FFFFFF">
            <img src={techFaucet} alt="Plumbing technician at work" className="h-full w-full object-cover" width={1100} height={900} loading="eager" />
          </ArchFrame>
        </div>
      </div>
      <WaveDivider fill="#FFFFFF" height={70} />
    </section>
  );
}

function StickyNav() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  useEffect(() => {
    const onScroll = () => {
      let current = CATEGORIES[0].id;
      for (const c of CATEGORIES) {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top - 160 <= 0) current = c.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="sticky top-[70px] z-30 border-y bg-white/95 backdrop-blur" style={{ borderColor: "#D5E5EC" }}>
      <div className="container-wide">
        <div className="flex gap-1 overflow-x-auto py-3 md:justify-center">
          {CATEGORIES.map((c) => {
            const isActive = active === c.id;
            return (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-[14px] font-bold transition-colors ${isActive ? "text-[#0C2D42]" : "text-[#6E7D86] hover:text-[#0C2D42]"}`}
                style={isActive ? { boxShadow: "inset 0 -3px 0 #FF6814" } : undefined}
              >
                {c.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CategoryHeader({ eyebrow, title, body, Icon }: { eyebrow: string; title: string; body: string; Icon: typeof Wrench }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12px] font-extrabold uppercase tracking-[0.18em]" style={{ background: "#FFF7E6", color: "#FF6814" }}>
        <Icon className="h-3.5 w-3.5" aria-hidden /> {eyebrow}
      </span>
      <h2 className="font-display mt-4 text-[34px] font-extrabold text-[#0C2D42] md:text-[46px]">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[#1D2B35]">{body}</p>
    </div>
  );
}

function ServiceRow({ title, description, chips, alt = false }: { title: string; description: string; chips: string[]; alt?: boolean }) {
  return (
    <div
      className="grid items-center gap-6 rounded-[20px] px-6 py-6 md:grid-cols-12"
      style={{ background: alt ? "#F3FBFE" : "#FFFFFF", borderBottom: "2px solid #CBEFFF" }}
    >
      <h3 className="font-display text-[22px] font-extrabold text-[#0C2D42] md:col-span-3">{title}</h3>
      <p className="text-[15px] text-[#1D2B35] md:col-span-5">{description}</p>
      <div className="flex flex-wrap gap-2 md:col-span-3">
        {chips.map((c) => (
          <span key={c} className="rounded-full px-3 py-1 text-[11.5px] font-bold" style={{ background: "#FFF7E6", color: "#FF6814" }}>
            {c}
          </span>
        ))}
      </div>
      <div className="md:col-span-1 md:text-right">
        <ArrowRight className="ml-auto h-5 w-5 text-[#2E86BD]" aria-hidden />
      </div>
    </div>
  );
}

function Emergency() {
  const services = ["Burst Pipes", "Active Water Leaks", "Sewer Backups", "Overflowing Fixtures", "No Hot Water", "Emergency Shutoff Guidance"];
  return (
    <section id="emergency" className="scroll-mt-40 bg-white py-24">
      <div className="container-wide">
        <CategoryHeader eyebrow="Emergency" title="Urgent plumbing help, 24/7." body="When water won’t wait, a Florida Coast technician can be on the way. Call and we’ll walk you through immediate safe steps." Icon={AlertTriangle} />
        <div className="mt-12 overflow-hidden rounded-[28px]" style={{ background: "#0C2D42" }}>
          <div className="grid gap-6 p-8 md:grid-cols-3 md:p-10">
            <div className="md:col-span-1">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-extrabold uppercase tracking-widest text-white" style={{ background: "#FF6814" }}>
                24/7 Response
              </div>
              <h3 className="font-display mt-4 text-[28px] font-extrabold text-white">We can help right now.</h3>
              <p className="mt-3 text-[15px] text-[#CBEFFF]">Skip the guessing — call and describe what you’re seeing. We’ll coordinate the safest next step.</p>
              <div className="mt-5">
                <CoastalLink href="tel:+15615550136" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>Call 561-555-0136</CoastalLink>
              </div>
            </div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-2">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-[14px] px-4 py-3 text-[15px] font-semibold text-white" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md" style={{ background: "#FF6814" }}>
                    <AlertTriangle className="h-4 w-4" aria-hidden />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Drains() {
  const rows = [
    ["Drain Cleaning", "Restore flow to slow or blocked drains without unnecessary disassembly.", ["Kitchen", "Bath", "Laundry"]],
    ["Kitchen Drains", "Grease, food, and buildup addressed with the right equipment for the pipe type.", ["Grease", "Buildup"]],
    ["Bathroom Drains", "Sink, tub, and shower drains restored while protecting finishes and surrounds.", ["Sink", "Tub", "Shower"]],
    ["Main-Line Clearing", "Clear the primary line safely and evaluate whether follow-up work is warranted.", ["Main line"]],
    ["Camera Inspection", "Visually confirm what’s inside the line before recommending further work.", ["Diagnostic"]],
    ["Hydro Jetting", "High-pressure water to remove heavy buildup where appropriate for the pipe.", ["Deep-clean"]],
  ] as const;
  return (
    <section id="drains" className="scroll-mt-40 py-24" style={{ background: "#F3FBFE" }}>
      <div className="container-wide">
        <CategoryHeader eyebrow="Drains" title="Slow, blocked, or recurring drains." body="Signs your drain issue may be more than a simple clog: gurgling, multiple slow fixtures, or backups after heavy use." Icon={Droplets} />
        <div className="mt-10 space-y-4">
          {rows.map(([t, d, chips], i) => (
            <ServiceRow key={t} title={t} description={d} chips={[...chips]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Leaks() {
  return (
    <section id="leaks" className="scroll-mt-40 bg-white py-24">
      <div className="container-wide">
        <CategoryHeader eyebrow="Leaks & Pipes" title="Locate the leak. Choose the right repair." body="From visible drips to hidden slab leaks, we identify the source before opening walls or floors." Icon={Wrench} />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            { icon: Eye, title: "Visible leak", points: ["Visible drip or stain", "Isolated fixture or joint", "Often a same-day repair"], accent: "#39A9E0" },
            { icon: EyeOff, title: "Hidden leak", points: ["No obvious source", "Unusual water usage or sound", "Requires detection tools"], accent: "#FF6814" },
          ].map(({ icon: I, title, points, accent }) => (
            <div key={title} className="rounded-[24px] p-8" style={{ background: "#F3FBFE", border: `2px solid ${accent}` }}>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-[12px]" style={{ background: accent, color: "#FFFFFF" }}>
                  <I className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-[24px] font-extrabold text-[#0C2D42]">{title}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-[15px] text-[#1D2B35]">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2E86BD]" aria-hidden />{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-4">
          {[
            ["Leak Detection", "Non-invasive detection to find the source before recommending repair.", ["Diagnostic"]],
            ["Pipe Repair", "Targeted repair with the right material for the line type.", ["Copper", "PEX", "PVC"]],
            ["Slab Leak Evaluation", "Assessment for under-slab water loss with clear options.", ["Slab"]],
            ["Water-Line Repair", "Interior and yard-side water-line repair when appropriate.", ["Interior", "Yard"]],
            ["Water Pressure Diagnosis", "Trace low- or high-pressure symptoms to their real cause.", ["Diagnostic"]],
            ["Whole-Home Repiping", "Replace aging supply lines with a modern, dependable system.", ["Whole-home"]],
          ].map(([t, d, chips], i) => (
            <ServiceRow key={t as string} title={t as string} description={d as string} chips={chips as string[]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WaterHeaters() {
  return (
    <section id="water-heaters" className="scroll-mt-40 py-24" style={{ background: "#F3FBFE" }}>
      <div className="container-wide">
        <CategoryHeader eyebrow="Water Heaters" title="Hot water when you expect it." body="Repair, replace, or upgrade — we help you weigh cost, efficiency, and expected life honestly." Icon={Flame} />
        <div className="mt-12 overflow-hidden rounded-[24px] bg-white" style={{ border: "1px solid #D5E5EC" }}>
          <div className="grid md:grid-cols-2">
            {[
              { title: "Repair", when: "Unit is under 8 years old and the fault is isolated", cost: "Lower upfront", benefit: "Fastest to restore hot water" },
              { title: "Replace", when: "Unit is aging, corroded, or recurring failures", cost: "Higher upfront, lower long-term", benefit: "Improved efficiency and reliability" },
            ].map((r) => (
              <div key={r.title} className="p-8" style={{ borderRight: r.title === "Repair" ? "1px solid #D5E5EC" : undefined }}>
                <h3 className="font-display text-[24px] font-extrabold text-[#0C2D42]">{r.title}</h3>
                <dl className="mt-5 space-y-3 text-[15px] text-[#1D2B35]">
                  <div><dt className="text-[12px] font-extrabold uppercase tracking-widest text-[#2E86BD]">When</dt><dd>{r.when}</dd></div>
                  <div><dt className="text-[12px] font-extrabold uppercase tracking-widest text-[#2E86BD]">Cost</dt><dd>{r.cost}</dd></div>
                  <div><dt className="text-[12px] font-extrabold uppercase tracking-widest text-[#2E86BD]">Benefit</dt><dd>{r.benefit}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 space-y-4">
          {[
            ["Water Heater Repair", "Restore performance when the unit still has service life left.", ["Repair"]],
            ["Water Heater Replacement", "Full changeout with disposal of the old unit.", ["Changeout"]],
            ["Tankless Water Heaters", "On-demand hot water with efficient sizing.", ["Tankless"]],
            ["Water Heater Maintenance", "Flushes and checks to extend usable life.", ["Maintenance"]],
            ["Electric Water Heaters", "Element, thermostat, and wiring diagnosis and repair.", ["Electric"]],
            ["Gas Water Heaters", "Burner, thermocouple, and gas-side servicing.", ["Gas"]],
          ].map(([t, d, chips], i) => (
            <ServiceRow key={t as string} title={t as string} description={d as string} chips={chips as string[]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Sewer() {
  const rows = [
    ["Sewer Camera Inspection", "Confirm what’s inside the line before recommending work.", ["Diagnostic"]],
    ["Sewer Line Cleaning", "Restore flow safely with the right method for the pipe.", ["Cleaning"]],
    ["Sewer Line Repair", "Targeted spot repair when the line is otherwise sound.", ["Repair"]],
    ["Root Intrusion Evaluation", "Assess and address recurring root problems.", ["Roots"]],
    ["Recurring Backup Diagnosis", "Find the underlying cause of repeated backups.", ["Diagnostic"]],
  ] as const;
  return (
    <section id="sewer" className="scroll-mt-40 bg-white py-24">
      <div className="container-wide">
        <CategoryHeader eyebrow="Sewer" title="Diagnose first. Then choose the right repair." body="Sewer work is often about accuracy — the right diagnostic saves unnecessary digging and downtime." Icon={ShieldCheck} />
        <div className="mt-10 space-y-4">
          {rows.map(([t, d, chips], i) => (
            <ServiceRow key={t} title={t} description={d} chips={[...chips]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WaterQuality() {
  const rows = [
    ["Whole-Home Filtration", "Reduce sediment, taste, and odor across the house.", ["Whole-home"]],
    ["Drinking-Water Systems", "Point-of-use systems for cleaner drinking water.", ["Kitchen"]],
    ["Water Softeners", "Address hard-water spotting, buildup, and appliance wear.", ["Softener"]],
    ["Filter Replacement", "Scheduled replacements to maintain performance.", ["Maintenance"]],
    ["Water Testing", "Understand what’s actually in the water before choosing a system.", ["Testing"]],
    ["System Maintenance", "Keep systems performing with routine service.", ["Service"]],
  ] as const;
  return (
    <section id="water-quality" className="scroll-mt-40 py-24" style={{ background: "#F3FBFE" }}>
      <div className="container-wide">
        <CategoryHeader eyebrow="Water Quality" title="Cleaner water at every tap." body="Hard water, odor, taste, and sediment may require different solutions. We test first and recommend what fits." Icon={Droplets} />
        <div className="mt-10 space-y-4">
          {rows.map(([t, d, chips], i) => (
            <ServiceRow key={t} title={t} description={d} chips={[...chips]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Fixtures() {
  const rows = [
    ["Toilet Repair", "Running, leaking, or clogged toilets restored quickly.", ["Repair"]],
    ["Toilet Installation", "Replacements with proper flange, wax, and shutoff service.", ["Install"]],
    ["Faucet Repair", "Drip, spray, and cartridge fixes.", ["Repair"]],
    ["Faucet Installation", "New faucet installs with clean supply-line work.", ["Install"]],
    ["Sink Plumbing", "Trap, drain, and supply-line work for kitchens and baths.", ["Sink"]],
    ["Garbage Disposals", "Repair, replacement, and safe removal.", ["Disposal"]],
    ["Shower and Tub Plumbing", "Valves, diverters, and drain issues.", ["Bath"]],
    ["Remodeling Support", "Plumbing rough-in and finishing during a remodel.", ["Remodel"]],
  ] as const;
  return (
    <section id="fixtures" className="scroll-mt-40 bg-white py-24">
      <div className="container-wide">
        <CategoryHeader eyebrow="Fixtures" title="Fixture repair and installation." body="From a single faucet to a full remodel rough-in, we work clean and finish carefully." Icon={Wrench} />
        <div className="mt-10 space-y-4">
          {rows.map(([t, d, chips], i) => (
            <ServiceRow key={t} title={t} description={d} chips={[...chips]} alt={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}