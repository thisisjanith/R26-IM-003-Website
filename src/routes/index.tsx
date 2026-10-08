import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Sparkles,
  BookOpen,
  Cpu,
  Boxes,
  Play,
  FlaskConical,
  TrendingUp,
  ArrowRight,
  Lightbulb,
  Layers,
  Wifi,
  Languages,
  GraduationCap,
  School,
  Users,
  Wallet,
  FileText,
  Github,
  ChevronRight,
  Target,
  AlertTriangle,
  Volume2,
  VolumeX,
  Pause,
  ScanLine,
  Smartphone,
  MessageSquareText,
  Hand,
  BarChart3,
  ShieldCheck,
  Activity,
  Clock,
  CheckCircle2,
  Presentation,
} from "lucide-react";

import heroVideo from "@/assets/R26_IM_003_Home_Video.mp4";
import photoMendis from "@/assets/Mendis B.M.U.I.jpeg";
import photoBandara from "@/assets/Bandara M.R.J.K.jpeg";
import photoJayasundara from "@/assets/Jayasundara R.K.M.J.Y.png";
import photoIlayperuma from "@/assets/Ilayperuma M.I.jpeg";
import photoIshara from "@/assets/MR. Ishara Gamage.jpg";
import photoNushkan from "@/assets/Mr. Nushkan Nismi.png";

import {
  SiteShell,
  Section,
  Card,
  ResourceCard,
  HeroBackdrop,
  ComponentIcon,
  GRADIENT,
  type NavItem,
} from "@/components/site/layout";
import {
  OutcomeChart,
  OutcomeTable,
  TeacherRatings,
  SurveyMeters,
  SessionTable,
} from "@/components/site/charts";
import { COMPONENTS, COMPARISON, GROUP, RESULTS } from "@/data/project";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narrative-Based AR for Early STEAM Education | R26-IM-003" },
      {
        name: "description",
        content:
          "A bilingual, offline AR storybook framework covering Basic Measurement, Life Science, Physical Science and Number Concepts for Sri Lankan Grade 4–5 students.",
      },
      { property: "og:title", content: "Narrative-Based AR for Early STEAM Education" },
      {
        property: "og:description",
        content:
          "Four illustrated AR storybooks, one shared bilingual Sinhala–English framework, evaluated in the classroom.",
      },
    ],
  }),
  component: Index,
});

const NAV: NavItem[] = [
  { id: "hero", label: "Overview" },
  { id: "team", label: "Team" },
  { id: "problem", label: "Problem" },
  { id: "components", label: "Components" },
  { id: "framework", label: "Framework" },
  { id: "research", label: "Research" },
  { id: "results", label: "Results" },
  { id: "market", label: "Market" },
  { id: "resources", label: "Resources" },
];

const TEAM = [
  { n: "Mendis B.M.U.I", r: "Lead", img: photoMendis, pos: "object-[center_15%]" },
  { n: "Bandara M.R.J.K", r: "Member", img: photoBandara, pos: "object-[center_top]" },
  { n: "Jayasundara R.K.M.J.Y", r: "Member", img: photoJayasundara, pos: "object-[center_top]" },
  { n: "Ilayperuma M.I", r: "Member", img: photoIlayperuma, pos: "object-[center_top]" },
];

function Index() {
  return (
    <SiteShell nav={NAV} home>
      <Hero />
      <Problem />
      <Components />
      <Framework />
      <Research />
      <Results />
      <Market />
      <Resources />
    </SiteShell>
  );
}

/* ───────── hero + team ───────── */

