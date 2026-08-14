"use client";

import { useState } from "react";

const assets = {
  wordmark: "/assets/wordmark.svg",
  logo: "/assets/logo.svg",
  logoLarge: "/assets/logo-large.svg",
  x: "/assets/x.svg",
  gmail: "/assets/gmail.svg",
  medium: "/assets/medium.svg",
  youtube: "/assets/youtube.svg",
  linkedin: "/assets/linkedin.svg",
  reddit: "/assets/reddit.svg",
  sparkle: "/assets/sparkle.svg",
  genericAi: "/assets/generic-ai.png",
  polyscribeAi: "/assets/polyscribe-ai.png",
  streamline: "/assets/streamline.png",
  ready: "/assets/ready.png",
  feature1: "/assets/feature-1.png",
  feature2: "/assets/feature-2.png",
  feature3: "/assets/feature-3.png",
  feature4: "/assets/feature-4.png",
  // TODO: replace with /assets/feature-5.png when the asset is added.
  feature5: "/assets/feature-4.png",
  john: "/assets/john.png",
  michael: "/assets/michael.png",
  emily: "/assets/emily.png",
  sarah: "/assets/sarah.png",
  david: "/assets/david.png",
  amanda: "/assets/amanda.png",
  chevron: "/assets/chevron.svg"
};

const navItems = ["How it Works", "Features", "Presets", "Pricing"];

const steps = [
  { title: "Paste your rough draft", text: "Drop in your notes, ideas, or an AI first pass. Messy is totally fine.", icon: "clipboard" },
  { title: "Pick a preset", text: "Choose a tone professional, persuasive, casual. The preset does the rest.", icon: "grid" },
  { title: "Get your rewrite", text: "Polyscribe rewrites it in seconds. Clear, human, and ready to post.", icon: "check" },
  { title: "Create your own presets", text: "Want a style that's fully yours? Build one and reuse it anytime.", icon: "package" }
];

const features = [
  { title: "Bypass AI Detection", text: "Passes GPTZero, Originality.ai, and Turnitin. Every single time.", image: assets.feature1 },
  { title: "Match Your Tone", text: "Formal, witty, blunt, warm - pick a preset and it sticks to it.", image: assets.feature2 },
  { title: "Keep Your Facts Straight", text: "Polyscribe rewrites your phrasing, never your claims.", image: assets.feature3 },
  { title: "Every Format Covered", text: "SEO articles, LinkedIn posts, newsletters, client reports all in one tool.", image: assets.feature4 },
  { title: "Unlimited Custom Presets", text: "Build as many writing styles as you need, and switch in one click.", image: assets.feature5 }
];

const presets = [
  { name: "Academic", desc: "Formal, objective, and structured perfectly for research papers.", rotate: "-rotate-2" },
  { name: "Persuasive", desc: "Compelling and convincing copy designed to drive action.", rotate: "rotate-1" },
  { name: "Urgent", desc: "High-energy, time sensitive phrasing to create FOMO.", rotate: "-rotate-1" },
  { name: "Enthusiastic", desc: "Upbeat and positive tone perfect for community announcements.", rotate: "rotate-2" },
  { name: "Professional", desc: "Clean, corporate, and respectful communication for B2B.", rotate: "rotate-1" },
  { name: "Playful", desc: "Fun and quirky vibes designed to maximize social media engagement.", rotate: "-rotate-2" },
  { name: "Empathetic", desc: "Warm and understanding language for customer support replies.", rotate: "rotate-2" },
  { name: "Visionary", desc: "Inspiring and forward looking text for leadership and strategy.", rotate: "-rotate-1" },
  { name: "Direct", desc: "No-nonsense, clear, and concise writing for quick updates.", rotate: "-rotate-2" },
  { name: "Storyteller", desc: "Engaging narrative style to captivate your audience's attention.", rotate: "rotate-1" },
  { name: "Humorous", desc: "Witty and lighthearted text to bring a smile to your readers.", rotate: "-rotate-1" },
  { name: "Assertive", desc: "Strong, confident wording for taking charge of the conversation.", rotate: "rotate-2" }
];

