"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

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
  john: "/assets/john.png",
  michael: "/assets/michael.png",
  emily: "/assets/emily.png",
  sarah: "/assets/sarah.png",
  david: "/assets/david.png",
  amanda: "/assets/amanda.png",
  check: "/assets/check.svg",
  checkWhite: "/assets/check-white.svg",
  chevron: "/assets/chevron.svg",
  step1: "/assets/icon-step-1.svg",
  step2: "/assets/icon-step-2.svg",
  step3: "/assets/icon-step-3.svg",
  step4: "/assets/icon-step-4.svg"
};

const navItems = ["How it Works", "Features", "Presets", "Pricing"];

const steps = [
  ["Paste your rough draft", "Drop in your notes, ideas, or an AI first pass. Messy is totally fine."],
  ["Pick a preset", "Choose a tone professional, persuasive, casual. The preset does the rest."],
  ["Get your rewrite", "Polyscribe rewrites it in seconds. Clear, human, and ready to post."],
  ["Create your own presets", "Want a style that's fully yours? Build one and reuse it anytime."]
];

const features = [
  ["Bypass AI Detection", "Passes GPTZero, Originality.ai, and Turnitin. Every single time.", assets.feature1],
  ["Match Your Tone", "Formal, witty, blunt, warm - pick a preset and it sticks to it.", assets.feature2],
  ["Keep Your Facts Straight", "Polyscribe rewrites your phrasing, never your claims.", assets.feature3],
  ["Every Format Covered", "SEO articles, LinkedIn posts, newsletters, client reports all in one tool.", assets.feature4],
  ["Unlimited Custom Presets", "Build as many writing styles as you need, and switch in one click.", assets.ready]
];

const presets = [
  "Academic",
  "Persuasive",
  "Urgent",
  "Enthusiastic",
  "Professional",
  "Playful",
  "Empathetic",
  "Visionary",
  "Direct",
  "Storyteller",
  "Humorous",
  "Assertive"
];

const testimonials = [
  [assets.amanda, "Amanda Carter", "@acarter_writes", "I was skeptical about AI writers, but Polyscribe is different. It doesn't sound robotic at all. It feels like having a professional editor on standby 24/7.", "Apr 1, 2024"],
  [assets.john, "John Anderson", "@john.anderson", "Polyscribe has completely transformed my writing experience. With their user-friendly interface and top-notch rewriting features, I feel confident managing my content.", "Apr 2, 2024"],
  [assets.michael, "Michael Smith", "@msmith", "I've tried several writing tools in the past, but none compare to Polyscribe. The intuitive design makes it easy for me to navigate and manage my rewrites.", "Mar 24, 2024"]
];

const faqs = [
  "Does Polyscribe generate text from scratch?",
  "Will my content pass AI checkers?",
  "How secure is the text I upload?",
  "Are my citations and factual claims altered?",
  "Am I locked into a long-term contract?",
  "Why choose this over traditional paraphrasing tools?"
];

function AssetIcon({ src, className = "" }: { src: string; className?: string }) {
  return (
    <span className={`flex items-center justify-center rounded-2xl border border-[#eaeaea] bg-white shadow-soft ${className}`}>
      <img src={src} alt="" className="h-6 w-6 object-contain" />
    </span>
  );
}

