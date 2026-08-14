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
  streamline: "/assets/banner-keyboard-background.png",
  ready: "/assets/ready-post-banner.png",
  feature1: "/assets/feature-bypass-ai.png",
  feature2: "/assets/feature-match-tone.png",
  feature3: "/assets/feature-facts.png",
  feature4: "/assets/feature-formats.png",
  feature5: "/assets/feature-presets.png",
  john: "/assets/john.png",
  michael: "/assets/michael.png",
  emily: "/assets/emily.png",
  sarah: "/assets/sarah.png",
  david: "/assets/david.png",
  amanda: "/assets/amanda.png",
  check: "/assets/check.svg",
  checkWhite: "/assets/check-white.svg",
  chevron: "/assets/chevron.svg",
  step1: "/assets/how-step-1.svg",
  step2: "/assets/how-step-2.svg",
  step3: "/assets/how-step-3.svg",
  step4: "/assets/how-step-4.svg"
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
  ["Unlimited Custom Presets", "Build as many writing styles as you need, and switch in one click.", assets.feature5]
];

const presets = [
  { name: "Academic", desc: "Formal, objective, and structured perfectly for research papers.", rotate: "-rotate-[4deg]", offset: "lg:translate-y-0" },
  { name: "Persuasive", desc: "Compelling and convincing copy designed to drive action.", rotate: "rotate-[3deg]", offset: "lg:translate-y-5" },
  { name: "Urgent", desc: "High-energy, time sensitive phrasing to create FOMO.", rotate: "-rotate-[1deg]", offset: "lg:-translate-y-2" },
  { name: "Enthusiastic", desc: "Upbeat and positive tone perfect for community announcements.", rotate: "rotate-[5deg]", offset: "lg:translate-y-6" },
  { name: "Professional", desc: "Clean, corporate, and respectful communication for B2B.", rotate: "-rotate-[2deg]", offset: "lg:-translate-y-3" },
  { name: "Playful", desc: "Fun and quirky vibes designed to maximize social media engagement.", rotate: "rotate-[7deg]", offset: "lg:translate-y-4" },
  { name: "Empathetic", desc: "Warm and understanding language for customer support replies.", rotate: "-rotate-[5deg]", offset: "lg:-translate-y-4" },
  { name: "Visionary", desc: "Inspiring and forward looking text for leadership and strategy.", rotate: "rotate-[4deg]", offset: "lg:translate-y-2" },
  { name: "Direct", desc: "No-nonsense, clear, and concise writing for quick updates.", rotate: "-rotate-[4deg]", offset: "lg:-translate-y-2" },
  { name: "Storyteller", desc: "Engaging narrative style to captivate your audience's attention.", rotate: "rotate-[2deg]", offset: "lg:translate-y-6" },
  { name: "Humorous", desc: "Witty and lighthearted text to bring a smile to your readers.", rotate: "-rotate-[3deg]", offset: "lg:-translate-y-5" },
  { name: "Assertive", desc: "Strong, confident wording for taking charge of the conversation.", rotate: "rotate-[5deg]", offset: "lg:translate-y-3" }
];


