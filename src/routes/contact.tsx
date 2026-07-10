import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { Phone, Mail, MapPin, Clock, Calendar, Upload, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { CoastalButton, CoastalLink } from "../components/CoastalButton";
import { PatternCTA } from "../components/PatternCTA";
import { SunsetLines, WaveDivider, PalmSilhouette } from "../components/decor";
import { FaqAccordion } from "../components/FaqAccordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Florida Coast Plumbing | Book Plumbing Service" },
      {
        name: "description",
        content: "Book plumbing service or contact Florida Coast Plumbing for urgent plumbing help throughout Palm Beach County.",
      },
      { property: "og:title", content: "Contact Florida Coast Plumbing" },
      { property: "og:description", content: "Tell us what’s happening — we’ll help you choose the next step." },
    ],
  }),
  component: ContactPage,
});

const SERVICES = ["Emergency Plumbing", "Drain Cleaning", "Leak Detection", "Pipe Repair", "Water Heater", "Sewer Service", "Water Filtration", "Fixture Repair", "Not Sure"];

const CONTACT_FAQ = [
  { q: "How soon will someone respond?", a: "During business hours we typically respond within an hour. Urgent 24/7 calls are answered immediately." },
  { q: "Do I need to know which service I need?", a: "No — the ‘Not Sure’ option is available. Describe what you’re noticing and we’ll help figure out the next step." },
  { q: "Can I upload photos?", a: "Yes. Up to five photos (JPG, PNG, or HEIC), 10 MB each. Only take pictures when it is safe to do so." },
  { q: "What should I do during an active leak?", a: "Shut off the nearest safe water valve, keep people away from any electrical hazards, and call our urgent line." },
  { q: "Will I receive an arrival window?", a: "Yes — you’ll receive an appointment window and confirmation when your technician is on the way." },
  { q: "Which Palm Beach communities do you serve?", a: "Boynton Beach, Boca Raton, Delray Beach, West Palm Beach, Wellington, Jupiter, Lake Worth Beach, and Palm Beach Gardens." },
];

function ContactPage() {
  return (
    <>
      <Hero />
      <Body />
      <EmergencyPanel />
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Contact Questions</p>
            <h2 className="font-display mt-3 text-[38px] font-extrabold text-[#0C2D42] md:text-[48px]">Before you book.</h2>
          </div>
          <div className="mt-10"><FaqAccordion items={CONTACT_FAQ} /></div>
        </div>
      </section>
      <PatternCTA compact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#F3FBFE" }}>
      <SunsetLines className="pointer-events-none absolute right-8 bottom-6 hidden h-20 w-36 opacity-40 md:block" />
      <PalmSilhouette color="#0C2D42" className="pointer-events-none absolute -left-10 bottom-0 hidden h-60 w-52 opacity-10 md:block" />
      <div className="container-wide py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#2E86BD]">Contact Florida Coast</p>
          <h1 className="font-display mt-3 text-[44px] font-extrabold leading-[1.05] text-[#0C2D42] md:text-[68px]">
            Tell us what’s happening.
          </h1>
          <p className="mt-5 text-[17px] leading-relaxed text-[#1D2B35]">
            You don’t need to know the technical name of the problem. Share what you see, hear, or smell and our team will
            help determine the next step.
          </p>
        </div>
      </div>
      <WaveDivider fill="#FFFFFF" height={70} />
    </section>
  );
}

function Body() {
  return (
    <section className="bg-white py-16">
      <div className="container-wide grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
        <aside className="lg:col-span-5">
          <ContactPanel />
        </aside>
      </div>
    </section>
  );
}

type FormValues = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  service: string;
  noticing: string;
  spreading: string;
  date: string;
  time: string;
  details: string;
  consent: boolean;
};

const EMPTY: FormValues = {
  name: "", phone: "", email: "", address: "", city: "", zip: "",
  service: "", noticing: "", spreading: "no", date: "", time: "", details: "", consent: false,
};