const testimonials = [
  [assets.amanda, "Amanda Carter", "@acarter_writes", "I was skeptical about AI writers, but Polyscribe is different. It doesn't sound robotic at all. It feels like having a professional editor on standby 24/7. My engagement on LinkedIn has literally doubled since I started using it.", "Apr 1, 2024"],
  [assets.john, "John Anderson", "@john.anderson", "Polyscribe has completely transformed my writing experience. With their user-friendly interface and top-notch rewriting features, I feel confident managing my content. I couldn't be happier with my decision to trust Polyscribe with my digital assets.", "Apr 2, 2024"],
  [assets.michael, "Michael Smith", "@msmith", "I've tried several writing tools in the past, but none compare to Polyscribe. The platform's security measures give me peace of mind knowing that my tone is preserved. The intuitive design makes it easy for me to navigate and manage my rewrites.", "Mar 24, 2024"],
  [assets.emily, "Emily Chen", "@emilywrites", "The custom presets are the missing piece. I can move from newsletter to LinkedIn post without losing the voice my audience recognizes.", "Mar 28, 2024"],
  [assets.sarah, "Sarah Jenkins", "@sarahcreates", "It keeps my rhythm but removes the rough edges. That is exactly what I wanted from an AI writing workflow.", "Apr 4, 2024"],
  [assets.david, "David Lee", "@davidlee", "Our team uses it for first-pass cleanup before anything goes out. It saves time without turning everything generic.", "Apr 6, 2024"]
];

const faqs = [
  "Does Polyscribe generate text from scratch?",
  "Will my content pass AI checkers?",
  "How secure is the text I upload?",
  "Are my citations and factual claims altered?",
  "Am I locked into a long-term contract?",
  "Why choose this over traditional paraphrasing tools?"
];

function SocialIcon({ src, className = "", brandClass = "bg-white" }: { src: string; className?: string; brandClass?: string }) {
  return (
    <div className={`absolute z-10 hidden h-11 w-11 items-center justify-center rounded-2xl shadow-md lg:flex ${brandClass} ${className}`}>
      <img src={src} alt="" className="h-6 w-6 object-contain" />
    </div>
  );
}

