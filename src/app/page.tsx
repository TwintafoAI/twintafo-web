import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroBackground } from "@/components/HeroBackground";
import { Accordion } from "@/components/Accordion";
import { FinalCtaGlow } from "@/components/FinalCtaGlow";
import { ContactSuccessToast } from "@/components/ContactSuccessToast";

const problemCards = [
  {
    title: "Recruitment takes too long",
    description:
      "Enrollment bottlenecks delay timelines and inflate trial costs year over year.",
  },
  {
    title: "Control arms are difficult to enroll",
    description:
      "Patients often avoid or drop from control cohorts, undermining power and balance.",
  },
  {
    title: "Populations differ across sites",
    description:
      "Heterogeneous cohorts create unpredictable variability and complicate analysis.",
  },
  {
    title: "Small design choices create major bias",
    description:
      "Minor protocol tweaks can shift outcomes and derail interpretation.",
  },
];

const featureBlocks = [
  {
    title: "Simulate",
    description: "Model realistic trial outcomes before the first patient visits.",
  },
  {
    title: "Compare",
    description: "Stress-test arms, endpoints, and assumptions side-by-side.",
  },
  {
    title: "Decide",
    description: "Quantify tradeoffs and choose a design with conviction.",
  },
];

const steps = [
  {
    title: "Define simulations",
    description: "Align on design, endpoints, and population profiles.",
  },
  {
    title: "Generate digital twins",
    description: "Create synthetic longitudinal patient cohorts.",
  },
  {
    title: "Stress-test outcomes",
    description: "Evaluate power, bias, timelines, and robustness.",
  },
];

const audiences = [
  {
    title: "Biotech & Pharma",
    description: "De-risk oncology programs before pivotal investment.",
  },
  {
    title: "CROs",
    description: "Strengthen proposals with simulation-backed evidence.",
  },
  {
    title: "Biostatistics teams",
    description: "Pressure-test design decisions with transparent assumptions.",
  },
];

const deliverables = [
  "Trial simulation plans",
  "Synthetic longitudinal datasets",
  "Sensitivity analyses",
  "Structured decision summaries",
];

const trustPrinciples = [
  "Synthetic outputs only",
  "Reproducible simulation configs",
  "Designed for trial workflows",
  "Privacy-first architecture",
];

const collaborationArc = [
  {
    title: "Scope the trial",
    description: "Define endpoints, cohorts, and decision criteria.",
  },
  {
    title: "Run simulations",
    description: "Generate digital twins and stress-test scenarios.",
  },
  {
    title: "Decide with evidence",
    description: "Translate diagnostics into a confident next step.",
  },
];

const faqItems = [
  {
    question: "Is this replacing real patients?",
    answer:
      "No. Twintafo provides synthetic counterparts to help trial teams explore design decisions before enrollment.",
  },
  {
    question: "Do you need patient-level data?",
    answer:
      "Not necessarily. We can work with aggregate trial assumptions and enrich with available evidence.",
  },
  {
    question: "Can we see the product?",
    answer:
      "We are in a design-partner phase. Early collaborators receive tailored deliverables while we build.",
  },
  {
    question: "What’s the first step?",
    answer:
      "A short scoping call to understand your trial goals, constraints, and timelines.",
  },
  {
    question: "Is this only for ctDNA?",
    answer:
      "No. We support a range of oncology endpoints and modalities beyond ctDNA.",
  },
];

const primaryCtaClasses =
  "inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-200";
const secondaryCtaClasses =
  "inline-flex items-center justify-center rounded-full border border-emerald-200/30 px-6 py-3 text-sm font-semibold text-emerald-100/80 transition hover:border-emerald-200/70 hover:text-white";