function Hero() {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative isolate overflow-hidden pt-28 lg:pt-32">
      <HeroBackdrop />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 lg:grid-cols-2 lg:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white animate-fade-up">
            <Sparkles className="h-3.5 w-3.5" />
            Final Year Research · {GROUP.year} · {GROUP.id}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl xl:text-6xl animate-fade-up [animation-delay:150ms]">
            <span className="text-gradient-subtitle">Narrative Based</span>
            <br />
            <span className="text-white">Augmented Reality for</span>
            <br />
            <span className="text-gradient-hero">Early STEAM Education</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl animate-fade-up [animation-delay:300ms]">
            <span className="font-semibold text-white">
              Four illustrated storybooks, one AR framework.
            </span>{" "}
            Printed pages come alive as interactive 3D lessons in Sinhala and English, fully
            offline, on ordinary Android phones.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 animate-fade-up [animation-delay:400ms]">
            {COMPONENTS.map((c) => (
              <Link
                key={c.slug}
                to="/components/$slug"
                params={{ slug: c.slug }}
                className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/15"
              >
                <span
                  className={`grid h-5 w-5 place-items-center rounded-full ${GRADIENT[c.tone]}`}
                >
                  <ComponentIcon slug={c.slug} className="h-3 w-3" />
                </span>
                {c.name}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:500ms]">
            <a
              href="#components"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-warm transition-transform hover:scale-[1.03]"
            >
              <BookOpen className="h-4 w-4" />
              Explore the Components
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See the Results
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4 animate-fade-up [animation-delay:600ms]">
            {[
              { k: "Domains", v: "4", icon: <Layers className="h-4 w-4" /> },
              { k: "Grades", v: "4-5", icon: <GraduationCap className="h-4 w-4" /> },
              { k: "Languages", v: "සිං / EN", icon: <Languages className="h-4 w-4" /> },
              { k: "Mode", v: "Offline", icon: <Wifi className="h-4 w-4" /> },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl glass-dark p-4 text-white transition-all hover:bg-white/10"
              >
                <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60">
                  {s.icon}
                  {s.k}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-up [animation-delay:400ms]">
          <div className="absolute -inset-6 animate-video-glow rounded-[2.5rem] bg-gradient-primary opacity-40 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass p-2 shadow-glow ring-1 ring-white/30">
            <video
              ref={videoRef}
              src={heroVideo}
              autoPlay
              loop
              muted={muted}
              playsInline
              className="aspect-video w-full rounded-[1.6rem] object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass-dark px-5 py-3 text-white shadow-card">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-warm">
                  <BookOpen className="h-4 w-4 text-white" />
                </span>
                <div className="leading-tight">
                  <p className="text-xs text-white/60">Project Intro</p>
                  <p className="text-sm font-semibold">AR Storybook Overview</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const v = videoRef.current;
                    if (!v) return;
                    if (playing) v.pause();
                    else v.play();
                    setPlaying(!playing);
                  }}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-all hover:scale-110 hover:bg-white/25"
                  aria-label={playing ? "Pause" : "Play"}
                >
                  {playing ? (
                    <Pause className="h-3.5 w-3.5" />
                  ) : (
                    <Play className="h-3.5 w-3.5 fill-white" />
                  )}
                </button>
                <button
                  onClick={() => {
                    const v = videoRef.current;
                    if (!v) return;
                    v.muted = !muted;
                    setMuted(!muted);
                  }}
                  className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-all hover:scale-110 hover:bg-white/25"
                  aria-label={muted ? "Unmute" : "Mute"}
                >
                  {muted ? (
                    <VolumeX className="h-3.5 w-3.5" />
                  ) : (
                    <Volume2 className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-12 hidden animate-float-slow rounded-2xl glass-dark p-3 text-white shadow-card md:block">
            <Boxes className="h-5 w-5" />
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Unity 3D</p>
          </div>
          <div className="absolute -right-4 bottom-32 hidden animate-float-slow [animation-delay:1.5s] rounded-2xl glass-dark p-3 text-white shadow-card md:block">
            <Cpu className="h-5 w-5" />
            <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Vuforia</p>
          </div>
        </div>
      </div>

      <div id="team" className="relative z-10 mx-auto max-w-7xl scroll-mt-28 px-4">
        <div className="relative overflow-hidden rounded-3xl glass-dark p-8 shadow-card sm:p-12">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
              Research Team
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Built by SLIIT Final Year Researchers
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div
                key={m.n}
                className="group flex flex-col items-center gap-5 rounded-3xl bg-white/5 p-6 text-center ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-glow hover:ring-white/20"
              >
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white/5 p-1.5 shadow-lg ring-4 ring-white/10 transition-all duration-300 group-hover:ring-white/30">
                  <img
                    src={m.img}
                    alt={m.n}
                    className={`h-full w-full rounded-xl object-cover ${m.pos}`}
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-white">{m.n}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steam-orange">
                    {m.r}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-8 border-t border-white/10 pt-10 xl:flex-row xl:gap-12">
            <div className="flex flex-col items-center gap-2 text-center xl:items-start xl:text-left">
              <GraduationCap className="h-8 w-8 text-white/60" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white/60">
                Supervised By
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { n: "Mr. Ishara Gamage", r: "Supervisor", img: photoIshara },
                { n: "Mr. Nushkan Nismi", r: "Co-Supervisor", img: photoNushkan },
              ].map((s) => (
                <div
                  key={s.n}
                  className="group flex flex-col items-center gap-6 rounded-[2rem] bg-white/5 p-5 pr-10 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-soft hover:ring-white/20 sm:flex-row"
                >
                  <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white/5 p-1.5 shadow-md ring-2 ring-white/20 transition-all duration-300 group-hover:ring-white/40">
                    <img
                      src={s.img}
                      alt={s.n}
                      className="h-full w-full rounded-xl object-cover object-[center_top]"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xl font-bold text-white">{s.n}</p>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-steam-green">
                      {s.r}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 w-full lg:h-32" />
    </section>
  );
}

/* ───────── problem ───────── */

function Problem() {
  return (
    <Section
      id="problem"
      eyebrow="The Problem"
      title="Static pages can't show concepts that move"
      intro="Measuring jars filling, seeds germinating, a whole split into fractions: these unfold in three dimensions and over time. Reduced to a printed illustration, learners have no way to observe the process itself."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card accent="warm" icon={<AlertTriangle className="h-5 w-5" />} label="The Challenge">
          <p className="text-muted-foreground">
            Grade 4–5 students struggle with topics that need{" "}
            <strong className="text-foreground">visual and process-based reasoning</strong>, from
            measurement instruments and life cycles to circuits, fractions and place value.
          </p>
        </Card>
        <Card accent="cool" icon={<School className="h-5 w-5" />} label="The Context">
          <p className="text-muted-foreground">
            Sri Lanka is strong on access to basic education but still at an{" "}
            <strong className="text-foreground">emerging stage</strong> in embedding technology in
            classrooms. Instruction depends on printed textbooks and manipulatives are unevenly
            distributed.
          </p>
        </Card>
        <Card accent="fresh" icon={<Target className="h-5 w-5" />} label="The Gap">
          <p className="text-muted-foreground">
            AR learning tools are overwhelmingly{" "}
            <strong className="text-foreground">monolingual</strong>, built for curricula outside
            South Asia, and usually cover a{" "}
            <strong className="text-foreground">single subject</strong>, so every subject brings a
            new interaction model.
          </p>
        </Card>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          {
            v: "Invisible",
            k: "processes",
            sub: "current flow, forces and growth can't be seen on a page",
          },
          {
            v: "Abstract",
            k: "symbols",
            sub: "fractions and place value have no physical form in print",
          },
          {
            v: "Dynamic",
            k: "quantities",
            sub: "capacity, mass and time change while you measure them",
          },
        ].map((s) => (
          <div key={s.v} className="rounded-3xl border bg-card p-6 shadow-soft">
            <p className="font-display text-3xl font-extrabold text-gradient">{s.v}</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{s.k}</p>
            <p className="text-sm text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────── components ───────── */

function Components() {
  return (
    <Section
      id="components"
      eyebrow="Four Components"
      title="One storybook per curriculum domain"
      intro="Each component has its own illustrated storybook with a named protagonist and a continuous plot. Every AR scene is entered through a printed story page."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {COMPONENTS.map((c, i) => (
          <Link
            key={c.slug}
            to="/components/$slug"
            params={{ slug: c.slug }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className={`absolute inset-x-0 top-0 h-1 ${GRADIENT[c.tone]}`} />
            <div
              className={`absolute -right-12 -top-12 h-44 w-44 rounded-full ${GRADIENT[c.tone]} opacity-15 blur-2xl transition-opacity group-hover:opacity-30`}
            />

            <div className="relative flex items-start justify-between gap-4">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-soft ${GRADIENT[c.tone]}`}
              >
                <ComponentIcon slug={c.slug} className="h-6 w-6" />
              </span>
              <span className="font-display text-4xl font-extrabold text-foreground/10">
                0{i + 1}
              </span>
            </div>

            <h3 className="relative mt-5 font-display text-2xl font-bold text-foreground">
              {c.name}
            </h3>
            <p className="relative mt-1 text-sm font-medium text-primary">{c.tagline}</p>
            <p className="relative mt-3 text-muted-foreground">{c.summary}</p>

            <div className="relative mt-5 flex flex-wrap gap-2">
              {c.concepts.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="relative mt-6 flex items-center justify-between border-t pt-5">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span className="italic">{c.storybook}</span>
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                View component
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}

/* ───────── shared framework ───────── */

function Framework() {
  const pipeline = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      t: "Printed Bilingual Storybook",
      d: "Each page is both a narrative panel and a Vuforia ImageTarget, authored in Adobe Illustrator.",
    },
    {
      icon: <ScanLine className="h-5 w-5" />,
      t: "Vuforia Marker Recognition",
      d: "The phone camera recognises the page and reports its identifier.",
    },
    {
      icon: <Boxes className="h-5 w-5" />,
      t: "Unity AR Content Engine",
      d: "Anchors the matching Blender-modelled 3D scene to the plane of the page.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      t: "Four Curriculum Components",
      d: "Measurement · Life Science · Physical Science · Number Concepts.",
    },
  ];
  const services = [
    {
      icon: <Languages className="h-5 w-5" />,
      t: "Bilingual Content Layer",
      d: "Sinhala and English labels, instructions and audio narration, toggleable by learner or teacher.",
    },
    {
      icon: <Hand className="h-5 w-5" />,
      t: "Interaction Manager",
      d: "One consistent tap-based model reused across all four components.",
    },
    {
      icon: <MessageSquareText className="h-5 w-5" />,
      t: "Learning Feedback System",
      d: "Animated responses, hints and audio confirmation after every interaction.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      t: "Learning Evaluation Module",
      d: "Logs AR time, quiz time, on-task time, mistakes and retries per session.",
    },
  ];

  return (
    <Section
      id="framework"
      eyebrow="Shared Framework"
      title="Four apps, one architecture"
      intro="The components are architecturally independent but structurally consistent: the same offline Vuforia + Unity pipeline and the same bilingual services layer."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            AR content pipeline
          </p>
          <ol className="mt-6 space-y-2">
            {pipeline.map((p, i) => (
              <li key={p.t}>
                <div className="flex gap-4 rounded-2xl bg-secondary/60 p-4">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-primary text-white shadow-soft">
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-display font-bold text-foreground">{p.t}</p>
                    <p className="text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </div>
                {i < pipeline.length - 1 && <div className="ml-9 h-3 w-px bg-border" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow">
            <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
              Shared services layer
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.t} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                  {s.icon}
                  <p className="mt-2 font-display font-bold">{s.t}</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <Wifi className="h-5 w-5" />,
                t: "Fully offline",
                d: "Tracking and rendering run on-device after install.",
              },
              {
                icon: <Smartphone className="h-5 w-5" />,
                t: "Android 8.0+",
                d: "No headsets, depth sensors or peripherals.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5" />,
                t: "Optional sync",
                d: "Firebase only syncs anonymised logs when online.",
              },
            ].map((f) => (
              <div key={f.t} className="rounded-3xl border bg-card p-5 shadow-soft">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-primary">
                  {f.icon}
                </span>
                <p className="mt-3 font-display font-bold text-foreground">{f.t}</p>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Unity 3D", "Vuforia", "Blender", "Adobe Illustrator", "Firebase", "Android"].map(
              (t) => (
                <span
                  key={t}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto rounded-3xl border bg-card p-4 shadow-soft sm:p-6">
        <table className="w-full min-w-[560px] text-sm">
          <caption className="mb-4 text-left">
            <span className="block font-display text-lg font-bold text-foreground">
              Compared with the closest AR education systems
            </span>
            <span className="block text-sm text-muted-foreground">
              From a review of IEEE Xplore, Scopus, ScienceDirect and Google Scholar, 2012–2025. N/R
              = not reported.
            </span>
          </caption>
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="py-2 pl-3 pr-4 font-semibold">System</th>
              <th className="py-2 pr-4 font-semibold">Domain(s)</th>
              <th className="py-2 pr-4 text-center font-semibold">Bilingual</th>
              <th className="py-2 pr-4 text-center font-semibold">Multi-domain</th>
              <th className="py-2 pr-3 text-center font-semibold">Offline</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((r) => {
              const ours = r.system === "This work";
              return (
                <tr
                  key={r.system}
                  className={`border-b border-border/60 ${ours ? "bg-primary/10 font-semibold text-foreground" : "text-muted-foreground"}`}
                >
                  <td className="py-2.5 pl-3 pr-4 text-foreground">{r.system}</td>
                  <td className="py-2.5 pr-4">{r.domain}</td>
                  <td className="py-2.5 pr-4 text-center">{r.bilingual}</td>
                  <td className="py-2.5 pr-4 text-center">{r.multi}</td>
                  <td className="py-2.5 pr-3 text-center">{r.offline}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ───────── research design ───────── */

function Research() {
  return (
    <Section id="research" eyebrow="Research & Validation" title="Evaluated in a real classroom">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="rounded-3xl border bg-card p-8 shadow-card lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-cool text-white shadow-soft">
              <FlaskConical className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Methodology</h3>
          </div>
          <p className="mt-4 text-muted-foreground">
            A{" "}
            <strong className="text-foreground">
              quasi-experimental, non-equivalent control-group
            </strong>{" "}
            study at a private tuition institute in Sri Lanka in August 2026. Students completed a{" "}
            <strong className="text-foreground">12-item, 55-point</strong> curriculum-aligned test
            written in Sinhala and reviewed by teachers. Engagement was measured through
            instrumented AR sessions, a student survey and a teacher panel.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Experimental · n = {RESULTS.arN}
              </p>
              <p className="mt-1 font-display font-bold text-foreground">
                Pre-test → AR session → Post-test
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Control · n = {RESULTS.controlN}
              </p>
              <p className="mt-1 font-display font-bold text-foreground">
                Textbook instruction → Test
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Teacher panel · n = 5
              </p>
              <p className="mt-1 font-display font-bold text-foreground">
                Five-point Likert review
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Session logs
              </p>
              <p className="mt-1 font-display font-bold text-foreground">
                {RESULTS.session.logged} logged · {RESULTS.session.analysable} analysable
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow lg:col-span-2">
          <h3 className="font-display text-xl font-bold">Research Questions</h3>
          <ul className="mt-5 space-y-5">
            <li>
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                RQ1 · Learning outcome
              </p>
              <p className="mt-1 text-primary-foreground/90">
                What learning gains follow narrative-based AR storybook instruction, and is
                post-instruction performance higher than after textbook instruction?
              </p>
            </li>
            <li>
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/70">
                RQ2 · Usability & engagement
              </p>
              <p className="mt-1 text-primary-foreground/90">
                How do learners and teachers experience usability, engagement and feedback quality,
                and what do the interaction logs show about on-task behaviour?
              </p>
            </li>
          </ul>
          <p className="mt-6 rounded-2xl bg-white/10 p-3 text-xs text-primary-foreground/80 ring-1 ring-white/15">
            Institute approval and guardian consent were obtained. Logs are keyed to anonymous
            session and device IDs only.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ───────── results ───────── */

function Results() {
  const r = RESULTS;
  return (
    <Section
      id="results"
      eyebrow="Results"
      title="Large, consistent learning gains"
      intro={`${r.improved} of ${r.arN} students improved after a single AR session, and none declined.`}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            icon: <TrendingUp className="h-4 w-4" />,
            label: "Mean gain (AR group)",
            value: `+${r.gain.mean}`,
            sub: `points of 55 · 95% CI ${r.gain.ci[0]}–${r.gain.ci[1]}`,
          },
          {
            icon: <Users className="h-4 w-4" />,
            label: "Above textbook control",
            value: `+${r.between.diff}`,
            sub: `points · Hedges' g = ${r.between.g}`,
          },
          {
            icon: <Activity className="h-4 w-4" />,
            label: "On-task time",
            value: `${Math.round(r.session.onTaskRatio * 100)}%`,
            sub: `of session time across ${r.session.analysable} sessions`,
          },
          {
            icon: <Sparkles className="h-4 w-4" />,
            label: "Enjoyed the AR activities",
            value: "96.9%",
            sub: "31 of 32 students",
          },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl border bg-card p-6 shadow-soft">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              {s.icon}
              {s.label}
            </p>
            <p className="mt-2 font-display text-4xl font-extrabold text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-8">
          <OutcomeChart />
          <p className="mt-6 text-sm text-muted-foreground">
            Paired t(31) = {r.gain.t}, p &lt; .001, d<sub>z</sub> = {r.gain.dz}. Between groups,
            Welch t(58.7) = {r.between.t}, p &lt; .001. Wilcoxon and Mann–Whitney tests agree.
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-3xl border bg-card p-6 shadow-card sm:p-8">
          <div>
            <p className="font-display text-lg font-bold text-foreground">Test performance table</p>
            <p className="mb-4 text-sm text-muted-foreground">
              Same 55-point instrument for every group.
            </p>
            <OutcomeTable />
          </div>
          <div className="mt-auto rounded-2xl bg-secondary p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 font-semibold text-foreground">
              <AlertTriangle className="h-4 w-4" /> Reading these results
            </p>
            <p className="mt-1">
              Assignment was by intact class and the control group sat no pre-test, so the study
              shows an
              <strong className="text-foreground"> association</strong> between AR instruction and
              higher attainment rather than firmly attributed causation. The single-session,
              immediate post-test design means the effect is an upper bound.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <SessionTable />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-8">
          <SurveyMeters />
        </div>
        <div className="rounded-3xl border bg-card p-6 shadow-card sm:p-8">
          <TeacherRatings />
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card accent="fresh" icon={<CheckCircle2 className="h-5 w-5" />} label="What worked">
          <p className="text-muted-foreground">
            Teachers rated attention retention and narrative enjoyment highest (4.8/5). Favourite
            activities were spread evenly across all four domains, so no single component carried
            the appeal.
          </p>
        </Card>
        <Card accent="warm" icon={<Lightbulb className="h-5 w-5" />} label="What to improve">
          <p className="text-muted-foreground">
            6 students (18.8%) found instructions hard to follow, and 14 reported at least one
            difficulty. Audio clarity, 3D manipulation and curriculum-level calibration are the main
            refinement targets.
          </p>
        </Card>
        <Card accent="cool" icon={<Clock className="h-5 w-5" />} label="Next steps">
          <p className="text-muted-foreground">
            A randomised multi-site trial with a pre-tested control and delayed post-test,
            device-level benchmarking, and item-level response capture for instrument validation.
          </p>
        </Card>
      </div>
    </Section>
  );
}

/* ───────── market ───────── */

function Market() {
  return (
    <Section
      id="market"
      eyebrow="Commercialization"
      title="A scalable path from classroom to country"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-fresh text-white shadow-soft">
              <Users className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Target Market</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {[
              {
                i: <School className="h-4 w-4" />,
                t: "Sri Lankan government & private primary schools",
              },
              {
                i: <BookOpen className="h-4 w-4" />,
                t: "Tuition classes for Mathematics and Parisaraya (Environment)",
              },
              {
                i: <GraduationCap className="h-4 w-4" />,
                t: "Parents of Grade 5 Scholarship candidates",
              },
            ].map((x) => (
              <li key={x.t} className="flex items-center gap-3 rounded-2xl bg-secondary p-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-card text-primary shadow-soft">
                  {x.i}
                </span>
                <span className="text-sm font-medium text-foreground">{x.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-white shadow-warm">
              <Wallet className="h-5 w-5" />
            </span>
            <h3 className="font-display text-xl font-bold">Revenue Model</h3>
          </div>
          <div className="mt-5 space-y-4">
            {[
              {
                t: "B2B Institutional Licensing",
                d: "Annual per-school licences for all four components with an admin dashboard.",
                color: "bg-gradient-primary",
              },
              {
                t: "Printed AR Storybooks",
                d: "Physical sales of the four marker-enabled storybooks per student.",
                color: "bg-gradient-warm",
              },
              {
                t: "Freemium Entry",
                d: "One chapter per subject free to lower adoption barriers.",
                color: "bg-gradient-fresh",
              },
            ].map((r, i) => (
              <div key={r.t} className="flex gap-4 rounded-2xl border bg-secondary/50 p-4">
                <span
                  className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl font-display font-bold text-white shadow-soft ${r.color}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-display font-bold text-foreground">{r.t}</p>
                  <p className="text-sm text-muted-foreground">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-gradient-cool p-8 text-white shadow-glow">
        <div className="flex flex-wrap items-center gap-6">
          <TrendingUp className="h-8 w-8" />
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold">Future Potential</h3>
            <p className="text-white/85">
              Expansion to Grades 6–9 Science and Mathematics, a Tamil-medium release, and SAARC
              region localisation position AR STEAM as a regional category leader.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ───────── resources ───────── */

function Resources() {
  return (
    <Section
      id="resources"
      eyebrow="Resource Repository"
      title="Project deliverables"
      intro="Group-level documents are below. Each component page has its own APK, proposal, slides and teacher guides."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="Research Paper"
          description={GROUP.paperTitle}
          icon={<FileText className="h-6 w-6" />}
          color="bg-gradient-primary"
          links={[{ label: "Under double-blind review", href: "#", type: "pending" }]}
        />
        <ResourceCard
          title="GitHub Repository"
          description="Source & documentation"
          icon={<Github className="h-6 w-6" />}
          color="bg-[oklch(0.2_0.02_265)]"
          links={[{ label: "View Source", href: GROUP.github, type: "github" }]}
        />
        <ResourceCard
          title="Group Presentations"
          description="Final defence slide deck"
          icon={<Presentation className="h-6 w-6" />}
          color="bg-gradient-fresh"
          links={[{ label: "Final Presentation", href: "#", type: "pending" }]}
        />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COMPONENTS.map((c) => (
          <Link
            key={c.slug}
            to="/components/$slug"
            params={{ slug: c.slug }}
            hash="resources"
            className="group flex items-center gap-3 rounded-2xl border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-xl text-white ${GRADIENT[c.tone]}`}
            >
              <ComponentIcon slug={c.slug} />
            </span>
            <span className="flex-1 text-sm font-semibold text-foreground">{c.name} resources</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