function Button({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex h-[53px] items-center justify-center rounded-xl px-8 text-base font-semibold transition ${
        dark ? "bg-[#111111] text-white hover:bg-black" : "bg-[#F5C518] text-[#111111] hover:bg-[#eebf15]"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white font-sans text-[#111111]">
      <header className="fixed inset-x-0 top-0 z-50 h-[92px] border-b border-white/60 bg-white/80 shadow-header backdrop-blur">
        <nav className="mx-auto flex h-full max-w-[1344px] items-center justify-between px-5 lg:px-0">
          <button className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-xl border border-soft lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="h-0.5 w-5 bg-[#111111]" />
            <span className="h-0.5 w-5 bg-[#111111]" />
            <span className="h-0.5 w-5 bg-[#111111]" />
          </button>
          <div className="hidden items-center gap-5 text-base lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="leading-relaxed">
                {item}
              </a>
            ))}
          </div>
          <a href="#" className="grid grid-cols-[41px_171px] items-center gap-[6px]" aria-label="Polyscribe home">
            <img src={assets.logo} alt="" className="h-[41px] w-[41px]" />
            <img src={assets.wordmark} alt="Polyscribe" className="h-[34px] w-[171px]" />
          </a>
          <div className="hidden h-[53px] items-center gap-4 lg:flex">
            <a className="flex h-full items-center rounded-xl border border-soft px-8 text-base font-semibold" href="#">
              Log in
            </a>
            <Button dark>Sign up</Button>
          </div>
          <Button dark className="h-11 px-4 text-sm lg:hidden">
            Sign up
          </Button>
        </nav>
        {menuOpen && (
          <div className="border-b border-soft bg-white px-5 py-4 lg:hidden">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-medium">
                {item}
              </a>
            ))}
            <a href="#" className="block py-3 text-sm font-medium">
              Log in
            </a>
          </div>
        )}
      </header>

      <div className="flex flex-col items-center pt-[121px]">
        <section className="w-full pb-[60px] pt-11">
          <div className="relative mx-4 min-h-[720px] overflow-visible rounded-3xl border border-gray-200 bg-[#F5F5F5] px-8 py-12 md:mx-6 sm:px-12 lg:min-h-[962px] lg:px-[121px] lg:py-[81px]">
            <div className="grid-surface grid-fade absolute inset-x-0 top-0 h-[799px] rounded-3xl opacity-50" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/[0.01] to-black/[0.04] shadow-[inset_0_0_100px_rgba(0,0,0,0.03)]" />
            <SocialIcon src={assets.x} className="left-[-22px] top-12" />
            <SocialIcon src={assets.gmail} className="left-[-22px] top-36" />
            <SocialIcon src={assets.medium} className="left-[10px] top-60" />
            <SocialIcon src={assets.youtube} className="right-[-22px] top-8" />
            <SocialIcon src={assets.linkedin} className="right-[-22px] top-36" brandClass="bg-[#0A66C2]" />
            <SocialIcon src={assets.reddit} className="bottom-24 right-[-22px]" brandClass="bg-[#FF4500]" />

            <div className="relative mx-auto flex max-w-[842px] flex-col items-center">
              <div className="mb-7 inline-flex items-center overflow-hidden rounded-full border border-gray-200 text-sm">
                <span className="flex items-center gap-1 bg-[#111111] px-3 py-1 text-white">
                  <img src={assets.sparkle} alt="" className="h-3 w-3 invert" />
                  New
                </span>
                <span className="bg-white px-3 py-1 text-[#111111]">Discover what's possible</span>
              </div>
              <h1 className="max-w-[824px] text-center text-5xl font-extrabold leading-[1.08] sm:text-[56px] lg:text-6xl">
                Polyscribe <span className="text-gray-400">turns</span> rough draft into your voice
              </h1>
              <p className="mt-7 max-w-[824px] text-center text-base font-medium leading-[1.6] text-[#6B6B6B] sm:text-lg">
                Polyscribe learns from writing that already sounds like you, then turns rough drafts into clear, polished content without losing your natural tone, rhythm, or personality.
              </p>

              <div className="mt-11 w-full rounded-2xl border border-white/20 bg-[#1e1e1e]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur sm:p-6">
                <div className="mb-4 text-sm font-semibold text-white">Powered by Polyscribe</div>
                <textarea maxLength={3000} className="h-[190px] w-full resize-none rounded-xl border-0 bg-white p-5 text-sm text-[#777] outline-none" placeholder="Paste something you want to rewrite" />
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button className="rounded-full border border-white/20 px-4 py-2 text-left text-sm text-white">Select Preset</button>
                  <span className="text-sm text-white/50">0/3,000</span>
                  <button className="rounded-full bg-[#F5C518] px-5 py-3 text-sm font-semibold text-[#111111]">Rewrite now for free</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <h2 className="max-w-[760px] text-4xl font-bold leading-[1.12] sm:text-5xl">
            Most AI rewrites your personality out. <span className="underline decoration-[#F5C518] decoration-wavy underline-offset-4">Polyscribe</span> keeps what makes your writing yours.
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CompareCard title="Generic AI" text="Polished, but no longer personal. Generic AI replaces your natural phrasing, flattens your rhythm, and leaves you editing the rewrite again." image={assets.genericAi} />
            <CompareCard title="Polyscribe" text="Clearer, smoother, and still unmistakably you. Polyscribe learns your phrasing, protects your meaning, and keeps your personality intact." image={assets.polyscribeAi} />
          </div>
        </Section>

        <DarkCta title="Streamline Your Writing Experience" text="Experience seamless AI content humanization with our user-friendly editor. Effortlessly bypass AI detectors and secure your brand's unique voice, all in one place." image={assets.streamline} />

        <Section id="how-it-works">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold leading-[1.12] sm:text-5xl">How Polyscribe can write just like you</h2>
                <p className="mt-5 max-w-[390px] text-base leading-relaxed text-[#6B6B6B]">Paste your draft, pick a style, and get writing that sounds like you, not a machine.</p>
              </div>
              <Button className="mt-8 w-fit">Start writing now</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map((step, index) => (
                <article key={step.title} className={`rounded-2xl p-6 ${index === 0 ? "bg-[#F5C518]" : "bg-[#EDEDEA]"}`}>
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200/60">
                      <StepIcon name={step.icon} />
                    </span>
                    <span className="text-sm font-medium text-gray-400">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mb-2 mt-8 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#444444]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="features" centered>
          <h2 className="text-4xl font-bold leading-[1.12] sm:text-5xl">
            Everything you need to
            <br />
            write like you
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-[#6B6B6B]">One tool for every format, every tone, and every platform without a trace of robotic phrasing.</p>
          <div className="mt-10">
            <div className="mb-4 grid gap-4 lg:grid-cols-2">
              {features.slice(0, 2).map((feature) => <FeatureCard key={feature.title} {...feature} tall />)}
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {features.slice(2).map((feature) => <FeatureCard key={feature.title} {...feature} />)}
            </div>
          </div>
        </Section>

        <DarkCta title="Ready to post in seconds" text="Just paste a rough idea and select your preset. Polyscribe cleans it up and rewrites it for you in your style." image={assets.ready} />

        <Section id="presets">
          <div>
            <h2 className="text-left text-4xl font-bold leading-[1.12]">A preset for every voice you need</h2>
            <p className="mt-5 max-w-[570px] text-left text-base leading-relaxed text-[#6B6B6B]">Every tone has a preset waiting. Pick one off the shelf, adjust it to fit, or build something completely your own.</p>
            <Button className="mb-10 mt-4">Start writing now</Button>
          </div>
          <div className="grid grid-cols-2 items-start gap-4 lg:grid-cols-4">
            {presets.map((preset) => (
              <article key={preset.name} className={`rounded-2xl bg-[#F5C518] p-5 shadow-sm ${preset.rotate}`}>
                <p className="mb-2 text-sm font-bold text-[#111111]">{preset.name}</p>
                <p className="text-xs leading-relaxed text-[#333333]">{preset.desc}</p>
              </article>
            ))}
          </div>
        </Section>

        <section className="w-full py-[60px] text-center">
          <div className="mx-4 rounded-3xl bg-[#1C1C1E] px-10 py-12 md:mx-6">
            <h2 className="text-4xl font-bold leading-[1.12] text-white sm:text-5xl">
              Hear from Our Valued
              <br />
              Community Members
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-white/60">Discover what our valued community members have to say about their experiences with Polyscribe.</p>
            <div className="mx-auto mt-11 grid max-w-[1138px] gap-5 lg:grid-cols-3">
              {testimonials.map(([avatar, name, handle, text, date]) => (
                <article key={name} className="flex min-h-[310px] flex-col rounded-2xl bg-[#272727] p-6 text-left text-white">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <strong className="text-sm">{name}</strong>
                      <div className="text-xs text-white/45">{handle}</div>
                    </div>
                    <img src={assets.x} alt="" className="ml-auto h-4 w-4 invert" />
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-white/80">{text}</p>
                  <span className="mt-auto text-xs text-white/45">{date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Section id="pricing" centered>
          <h2 className="text-4xl font-bold leading-[1.12] sm:text-5xl">Pick the plan that fits how you write</h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-[#6B6B6B]">Start free, scale up when you need more. No lock-in, no surprises.</p>
          <div className="mx-auto mt-10 grid max-w-[900px] gap-5 text-left lg:grid-cols-2">
            <PriceCard />
            <PriceCard dark />
          </div>
        </Section>

        <Section centered>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-4xl font-bold leading-[1.12] sm:text-5xl">Got questions?</h2>
            <p className="mt-5 text-base leading-relaxed text-[#4b5563]">Everything you need to know before using Polyscribe - how it works, your data, and how it fits into your workflow.</p>
            <div className="mt-11 text-left">
              {faqs.map((faq, index) => (
                <div key={faq} className="border-b border-[#e5e7eb] py-6">
                  <button className="flex w-full items-center justify-between gap-6 text-left text-lg font-medium" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    {faq}
                    <img src={assets.chevron} alt="" className={`h-5 w-5 transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="mt-4 text-sm leading-relaxed text-[#6B6B6B]">Polyscribe is designed around rewriting existing drafts while preserving your intent, tone, and factual claims. Review important work before publishing.</p>}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <footer className="w-full px-4 py-4">
          <div className="overflow-hidden rounded-3xl bg-[#F2F2F0] px-6 pt-10 pb-0 md:px-10">
            <div className="mb-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xs">
                <img src={assets.logo} alt="Polyscribe" className="mb-4 h-14 w-14" />
                <p className="text-lg font-medium leading-snug text-[#111111]">Polyscribe is your independent AI writing assistant.</p>
              </div>
              <div className="flex gap-16">
                <FooterLinks title="Explore" links={["Home", "Features", "Pricing"]} />
                <FooterLinks title="Legal" links={["Terms & Conditions", "Cookie Policy", "Privacy Policy"]} />
              </div>
              <p className="text-sm text-[#6B6B6B]">&copy; 2026 Polyscribe, Inc.</p>
            </div>
            <div className="leading-none">
              <p className="font-black text-[#111111]" style={{ fontSize: "clamp(72px, 12vw, 160px)", lineHeight: 0.9 }}>Polyscribe</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Section({ children, id, centered = false }: { children: React.ReactNode; id?: string; centered?: boolean }) {
  return (
    <section id={id} className={`w-full max-w-[1138px] px-4 py-[60px] md:px-0 ${centered ? "text-center" : ""}`}>
      {children}
    </section>
  );
}

function StepIcon({ name }: { name: string }) {
  const common = "h-5 w-5 text-[#111111]";
  if (name === "grid") return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>;
  if (name === "check") return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>;
  if (name === "package") return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>;
  return <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M8 11h8"/><path d="M8 16h5"/></svg>;
}

function FeatureCard({ title, text, image, tall = false }: { title: string; text: string; image: string; tall?: boolean }) {
  return (
    <article className={`relative overflow-hidden rounded-2xl bg-[#EDEDEA] p-6 text-left ${tall ? "min-h-[370px]" : "min-h-[300px]"}`}>
      <h3 className="mb-1 text-base font-bold">{title}</h3>
      <p className="mb-4 max-w-[310px] text-sm leading-relaxed text-[#6B6B6B]">{text}</p>
      <img src={image} alt="" className="absolute bottom-0 left-1/2 h-[190px] max-w-[86%] -translate-x-1/2 object-contain" />
    </article>
  );
}

function CompareCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <article>
      <h3 className="text-base font-bold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B]">{text}</p>
      <div className="mt-4 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-[#EDEDEA] p-5">
        <img src={image} alt="" className="max-h-[250px] w-full object-contain" />
      </div>
    </article>
  );
}

function DarkCta({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <section className="w-full py-[60px]">
      <div className="mx-4 grid overflow-hidden rounded-3xl bg-[#1C1C1E] px-10 py-12 md:mx-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-4xl font-bold leading-[1.12] text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-[590px] text-base leading-relaxed text-white/60">{text}</p>
          <Button className="mt-8">Start writing now</Button>
        </div>
        <img src={image} alt="" className="mt-8 h-[280px] w-full object-contain lg:mt-0" />
      </div>
    </section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m20 6-11 11-5-5" /></svg>;
}

function ChevronDown({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>;
}

function PriceCard({ dark = false }: { dark?: boolean }) {
  const items = dark ? ["Higher character limits per rewrite", "Dedicated support", "Team seats & shared billing", "Custom onboarding"] : ["Up to 3,000 characters per rewrite", "Unlimited custom presets", "Priority queue", "Cancel anytime"];
  if (dark) {
    return (
      <article className="rounded-2xl bg-[#0F0F0F] p-8 text-white">
        <h3 className="text-2xl font-bold">Custom</h3>
        <p className="mt-2 text-sm text-gray-400">Built for teams and heavy writers.</p>
        <hr className="my-4 border-gray-700" />
        <div className="text-5xl font-bold">Custom</div>
        <p className="mt-5 text-sm leading-relaxed text-gray-400">A tailored rewrite volume, character limit, and support plan for agencies, teams, or high-output writers.</p>
        <Button className="mt-6 w-full bg-[#E8E5DF] text-[#111111] hover:bg-[#dedad2]">Talk to us</Button>
        <p className="mb-3 mt-6 text-sm font-bold text-white">Everything in Flexible, plus:</p>
        <ul className="grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-white">
              <CheckIcon className="mt-0.5 text-green-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }
  return (
    <article className="rounded-2xl bg-[#EDEDEA] p-8">
      <h3 className="text-2xl font-bold">Flexible</h3>
      <p className="mt-2 text-sm text-[#6B6B6B]">Start at $20. Scale up anytime.</p>
      <hr className="my-4 border-gray-300" />
      <div className="text-5xl font-bold">$20 <span className="text-xl font-normal text-gray-500">/mo</span></div>
      <div className="relative mt-4">
        <label className="absolute -top-2.5 left-3 bg-[#EDEDEA] px-1 text-xs text-gray-500">Monthly credits</label>
        <select className="w-full appearance-none rounded-xl border border-gray-300 bg-[#EDEDEA] px-4 py-3 text-sm">
          <option>1,250 credits monthly</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-gray-500" />
      </div>
      <Button className="mt-4 w-full">Start writing now</Button>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-[#111111]">
            <CheckIcon className="mt-0.5 text-gray-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-[#111111]">{title}</p>
      <ul className="space-y-2 text-sm text-[#6B6B6B]">
        {links.map((link) => (
          <li key={link}><a href="#">{link}</a></li>
        ))}
      </ul>
    </div>
  );
}