const presetLayouts = [
  { left: 15, top: 7, width: 243, height: 228, rotate: -3.76 },
  { left: 301, top: 23, width: 239, height: 225, rotate: 2.82 },
  { left: 588, top: 3, width: 235, height: 221, rotate: -1.88 },
  { left: 867, top: 27, width: 246, height: 232, rotate: 4.7 },
  { left: 28, top: 244, width: 239, height: 225, rotate: -2.82 },
  { left: 285, top: 260, width: 250, height: 235, rotate: 5.64 },
  { left: 594, top: 226, width: 246, height: 232, rotate: -4.7 },
  { left: 880, top: 257, width: 243, height: 228, rotate: 3.76 },
  { left: 4, top: 478, width: 243, height: 228, rotate: -3.76 },
  { left: 315, top: 502, width: 235, height: 221, rotate: 1.88 },
  { left: 575, top: 465, width: 239, height: 225, rotate: -2.82 },
  { left: 855, top: 490, width: 246, height: 232, rotate: 4.7 }
];
const testimonials = [
  [assets.amanda, "Amanda Carter", "@acarter_writes", "I was skeptical about AI writers, but Polyscribe is different. It doesn't sound robotic at all. It feels like having a professional editor on standby 24/7. My engagement on LinkedIn has literally doubled since I started using it.", "Apr 1, 2024"],
  [assets.john, "John Anderson", "@john.anderson", "Polyscribe has completely transformed my writing experience. With their user-friendly interface and top-notch rewriting features, I feel confident managing my content. I couldn't be happier with my decision to trust Polyscribe with my digital assets.", "Apr 1, 2024"],
  [assets.michael, "Michael Smith", "@msmith", "I've tried several writing tools in the past, but none compare to Polyscribe. The platform's security measures give me peace of mind knowing that my tone is preserved. The intuitive design makes it easy for me to navigate and manage my rewrites.", "Mar 24, 2024"]
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
      duration: 1.35,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.0,
      anchors: {
        offset: -92,
        duration: 1.55,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }
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
          <div className="relative mx-auto min-h-[668px] w-full max-w-[1080px] overflow-hidden rounded-[20px] border border-[#f3f3f3] bg-white px-5 py-12 shadow-[inset_0_0_100px_rgba(0,0,0,0.03)] sm:min-h-[846px] sm:px-10 sm:py-14 lg:h-[962px] lg:px-[121px] lg:py-[81px]">
            <div className="hero-grid pointer-events-none absolute inset-x-0 top-0 h-[799px] opacity-100" />
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-black/[0.01] to-black/[0.04] backdrop-blur-[1px]" />
            <div className="relative z-10 mx-auto flex w-full max-w-[842px] flex-col items-center">
              <AssetIcon src={assets.x} className="absolute left-[-26px] top-[32px] hidden h-[58px] w-[58px] rotate-[-5deg] lg:flex" />
              <AssetIcon src={assets.gmail} className="absolute left-[-52px] top-[180px] hidden h-[58px] w-[58px] rotate-[-5deg] lg:flex" />
              <AssetIcon src={assets.medium} className="absolute left-[18px] top-[271px] hidden h-[58px] w-[58px] rotate-[-14deg] lg:flex" />
              <AssetIcon src={assets.youtube} className="absolute right-[58px] top-[1px] hidden h-[58px] w-[58px] rotate-[14deg] lg:flex" />
              <AssetIcon src={assets.linkedin} className="absolute right-[-33px] top-[141px] hidden h-[58px] w-[58px] rotate-[5deg] lg:flex" />
              <AssetIcon src={assets.reddit} className="absolute right-[12px] top-[274px] hidden h-[58px] w-[58px] rotate-[9deg] lg:flex" />

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

              <div className="relative z-20 mt-11 flex min-h-[420px] w-full flex-col justify-between rounded-[24px] border border-white/[0.12] bg-[rgba(30,30,30,0.9)] px-[29px] py-[25px] shadow-[0_30px_60px_rgba(0,0,0,0.30),0_0_40px_rgba(0,0,0,0.10)] backdrop-blur-[10px]">
                <div className="inline-flex items-center gap-1.5 pb-[4px] pt-[4px] text-sm font-medium tracking-[0.3px] text-white/90">
                  <span className="text-sm leading-none text-[#F5C842]">{"\u2726"}</span>
                  <span>Powered by Polyscribe</span>
                </div>
                <div className="relative h-[318px] overflow-hidden rounded-[16px] bg-white px-5 py-4 shadow-[0_8px_12px_rgba(0,0,0,0.15)]">
                  <textarea maxLength={3000} className="h-full w-full resize-none border-0 bg-transparent pb-24 text-base text-[#777] outline-none placeholder:text-[rgba(0,0,0,0.5)]" placeholder="Paste something you want to rewrite" />
                  <div className="absolute inset-x-5 bottom-4 flex items-center gap-4 max-sm:flex-col max-sm:items-stretch">
                    <button className="inline-flex h-[38px] shrink-0 items-center gap-1.5 rounded-[8px] border border-[#eaeaea] bg-[#f5f5f5] px-[15px] text-sm font-normal text-[#444]">
                      <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11.8 3.4 16.6 8.2" />
                        <path d="M4 16l3.1-.7 8.4-8.4a1.7 1.7 0 0 0-2.4-2.4L4.7 12.9 4 16Z" />
                      </svg>
                      <span>Select Preset</span>
                      <img src={assets.chevron} alt="" className="h-3 w-3 opacity-60" />
                    </button>
                    <div className="ml-auto flex items-center gap-4 max-sm:ml-0 max-sm:justify-between">
                      <span className="whitespace-nowrap text-xs font-normal text-[#888]">0/3,000</span>
                      <button className="inline-flex h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-[#e5e5e5] px-5 text-base font-medium text-[#a3a3a3]" disabled>
                        Rewrite now for free {"\u2192"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1138px] py-[60px]">
          <h2 className="max-w-[848px] text-[34px] font-semibold leading-[1.18] tracking-[-0.7px] text-black/60 sm:text-[42px] lg:text-[48px] lg:leading-[70.4px] lg:tracking-[-1px]">
            Most AI rewrites your personality out. <span className="text-ink"><span className="relative inline-block"><span className="relative z-10">Polyscribe</span><svg className="absolute -bottom-1 left-0 z-0 h-3 w-full overflow-visible lg:-bottom-0.5" viewBox="0 0 260 16" preserveAspectRatio="none" aria-hidden="true"><path d="M4 11 C72 3 170 2 256 10" fill="none" stroke="#ffbd2e" strokeWidth="6" strokeLinecap="round" /></svg></span> keeps what makes your writing yours.</span>
          </h2>
          <div className="mt-9 grid gap-10 lg:grid-cols-[496px_496px] lg:gap-[86px]">
            <CompareCard title="Generic AI" text="Polished, but no longer personal. Generic AI replaces your natural phrasing, flattens your rhythm, and leaves you editing the rewrite again." image={assets.genericAi} />
            <CompareCard title="Polyscribe" text="Clearer, smoother, and still unmistakably you. Polyscribe learns your phrasing, protects your meaning, and keeps your personality intact." image={assets.polyscribeAi} />
          </div>
        </section>
        <DarkCta title="Streamline Your Writing Experience" text="Experience seamless AI content humanization with our user-friendly editor. Effortlessly bypass AI detectors and secure your brand's unique voice, all in one place." image={assets.streamline} featuredImage />

        <section id="how-it-works" className="flex w-full max-w-[1138px] flex-col items-start gap-10 py-[60px] lg:flex-row lg:justify-between lg:gap-0">
          <div className="flex w-full flex-col justify-between lg:h-[539px] lg:w-[467px]">
            <div className="flex flex-col gap-3">
              <h2 className="max-w-[467px] text-[38px] font-semibold leading-[1.08] tracking-[-0.8px] text-ink sm:text-[48px] lg:leading-[52px] lg:tracking-[-1px]">How Polyscribe can write just like you</h2>
              <p className="max-w-[467px] text-base leading-[26px] text-[#7a7a72]">Paste your draft, pick a style, and get writing that sounds like you not a machine.</p>
            </div>
            <Button className="mt-8 h-[53px] w-fit rounded-[8px] bg-[#ffc458] px-8 py-4 text-base font-medium text-ink shadow-[0_10px_10px_rgba(253,188,69,0.2)] hover:bg-[#ffc458] lg:mt-0">Start writing now</Button>
          </div>
          <div className="grid w-full gap-[19.452px] sm:grid-cols-2 lg:w-[570px]">
            {steps.map(([title, text], index) => (
              <article key={title} className={`flex h-[260px] flex-col justify-between rounded-[8px] p-5 ${index === 0 ? "bg-[#ffe566] shadow-[3.242px_3.242px_4.863px_rgba(26,26,26,0.1)]" : "bg-[#f0ede8]"}`}>
                <div className="flex items-center justify-between">
                  <img src={[assets.step1, assets.step2, assets.step3, assets.step4][index]} alt="" className="h-[45px] w-[45px]" />
                  <span className={`whitespace-nowrap text-sm font-semibold ${index === 0 ? "text-ink/60" : "text-[#7a7a72]"}`}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={`flex flex-col ${index === 0 ? "gap-3 text-ink" : "gap-[6.484px]"}`}>
                  <h3 className="text-lg font-semibold leading-normal text-ink">{title}</h3>
                  <p className={`text-base leading-normal ${index === 0 ? "text-ink/85" : "text-[#7a7a72]"}`}>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="features" className="flex w-full max-w-[1138px] flex-col items-center gap-11 py-[60px] text-center">
          <div className="flex flex-col items-center gap-4">
            <h2 className="max-w-[642px] text-[38px] font-semibold leading-tight text-ink sm:text-[48px]">
              Everything you need to
              <br />
              write like you
            </h2>
            <p className="max-w-[508px] whitespace-pre-wrap text-base leading-6 text-[#555]">One tool for every format, every tone, and every platform  without a trace of robotic phrasing.</p>
          </div>
          <div className="flex w-full max-w-[1078px] flex-col gap-5 text-left">
            <div className="grid gap-5 lg:grid-cols-2">
              {features.slice(0, 2).map(([title, text, image], index) => (
                <FeatureCard key={title} title={title} text={text} image={image} large imageClassName={index === 0 ? "left-[51px] top-[118px] h-[246px] w-[428px]" : "left-[80px] top-[113px] h-[271px] w-[370px]"} />
              ))}
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {features.slice(2).map(([title, text, image], index) => (
                <FeatureCard key={title} title={title} text={text} image={image} imageClassName={["left-[67px] top-[122px] h-[258px] w-[220px]", "left-[64px] top-[123px] h-[257px] w-[192px]", "left-[68px] top-[123px] h-[257px] w-[189px]"][index]} />
              ))}
            </div>
          </div>
        </section>
        <DarkCta title="Ready to post in seconds" text="Just paste a rough idea and select your preset. EchoWriting cleans it up and rewrites it for you in your style." image={assets.ready} />

        <section id="presets" className="flex w-full max-w-[1138px] flex-col items-start gap-11 py-[60px]">
          <div className="flex flex-col items-start gap-8">
            <div className="flex max-w-[580px] flex-col gap-3">
              <h2 className="max-w-[580px] text-[42px] font-semibold leading-[1.22] text-ink sm:text-[48px] lg:min-h-[136px]">
                A preset for every voice
                <br />
                you need
              </h2>
              <p className="max-w-[580px] whitespace-pre-wrap text-base leading-6 text-[#555]">Every tone has a preset waiting. Pick one off the shelf,  adjust it to fit, or build something completely your own</p>
            </div>
            <Button className="h-[53px] w-fit rounded-[8px] bg-[#ffc458] px-8 py-4 text-base font-medium text-ink shadow-[0_10px_10px_rgba(253,188,69,0.2)] hover:bg-[#ffc458]">Start writing now</Button>
          </div>

          <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:hidden">
            {presets.map((preset) => (
              <PresetCard key={preset.name} preset={preset} />
            ))}
          </div>

          <div className="relative hidden h-[713px] w-full lg:block">
            {presets.map((preset, index) => {
              const layout = presetLayouts[index];
              return <PresetCard key={preset.name} preset={preset} style={{ left: layout.left, top: layout.top, width: layout.width, height: layout.height, transform: `rotate(${layout.rotate}deg)` }} desktop />;
            })}
          </div>
        </section>
        <Section centered>
          <div className="relative overflow-hidden rounded-[24px] bg-[#171717] px-5 pb-[150px] pt-[92px] sm:px-10 lg:min-h-[760px] lg:px-16">
            <h2 className="mx-auto max-w-[760px] text-[36px] font-semibold leading-[1.16] tracking-[-1px] text-white sm:text-[52px] lg:text-[58px] lg:tracking-[-1.6px]">
              Hear from Our Valued
              <br />
              Community Members
            </h2>
            <p className="mx-auto mt-7 max-w-[760px] text-[18px] font-medium leading-[1.5] tracking-[-0.2px] text-white/55">
              Discover what our valued community members have to say about their experiences with Polyscribe. Read firsthand testimonials that highlight the benefits and satisfaction our platform brings to users.
            </p>
            <div className="relative mx-auto mt-[86px] max-w-[940px] overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[112px] bg-gradient-to-r from-[#171717]/90 via-[#171717]/48 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[112px] bg-gradient-to-l from-[#171717]/90 via-[#171717]/48 to-transparent" />
              <div className="flex w-max gap-6 lg:-translate-x-[112px]">
                {testimonials.slice(0, 3).map(([avatar, name, handle, text, date]) => (
                  <article key={name} className="flex h-[372px] w-[372px] shrink-0 flex-col rounded-[16px] border border-white/8 bg-[#202020] px-8 pb-5 pt-8 text-left text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center gap-4">
                      <img src={avatar} alt="" className="h-11 w-11 rounded-full border border-white/20 object-cover" />
                      <div>
                        <strong className="block text-[18px] font-medium leading-tight text-white/82">{name}</strong>
                        <div className="mt-1 text-[15px] font-medium text-white/35">{handle}</div>
                      </div>
                      <img src={assets.x} alt="" className="ml-auto h-5 w-5 opacity-35 invert" />
                    </div>
                    <p className="mt-7 max-h-[226px] overflow-hidden text-[18px] font-medium leading-[1.34] tracking-[-0.2px] text-white/82">{text}</p>
                    <span className="mt-auto pt-4 text-[15px] font-medium text-white/40">{date}</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section id="pricing" centered className="max-w-[1492px]">
          <h2 className="mx-auto max-w-[1050px] text-[38px] font-semibold leading-[1.12] tracking-[-1px] text-[#111111] sm:text-[54px] lg:text-[64px] lg:tracking-[-1.8px]">Pick the plan that fits how you write</h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[20px] font-medium leading-relaxed tracking-[-0.2px] text-[#8A8884]">Start free, scale up when you need more. No lock-in, no surprises.</p>
          <div className="mx-auto mt-[70px] grid max-w-[1492px] gap-12 text-left md:grid-cols-2">
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

        <footer className="w-full pb-8 pt-11 lg:pb-10 lg:pt-[60px]">
          <div className="overflow-hidden rounded-[28px] bg-soft lg:rounded-[40px]">
            <div className="grid gap-8 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-[120px] lg:py-20">
              <div>
                <img src={assets.logoLarge} alt="" className="h-[69px] w-[69px]" />
                <p className="mt-3 max-w-[300px] text-2xl font-medium leading-[1.3] tracking-[-0.5px]">Polyscribe is your independent AI writing assistant.</p>
              </div>
              <FooterLinks title="Explore" links={["Home", "Features", "Pricing"]} />
              <FooterLinks title="Legal" links={["Terms & Conditions", "Cookie Policy", "Privacy Policy"]} />
              <p className="text-[15px] text-[#878787]">&copy; 2026 Polyscribe, Inc.</p>
            </div>
            <div className="pb-10 text-center text-[58px] font-semibold leading-[0.9] tracking-[-2px] sm:text-[130px] lg:pb-12 lg:text-[201px] lg:tracking-[-8px]">Polyscribe</div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function PresetCard({ preset, desktop = false, style }: { preset: { name: string; desc: string }; desktop?: boolean; style?: React.CSSProperties }) {
  return (
    <article
      className={`${desktop ? "absolute" : "min-h-[220px]"} rounded-[3.563px] bg-[#f4d03f] px-4 py-6 text-ink shadow-[0_8.908px_13.363px_-2.673px_rgba(0,0,0,0.1),0_3.563px_5.345px_-1.782px_rgba(0,0,0,0.05)]`}
      style={style}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold leading-[21.95px] tracking-[-0.445px]">{preset.name}</h3>
        <p className="max-w-[188px] text-sm leading-[20.044px]">{preset.desc}</p>
      </div>
    </article>
  );
}
function Section({ children, id, centered = false, className = "" }: { children: React.ReactNode; id?: string; centered?: boolean; className?: string }) {
  return (
    <section id={id} className={`w-full max-w-[1138px] py-10 lg:py-[56px] ${centered ? "text-center" : ""} ${className}`}>
      {children}
    </section>
  );
}

function FeatureCard({ title, text, image, large = false, imageClassName }: { title: string; text: string; image: string; large?: boolean; imageClassName: string }) {
  return (
    <article className={`relative overflow-hidden rounded-[16px] bg-[#f0ede8] ${large ? "h-[364px] lg:w-[530px]" : "h-[380px] lg:w-[345px]"}`}>
      <div className="absolute left-8 right-8 top-8 flex flex-col gap-2.5">
        <h3 className="text-xl font-semibold leading-7 text-ink">{title}</h3>
        <p className="text-base leading-[22px] text-[#555]">{text}</p>
      </div>
      <div className={`pointer-events-none absolute ${imageClassName}`}>
        <img src={image} alt="" className="h-full w-full object-contain" />
      </div>
    </article>
  );
}
function CompareCard({ title, text, image }: { title: string; text: string; image: string }) {
  return (
    <article className="w-full lg:w-[496px]">
      <div className="flex flex-col gap-3">
        <h3 className="text-[28px] font-medium leading-none text-ink sm:text-[32px]">{title}</h3>
        <p className="max-w-[496px] text-base leading-normal text-[#5a5a5a]">{text}</p>
      </div>
      <div className="mt-6 h-[320px] w-full overflow-hidden rounded-[12px] bg-[#f0ede8] sm:h-[373px] lg:w-[496px]">
        <img src={image} alt="" className="h-full w-full object-cover object-center" />
      </div>
    </article>
  );
}
function DarkCta({ overline, title, text, image, featuredImage = false }: { overline?: string; title: string; text: string; image: string; featuredImage?: boolean }) {
  const isStreamline = featuredImage && title === "Streamline Your Writing Experience";
  const isReady = title === "Ready to post in seconds";

  if (featuredImage || isReady) {
    return (
      <section className="w-full max-w-[1138px] py-[60px]">
        <div className="relative min-h-[463px] overflow-hidden rounded-[24px] border border-white/[0.12] bg-[rgba(26,26,26,0.95)] backdrop-blur-[10px]">
          <div className={`relative z-10 flex min-h-[463px] w-full flex-col justify-center px-6 py-10 sm:px-10 lg:absolute lg:top-1/2 lg:h-[289px] lg:min-h-0 lg:-translate-y-1/2 lg:p-0 ${isReady ? "lg:left-16 lg:w-[414px]" : "lg:left-16 lg:w-[450px]"}`}>
            {overline && <div className="mb-3 text-sm font-semibold text-white/80">{overline}</div>}
            <h2 className="max-w-[450px] text-[36px] font-semibold leading-[1.12] tracking-[-0.8px] text-white sm:text-[44px] lg:whitespace-nowrap lg:text-[48px] lg:leading-[56.32px] lg:tracking-[-1px]">
              {isStreamline ? <>Streamline Your<br />Writing Experience</> : isReady ? <>Ready to post in<br />seconds</> : title}
            </h2>
            <p className={`mt-4 pb-8 text-base leading-normal text-[#e5e5e5] ${isReady ? "max-w-[414px]" : "max-w-[441px]"}`}>
              {isReady ? <>Just paste a rough idea and select your preset.<br />EchoWriting cleans it up and rewrites it for you in your style.</> : text}
            </p>
            <Button className="h-[53px] w-fit rounded-[8px] bg-[#ffc458] px-8 py-4 text-base font-medium text-ink shadow-[0_10px_10px_rgba(253,188,69,0.2)] hover:bg-[#ffc458]">Start writing now</Button>
          </div>
          <img src={image} alt="" className={`pointer-events-none absolute bottom-0 h-auto max-w-none object-contain ${isReady ? "right-[-1px] w-[78%] sm:w-[58%] lg:left-[654px] lg:right-auto lg:top-[calc(50%+27px)] lg:w-[555px] lg:-translate-y-1/2" : "right-[-1px] w-[78%] sm:w-[62%] lg:left-[634px] lg:right-auto lg:top-[calc(50%+36px)] lg:w-[505px] lg:-translate-y-1/2"}`} />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full max-w-[1138px] py-10 lg:py-[56px]">
      <div className="relative grid overflow-hidden rounded-[20px] bg-[#1e1e1e] p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
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

  if (dark) {
    return (
      <article className="min-h-[640px] rounded-[22px] bg-[#171717] px-10 py-12 text-white lg:px-[52px] lg:py-[50px]">
        <h3 className="text-[28px] font-semibold leading-none tracking-[-0.5px]">Custom</h3>
        <p className="mt-7 text-[19px] font-medium text-white/55">Built for teams and heavy writers.</p>
        <hr className="my-5 border-white/15" />
        <div className="mt-10 text-[52px] font-semibold leading-none tracking-[-1.2px]">Custom</div>
        <p className="mt-12 max-w-[520px] text-[18px] font-medium leading-[1.45] tracking-[-0.2px] text-white/58">A tailored rewrite volume, character limit, and support plan for agencies, teams, or high-output writers.</p>
        <a href="#" className="mt-8 inline-flex h-[62px] w-full items-center justify-center rounded-[8px] bg-[#F0EDE8] text-[20px] font-semibold text-[#111111]">Talk to us</a>
        <p className="mb-6 mt-9 text-[20px] font-semibold text-white">Everything in Flexible, plus:</p>
        <ul className="grid gap-6">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-5 text-[20px] font-medium text-white/82">
              <span className="text-[20px] font-semibold text-[#2BD96B]">{"\u2713"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    );
  }

  return (
    <article className="min-h-[608px] rounded-[22px] bg-[#EFEEEA] px-10 py-12 shadow-[0_24px_42px_rgba(17,17,17,0.06)] lg:px-[44px] lg:py-[50px]">
      <h3 className="text-[28px] font-semibold leading-none tracking-[-0.5px] text-[#111111]">Flexible</h3>
      <p className="mt-7 text-[19px] font-medium text-[#7C7A76]">Start at $20. Scale up anytime.</p>
      <hr className="my-5 border-[#dfddd8]" />
      <div className="mt-9 flex items-end text-[#111111]"><span className="text-[52px] font-semibold leading-none tracking-[-1.2px]">$20</span><span className="pb-1 text-[24px] font-medium text-[#757575]">/mo</span></div>
      <div className="relative mt-10">
        <label className="absolute -top-2.5 left-5 bg-[#EFEEEA] px-2 text-[13px] font-semibold text-[#77756f]">Monthly credits</label>
        <select className="h-[58px] w-full appearance-none rounded-[12px] border-2 border-[#d7d5d0] bg-[#EFEEEA] px-5 pr-12 text-[18px] font-semibold text-[#111111] outline-none">
          <option>1,250 credits monthly</option>
        </select>
        <img src={assets.chevron} alt="" className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <a href="#" className="mt-8 inline-flex h-[62px] w-full items-center justify-center rounded-[8px] bg-[#FFC14F] text-[20px] font-semibold text-[#111111] shadow-[0_20px_34px_rgba(245,197,24,0.20)]">Start writing now</a>
      <ul className="mt-8 grid gap-6">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-6 text-[20px] font-medium text-[#343434]">
            <span className="text-[20px] font-semibold text-[#555555]">{"\u2713"}</span>
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
      <h3 className="font-medium">{title}</h3>
      <div className="mt-4 grid gap-2.5">
        {links.map((link) => (
          <a key={link} href="#" className="text-[15px] text-[#878787]">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
