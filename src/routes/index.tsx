import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Home as HomeIcon,
  CheckCircle2,
  Users,
  MapPin,
  Wrench,
  Droplets,
  Flame,
  Search,
  Waves,
  Filter,
} from "lucide-react";
import teamVan from "../assets/team-van.jpg";
import techFixture from "../assets/technician-fixture.jpg";
import filtration from "../assets/filtration.jpg";
import techFaucet from "../assets/technician-faucet.jpg";
import { CoastalLink } from "../components/CoastalButton";
import {
  ArchFrame,
  WaveDivider,
  PalmSilhouette,
  SunsetLines,
  WaterDrop,
  Birds,
  CurvedUnderline,
  PalmBeachMap,
} from "../components/decor";
import { ReviewSlider } from "../components/ReviewSlider";
import { PatternCTA } from "../components/PatternCTA";
import { FaqAccordion } from "../components/FaqAccordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Florida Coast Plumbing | Palm Beach County Plumbers" },
      {
        name: "description",
        content:
          "Florida Coast Plumbing provides emergency plumbing, drain cleaning, leak detection, water-heater, sewer, fixture, and water-quality services across Palm Beach County.",
      },
      { property: "og:title", content: "Florida Coast Plumbing | Palm Beach County Plumbers" },
      {
        property: "og:description",
        content: "Honest Service. Smooth Flow. Reliable plumbing help for homes across Palm Beach County.",
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { n: "01", title: "Emergency Plumbing", desc: "Fast help for active leaks, backups, burst pipes, and urgent water problems.", Icon: Waves },
  { n: "02", title: "Drain Cleaning", desc: "Clear slow, blocked, and recurring drains with the right diagnostic approach.", Icon: Droplets },
  { n: "03", title: "Leak Detection", desc: "Locate hidden water problems before recommending repair work.", Icon: Search },
  { n: "04", title: "Water Heaters", desc: "Repair, replacement, maintenance, and tankless system support.", Icon: Flame },
  { n: "05", title: "Sewer Services", desc: "Camera inspections, clearing, repair options, and sewer-line evaluation.", Icon: Wrench },
  { n: "06", title: "Water Filtration", desc: "Improve water quality through testing, filtration, and softening solutions.", Icon: Filter },
];

const CITIES = ["Boynton Beach", "Boca Raton", "Delray Beach", "West Palm Beach", "Wellington", "Jupiter", "Lake Worth Beach", "Palm Beach Gardens"];