function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [reference, setReference] = useState("");

  const set = <K extends keyof FormValues>(k: K, v: FormValues[K]) =>
    setValues((prev) => ({ ...prev, [k]: v }));

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const list = Array.from(e.target.files ?? []);
    const filtered = list.filter((f) => f.size <= 10 * 1024 * 1024).slice(0, 5);
    setFiles(filtered);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!values.name.trim()) errs.name = "Name is required.";
    if (!/^[\d\s()+\-]{7,}$/.test(values.phone.trim())) errs.phone = "Please enter a valid phone number.";
    if (values.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) errs.email = "Please enter a valid email.";
    if (!values.service) errs.service = "Please choose a service.";
    if (!values.noticing.trim()) errs.noticing = "Please describe what you’re noticing.";
    if (!values.consent) errs.consent = "Please agree to be contacted about your request.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    if (!validate()) return;
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 900));
      const ref = `FCP-${Date.now().toString().slice(-6)}`;
      setReference(ref);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[24px] p-10 text-center" style={{ background: "#FFFFFF", border: "1px solid #D5E5EC", boxShadow: "0 20px 40px -30px rgba(12,45,66,0.25)" }}>
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full" style={{ background: "#FFF7E6" }}>
          <CheckCircle2 className="h-7 w-7" style={{ color: "#2F7B5B" }} aria-hidden />
        </div>
        <h2 className="font-display mt-4 text-[30px] font-extrabold text-[#0C2D42]">Your service request has been received.</h2>
        <p className="mt-2 text-[15px] text-[#1D2B35]">
          Confirmation reference: <span className="font-extrabold text-[#0C2D42]">{reference}</span>
        </p>
        <p className="mt-3 text-[15px] text-[#1D2B35]">
          A team member will follow up at{" "}
          <span className="font-bold text-[#0C2D42]">{values.phone}</span> during business hours.
        </p>
        <p className="mt-4 rounded-[12px] p-4 text-[13.5px] font-semibold" style={{ background: "#FFF7E6", color: "#0C2D42" }}>
          For active leaks or urgent plumbing problems, please call{" "}
          <a className="underline" href="tel:+15615550136">561-555-0136</a>.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <CoastalButton variant="secondary" onClick={() => { setStatus("idle"); setValues(EMPTY); setFiles([]); }}>
            Send another request
          </CoastalButton>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[24px] bg-white p-6 md:p-8"
      style={{ border: "1px solid #D5E5EC", borderTop: "3px solid #39A9E0" }}
      aria-labelledby="form-heading"
    >
      <h2 id="form-heading" className="font-display text-[28px] font-extrabold text-[#0C2D42]">Request plumbing service</h2>
      <p className="mt-1 text-[14px] text-[#6E7D86]">Required fields marked with an orange dot.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Field id="name" label="Full Name" required error={errors.name}>
          <input id="name" type="text" autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} className={inputCls} />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone}>
          <input id="phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} className={inputCls} />
        </Field>
        <Field id="email" label="Email Address" error={errors.email}>
          <input id="email" type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} className={inputCls} />
        </Field>
        <Field id="address" label="Service Address">
          <input id="address" type="text" autoComplete="street-address" value={values.address} onChange={(e) => set("address", e.target.value)} className={inputCls} />
        </Field>
        <Field id="city" label="City">
          <input id="city" type="text" value={values.city} onChange={(e) => set("city", e.target.value)} className={inputCls} />
        </Field>
        <Field id="zip" label="ZIP Code">
          <input id="zip" type="text" inputMode="numeric" value={values.zip} onChange={(e) => set("zip", e.target.value)} className={inputCls} />
        </Field>
        <Field id="service" label="Service Needed" required error={errors.service}>
          <select id="service" value={values.service} onChange={(e) => set("service", e.target.value)} className={inputCls}>
            <option value="">Choose a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>
        <Field id="spreading" label="Is Water Actively Spreading?">
          <div className="flex h-[46px] items-center gap-4 rounded-[12px] border px-3" style={{ borderColor: "#D5E5EC" }}>
            {["yes", "no"].map((v) => (
              <label key={v} className="flex items-center gap-2 text-[15px] capitalize">
                <input type="radio" name="spreading" value={v} checked={values.spreading === v} onChange={() => set("spreading", v)} className="accent-[#FF6814]" />
                {v}
              </label>
            ))}
          </div>
        </Field>
        <Field id="date" label="Preferred Appointment Date">
          <input id="date" type="date" value={values.date} onChange={(e) => set("date", e.target.value)} className={inputCls} />
        </Field>
        <Field id="time" label="Preferred Time Window">
          <select id="time" value={values.time} onChange={(e) => set("time", e.target.value)} className={inputCls}>
            <option value="">Any time</option>
            <option>Morning (8–12)</option>
            <option>Midday (11–3)</option>
            <option>Afternoon (2–6)</option>
            <option>Urgent — as soon as possible</option>
          </select>
        </Field>
      </div>

      <div className="mt-4">
        <Field id="noticing" label="What are you noticing?" required error={errors.noticing}>
          <textarea id="noticing" rows={3} value={values.noticing} onChange={(e) => set("noticing", e.target.value)} className={`${inputCls} h-auto py-3`} placeholder="Describe what you see, hear, or smell." />
        </Field>
      </div>

      <div className="mt-4">
        <Field id="details" label="Additional Details">
          <textarea id="details" rows={3} value={values.details} onChange={(e) => set("details", e.target.value)} className={`${inputCls} h-auto py-3`} />
        </Field>
      </div>

      <div className="mt-4">
        <label className="block text-[13px] font-bold text-[#0C2D42]">Upload Photos</label>
        <p className="mt-1 text-[12.5px] text-[#6E7D86]">JPG, PNG, or HEIC. Up to 5 files, max 10 MB each. Only take photos when it is safe to do so.</p>
        <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-[12px] border-2 border-dashed py-6 text-[14px] font-semibold text-[#2E86BD] hover:bg-[#F3FBFE]" style={{ borderColor: "#CBEFFF" }}>
          <Upload className="h-4 w-4" aria-hidden />
          {files.length ? `${files.length} file${files.length > 1 ? "s" : ""} selected` : "Choose files"}
          <input type="file" accept="image/jpeg,image/png,image/heic" multiple className="sr-only" onChange={onFile} />
        </label>
      </div>

      <div className="mt-5 flex items-start gap-2.5">
        <input id="consent" type="checkbox" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} className="mt-1 h-4 w-4 accent-[#FF6814]" />
        <label htmlFor="consent" className="text-[14px] text-[#1D2B35]">
          I agree to receive calls or messages regarding this service request.
        </label>
      </div>
      {errors.consent && <p className="mt-1 text-[12.5px] font-semibold text-[#B8453C]">{errors.consent}</p>}

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 rounded-[12px] p-3 text-[13.5px]" style={{ background: "#FDECEA", color: "#B8453C" }}>
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          Something went wrong while sending. Please try again or call us directly.
        </div>
      )}

      <div className="mt-6">
        <CoastalButton
          type="submit"
          size="lg"
          disabled={status === "loading"}
          iconRight={<ArrowRight className="h-4 w-4" aria-hidden />}
        >
          {status === "loading" ? "Sending Request…" : "Send Service Request"}
        </CoastalButton>
      </div>
    </form>
  );
}

