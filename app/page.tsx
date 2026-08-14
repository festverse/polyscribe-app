"use client";

import Lenis from "lenis";
import { useEffect, useState } from "react";

const assets = {
  wordmark: "/assets/header-wordmark.svg",
  logo: "/assets/header-logo.svg",
  logoLarge: "/assets/logo-large.svg",
  x: "/assets/x.svg",
  gmail: "/assets/gmail.svg",
  medium: "/assets/medium.svg",
  youtube: "/assets/youtube.svg",
  linkedin: "/assets/linkedin.svg",
  reddit: "/assets/reddit.svg",
  sparkle: "/assets/sparkle.svg",
  heroNewStar: "/assets/hero-new-star.svg",
  heroPoweredStar: "/assets/hero-powered-star.svg",
  heroPencil: "/assets/hero-pencil.svg",
  heroChevron: "/assets/hero-chevron.svg",
  heroArrowRight: "/assets/hero-arrow-right.svg",
  heroX: "/assets/hero-x.svg",
  heroGmail: "/assets/hero-gmail.svg",
  heroMedium: "/assets/hero-medium.svg",
  heroYoutube: "/assets/hero-youtube.svg",
  heroLinkedin: "/assets/hero-linkedin.svg",
  heroReddit: "/assets/hero-reddit.svg",
  genericAi: "/assets/generic-ai.png",
  polyscribeAi: "/assets/polyscribe-ai.png",
  streamline: "/assets/banner-keyboard-background.png",
  ready: "/assets/ready-post-banner.png",
  feature1: "/assets/feature-bypass-ai.png",
  feature2: "/assets/feature-match-tone.png",
  feature3: "/assets/feature-facts.png",
  feature4: "/assets/feature-formats.png",
  feature5: "/assets/feature-presets.png",
  john: "/assets/testimonial-john.png",
  michael: "/assets/testimonial-michael.png",
  emily: "/assets/testimonial-emily.png",
  sarah: "/assets/testimonial-sarah.png",
  david: "/assets/testimonial-david.png",
  amanda: "/assets/testimonial-amanda.png",
  testimonialX: "/assets/testimonial-x.svg",
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
  { left: 28, top: 256, width: 239, height: 225, rotate: -2.82 },
  { left: 285, top: 272, width: 250, height: 235, rotate: 5.64 },
  { left: 594, top: 238, width: 246, height: 232, rotate: -4.7 },
  { left: 880, top: 269, width: 243, height: 228, rotate: 3.76 },
  { left: 4, top: 502, width: 243, height: 228, rotate: -3.76 },
  { left: 315, top: 526, width: 235, height: 221, rotate: 1.88 },
  { left: 575, top: 489, width: 239, height: 225, rotate: -2.82 },
  { left: 855, top: 514, width: 246, height: 232, rotate: 4.7 }
];
const testimonials = [
  [assets.amanda, "Amanda Carter", "@acarter_writes", "I was skeptical about AI writers, but Polyscribe is different. It doesn't sound robotic at all. It feels like having a professional editor on standby 24/7. My engagement on LinkedIn has literally doubled since I started using it.", "Jan 28, 2024"],
  [assets.john, "John Anderson", "@john.anderson", "Polyscribe has completely transformed my writing experience. With their user-friendly interface and top-notch rewriting features, I feel confident managing my content. I couldn't be happier with my decision to trust Polyscribe with my digital assets.", "Apr 1, 2024"],
  [assets.michael, "Michael Smith", "@msmith", "I've tried several writing platforms in the past, but none compare to Polyscribe. The platform's rewriting measures give me peace of mind knowing that my tone is safe. Plus, the intuitive design makes it easy for me to navigate and execute rewrites.", "Mar 24, 2024"],
  [assets.emily, "Emily Chen", "@emilywrites", "Polyscribe has exceeded all my expectations. Customer support is excellent. Whenever I've had an issue or a question, the support team has been quick to respond and incredibly helpful.", "Mar 16, 2024"],
  [assets.sarah, "Sarah Jenkins", "@sarahjenkins", "The presets make every rewrite feel controlled and consistent. I can move from casual notes to polished posts without losing my voice.", "Feb 22, 2024"],
  [assets.david, "David Lee", "@davidlee", "It saves me time every week and keeps my writing clear. The output feels natural, not generic.", "Feb 9, 2024"]
];

const faqs = [
  "Does Polyscribe generate text from scratch?",
  "Will my content pass AI checkers?",
  "How secure is the text I upload?",
  "Are my citations and factual claims altered?",
  "Am I locked into a long-term contract?",
  "Why choose this over traditional paraphrasing tools?"
];