function Button({ children, dark = false, className = "" }: { children: React.ReactNode; dark?: boolean; className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex h-[44px] items-center justify-center rounded-lg px-5 text-sm font-medium transition md:h-[53px] md:px-8 md:text-base ${
        dark ? "bg-ink text-white hover:bg-black" : "bg-yellow text-ink hover:bg-[#f2b900]"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      touchMultiplier: 1.2
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] lg:h-[92px] border-b border-white/60 bg-white/80 shadow-header backdrop-blur">
        <nav className="mx-auto flex h-full max-w-[1344px] items-center justify-between px-4 sm:px-6 xl:px-0">
          <button className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-lg border border-soft lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
          <div className="hidden items-center gap-5 text-base lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="leading-relaxed">
                {item}
              </a>
            ))}
          </div>
          <a href="#" className="grid grid-cols-[32px_134px] items-center gap-[5px] md:grid-cols-[41px_171px] md:gap-[6px]" aria-label="Polyscribe home">
            <img src={assets.logo} alt="" className="h-8 w-8 md:h-[41px] md:w-[41px]" />
            <img src={assets.wordmark} alt="Polyscribe" className="h-[26px] w-[134px] md:h-[34px] md:w-[171px]" />
          </a>
          <div className="hidden h-[53px] items-center gap-4 lg:flex">
            <a className="flex h-full items-center rounded-lg border border-soft px-8 text-base font-medium" href="#">
              Log in
            </a>
            <Button dark>Sign up</Button>
          </div>
          <Button dark className="hidden sm:inline-flex lg:hidden">
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

      <div className="mx-auto flex w-full max-w-[1318px] flex-col items-center px-4 pt-[88px] sm:px-6 lg:pt-[121px] xl:px-0">
        <section className="w-full max-w-[1138px] pb-[60px] pt-11">
          <div className="relative mx-auto min-h-[640px] w-full max-w-[1080px] overflow-hidden rounded-[20px] border border-soft bg-white px-5 py-12 sm:min-h-[760px] sm:px-10 sm:py-14 lg:h-[962px] lg:px-[121px] lg:py-[81px]">
            <div className="grid-surface grid-fade absolute inset-x-0 top-0 h-[520px] opacity-60 lg:h-[799px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/[0.01] to-black/[0.04] shadow-[inset_0_0_100px_rgba(0,0,0,0.03)]" />
            <div className="relative mx-auto flex w-full max-w-[842px] flex-col items-center">
              <AssetIcon src={assets.x} className="absolute left-[-26px] top-[33px] hidden h-[58px] w-[58px] rotate-[-5deg] lg:flex" />
              <AssetIcon src={assets.gmail} className="absolute left-[-52px] top-[180px] hidden h-[58px] w-[58px] rotate-[-5deg] lg:flex" />
              <AssetIcon src={assets.medium} className="absolute bottom-[124px] left-[18px] hidden h-[58px] w-[58px] rotate-[-14deg] lg:flex" />
              <AssetIcon src={assets.youtube} className="absolute right-[58px] top-0 hidden h-[58px] w-[58px] rotate-[14deg] lg:flex" />
              <AssetIcon src={assets.linkedin} className="absolute right-[-33px] top-[141px] hidden h-[58px] w-[58px] rotate-[5deg] lg:flex" />
              <AssetIcon src={assets.reddit} className="absolute bottom-[126px] right-[12px] hidden h-[58px] w-[58px] rotate-[9deg] lg:flex" />

              <div className="mb-7 flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] py-[5px] pl-[5px] pr-[17px]">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-sm shadow-[0_2px_2px_rgba(0,0,0,0.05)]">
                  <img src={assets.sparkle} alt="" className="h-3 w-3" />
                  New
                </span>
                <span className="text-sm font-medium text-muted">Discover what's possible</span>
              </div>
              <h1 className="max-w-[824px] text-center text-[38px] font-semibold leading-[1.12] tracking-[-0.8px] sm:text-[52px] lg:text-[72px] lg:leading-[84px] lg:tracking-[-2px]">
                Polyscribe <span className="turn-gradient">turns</span> rough draft into your voice
              </h1>
              <p className="mt-6 max-w-[824px] text-center text-[15px] font-medium leading-[1.6] text-muted sm:mt-7 sm:text-lg">
                Polyscribe learns from writing that already sounds like you, then turns rough drafts into clear, polished content without losing your natural tone, rhythm, or personality.
              </p>

              <div className="mt-9 w-full rounded-[16px] border border-white/20 sm:mt-11 bg-[#1e1e1e]/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.12)] backdrop-blur sm:p-6">
                <div className="mb-4 text-sm font-semibold text-white">Powered by Polyscribe</div>
                <textarea className="h-[158px] w-full resize-none rounded-[10px] sm:h-[190px] border-0 bg-white p-5 text-sm text-[#777] outline-none" placeholder="Paste something you want to rewrite" />
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button className="rounded-full border border-white/20 px-4 py-2 text-left text-sm text-white">Select Preset</button>
                  <span className="text-sm text-white/50">0/1,000</span>
                  <button className="rounded-full bg-yellow px-5 py-3 text-sm font-medium text-ink">Rewrite now for free</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section>
          <h2 className="max-w-[760px] text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[44px] lg:text-[56px] lg:tracking-[-1.5px]">
            Most AI rewrites your personality out. <span className="underline decoration-[#ffbd2e] decoration-wavy underline-offset-4">Polyscribe</span> keeps what makes your writing yours.
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <CompareCard title="Generic AI" text="Polished, but no longer personal. Generic AI replaces your natural phrasing, flattens your rhythm, and leaves you editing the rewrite again." image={assets.genericAi} />
            <CompareCard title="Polyscribe" text="Clearer, smoother, and still unmistakably you. Polyscribe learns your phrasing, protects your meaning, and keeps your personality intact." image={assets.polyscribeAi} />
          </div>
        </Section>

        <DarkCta overline="Experience" title="Streamline Your Writing Experience" text="Experience seamless AI content humanization with our user-friendly editor. Effortlessly secure your brand's unique voice, all in one place." image={assets.streamline} />

        <Section id="how-it-works">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[48px] lg:text-[56px] lg:tracking-[-1.5px]">How Polyscribe can write just like you</h2>
              <p className="mt-5 max-w-[390px] text-base leading-relaxed text-muted">Paste your draft, pick a style, and get writing that sounds like you, not a machine.</p>
              <Button className="mt-8">Start writing now</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {steps.map(([title, text], index) => (
                <article key={title} className={`min-h-[172px] rounded-2xl p-5 sm:min-h-[190px] sm:p-6 ${index === 0 ? "bg-yellow" : "bg-soft"}`}>
                  <div className="flex items-center justify-between">
                    <img src={[assets.step1, assets.step2, assets.step3, assets.step4][index]} alt="" className="h-6 w-6" />
                    <span className={`text-lg font-semibold ${index === 0 ? "text-ink" : "text-[#aaa]"}`}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-12 text-base font-semibold sm:mt-16">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="features" centered>
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[48px] lg:text-[56px] lg:tracking-[-1.5px]">
            Everything you need to
            <br />
            write like you
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-base leading-relaxed text-muted">One tool for every format, every tone, and every platform without a trace of robotic phrasing.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {features.map(([title, text, image], index) => (
              <article key={title} className={`relative min-h-[276px] overflow-hidden rounded-2xl bg-soft p-5 text-left sm:min-h-[300px] sm:p-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-2 max-w-[310px] text-sm leading-relaxed text-muted">{text}</p>
                <img src={image} alt="" className="absolute bottom-0 left-1/2 h-[164px] max-w-none -translate-x-1/2 object-contain sm:h-[190px]" />
              </article>
            ))}
          </div>
        </Section>

        <DarkCta title="Ready to post in seconds" text="Turn drafts, notes, and half-finished thoughts into publish-ready writing that still feels like it came from you." image={assets.ready} />

        <Section id="presets">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[48px] lg:text-[56px] lg:tracking-[-1.5px]">
                A preset for every voice
                <br />
                you need
              </h2>
              <p className="mt-5 max-w-[570px] text-base leading-relaxed text-muted">Every tone has a preset waiting. Pick one off the shelf, adjust it to fit, or build something completely your own.</p>
            </div>
            <Button>Start writing now</Button>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {presets.map((preset, index) => (
              <article key={preset} className={`min-h-[132px] rounded-xl bg-yellow p-4 sm:min-h-[142px] sm:p-5 shadow-[0_8px_18px_rgba(0,0,0,0.06)] ${["-rotate-1", "rotate-1", "-rotate-1", "rotate-2"][index % 4]}`}>
                <h3 className="text-sm font-bold">{preset}</h3>
                <p className="mt-3 text-xs leading-relaxed text-black/70">Tailored phrasing for {preset.toLowerCase()} writing that stays clear and human.</p>
              </article>
            ))}
          </div>
        </Section>

        <Section centered>
          <div className="rounded-[20px] bg-[#1e1e1e] px-5 py-12 sm:px-10 lg:px-16 lg:py-[72px]">
            <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-1px] text-white sm:text-[48px] lg:text-[56px]">
              Hear from Our Valued
              <br />
              Community Members
            </h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-white/60">Discover what our valued community members have to say about their experiences with Polyscribe.</p>
            <div className="mt-10 grid gap-5 lg:mt-11 lg:grid-cols-3">
              {testimonials.map(([avatar, name, handle, text, date]) => (
                <article key={name} className="flex min-h-[290px] flex-col rounded-[14px] bg-[#272727] p-6 text-left text-white">
                  <div className="flex items-center gap-3">
                    <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                    <div>
                      <strong className="text-sm">{name}</strong>
                      <div className="text-xs text-white/45">{handle}</div>
                    </div>
                    <span className="ml-auto text-sm font-bold">X</span>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-white/80">{text}</p>
                  <span className="mt-auto text-xs text-white/45">{date}</span>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section id="pricing" centered>
          <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[48px] lg:text-[56px] lg:tracking-[-1.5px]">Pick the plan that fits how you write</h2>
          <p className="mx-auto mt-5 max-w-[520px] text-base leading-relaxed text-muted">Start free, scale up when you need more. No lock-in, no surprises.</p>
          <div className="mx-auto mt-9 grid max-w-[900px] gap-5 text-left md:grid-cols-2 lg:mt-10">
            <PriceCard />
            <PriceCard dark />
          </div>
        </Section>

        <Section centered>
          <div className="mx-auto max-w-[720px]">
            <h2 className="text-[30px] font-semibold leading-[1.12] tracking-[-0.7px] sm:text-[48px] lg:text-[56px] lg:tracking-[-1.5px]">Got questions?</h2>
            <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-[#4b5563]">Everything you need to know before using EchoWriting - how it works, your data, and how it fits into your workflow.</p>
            <div className="mt-10 text-left lg:mt-11">
              {faqs.map((faq, index) => (
                <div key={faq} className="border-b border-[#e5e7eb] py-5 lg:py-6">
                  <button className="flex w-full items-center justify-between gap-5 text-left text-base font-medium tracking-[-0.2px] sm:text-lg sm:tracking-[-0.3px]" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    {faq}
                    <img src={assets.chevron} alt="" className={`h-5 w-5 transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === index && <p className="mt-4 text-sm leading-relaxed text-muted">Polyscribe is designed around rewriting existing drafts while preserving your intent, tone, and factual claims. Review important work before publishing.</p>}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <footer className="w-full px-4 pb-8 pt-8 lg:pb-10 lg:pt-10">
          <div className="footer-grid mx-auto max-w-[860px] overflow-hidden rounded-[22px] bg-soft lg:rounded-[24px]">
            <div className="grid gap-8 px-8 pt-12 pb-5 sm:grid-cols-[1.7fr_1fr_1fr_1.2fr] sm:px-[78px] sm:pt-[52px] sm:pb-5">
              <div>
                <img src={assets.logoLarge} alt="" className="h-[43px] w-[43px]" />
                <p className="mt-3 max-w-[190px] text-[18px] font-medium leading-[1.06] tracking-[-0.45px]">Polyscribe is your independent AI writing assistant.</p>
              </div>
              <FooterLinks title="Explore" links={["Home", "Features", "Pricing"]} />
              <FooterLinks title="Legal" links={["Terms & Conditions", "Cookie Policy", "Privacy Policy"]} />
              <p className="text-[10px] text-[#878787]">&copy; 2026 Polyscribe, Inc.</p>
            </div>
            <div className="pb-4 text-center text-[58px] font-semibold leading-[0.9] tracking-[-2px] sm:text-[128px] sm:tracking-[-5px] lg:text-[128px]">Polyscribe</div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function Section({ children, id, centered = false }: { children: React.ReactNode; id?: string; centered?: boolean }) {
  return (
    <section id={id} className={`w-full max-w-[1138px] py-10 lg:py-[56px] ${centered ? "text-center" : ""}`}>
      {children}
    </section>
  );
}

function CompareCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <article>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
      <div className="mt-4 flex min-h-[220px] items-center justify-center overflow-hidden rounded-2xl bg-soft p-5 sm:min-h-[280px]">
        <img src={image} alt="" className="max-h-[210px] w-full object-contain sm:max-h-[250px]" />
      </div>
    </article>
  );
}

function DarkCta({ overline, title, text, image }: { overline?: string; title: string; text: string; image: string }) {
  return (
    <section className="w-full max-w-[1138px] py-10 lg:py-[56px]">
      <div className="grid overflow-hidden rounded-[20px] bg-[#1e1e1e] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
        <div>
          {overline && <div className="mb-3 text-sm font-semibold text-white/80">{overline}</div>}
          <h2 className="text-[32px] font-semibold leading-[1.12] tracking-[-1px] text-white sm:text-[48px] lg:text-[56px]">{title}</h2>
          <p className="mt-5 max-w-[590px] text-base leading-relaxed text-white/60">{text}</p>
          <Button className="mt-8">Start writing now</Button>
        </div>
        <img src={image} alt="" className="mt-8 h-[220px] w-full object-contain sm:h-[280px] lg:mt-0" />
      </div>
    </section>
  );
}

function PriceCard({ dark = false }: { dark?: boolean }) {
  const items = dark ? ["Higher character limits per rewrite", "Dedicated support", "Team seats & shared billing", "Custom onboarding"] : ["Up to 3,000 characters per rewrite", "Unlimited custom presets", "Priority queue", "Cancel anytime"];
  return (
    <article className={`rounded-[20px] p-6 sm:p-8 lg:p-10 ${dark ? "bg-[#1e1e1e] text-white" : "bg-soft"}`}>
      <h3 className="text-xl font-semibold">{dark ? "Custom" : "Flexible"}</h3>
      {dark && <div className="my-4 border-t border-white/15" />}
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/60" : "text-muted"}`}>{dark ? "A tailored rewrite volume, character limit, and support plan for agencies, teams, or high-output writers." : "Start at $20. Scale up anytime."}</p>
      <div className="mt-5 text-5xl font-semibold">{dark ? "Custom" : "$20"} {!dark && <span className="text-lg font-normal text-muted">/mo</span>}</div>
      {!dark && (
        <label className="mt-6 block">
          <span className="mb-2 block text-xs text-muted">Monthly credits</span>
          <select className="w-full rounded-lg border border-[#e5e4df] bg-white px-4 py-3 text-sm">
            <option>1,250 credits monthly</option>
          </select>
        </label>
      )}
      <Button dark={dark ? false : undefined} className="mt-6 w-full">
        {dark ? "Talk to us" : "Start writing now"}
      </Button>
      {dark && <p className="mt-6 text-sm font-semibold">Everything in Flexible, plus:</p>}
      <ul className="mt-6 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <img src={dark ? assets.checkWhite : assets.check} alt="" className="mt-0.5 h-4 w-4" />
            <span className={dark ? "text-white" : "text-ink"}>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-[11px] font-medium">{title}</h3>
      <div className="mt-3 grid gap-2">
        {links.map((link) => (
          <a key={link} href="#" className="text-[11px] text-[#878787]">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}