const inputCls =
  "block w-full rounded-[12px] border bg-white px-3.5 py-2.5 text-[15px] text-[#0C2D42] outline-none transition focus:border-[#2E86BD] focus:ring-4 focus:ring-[#CBEFFF]";

function Field({
  id,
  label,
  children,
  required,
  error,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 flex items-center gap-1.5 text-[13px] font-bold text-[#0C2D42]">
        {label}
        {required && <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ background: "#FF6814" }} />}
      </label>
      <div style={{ borderColor: error ? "#B8453C" : undefined }}>{children}</div>
      {error && <p id={`${id}-error`} className="mt-1 text-[12.5px] font-semibold text-[#B8453C]">{error}</p>}
    </div>
  );
}

function ContactPanel() {
  return (
    <div className="overflow-hidden rounded-[24px]" style={{ background: "#0C2D42" }}>
      <div className="relative p-8 text-white md:p-10">
        <SunsetLines className="pointer-events-none absolute right-6 bottom-6 h-14 w-24 opacity-30" />
        <h2 className="font-display text-[28px] font-extrabold" style={{ color: "#FFFFFF" }}>Reach us directly.</h2>
        <p className="mt-2 max-w-xs text-[14px] text-[#CBEFFF]">Two easy ways to get in touch — call for urgent needs, or email for planned work.</p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px]" style={{ background: "#FF6814" }}>
              <Phone className="h-5 w-5 text-white" aria-hidden />
            </span>
            <div>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#39A9E0]">Phone</div>
              <a href="tel:+15615550136" className="text-[18px] font-extrabold text-white hover:text-[#FF6814]">561-555-0136</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px]" style={{ background: "#2E86BD" }}>
              <Mail className="h-5 w-5 text-white" aria-hidden />
            </span>
            <div>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#39A9E0]">Email</div>
              <a href="mailto:service@floridacoastplumbing.com" className="break-all text-[15.5px] font-semibold text-white hover:text-[#FF6814]">
                service@floridacoastplumbing.com
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px]" style={{ background: "#2E86BD" }}>
              <MapPin className="h-5 w-5 text-white" aria-hidden />
            </span>
            <div>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#39A9E0]">Office</div>
              <p className="text-[15px] text-white">Palm Beach County, Florida</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px]" style={{ background: "#2E86BD" }}>
              <Clock className="h-5 w-5 text-white" aria-hidden />
            </span>
            <div>
              <div className="text-[12px] font-extrabold uppercase tracking-widest text-[#39A9E0]">Hours</div>
              <p className="text-[15px] text-white leading-relaxed">
                Mon–Fri: 7:00 AM–7:00 PM<br />
                Saturday: 8:00 AM–5:00 PM<br />
                Urgent Support: 24/7
              </p>
            </div>
          </li>
        </ul>

        <p className="mt-6 text-[12.5px] uppercase tracking-[0.18em] text-[#39A9E0]">Licensed · Insured · Bonded</p>
      </div>
      <div className="px-8 py-5" style={{ background: "#0A2436" }}>
        <CoastalLink to="/contact" variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-[#0C2D42]" icon={<Calendar className="h-4 w-4" aria-hidden />}>
          Book Online Instead
        </CoastalLink>
      </div>
    </div>
  );
}

