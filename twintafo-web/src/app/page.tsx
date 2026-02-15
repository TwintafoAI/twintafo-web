import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { HeroBackground } from "@/components/HeroBackground";
import { Accordion } from "@/components/Accordion";
import { FinalCtaGlow } from "@/components/FinalCtaGlow";

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
    description: "Generate realistic trial outcomes before the first patient visits.",
  },
  {
    title: "Compare",
    description: "Stress-test arms, endpoints, and assumptions side-by-side.",
  },
  {
    title: "Decide",
    description: "Quantify tradeoffs to move forward with clarity and rigor.",
  },
];

const steps = [
  {
    title: "Define assumptions",
    description: "Trial design, endpoints, population profiles.",
  },
  {
    title: "Generate digital twins",
    description: "Synthetic longitudinal patient cohorts.",
  },
  {
    title: "Stress-test outcomes",
    description: "Power, bias, timeline, and robustness diagnostics.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <header className="fixed left-0 top-0 z-50 w-full bg-black/40 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between border-b border-emerald-100/10 py-4">
            <div className="flex items-center gap-3">
              <Image
                src="/twintafo-logo.png"
                alt="Twintafo AI logo"
                width={140}
                height={36}
                priority
              />
              <span className="hidden text-xs uppercase tracking-[0.4em] text-emerald-200/60 md:inline">
                Twintafo AI
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
              <Reveal className="hidden lg:block" delay={0.2}>
                <div className="relative rounded-3xl border border-emerald-200/15 bg-emerald-950/40 p-8 backdrop-blur panel-glow">
                  <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl" />
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                      <span>Signal Console</span>
                      <span className="rounded-full border border-emerald-200/20 px-3 py-1">
                        Live
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-2 w-3/4 rounded-full bg-emerald-200/30" />
                      <div className="h-2 w-2/3 rounded-full bg-emerald-200/20" />
                      <div className="h-2 w-1/2 rounded-full bg-emerald-200/10" />
                    </div>
                    <div className="rounded-2xl border border-emerald-200/10 bg-black/40 p-4 text-sm text-emerald-100/70">
                      Trial simulations run faster than enrollment. Explore design
                      decisions before committing capital.
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <section id="problem" className="py-20">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
              <Reveal>
                <div className="space-y-6 lg:pr-6">
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
                    descriptionClassName="max-w-none"
                  />
                  <div className="space-y-4 text-sm leading-relaxed text-emerald-100/70 sm:text-base">
                    <p>
                      Oncology trial planning has a narrow margin for error. One
                      slow cohort or misaligned endpoint can add quarters to a
                      program and compound risk across the pipeline.
                    </p>
                    <p>
                      Twintafo surfaces these pressure points early, before teams
                      commit real patients and real budgets.
                    </p>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full border border-emerald-100/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-emerald-100/70 transition hover:border-emerald-100/40 hover:text-emerald-100">
                    Where trials lose momentum
                  </button>
                </div>
              </Reveal>
              <div className="relative pl-10 lg:-mt-6">
                <div className="absolute left-2 top-2 bottom-2 w-px bg-emerald-200/20" />
                <div className="space-y-8">
                  {problemCards.map((card, index) => (
                    <Reveal key={card.title} delay={index * 0.12}>
                      <div className="relative">
                        <span className="absolute left-[-2.4rem] top-2 h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
                        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">
                          {card.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {featureBlocks.map((block, index) => (
                <Reveal key={block.title} delay={index * 0.12}>
                  <div className="rounded-2xl border border-emerald-100/10 bg-emerald-950/30 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-white">{block.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
                      {block.description}
                    </p>
                  </div>
                </Reveal>
              ))}
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
            <div className="relative mt-12 grid gap-6 md:grid-cols-3">
              <div className="absolute left-10 right-10 top-1/2 hidden h-px -translate-y-1/2 bg-emerald-200/20 md:block" />
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.12} className="relative">
                  <div className="rounded-2xl border border-emerald-100/10 bg-black/30 p-6 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/70">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
                      {step.description}
                    </p>
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
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {audiences.map((audience, index) => (
                <Reveal key={audience.title} delay={index * 0.12}>
                  <div className="rounded-2xl border border-emerald-100/10 bg-emerald-950/30 p-6">
                    <h3 className="text-lg font-semibold text-white">{audience.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-emerald-100/70">
                      {audience.description}
                    </p>
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
              <div className="mt-10 rounded-3xl border border-emerald-100/10 bg-emerald-950/30 p-8">
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
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustPrinciples.map((principle, index) => (
                <Reveal key={principle} delay={index * 0.1}>
                  <div className="rounded-2xl border border-emerald-100/10 bg-black/30 px-5 py-6 text-sm text-emerald-100/70">
                    {principle}
                  </div>
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
                  Bring timelines down. Keep rigor up.
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
                  <div className="rounded-2xl border border-emerald-100/10 bg-emerald-950/30 p-6 text-sm text-emerald-100/70">
                    Email us at{" "}
                    <a
                      href="mailto:hello@twintafoai.com"
                      className="text-emerald-200 underline underline-offset-4"
                    >
                      hello@twintafoai.com
                    </a>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <form className="rounded-3xl border border-emerald-100/10 bg-black/40 p-8 backdrop-blur">
                  <div className="grid gap-5">
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