type HomeProps = {
  searchParams?: Promise<{ sent?: string; error?: string }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const showSuccess = resolvedSearchParams?.sent === "1";
  const showError = resolvedSearchParams?.error === "1";

  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-emerald-100/10 bg-black/40 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="relative -ml-1 h-20 w-24">
                <Image
                  src="/twintafo-logo.png"
                  alt="Twintafo AI logo"
                  fill
                  sizes="96px"
                  priority
                  className="object-contain object-left [filter:brightness(0.92)_saturate(0.85)_hue-rotate(6deg)]"
                />
                <div className="logo-gradient-mask absolute inset-0" aria-hidden="true" />
              </div>
              <span className="hidden text-xl uppercase tracking-[0.35em] text-emerald-100/70 md:inline">
                <span className="text-white/85">Twintafo</span>{" "}
                <span className="text-ai-gradient">AI</span>
              </span>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <a href="#contact" className={primaryCtaClasses}>
                Request a call
              </a>
              <a href="mailto:hello@twintafoai.com" className={secondaryCtaClasses}>
                Email us
              </a>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
          <HeroBackground />
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <Reveal>
                <div className="space-y-8">
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald-200/70">
                    Oncology trials, reimagined
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Curing cancer starts with{" "}
                    <span className="text-gradient">better trials.</span>
                  </h1>
                  <p className="text-lg text-emerald-100/70 sm:text-xl">
                    AI-powered digital twins for oncology trials.
                  </p>
                  <p className="max-w-xl text-base leading-relaxed text-emerald-100/60">
                    Twintafo helps trial teams simulate outcomes, stress-test design
                    decisions, and evaluate external controls before investing
                    millions in real-world studies.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a href="#contact" className={primaryCtaClasses}>
                      Request a call
                    </a>
                    <a href="mailto:hello@twintafoai.com" className={secondaryCtaClasses}>
                      Email us
                    </a>
                  </div>
                  <p className="text-xs text-emerald-100/50">
                    Built for biotech, pharma, CROs, and biostatistics teams.
                  </p>
                </div>
              </Reveal>
              <Reveal className="order-last lg:order-none" delay={0.2}>
                <div className="relative rounded-3xl border border-emerald-200/15 bg-emerald-950/40 p-6 backdrop-blur panel-glow sm:p-8">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/10 via-transparent to-emerald-500/10" />
                  <div className="absolute inset-0 rounded-3xl bg-grid opacity-30" />
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl" />
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-emerald-200/70">
                      <span>Digital Twin Simulation</span>
                      <span className="rounded-full border border-emerald-200/20 px-3 py-1 text-[10px]">
                        Live
                      </span>
                    </div>
                    <div className="relative">
                      <div className="absolute left-4 top-6 hidden text-[10px] uppercase tracking-[0.3em] text-emerald-200/60 sm:block">
                        Observed
                      </div>
                      <div className="absolute right-6 top-6 hidden text-[10px] uppercase tracking-[0.3em] text-emerald-200/60 sm:block">
                        Simulated
                      </div>
                      <div className="absolute inset-x-6 top-1/2 h-px bg-emerald-200/15" />
                      <div className="absolute left-6 top-10 h-32 w-px bg-emerald-200/15" />
                      <div className="scan-line absolute inset-x-6 top-6 h-px" />
                      <svg
                        viewBox="0 0 520 260"
                        className="h-52 w-full sm:h-64"
                        role="img"
                        aria-label="Mirrored outcome curves comparing observed patients and simulated digital twins"
                      >
                        <defs>
                          <linearGradient id="twinGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#7ff0c2" stopOpacity="0.85" />
                            <stop offset="100%" stopColor="#35f3a4" stopOpacity="0.4" />
                          </linearGradient>
                          <linearGradient id="bandGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#2d5a46" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#2d5a46" stopOpacity="0.05" />
                          </linearGradient>
                          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="6" result="blur" />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>
                        <path
                          className="twin-band"
                          d="M30 220 C110 205 170 150 230 125 C290 100 350 85 420 80 C460 78 490 70 500 60 L500 95 C480 102 450 110 420 118 C350 135 300 150 230 175 C170 195 110 215 30 230 Z"
                          fill="url(#bandGradient)"
                        />
                        <path
                          className="twin-path twin-path--observed"
                          d="M30 210 C120 190 160 130 220 110 C280 90 330 80 410 70 C450 65 480 60 500 45"
                          fill="none"
                          stroke="rgba(127, 240, 194, 0.55)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#softGlow)"
                        />
                        <path
                          className="twin-path twin-path--sim"
                          d="M30 220 C110 205 170 150 230 125 C290 100 350 85 420 80 C460 78 490 70 500 60"
                          fill="none"
                          stroke="url(#twinGradient)"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter="url(#softGlow)"
                        />
                        <circle className="pulse-dot" cx="210" cy="132" r="4" fill="#7ff0c2" />
                        <circle className="pulse-dot pulse-dot--delay" cx="350" cy="92" r="3.5" fill="#35f3a4" />
                        <circle className="pulse-dot pulse-dot--delay-2" cx="460" cy="74" r="3" fill="#9af6d4" />
                      </svg>
                      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-emerald-200/60">
                        <span className="rounded-full border border-emerald-200/20 px-3 py-1">
                          Calibrated
                        </span>
                        <span className="rounded-full border border-emerald-200/20 px-3 py-1">
                          Confidence band
                        </span>
                        <span className="rounded-full border border-emerald-200/20 px-3 py-1">
                          Forecast
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl border border-emerald-200/10 bg-black/40 p-4 text-sm text-emerald-100/70">
                      Compare observed cohorts against simulated digital twins to
                      stress-test outcomes before enrollment.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="problem" className="py-20">
          <Container>
            <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <Reveal>
                <div className="space-y-6 text-emerald-100/70 lg:max-w-xl lg:pr-10">
                  <SectionHeading
                    eyebrow="The problem"
                    title="Why oncology trials stall"
                    description={
                      <>
                        Traditional trials carry high uncertainty, slow recruitment,
                        <br />
                        <span className="whitespace-nowrap">
                          and hard-to-control variability.
                        </span>
                      </>
                    }
                    descriptionClassName="max-w-xl"
                  />
                  <p className="text-base leading-relaxed">
                    Oncology trial planning has a narrow margin for error. One
                    slow cohort or misaligned endpoint can add quarters to a
                    program and compound risk across the pipeline.
                  </p>
                  <p className="text-base leading-relaxed">
                    Twintafo surfaces these pressure points early, before teams
                    commit real patients and real budgets.
                  </p>
                  <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200/20 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Where trials lose momentum
                  </div>
                </div>
              </Reveal>
              <div className="relative space-y-6 lg:mt-7">
                <div
                  className="timeline-line absolute bottom-3 left-4 top-3 hidden w-px md:block"
                  aria-hidden="true"
                />
                {problemCards.map((card, index) => (
                  <Reveal key={card.title} delay={index * 0.08}>
                    <div className="relative pl-10">
                      <span className="timeline-dot absolute left-3 top-1 h-2.5 w-2.5 rounded-full" />
                      <h3 className="text-lg font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="what" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="What Twintafo does"
                title="Simulate before you commit."
                description="Twintafo creates realistic synthetic patient journeys to test trial assumptions, compare strategies, and quantify risk before real patients are enrolled."
              />
            </Reveal>
            <div className="mt-12 overflow-hidden rounded-3xl border border-emerald-200/15 bg-gradient-to-br from-emerald-400/5 via-black/40 to-emerald-400/10">
              <div className="grid divide-y divide-emerald-100/10 md:grid-cols-3 md:divide-x md:divide-y-0">
                {featureBlocks.map((block, index) => (
                  <Reveal key={block.title} delay={index * 0.12}>
                    <div
                      className={`flex h-full flex-col gap-3 px-6 py-8 ${
                        index === 1
                          ? "bg-emerald-300/10"
                          : "bg-transparent"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-xl font-semibold text-white">{block.title}</h3>
                      <p className="text-sm leading-relaxed text-emerald-100/70">
                        {block.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section id="how" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="How it works"
                title="A focused three-step loop"
                description="A structured flow from assumptions to digital twins to actionable diagnostics."
              />
            </Reveal>
            <div className="relative mt-12 grid gap-10 md:grid-cols-3">
              <div
                className="absolute left-0 right-6 top-3 hidden h-px bg-emerald-300/40 md:block"
                aria-hidden="true"
              />
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.12}>
                  <div className="relative">
                    <span className="timeline-dot absolute left-6 top-3 hidden h-3 w-3 -translate-y-1/2 rounded-full md:block" />
                    <div className="pt-10 space-y-3">
                      <span className="inline-flex rounded-full border border-emerald-200/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                        Step {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-emerald-100/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="who" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Who it’s for"
                title="Built for trial decision-makers"
                description="Designed for teams driving oncology programs with high stakes and tight timelines."
              />
            </Reveal>
            <div className="mt-12 space-y-6">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.12}>
                  <div
                    className={`flex flex-col gap-6 rounded-3xl border border-emerald-100/10 bg-black/30 p-6 md:flex-row md:items-center ${
                      index % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/3">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                        Audience
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {audience.title}
                      </h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-sm leading-relaxed text-emerald-100/70">
                        {audience.description}
                      </p>
                      <p className="mt-3 text-sm text-emerald-100/60">
                        Focused on faster evidence without sacrificing scientific
                        rigor.
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="collaboration" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="What you get first"
                title="Built with early collaborators."
                description="We’re currently working with early design partners to shape the Twintafo platform."
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-emerald-100/10 bg-emerald-950/30 p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
                    Deliverables may include
                  </p>
                  <ul className="mt-6 grid gap-3 text-sm text-emerald-100/70 sm:grid-cols-2">
                    {deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm leading-relaxed text-emerald-100/60">
                    Every collaboration is tailored, with artifacts sized to your
                    decision timeline and evidence needs.
                  </p>
                </div>
                <div className="rounded-3xl border border-emerald-100/10 bg-black/30 p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/70">
                    Engagement arc
                  </p>
                  <div className="relative mt-6 space-y-6">
                    <div
                      className="timeline-line absolute left-3 top-2 hidden h-[calc(100%-16px)] w-px sm:block"
                      aria-hidden="true"
                    />
                    {collaborationArc.map((item, index) => (
                      <div key={item.title} className="relative pl-8">
                        <span className="timeline-dot absolute left-2 top-2 h-2.5 w-2.5 rounded-full" />
                        <p className="text-sm font-semibold text-white">
                          {String(index + 1).padStart(2, "0")} — {item.title}
                        </p>
                        <p className="mt-2 text-sm text-emerald-100/70">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="trust" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Trust principles"
                title="Built for rigor."
                description="A platform designed to deliver insight without compromising privacy or reproducibility."
              />
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {trustPrinciples.map((principle, index) => (
                <Reveal key={principle} delay={index * 0.08}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-black/40 px-4 py-2 text-sm text-emerald-100/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {principle}
                  </span>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <section id="faq" className="py-20">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title="Questions teams ask early"
                description="Concise answers to common questions from oncology trial teams."
              />
            </Reveal>
            <Reveal delay={0.1} className="mt-10">
              <Accordion items={faqItems} />
            </Reveal>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border border-emerald-200/20 bg-gradient-to-br from-emerald-300/10 via-black/60 to-emerald-400/10 px-8 py-16 text-center">
                <FinalCtaGlow />
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Build the trial before you run it.
                </h2>
                <p className="mt-4 text-base text-emerald-100/70">
                  Collaborate with Twintafo to pressure-test your next oncology
                  trial before it starts.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <a href="#contact" className={primaryCtaClasses}>
                    Request a call
                  </a>
                  <a
                    href="mailto:hello@twintafoai.com"
                    className={secondaryCtaClasses}
                  >
                    Email us
                  </a>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        <section id="contact" className="py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="space-y-6">
                  <SectionHeading
                    eyebrow="Contact"
                    title="Start the conversation."
                    description="Tell us about your trial goals, and we’ll outline a tailored simulation plan."
                  />
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-emerald-100/10 bg-emerald-950/30 p-6 text-sm text-emerald-100/70">
                      Email us at{" "}
                      <a
                        href="mailto:hello@twintafoai.com"
                        className="text-emerald-200 underline underline-offset-4"
                      >
                        hello@twintafoai.com
                      </a>
                    </div>
                    <div className="rounded-2xl border border-emerald-200/20 bg-black/40 p-6 text-sm text-emerald-100/70">
                      <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                        What happens next
                      </p>
                      <p className="mt-3">
                        We align on your trial questions, constraints, and success
                        criteria, then outline a focused simulation plan.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <form
                  action="/api/contact"
                  method="post"
                  className="rounded-3xl border border-emerald-100/10 bg-black/40 p-8 backdrop-blur"
                >
                  <div className="grid gap-5">
                    {showSuccess ? (
                      <ContactSuccessToast
                        initialVisible
                        title="Thanks for reaching out. We’ve got your request."
                        message="Expect a reply within 1–2 business days with next steps."
                        variant="success"
                      />
                    ) : null}
                    {showError ? (
                      <ContactSuccessToast
                        initialVisible
                        title="We couldn’t send that just yet."
                        message="Please try again, or email us directly at hello@twintafoai.com."
                        variant="error"
                      />
                    ) : null}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="text-xs uppercase tracking-[0.3em] text-emerald-200/70"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        required
                        type="text"
                        name="name"
                        className="mt-2 w-full rounded-xl border border-emerald-100/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-200/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="text-xs uppercase tracking-[0.3em] text-emerald-200/70"
                      >
                        Work email
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-xl border border-emerald-100/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-200/50"
                        placeholder="you@company.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-organization"
                        className="text-xs uppercase tracking-[0.3em] text-emerald-200/70"
                      >
                        Organization
                      </label>
                      <input
                        id="contact-organization"
                        type="text"
                        name="organization"
                        className="mt-2 w-full rounded-xl border border-emerald-100/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-200/50"
                        placeholder="Company or team"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="text-xs uppercase tracking-[0.3em] text-emerald-200/70"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        name="message"
                        rows={4}
                        className="mt-2 w-full rounded-xl border border-emerald-100/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-200/50"
                        placeholder="Tell us about your upcoming trial."
                      />
                    </div>
                    <button type="submit" className={primaryCtaClasses}>
                      Request a call
                    </button>
                    <p className="text-xs text-emerald-100/50">
                      This is not a medical website. We do not provide patient
                      advice or clinical guidance.
                    </p>
                  </div>
                </form>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-emerald-100/10 py-8">
        <Container>
          <div className="flex flex-col gap-3 text-xs text-emerald-100/50 md:flex-row md:items-center md:justify-between">
            <span>© 2026 Twintafo AI. All rights reserved.</span>
            <span>AI-powered digital twins for oncology trials.</span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
