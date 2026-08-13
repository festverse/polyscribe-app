"use client";

import { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = "mx-auto w-full max-w-[1100px] px-6";
const yBtn =
  "inline-flex items-center justify-center rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-bold text-[#111] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111]";

// ─── Illustration placeholder ─────────────────────────────────────────────────
function IllustrationBox({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center text-xs font-medium ${
        dark
          ? "border-white/25 bg-white/5 text-white/40"
          : "border-[#111]/15 bg-[#111]/[0.02] text-[#111]/35"
      } ${className}`}
    >
      {label}
    </div>
  );
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-2 text-[15px] font-extrabold tracking-tight ${dark ? "text-white" : "text-[#111]"}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111] text-yellow-400">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M13.4 1.8 4.8 13h6.1l-1 9.2L19.3 10h-6.1l.2-8.2Z" />
        </svg>
      </span>
      polyscribe
    </a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#111]/8 bg-white/95 backdrop-blur-sm">
      <div className={`${C} flex h-16 items-center justify-between`}>
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {["Blog", "Privacy", "Features", "Pricing"].map((l) => (
            <a key={l} href="#" className="transition hover:opacity-50">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-semibold transition hover:opacity-55 sm:block"
          >
            Sign in
          </a>
          <a href="#" className={`${yBtn} text-xs`}>
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className={C}>
        {/* Browser chrome wrapper */}
        <div className="rounded-3xl border border-[#111]/10 bg-[#f7f7f7] p-2 shadow-sm">
          {/* URL bar row */}
          <div className="mb-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-2">
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#111]/12" />
              ))}
            </div>
            <div className="mx-auto flex h-6 w-44 items-center justify-center rounded-full bg-[#111]/6 text-[10px] text-[#111]/30">
              polyscribe.com
            </div>
          </div>

          {/* Inner hero */}
          <div className="rounded-2xl bg-white px-6 py-16 text-center md:px-12 md:py-24">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#111]/12 px-4 py-1.5 text-xs font-semibold">
              ✦ Preserve your voice
            </span>

            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-[68px]">
              Polyscribe{" "}
              <span className="relative inline-block">
                turns
                <svg
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-2.5 w-full text-yellow-400"
                >
                  <path
                    d="M2 8 C20 2,40 10,60 5 C80 0,90 8,98 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              rough
              <br />
              draft into your voice
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#111]/55 md:text-lg">
              Polyscribe learns from writing that already sounds like you, then
              turns rough drafts into polished content without losing your tone,
              rhythm, or personality.
            </p>

            {/* Input card */}
            <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border border-[#111]/10 bg-[#fafafa] text-left shadow-sm">
              <div className="px-5 py-5">
                <p className="text-sm text-[#111]/30">
                  Paste something you want to rewrite...
                </p>
                <div className="mt-6 h-20" />
              </div>
              <div className="flex items-center justify-between border-t border-[#111]/8 bg-white px-5 py-3">
                <button className="rounded-full border border-[#111]/15 px-4 py-1.5 text-xs font-semibold transition hover:bg-[#111]/5">
                  ↑ Attach Draft
                </button>
                <button className={`${yBtn} text-xs`}>Continue →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Comparison ───────────────────────────────────────────────────────────────
function Comparison() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={C}>
        <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Most AI rewrites your personality out.{" "}
          <span className="text-yellow-500">Polyscribe keeps</span> what makes
          your writing yours.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Generic AI */}
          <div className="rounded-3xl border border-[#111]/10 bg-[#f9f9f9] p-8">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#111]/35">
              Generic AI
            </p>
            <h3 className="mb-3 text-xl font-bold">Sounds like everyone else</h3>
            <p className="text-sm leading-7 text-[#111]/55">
              Generic AI tools swap your personality for a polished but bland
              corporate voice. Your readers can tell it wasn&apos;t really you
              — and so can you.
            </p>
            <IllustrationBox
              label="Sad person at laptop — generic AI output"
              className="mt-6 h-52"
            />
          </div>

          {/* Polyscribe */}
          <div className="rounded-3xl border-2 border-yellow-400 bg-white p-8">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-yellow-500">
              Polyscribe
            </p>
            <h3 className="mb-3 text-xl font-bold">
              Sounds unmistakably like you
            </h3>
            <p className="text-sm leading-7 text-[#111]/55">
              Polyscribe studies your past writing, captures your vocabulary and
              rhythm, and produces drafts your audience will recognise as
              authentically yours.
            </p>
            <div className="mt-6 flex h-52 items-center justify-center rounded-2xl border-2 border-dashed border-yellow-300 bg-yellow-50 text-xs font-medium text-yellow-600">
              Happy person at laptop — authentic output
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Dark CTA #1 ──────────────────────────────────────────────────────────────
function DarkCTA1() {
  return (
    <section className="bg-[#111] py-20 md:py-28">
      <div
        className={`${C} flex flex-col gap-10 md:flex-row md:items-center md:gap-16`}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Streamline Your
            <br />
            Writing Experience
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Stop wrestling with AI that strips out your voice. Polyscribe
            handles the polish so you stay in flow — your style, every time.
          </p>
          <a href="#" className={`${yBtn} mt-8`}>
            Start Writing
          </a>
        </div>
        <IllustrationBox
          label="Person high-fiving a robot — yellow-toned illustration"
          className="h-64 flex-1"
          dark
        />
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Paste your rough draft",
      desc: "Drop in anything — bullet points, a rambling paragraph, or a half-formed idea. Format doesn't matter.",
    },
    {
      n: "02",
      title: "Pick a preset",
      desc: "Choose a voice preset or select one you've created from your own writing samples.",
    },
    {
      n: "03",
      title: "Get your results",
      desc: "Polyscribe rewrites in seconds, matching your tone, vocabulary, and sentence rhythm.",
    },
    {
      n: "04",
      title: "Create your own presets",
      desc: "Train Polyscribe on your own work to build a preset that's permanently, unmistakably you.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div
        className={`${C} flex flex-col gap-14 md:flex-row md:gap-16`}
      >
        {/* Left */}
        <div className="md:w-64 md:shrink-0">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            How Polyscribe can write just like you
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#111]/50">
            Four steps from rough draft to on-brand post.
          </p>
          <a href="#" className={`${yBtn} mt-8`}>
            Start Writing
          </a>
        </div>

        {/* 2×2 grid */}
        <div className="grid flex-1 gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-[#111]/10 bg-[#f9f9f9] p-6"
            >
              <span className="mb-3 inline-block text-xs font-bold text-[#111]/30">
                {s.n}
              </span>
              <IllustrationBox
                label={`Step ${s.n}: ${s.title}`}
                className="mb-4 h-28"
              />
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-[#111]/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    {
      title: "Bypass AI Detection",
      desc: "Rewritten content reads as genuinely human, passing the detectors your audience uses.",
    },
    {
      title: "Match Your Tone",
      desc: "Funny, sharp, warm or authoritative — Polyscribe replicates your specific register.",
    },
    {
      title: "Keep Your Facts Straight",
      desc: "Polyscribe rewrites the language, never the facts. Your data and claims stay intact.",
    },
    {
      title: "Every Format Covered",
      desc: "Threads, newsletters, LinkedIn posts, essays — one preset handles every surface.",
    },
    {
      title: "Unlimited Custom Presets",
      desc: "Build as many voice profiles as you need, for yourself or multiple clients.",
    },
    {
      title: "Instant Rewrite History",
      desc: "Every version is saved. Roll back, compare, or repurpose any past rewrite in one click.",
    },
  ];

  return (
    <section id="features" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className={C}>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Everything you need to write like you
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#111]/50">
            One tool. Every format. Always your voice.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-7 shadow-sm">
              <IllustrationBox
                label={`${f.title} — illustration`}
                className="mb-5 h-36"
              />
              <h3 className="font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#111]/50">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dark CTA #2 ──────────────────────────────────────────────────────────────
function DarkCTA2() {
  return (
    <section className="bg-[#111] py-20 md:py-28">
      <div
        className={`${C} flex flex-col gap-10 md:flex-row md:items-center md:gap-16`}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Ready to post in
            <br />
            seconds
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Just paste, pick, and publish. Polyscribe gets you from rough idea
            to ready-to-share in under a minute.
          </p>
          <a href="#" className={`${yBtn} mt-8`}>
            Start Writing
          </a>
        </div>
        <IllustrationBox
          label="Person with laptop and lightbulb — productivity illustration"
          className="h-64 flex-1"
          dark
        />
      </div>
    </section>
  );
}

// ─── Presets ──────────────────────────────────────────────────────────────────
const presetList = [
  { name: "Authoritative", sample: "Here's what the data actually shows...", rotate: "rotate-1" },
  { name: "Persuasive", sample: "You've been thinking about this wrong...", rotate: "-rotate-2" },
  { name: "Playful", sample: "Okay hear me out — what if we just...", rotate: "rotate-2" },
  { name: "Authentic", sample: "I'll be honest, I almost didn't share this.", rotate: "-rotate-1" },
  { name: "Friendly", sample: "Hope this helps — let me know if you have Qs!", rotate: "rotate-1" },
  { name: "Professional", sample: "Pleased to share the Q3 results below.", rotate: "-rotate-2" },
  { name: "Visionary", sample: "Five years from now, this will be obvious.", rotate: "rotate-3" },
  { name: "Empathetic", sample: "It's okay if this took you a while to see.", rotate: "-rotate-1" },
  { name: "Direct", sample: "Short version: do this, skip that.", rotate: "rotate-1" },
  { name: "Storytelling", sample: "The day everything changed started like any other.", rotate: "-rotate-3" },
  { name: "Educational", sample: "Let's break this down step by step.", rotate: "rotate-2" },
  { name: "Sarcastic", sample: "Oh sure, that plan definitely works in theory.", rotate: "-rotate-1" },
];

function Presets() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className={C}>
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              A preset for every
              <br />
              voice you need
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-[#111]/50">
              Start writing from day one. Build your own the moment you're
              ready.
            </p>
          </div>
          <a href="#" className={`${yBtn} shrink-0`}>
            Start Writing
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 px-2">
          {presetList.map((p) => (
            <div
              key={p.name}
              className={`w-40 shrink-0 rounded-xl bg-yellow-400 p-4 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg ${p.rotate}`}
            >
              <p className="mb-1.5 text-xs font-bold text-[#111]">{p.name}</p>
              <p className="text-xs italic leading-5 text-[#111]/60">
                {p.sample}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Mikaela J.",
    handle: "@mikaela_writes",
    text: "I've tried every AI writing tool out there. Polyscribe is the only one where my readers haven't noticed a difference — in fact, they say my posts have gotten better.",
  },
  {
    name: "Devon R.",
    handle: "@devonremix",
    text: "I write for three different brands with totally different voices. Polyscribe handles all of them. The preset system is genuinely brilliant.",
  },
  {
    name: "Priya M.",
    handle: "@priya_builds",
    text: "Turned a messy Notion brain-dump into a LinkedIn post in 40 seconds. Didn't change a single word. That's when I knew.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#111] py-20 md:py-28">
      <div className={C}>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Hear from Our Valued
            <br />
            Community Members
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/40">
            Thousands of writers, creators and founders publish with Polyscribe
            every day.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.handle}
              className="flex flex-col gap-5 rounded-2xl bg-white/5 p-7 ring-1 ring-white/10"
            >
              <div className="text-sm text-yellow-400">★★★★★</div>
              <p className="flex-1 text-sm leading-7 text-white/70">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/15" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/35">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const flexFeatures = [
    "50 AI rewrites per month",
    "Unlimited custom presets",
    "Automatic style detection",
    "7 format templates",
  ];
  const customFeatures = [
    "Everything in Flexible",
    "Unlimited rewrites",
    "Priority support",
    "Team seat management",
    "Custom onboarding",
  ];

  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className={C}>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Pick the plan that fits
            <br />
            how you write
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#111]/50">
            Start free, scale when you're ready. No credit card required.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {/* Flexible */}
          <div className="flex flex-col rounded-3xl border-2 border-[#111]/10 bg-white p-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#111]/35">
              Flexible
            </p>
            <div className="mt-3 flex items-end gap-1">
              <span className="text-5xl font-extrabold">$20</span>
              <span className="mb-2 text-sm text-[#111]/40">/mo</span>
            </div>
            <p className="mt-1 text-xs text-[#111]/45">
              Billed monthly, cancel anytime.
            </p>
            <ul className="my-7 flex-1 space-y-3">
              {flexFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className={`${yBtn} w-full`}>
              Start writing
            </a>
          </div>

          {/* Custom */}
          <div className="flex flex-col rounded-3xl bg-[#111] p-8 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/35">
              Custom
            </p>
            <div className="mt-3">
              <span className="text-4xl font-extrabold">Custom</span>
            </div>
            <p className="mt-1 text-xs text-white/40">
              Tailored to your team's needs.
            </p>
            <ul className="my-7 flex-1 space-y-3">
              {customFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/15 text-[10px] font-bold">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#111] transition hover:bg-white/85"
            >
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Does Polyscribe generate text from scratch?",
    a: "No — Polyscribe rewrites drafts you already have. It refines your content while preserving your voice, not replacing it.",
  },
  {
    q: "Will my content pass AI detection?",
    a: "Polyscribe is designed so rewritten output reads as naturally human, but no tool can guarantee 100% pass rates on every detector.",
  },
  {
    q: "How is the best support available?",
    a: "All plans include email support. Custom plans include a dedicated success manager and priority response times.",
  },
  {
    q: "Are my lifetime and forever claims allowed?",
    a: "We never offer lifetime plans. Every plan is monthly or annual, and you can cancel any time from your account settings.",
  },
  {
    q: "Why should I use Polyscribe over ChatGPT?",
    a: "ChatGPT writes in ChatGPT's voice. Polyscribe writes in yours — trained on your own past work, not a generic internet average.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-28">
      <div className={C}>
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Got questions?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#111]/50">
            Everything you wanted to know — and were too afraid to ask.
          </p>
        </div>

        <div className="mx-auto max-w-2xl divide-y divide-[#111]/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold transition hover:opacity-60"
              >
                {faq.q}
                <span
                  className={`shrink-0 text-lg leading-none transition-transform ${open === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-7 text-[#111]/55">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-white pt-16">
      <div className={C}>
        <div className="grid gap-10 pb-16 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-xs leading-6 text-[#111]/45">
              Polyscribe is your independent AI writing assistant. Your voice,
              amplified.
            </p>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#111]/35">
              Legal
            </p>
            <ul className="space-y-2.5 text-sm text-[#111]/55">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:opacity-50">
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-[#111]/35">
              Support
            </p>
            <ul className="space-y-2.5 text-sm text-[#111]/55">
              {["Help Center", "Status Page", "Contact Us", "Twitter / X"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:opacity-50">
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Big display wordmark */}
      <div className="overflow-hidden border-t border-[#111]/8 py-3 text-center">
        <p className="select-none text-[clamp(4rem,16vw,13rem)] font-extrabold leading-none tracking-tighter text-[#111]">
          Polyscribe
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Comparison />
      <DarkCTA1 />
      <HowItWorks />
      <Features />
      <DarkCTA2 />
      <Presets />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