function EmergencyPanel() {
  return (
    <section className="py-16" style={{ background: "#FFFFFF" }}>
      <div className="container-wide">
        <div className="overflow-hidden rounded-[24px]" style={{ background: "#FF6814" }}>
          <div className="grid gap-6 p-8 md:grid-cols-3 md:p-10">
            <div className="md:col-span-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px] font-extrabold uppercase tracking-widest text-white">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden /> Emergency
              </div>
              <h2 className="font-display mt-3 text-[30px] font-extrabold text-white" style={{ color: "#FFFFFF" }}>Water actively spreading?</h2>
              <div className="mt-4">
                <CoastalLink href="tel:+15615550136" variant="dark" size="lg" icon={<Phone className="h-4 w-4" aria-hidden />}>Call 561-555-0136</CoastalLink>
              </div>
            </div>
            <ol className="grid gap-3 text-[15px] text-white md:col-span-2 md:grid-cols-2">
              {[
                "Shut off the nearest safe water valve.",
                "Keep people away from electrical hazards.",
                "Avoid direct contact with sewer water.",
                "Call urgent plumbing support.",
              ].map((s, i) => (
                <li key={s} className="flex items-start gap-3 rounded-[14px] px-4 py-3" style={{ background: "rgba(255,255,255,0.14)" }}>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white text-[13px] font-extrabold text-[#FF6814]">{i + 1}</span>
                  <span className="font-semibold">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}