function AssetIcon({ src, className = "", iconClassName = "h-6 w-6" }: { src: string; className?: string; iconClassName?: string }) {
  return (
    <span className={`flex items-center justify-center border border-[#eaeaea] bg-white shadow-soft ${className}`}>
      <img src={src} alt="" className={`${iconClassName} object-contain`} />
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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = new Lenis({
      duration: reduceMotion ? 0 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: !reduceMotion,
      wheelMultiplier: 0.78,
      touchMultiplier: 1.0,
      anchors: {
        offset: -92,
        duration: reduceMotion ? 0 : 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      }
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    const revealElements = Array.from(document.querySelectorAll<HTMLElement>("main section, main footer"));
    revealElements.forEach((element) => element.classList.add("reveal-section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.12 }
    );
    revealElements.forEach((element) => observer.observe(element));

    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans text-ink">
      <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-white/60 bg-white/80 pb-px shadow-header backdrop-blur-[8px] lg:h-[92px]">
        <nav className="mx-auto flex h-full max-w-[1344px] items-center justify-between px-4 sm:px-6 xl:px-0">
          <button className="flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-lg border border-soft lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
            <span className="h-0.5 w-5 bg-ink" />
          </button>
          <div className="hidden items-center gap-5 font-inter text-base font-normal text-ink lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="whitespace-nowrap pb-[0.25px] pt-[0.75px] leading-[1.6]">
                {item}
              </a>
            ))}
          </div>
          <a href="#" className="grid grid-cols-[32px_134px] grid-rows-[max-content] items-start md:grid-cols-[41px_171px]" aria-label="Polyscribe home">
            <img src={assets.logo} alt="" className="col-start-1 row-start-1 h-8 w-8 md:h-[41px] md:w-[41px]" />
            <img src={assets.wordmark} alt="Polyscribe" className="col-start-2 row-start-1 ml-[5px] mt-[5px] h-[26px] w-[134px] md:ml-[5.86px] md:mt-[6.54px] md:h-[33.454px] md:w-[171.076px]" />
          </a>
          <div className="hidden h-[53px] items-center justify-end gap-4 lg:flex">
            <a className="flex h-full items-center rounded-[8px] border border-[#f3f3f3] px-[33px] py-[17px] text-base font-medium leading-[21px] text-ink" href="#">
              Log in
            </a>
            <a className="flex h-full items-center justify-center rounded-[8px] bg-ink px-8 py-4 text-base font-medium leading-[21px] text-white" href="#">
              Sign up
            </a>
          </div>
          <a className="hidden h-[44px] items-center justify-center rounded-[8px] bg-ink px-5 text-sm font-medium text-white sm:flex lg:hidden" href="#">
            Sign up
          </a>
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
          <div className="relative mx-auto min-h-[668px] w-full max-w-[1080px] overflow-hidden rounded-[20px] border-[5px] border-solid border-[#f3f3f3] bg-white px-5 py-12 shadow-[inset_0_0_100px_rgba(0,0,0,0.03)] sm:min-h-[846px] sm:px-10 sm:py-14 lg:h-[962px] lg:px-[121px] lg:py-[81px]">
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-black/[0.01] to-black/[0.04] backdrop-blur-[1px]" />
            <div className="pointer-events-none absolute inset-0 z-30 rounded-[20px] border-[5px] border-solid border-[#f3f3f3]" />
            <div className="relative z-10 mx-auto flex w-full max-w-[842px] flex-col items-center">
              <AssetIcon src={assets.heroX} className="absolute left-[-42px] top-[22px] hidden h-[60px] w-[60px] rotate-[-4.6deg] rounded-[18px] lg:flex" iconClassName="h-[28px] w-[28px]" />
              <AssetIcon src={assets.heroGmail} className="absolute left-[-68px] top-[128px] hidden h-[60px] w-[60px] rotate-[-4.6deg] rounded-[18px] lg:flex" iconClassName="h-[27.5px] w-[27.5px]" />
              <AssetIcon src={assets.heroMedium} className="absolute left-[2px] top-[196px] hidden h-[68.8px] w-[68.8px] rotate-[-13.85deg] rounded-[16px] lg:flex" iconClassName="h-[31.5px] w-[31.5px]" />
              <AssetIcon src={assets.heroYoutube} className="absolute right-[43px] top-[1px] hidden h-[68.8px] w-[68.8px] rotate-[13.85deg] rounded-[16px] lg:flex" iconClassName="h-[31.5px] w-[31.5px]" />
              <AssetIcon src={assets.heroLinkedin} className="absolute right-[-38px] top-[110px] hidden h-[60px] w-[60px] rotate-[4.6deg] rounded-[18px] lg:flex" iconClassName="h-[28px] w-[28px]" />
              <AssetIcon src={assets.heroReddit} className="absolute right-[-1px] top-[204px] hidden h-[64.6px] w-[64.6px] rotate-[9.21deg] rounded-[16px] lg:flex" iconClassName="h-[30.6px] w-[30.6px]" />

              <div className="mb-7 flex max-w-full items-center gap-3 rounded-full border border-black/10 bg-black/[0.04] py-[5px] pl-[5px] pr-[17px]">
                <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-sm shadow-[0_2px_2px_rgba(0,0,0,0.05)]">
                  <img src={assets.heroNewStar} alt="" className="h-3 w-3" />
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
                  <img src={assets.heroPoweredStar} alt="" className="h-[14px] w-[14px]" />
                  <span>Powered by Polyscribe</span>
                </div>
                <div className="relative h-[318px] overflow-hidden rounded-[16px] bg-white px-5 py-4 shadow-[0_8px_12px_rgba(0,0,0,0.15)]">
                  <textarea maxLength={3000} className="h-full w-full resize-none border-0 bg-transparent pb-24 text-base text-[#777] outline-none placeholder:text-[rgba(0,0,0,0.5)]" placeholder="Paste something you want to rewrite" />
                  <div className="absolute inset-x-5 bottom-4 flex items-center gap-4 max-sm:flex-col max-sm:items-stretch">
                    <button className="inline-flex h-[38px] shrink-0 items-center gap-1.5 rounded-[8px] border border-[#eaeaea] bg-[#f5f5f5] px-[15px] text-sm font-normal text-[#444]">
                      <img src={assets.heroPencil} alt="" className="h-[14px] w-[14px]" />
                      <span>Select Preset</span>
                      <img src={assets.heroChevron} alt="" className="h-[14px] w-[14px]" />
                    </button>
                    <div className="ml-auto flex items-center gap-4 max-sm:ml-0 max-sm:justify-between">
                      <span className="whitespace-nowrap text-xs font-normal text-[#888]">0/3,000</span>
                      <button className="inline-flex h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-[#e5e5e5] px-5 text-base font-medium text-[#a3a3a3]" disabled>
                        Rewrite now for free
                        <img src={assets.heroArrowRight} alt="" className="h-[14px] w-[14px]" />
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
            Most AI rewrites your personality out. <span className="text-ink"><span className="relative inline-block"><span className="relative z-10">Polyscribe</span><svg className="absolute -bottom-1 left-0 z-0 h-3 w-full origin-left rotate-[-2deg] overflow-visible lg:-bottom-0.5 lg:left-0.5" viewBox="0 0 260 16" preserveAspectRatio="none" aria-hidden="true"><path d="M4 11 C72 3 170 2 256 10" fill="none" stroke="#ffbd2e" strokeWidth="6" strokeLinecap="round" /></svg></span> keeps what makes your writing yours.</span>
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

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:hidden">
            {presets.map((preset) => (
              <PresetCard key={preset.name} preset={preset} />
            ))}
          </div>

          <div className="relative hidden h-[737px] w-full lg:block">
            {presets.map((preset, index) => {
              const layout = presetLayouts[index];
              return <PresetCard key={preset.name} preset={preset} style={{ left: layout.left, top: layout.top, width: layout.width, height: layout.height, transform: `rotate(${layout.rotate}deg)` }} desktop />;
            })}
          </div>
        </section>
        <section className="w-full max-w-[1138px] py-20">
          <div className="relative overflow-hidden rounded-[20px] bg-[#1a1a1a] px-5 py-[72px] sm:px-10 lg:px-24 lg:py-[100px]">
            <div className="mx-auto flex min-h-[688px] w-full max-w-[1200px] flex-col items-center gap-14 lg:px-6">
              <div className="flex w-full flex-col items-center gap-3 text-center">
                <h2 className="max-w-[684px] text-[36px] font-semibold leading-[1.18] tracking-[-0.7px] text-white sm:text-[48px] sm:leading-[60.48px] sm:tracking-[-1px]">
                  Hear from Our Valued Community Members
                </h2>
                <p className="max-w-[711px] text-base leading-[27.2px] text-[#cfcfcf]">
                  Discover what our valued community members have to say about their experiences with Polyscribe. Read firsthand testimonials that highlight the benefits and satisfaction our platform brings to users.
                </p>
              </div>
              <div className="relative h-[412px] w-full max-w-[940px] overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[112px] bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/75 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[112px] bg-gradient-to-l from-[#1a1a1a] via-[#1a1a1a]/75 to-transparent" />
                <div className="flex w-max gap-6 py-2 lg:-translate-x-[70px]">
                  {testimonials.slice(0, 5).map(([avatar, name, handle, text, date]) => (
                    <TestimonialCard key={name} avatar={avatar} name={name} handle={handle} text={text} date={date} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="flex w-full max-w-[1138px] flex-col items-center gap-11 py-[60px] text-center">
          <div className="flex w-full flex-col items-center gap-4">
            <h2 className="w-full text-[38px] font-semibold leading-tight text-ink sm:text-[48px] sm:leading-[58px]">Pick the plan that fits how you write</h2>
            <p className="max-w-[640px] text-lg leading-[26px] text-[#7a7a72]">Start free, scale up when you need more. No lock-in, no surprises.</p>
          </div>
          <div className="grid w-full gap-8 text-left lg:grid-cols-[550px_550px] lg:justify-between lg:gap-0">
            <PriceCard />
            <PriceCard dark />
          </div>
        </section>
        <section className="flex w-full max-w-[1138px] flex-col items-center py-[60px]">
          <div className="flex w-full max-w-[720px] flex-col items-start gap-11">
            <div className="flex w-full flex-col items-center gap-[18px] text-center">
              <h2 className="w-full text-[42px] font-semibold leading-[1.12] tracking-[-1px] text-ink sm:text-[56px] sm:leading-[62.72px] sm:tracking-[-1.5px]">Got questions?</h2>
              <p className="max-w-[560px] text-center text-base leading-normal text-[#4b5563]">
                Everything you need to know before using EchoWriting &mdash; how it
                <br className="hidden sm:block" />
                works, your data, and how it fits into your workflow.
              </p>
            </div>
            <div className="flex w-full flex-col items-start">
              {faqs.map((faq, index) => (
                <div key={faq} className="w-full border-b border-[#e5e7eb] pb-[25px] pt-6">
                  <button className="flex w-full items-center justify-between gap-5 text-left text-lg font-medium leading-[20.16px] tracking-[-0.3px] text-ink" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px]">
                      <img src={assets.chevron} alt="" className={`h-5 w-5 transition ${openFaq === index ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  {openFaq === index && <p className="mt-4 text-sm leading-relaxed text-muted">Polyscribe is designed around rewriting existing drafts while preserving your intent, tone, and factual claims. Review important work before publishing.</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer className="w-full pb-10 pt-[60px]">
          <div className="relative overflow-hidden rounded-[40px] border-[10px] border-solid border-[#f3f3f3] bg-soft">
            <div className="relative mb-[-0.75px] w-full px-6 pb-16 pt-20 sm:px-10 lg:px-[120px]">
              <div className="footer-columns grid w-full gap-8">
                <div className="w-full max-w-[300px] pb-[41.6px]">
                  <div className="flex flex-col gap-3">
                    <img src={assets.logoLarge} alt="" className="h-[69px] w-[69px]" />
                    <p className="max-w-[300px] text-2xl font-medium leading-[31.2px] tracking-[-0.5px] text-ink">Polyscribe is your independent AI writing assistant.</p>
                  </div>
                </div>
                <FooterLinks title="Explore" links={["Home", "Features", "Pricing"]} />
                <FooterLinks title="Legal" links={["Terms & Conditions", "Cookie Policy", "Privacy Policy"]} />
                <div className="flex flex-col items-start gap-[9.6px] pb-[39.99px] text-[15.2px] leading-[22.8px] text-[#878787]">
                  <p>&copy; 2026 Polyscribe, Inc.</p>
                </div>
              </div>
            </div>
            <div className="relative w-full pb-16 text-center text-[clamp(44px,18vw,64px)] font-semibold leading-[0.9] tracking-[-2px] text-ink sm:text-[130px] lg:text-[201.6px] lg:leading-[181.44px] lg:tracking-[-8.064px]">
              <span className="relative inline-block">
                Polyscribe
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

function TestimonialCard({ avatar, name, handle, text, date }: { avatar: string; name: string; handle: string; text: string; date: string }) {
  return (
    <article className="relative flex h-[402px] w-[350px] shrink-0 flex-col justify-between rounded-[20px] border border-white/[0.07] bg-white/[0.03] p-[33px] text-left shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={avatar} alt="" className="h-11 w-11 rounded-[22px] border border-[#e5e7eb] object-cover" />
            <div>
              <div className="text-[15px] leading-[22.5px] text-[#cfcfcf]">{name}</div>
              <div className="text-[13px] leading-[19.5px] text-[#878787]">{handle}</div>
            </div>
          </div>
          <img src={assets.testimonialX} alt="" className="h-[18px] w-[18px] opacity-50" />
        </div>
        <p className="text-base leading-[24.5px] text-white">{text}</p>
      </div>
      <div className="text-sm leading-[19.5px] text-[#878787]">{date}</div>
    </article>
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
      <div className={`pointer-events-none absolute max-sm:origin-top-left max-sm:scale-[0.72] ${imageClassName}`}>
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
          <img src={image} alt="" className={`pointer-events-none relative bottom-auto right-auto mx-auto mt-8 h-auto max-w-none object-contain lg:absolute lg:mx-0 lg:mt-0 ${isReady ? "w-[92%] sm:w-[66%] lg:left-[654px] lg:right-auto lg:top-[calc(50%+27px)] lg:w-[555px] lg:-translate-y-1/2" : "w-[92%] sm:w-[70%] lg:left-[634px] lg:right-auto lg:top-[calc(50%+36px)] lg:w-[505px] lg:-translate-y-1/2"}`} />
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
      <article className="flex w-full flex-col gap-6 rounded-[20px] bg-[#1a1a1a] p-8 text-white sm:p-10 lg:w-[550px]">
        <div className="flex w-full flex-col gap-2 border-b border-[#464648] pb-3">
          <h3 className="text-2xl font-semibold leading-normal">Custom</h3>
          <p className="text-base leading-normal text-[#aeaeb2]">Built for teams and heavy writers.</p>
        </div>
        <div className="text-[40px] font-semibold leading-normal">Custom</div>
        <p className="text-sm leading-[22px] text-[#aeaeb2]">A tailored rewrite volume, character limit, and support plan for agencies, teams, or high-output writers.</p>
        <a href="#" className="flex w-full items-center justify-center rounded-[8px] bg-[#f0ede8] px-8 py-4 text-base font-medium text-ink">Talk to us</a>
        <div className="flex w-full flex-col gap-3.5">
          <p className="text-base font-semibold leading-normal text-white">Everything in Flexible, plus:</p>
          {items.map((item) => (
            <div key={item} className="flex w-full items-start gap-3 text-base leading-normal text-white">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center"><img src={assets.checkWhite} alt="" className="h-[14px] w-[14px]" /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="flex w-full flex-col gap-6 rounded-[20px] bg-[#f0ede8] p-8 text-ink shadow-[0_12px_12px_rgba(0,0,0,0.05)] sm:p-10 lg:w-[550px]">
      <div className="flex w-full flex-col gap-2 border-b border-[#e5e5ea] pb-3">
        <h3 className="text-2xl font-semibold leading-normal">Flexible</h3>
        <p className="text-base leading-normal text-[#666]">Start at $20. Scale up anytime.</p>
      </div>
      <div className="text-[40px] font-semibold leading-none"><span>$20</span><span className="text-xl font-normal leading-normal text-[#666]">/mo</span></div>
      <div className="relative flex h-[52px] w-full items-center rounded-[12px] border-[1.5px] border-[#c9c8c8] px-4">
        <label className="absolute -top-[11.5px] left-[10.5px] bg-[#f0ede8] px-1.5 text-[11px] font-medium leading-normal text-[#666]">Monthly credits</label>
        <select className="h-full w-full appearance-none bg-transparent pr-8 text-sm font-medium text-ink outline-none">
          <option>1,250 credits monthly</option>
        </select>
        <img src={assets.chevron} alt="" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2" />
      </div>
      <a href="#" className="flex w-full items-center justify-center rounded-[8px] bg-[#ffc458] px-8 py-4 text-base font-medium text-ink shadow-[0_10px_10px_rgba(253,188,69,0.2)]">Start writing now</a>
      <div className="flex w-full flex-col gap-3.5">
        {items.map((item) => (
          <div key={item} className="flex w-full items-start gap-3 text-base leading-normal text-ink">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center"><img src={assets.check} alt="" className="h-[14px] w-[14px]" /></span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  );
}
function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col items-start gap-4 pb-[7.59px]">
      <h3 className="text-base font-medium leading-6 text-ink">{title}</h3>
      <div className="flex flex-col items-start gap-[9.6px]">
        {links.map((link) => (
          <a key={link} href="#" className="text-[15.2px] leading-[22.8px] text-[#878787]">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