const FAQ = [
  { q: "Do you offer emergency plumbing service?", a: "Yes. Urgent plumbing support is available 24/7 across Palm Beach County. Call any time to reach our on-call team." },
  { q: "What should I do when water is actively leaking?", a: "Shut off the nearest safe water valve, keep people away from electrical hazards, and call us. We can walk you through immediate steps while a technician is dispatched." },
  { q: "Do you provide an estimate before beginning work?", a: "Every visit includes a diagnosis and practical service options presented in writing before any repair begins." },
  { q: "Can you service both tank and tankless water heaters?", a: "Yes. Our technicians repair, install, and maintain electric, gas, tank, and tankless water heaters." },
  { q: "What parts of Palm Beach County do you cover?", a: "We serve homes from Boynton Beach and Boca Raton up to Jupiter and Palm Beach Gardens, including Delray, West Palm, Wellington, and Lake Worth Beach." },
  { q: "Can I send photos with my service request?", a: "Yes — the contact form accepts up to five photos. Only take pictures when it is safe to do so." },
  { q: "How will I know when the technician is arriving?", a: "You’ll receive appointment updates by text or email with an arrival window and confirmation when your technician is on the way." },
];

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessWave />
      <ReviewSlider />
      <ServiceArea />
      <FAQSection />
      <PatternCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#FFF7E6" }}>
      <SunsetLines className="pointer-events-none absolute bottom-6 right-10 hidden h-20 w-36 opacity-40 md:block" />
      <PalmSilhouette color="#0C2D42" className="pointer-events-none absolute -left-16 bottom-0 hidden h-64 w-56 opacity-10 md:block" />
      <div className="container-wide relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-6">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">
            Palm Beach County Plumbers
          </p>
          <h1 className="font-display mt-4 text-[44px] font-extrabold leading-[1.02] tracking-[-0.02em] text-[#0C2D42] sm:text-[58px] md:text-[68px] lg:text-[76px]">
            Plumbing help that{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute -left-2 -top-3 h-16 w-16 rounded-full sm:h-20 sm:w-20" style={{ background: "#FFD79C", opacity: 0.7, zIndex: 0 }} />
              <span className="relative z-10">keeps your home</span>
            </span>{" "}
            flowing.
            <CurvedUnderline className="mx-auto mt-2 block h-3 w-56 md:w-72" />
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-relaxed text-[#1D2B35] md:text-[18px]">
            Florida Coast Plumbing provides clear recommendations, dependable repairs, and respectful service for
            homes throughout Palm Beach County.
          </p>
          <p className="mt-3 max-w-[560px] text-[14px] font-medium text-[#6E7D86]">
            Licensed and insured professionals. Straightforward options. Clean, careful work.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CoastalLink to="/contact" size="lg" icon={<Calendar className="h-4 w-4" aria-hidden />}>
              Book Online
            </CoastalLink>
            <CoastalLink href="tel:+15615550136" size="lg" variant="secondary" icon={<Phone className="h-4 w-4" aria-hidden />}>
              Call 561-555-0136
            </CoastalLink>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-2 text-[14px] text-[#0C2D42] sm:grid-cols-3">
            {["24/7 urgent service", "Local Palm Beach team", "Clear service options"].map((s) => (
              <li key={s} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2E86BD]" aria-hidden />
                <span className="font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto max-w-[520px]">
            <Birds className="pointer-events-none absolute -left-4 top-2 h-6 w-24 opacity-80" color="#0C2D42" />
            <WaterDrop className="pointer-events-none absolute -right-2 top-24 h-10 w-8" color="#39A9E0" />
            <PalmSilhouette color="#0C2D42" className="pointer-events-none absolute -right-16 top-2 hidden h-72 w-56 opacity-90 md:block" />
            <ArchFrame className="aspect-[4/5] w-full">
              <img
                src={teamVan}
                alt="Florida Coast Plumbing team standing in front of their service van"
                className="h-full w-full object-cover"
                width={900}
                height={1100}
                loading="eager"
              />
              <div aria-hidden className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle at 30% 30%, #F8941D 0%, transparent 65%)", opacity: 0.7 }} />
            </ArchFrame>
            <div
              className="absolute -bottom-6 left-1/2 z-10 w-[86%] max-w-[360px] -translate-x-1/2 rounded-[16px] bg-white px-5 py-4 shadow-[0_20px_40px_-20px_rgba(12,45,66,0.4)]"
              style={{ borderTop: "4px solid #FF6814" }}
            >
              <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-[#2E86BD]">Trusted local team</p>
              <p className="mt-1 text-[18px] font-extrabold text-[#0C2D42]">35+ Years Combined Experience</p>
            </div>
          </div>
        </div>
      </div>
      <WaveDivider fill="#FFFFFF" className="relative z-0" height={70} />
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: ShieldCheck, label: "State-Licensed Professionals" },
    { icon: Users, label: "Family-Owned Local Team" },
    { icon: CheckCircle2, label: "Written Workmanship Standards" },
    { icon: MapPin, label: "Serving Palm Beach County" },
  ];
  return (
    <section className="relative" style={{ background: "#0C2D42" }} aria-label="Trust markers">
      <div className="container-wide grid grid-cols-2 gap-6 py-10 md:grid-cols-4 md:py-8">
        {items.map(({ icon: I, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ border: "1.5px solid rgba(203,239,255,0.4)" }}>
              <I className="h-4 w-4 text-[#CBEFFF]" aria-hidden />
            </span>
            <span className="text-[14px] font-bold text-white md:text-[15px]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Our Services</p>
          <h2 className="font-display mt-3 text-[40px] font-extrabold text-[#0C2D42] md:text-[54px]">
            Help for every part of your plumbing system.
          </h2>
          <p className="mt-4 text-[17px] text-[#1D2B35]">
            Choose a service below or tell us what you’re noticing and we’ll help guide you.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ n, title, desc, Icon }) => (
            <ServiceCard key={n} n={n} title={title} desc={desc} Icon={Icon} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <CoastalLink to="/services" variant="secondary" size="lg" iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}>
            Explore All Services
          </CoastalLink>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ n, title, desc, Icon }: { n: string; title: string; desc: string; Icon: typeof Wrench }) {
  return (
    <Link
      to="/services"
      className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white transition-all duration-200 hover:-translate-y-1"
      style={{ border: "1px solid #D5E5EC", boxShadow: "0 12px 24px -18px rgba(12,45,66,0.25)" }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          background: "#F3FBFE",
          borderRadius: "180px 180px 0 0",
          padding: "40px 24px 24px",
          minHeight: 220,
        }}
      >
        <div className="mx-auto grid h-28 w-28 place-items-center rounded-full transition-transform duration-200 group-hover:-translate-y-1" style={{ background: "#FFFFFF", border: "2px solid #CBEFFF" }}>
          <Icon className="h-10 w-10 text-[#2E86BD]" strokeWidth={1.5} aria-hidden />
        </div>
        <span
          className="absolute right-0 top-0 rounded-bl-[16px] px-3 py-1.5 text-[13px] font-extrabold text-white transition-all group-hover:px-4"
          style={{ background: "#FF6814" }}
        >
          {n}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-[24px] font-extrabold text-[#0C2D42]">{title}</h3>
        <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#1D2B35]">{desc}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#2E86BD]">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" style={{ color: "#FF6814" }} aria-hidden />
        </span>
      </div>
    </Link>
  );
}

function AboutPreview() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28" style={{ background: "#F3FBFE" }}>
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Local by choice</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold leading-tight text-[#0C2D42] md:text-[50px]">
            Your neighbors when the water won’t cooperate.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-[#1D2B35]">
            Florida Coast Plumbing serves Palm Beach County with a simple approach: arrive prepared, explain the problem
            clearly, protect the home, and complete the work carefully.
          </p>
          <p className="mt-3 max-w-[560px] text-[16px] leading-relaxed text-[#1D2B35]">
            We combine hands-on plumbing experience with organized communication, so customers know what is happening
            before, during, and after the appointment.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Honest recommendations", "Respect for your home", "Clean work areas", "Clear appointment updates"].map((v) => (
              <li key={v} className="flex items-start gap-2.5 text-[15px] font-semibold text-[#0C2D42]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6814]" aria-hidden />
                {v}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CoastalLink to="/about" variant="dark" size="lg" iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}>
              About Florida Coast
            </CoastalLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <PalmSilhouette color="#0C2D42" className="absolute -left-4 top-6 h-72 w-52 opacity-90" />
          <SunsetLines className="absolute right-8 top-0 h-16 w-32 opacity-80" />
          <div className="relative ml-16">
            <div className="relative overflow-hidden rounded-full" style={{ width: 360, height: 360, maxWidth: "100%", border: "4px solid #0C2D42" }}>
              <img src={techFixture} alt="Florida Coast technician inspecting a residential fixture" className="h-full w-full object-cover" width={900} height={900} loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -right-4 overflow-hidden rounded-full" style={{ width: 160, height: 160, border: "4px solid #39A9E0", background: "#FFFFFF" }}>
              <img src={filtration} alt="Residential water filtration system" className="h-full w-full object-cover" width={700} height={700} loading="lazy" />
            </div>
            <WaterDrop className="absolute -left-6 top-24 h-8 w-6 opacity-90" />
            <WaterDrop className="absolute -left-2 top-40 h-5 w-4 opacity-80" color="#2E86BD" />
            <WaterDrop className="absolute left-6 top-56 h-4 w-3 opacity-70" color="#39A9E0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const rows = [
    { Icon: CheckCircle2, title: "Clear Recommendations", text: "We inspect the issue, explain what we found, and review practical options before work begins." },
    { Icon: ShieldCheck, title: "Workmanship You Can Trust", text: "Our technicians test completed work and review the result with you before leaving." },
    { Icon: HomeIcon, title: "Respect for Your Property", text: "We protect surrounding areas, keep tools organized, and clean the workspace when the job is complete." },
  ];
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-wide grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="font-display max-w-lg text-[38px] font-extrabold leading-tight text-[#0C2D42] md:text-[52px]">
            Plumbing service without unnecessary surprises.
          </h2>
          <div className="mt-10 space-y-6">
            {rows.map(({ Icon, title, text }) => (
              <div key={title} className="flex items-start gap-5 rounded-[20px] p-5 transition-colors hover:bg-[#F3FBFE]">
                <span
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-[14px]"
                  style={{ border: "2px solid #2E86BD", background: "#FFFFFF" }}
                >
                  <Icon className="h-6 w-6 text-[#2E86BD]" strokeWidth={1.8} aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-[22px] font-extrabold text-[#0C2D42]">{title}</h3>
                  <p className="mt-1 text-[16px] leading-relaxed text-[#1D2B35]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <PalmSilhouette color="#0C2D42" className="absolute -right-8 top-4 h-64 w-48 opacity-15" />
          <div className="relative overflow-hidden rounded-[32px]" style={{ border: "3px solid #0C2D42" }}>
            <img src={techFaucet} alt="Plumber installing a kitchen faucet" className="h-full w-full object-cover" width={1100} height={900} loading="lazy" />
          </div>
          <WaterDrop className="absolute -bottom-3 -left-3 h-14 w-11" color="#39A9E0" />
        </div>
      </div>
    </section>
  );
}

function ProcessWave() {
  const steps = [
    { n: 1, t: "Tell Us What’s Happening", d: "Share the symptoms and urgency." },
    { n: 2, t: "Choose an Appointment", d: "Select an available service window." },
    { n: 3, t: "Review the Findings", d: "Your technician explains the cause and options." },
    { n: 4, t: "Complete and Confirm", d: "The work is completed, tested, and reviewed." },
  ];
  return (
    <section className="relative overflow-hidden py-24 md:py-28" style={{ background: "#0C2D42" }}>
      <PalmSilhouette color="#0A2436" className="pointer-events-none absolute -left-10 top-10 h-72 w-56 opacity-90" />
      <PalmSilhouette color="#0A2436" className="pointer-events-none absolute -right-14 bottom-10 h-72 w-56 opacity-80" />
      <div className="container-wide relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#39A9E0]">What to expect</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-white md:text-[52px]" style={{ color: "#FFFFFF" }}>
            Four steps from problem to solution.
          </h2>
        </div>

        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="h-16 w-full" aria-hidden>
              <path d="M0 40 Q 300 -10 600 40 T 1200 40" stroke="#39A9E0" strokeWidth="3" fill="none" strokeDasharray="6 8" />
            </svg>
            <div className="absolute inset-0 grid grid-cols-4 items-center px-6">
              {steps.map((s, i) => (
                <div key={s.n} className="flex justify-center" style={{ transform: `translateY(${i % 2 === 0 ? -6 : 6}px)` }}>
                  <span
                    className="font-display grid h-14 w-14 place-items-center rounded-[12px] text-[22px] font-extrabold text-white"
                    style={{ background: "#FF6814", boxShadow: "0 12px 24px -8px rgba(255,104,20,0.55)" }}
                  >
                    {s.n}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <h3 className="font-display text-[20px] font-extrabold text-white">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#CBEFFF]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className="relative mt-14 space-y-8 border-l-2 lg:hidden" style={{ borderColor: "#2E86BD", paddingLeft: 32 }}>
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[46px] top-0 grid h-11 w-11 place-items-center rounded-[10px] font-display text-[18px] font-extrabold text-white" style={{ background: "#FF6814" }}>
                {s.n}
              </span>
              <h3 className="font-display text-[20px] font-extrabold text-white">{s.t}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-[#CBEFFF]">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ServiceArea() {
  return (
    <section className="relative overflow-hidden py-24 md:py-28" style={{ background: "#0C2D42" }}>
      <div className="container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#39A9E0]">Where we work</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-white md:text-[52px]" style={{ color: "#FFFFFF" }}>
            Serving homes throughout Palm Beach County.
          </h2>
          <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-[#CBEFFF]">
            Florida Coast Plumbing provides residential plumbing support from Boynton Beach to Jupiter and surrounding
            Palm Beach County communities.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CITIES.map((c) => (
              <li key={c} className="flex items-center gap-2.5 text-[15px] font-semibold text-white">
                <MapPin className="h-4 w-4 text-[#39A9E0]" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CoastalLink to="/contact" size="lg" iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}>
              Check Your ZIP Code
            </CoastalLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <PalmBeachMap className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Plumbing Questions</p>
          <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[52px]">
            Helpful answers before your appointment.
          </h2>
        </div>
        <div className="mt-10">
          <FaqAccordion items={FAQ} />
        </div>
      </div>
    </section>
  );
}
