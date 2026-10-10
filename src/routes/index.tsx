import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  BookOpen,
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
  CalendarDays,
  Award,
  ClipboardCheck,
  FileCheck2,
  ScrollText,
  Mail,
  Phone,
  MapPin,
  Send,
  Search,
  Palette,
  PenTool,
  Database,
} from "lucide-react";

import heroVideo from "@/assets/R26_IM_003_Home_Video.mp4";
import photoMendis from "@/assets/Mendis B.M.U.I.jpeg";
import photoBandara from "@/assets/Bandara M.R.J.K.jpeg";
import photoJayasundara from "@/assets/Jayasundara R.K.M.J.Y.png";
import photoIlayperuma from "@/assets/Ilayperuma M.I.jpeg";
import photoIshara from "@/assets/MR. Ishara Gamage.jpg";
import photoNushkan from "@/assets/Mr. Nushkan Nismi.png";

import { motion } from "framer-motion";

import {
  SiteShell,
  Section,
  Card,
  ResourceCard,
  HeroBackdrop,
  ComponentIcon,
} from "@/components/site/layout";
import {
  OutcomeChart,
  OutcomeTable,
  TeacherRatings,
  SurveyMeters,
  SessionTable,
} from "@/components/site/charts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  COMPARISON,
  COMPONENTS,
  CONTACT,
  GROUP,
  MILESTONES,
  PRESENTATIONS,
  RESULTS,
  SUPERVISORS,
  TEAM,
  type ComponentSlug,
  type ResourceLink,
} from "@/data/project";
import { ASSETS, pending, slideLink } from "@/data/assets";

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

const PHOTOS: Record<string, { img: string; pos: string }> = {
  "Mendis B.M.U.I": { img: photoMendis, pos: "object-[center_15%]" },
  "Bandara M.R.J.K": { img: photoBandara, pos: "object-[center_top]" },
  "Jayasundara R.K.M.J.Y": { img: photoJayasundara, pos: "object-[center_top]" },
  "Ilayperuma M.I": { img: photoIlayperuma, pos: "object-[center_top]" },
  "Mr. Ishara Gamage": { img: photoIshara, pos: "object-[center_top]" },
  "Mr. Nushkan Nismi": { img: photoNushkan, pos: "object-[center_top]" },
};

/** Cycles the four component colours across cards that don't belong to one component. */
const SLUGS = COMPONENTS.map((c) => c.slug);
const slugAt = (i: number) => SLUGS[i % SLUGS.length];

function Index() {
  return (
    <SiteShell home>
      <Home />
      <Domain />
      <Milestones />
      <Documents />
      <Presentations />
      <About />
      <Contact />
    </SiteShell>
  );
}

/* ───────── home ───────── */

function Home() {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <section id="home" className="relative isolate overflow-hidden pt-28 lg:pt-32">
        <HeroBackdrop />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:px-8 pb-20 pt-12 lg:grid-cols-2 lg:pb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary"
            >
              Final Year Research · {GROUP.year} · {GROUP.id}
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="mt-6 font-display text-3xl font-extrabold leading-[1.08] sm:text-5xl xl:text-6xl text-foreground"
            >
              Narrative Based
              <br />
              Augmented Reality for
              <br />
              <span className="text-gradient">Early STEAM Education</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
            >
              <strong className="text-foreground font-semibold">
                Four illustrated storybooks, one AR framework.
              </strong>{" "}
              Printed pages come alive as interactive 3D lessons in Sinhala and English, fully
              offline, on ordinary Android phones.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#domain"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-soft focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
              >
                <BookOpen className="h-4 w-4" />
                Explore the Research
              </a>
              <a
                href="#components"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
              >
                The Four Components
                <ChevronRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="mt-10 flex flex-wrap items-center gap-2"
            >
              {["Bilingual", "Offline", "Android 8.0+", "Unity + Vuforia"].map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted-foreground border"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-card p-2 shadow-soft border">
              <video
                ref={videoRef}
                src={heroVideo}
                autoPlay
                loop
                muted={muted}
                playsInline
                className="aspect-video w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-black/60 backdrop-blur-md px-5 py-3 text-white shadow-sm border border-white/10">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <Play className="h-4 w-4" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs text-white/70">Project Intro</p>
                    <p className="text-sm font-semibold truncate">AR Storybook Overview</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    onClick={() => {
                      const v = videoRef.current;
                      if (!v) return;
                      if (playing) v.pause();
                      else v.play();
                      setPlaying(!playing);
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-all hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
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
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/20 transition-all hover:scale-110 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white"
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
          </motion.div>
        </div>
      </section>

      <Section
        id="components"
        eyebrow="Project at a Glance"
        title="One storybook per curriculum domain"
        intro="Measuring jars filling, seeds germinating, a circuit closing, a whole split into fractions: concepts that move can't be learned from a still picture. Each component has its own illustrated storybook, and every AR scene is entered through a printed story page."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {COMPONENTS.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              <Link
                to="/components/$slug"
                params={{ slug: c.slug }}
                className={`group relative flex flex-col h-full overflow-hidden rounded-[2rem] bg-comp-${c.slug}-bg p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ring-1 ring-inset ring-white/10`}
              >
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:bg-white/15" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none" />
                <span className="absolute -bottom-10 -right-4 z-0 font-display text-[12rem] font-bold leading-none text-white/5 transition-transform duration-500 group-hover:-translate-y-4 group-hover:text-white/10 select-none">
                  {i + 1}
                </span>
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-comp-${c.slug} opacity-80`} />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md shadow-inner border border-white/20">
                    <ComponentIcon slug={c.slug} className="h-8 w-8" />
                  </span>
                  <span className="font-display text-2xl font-bold text-white/40 mix-blend-overlay">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative z-10 mt-8 font-display text-3xl font-bold text-white tracking-tight">
                  {c.name}
                </h3>
                <p className="relative z-10 mt-2 text-sm font-semibold text-white/90 uppercase tracking-widest">
                  {c.tagline}
                </p>
                <p className="relative z-10 mt-4 text-base text-white/80 leading-relaxed max-w-[90%]">
                  {c.summary}
                </p>

                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {c.concepts.map((t) => (
                    <span
                      key={t}
                      className="rounded-xl bg-white/10 border border-white/20 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md shadow-sm transition-colors hover:bg-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="relative z-10 mt-auto pt-10">
                  <div className="flex items-center justify-between border-t border-white/20 pt-5">
                    <p className="flex items-center gap-2 text-sm text-white/70">
                      <BookOpen className="h-4 w-4" />
                      <span className="italic">{c.storybook}</span>
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ───────── domain ───────── */

const DOMAIN_TABS = [
  { id: "literature", label: "Literature Survey", content: <LiteratureSurvey /> },
  { id: "gap", label: "Research Gap", content: <ResearchGap /> },
  { id: "problem", label: "Research Problem", content: <ResearchProblem /> },
  { id: "objectives", label: "Research Objectives", content: <Objectives /> },
  { id: "methodology", label: "Methodology", content: <Methodology /> },
  { id: "results", label: "Results", content: <Results /> },
  { id: "technologies", label: "Technologies Used", content: <Technologies /> },
  { id: "commercialization", label: "Commercialization", content: <Commercialization /> },
];

function Domain() {
  return (
    <Section
      id="domain"
      eyebrow="Domain"
      title="The research behind the storybooks"
      intro="What the literature says, where it falls short, and how this project addresses it."
    >
      <Tabs defaultValue={DOMAIN_TABS[0].id}>
        <TabsList className="mx-auto mb-12 flex h-auto w-full flex-wrap justify-center gap-1 rounded-2xl border bg-surface p-1.5 shadow-sm">
          {DOMAIN_TABS.map((t) => (
            <TabsTrigger
              key={t.id}
              value={t.id}
              className="rounded-xl px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {DOMAIN_TABS.map((t) => (
          <TabsContent key={t.id} value={t.id}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {t.content}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

function SubHeading({ children, intro }: { children: React.ReactNode; intro?: string }) {
  return (
    <div className="mb-8">
      <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{children}</h3>
      {intro && <p className="mt-2 max-w-3xl text-muted-foreground">{intro}</p>}
    </div>
  );
}

function LiteratureSurvey() {
  return (
    <div>
      <SubHeading intro="A review of IEEE Xplore, Scopus, ScienceDirect and Google Scholar covering 2012–2025.">
        Literature Survey
      </SubHeading>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card
          icon={<Search className="h-5 w-5" />}
          label="AR in primary education"
          className="bg-comp-measurement-bg text-white border-transparent"
        >
          <p className="text-white/90">
            Augmented reality consistently improves engagement and conceptual understanding in
            primary STEM, especially for content that is{" "}
            <strong className="text-white">spatial, dynamic or invisible</strong>, such as forces,
            life cycles and measurement.
          </p>
        </Card>
        <Card
          icon={<BookOpen className="h-5 w-5" />}
          label="Narrative learning"
          className="bg-comp-physical-science-bg text-white border-transparent"
        >
          <p className="text-white/90">
            AR storybooks such as Metabook show that a{" "}
            <strong className="text-white">continuous story</strong> sustains young learners'
            attention and gives each activity a purpose, but existing titles are generic and not
            curriculum-aligned.
          </p>
        </Card>
        <Card
          icon={<School className="h-5 w-5" />}
          label="Sri Lankan context"
          className="bg-comp-life-science-bg text-white border-transparent"
        >
          <p className="text-white/90">
            Sri Lanka has strong access to basic education but is at an{" "}
            <strong className="text-white">emerging stage</strong> of classroom technology.
            Instruction relies on printed textbooks, and manipulatives are unevenly distributed.
          </p>
        </Card>
      </div>

      <div className="mt-10 overflow-x-auto rounded-3xl border bg-card p-4 shadow-soft sm:p-6">
        <table className="w-full min-w-[560px] text-sm">
          <caption className="mb-4 text-left">
            <span className="block font-display text-lg font-bold text-foreground">
              Compared with the closest AR education systems
            </span>
            <span className="block text-sm text-muted-foreground">N/R = not reported.</span>
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
    </div>
  );
}

function ResearchGap() {
  const gaps: { slug: ComponentSlug; icon: React.ReactNode; label: string; body: string }[] = [
    {
      slug: "measurement",
      icon: <Languages className="h-5 w-5" />,
      label: "Monolingual",
      body: "AR learning tools are overwhelmingly English-only. None support Sinhala-medium learners.",
    },
    {
      slug: "life-science",
      icon: <Layers className="h-5 w-5" />,
      label: "Single subject",
      body: "Each tool covers one subject, so every subject brings a new app and a new interaction model.",
    },
    {
      slug: "physical-science",
      icon: <Wifi className="h-5 w-5" />,
      label: "Connectivity",
      body: "Offline operation is rarely reported, yet many rural schools have unreliable internet.",
    },
    {
      slug: "number-concepts",
      icon: <Target className="h-5 w-5" />,
      label: "Curriculum fit",
      body: "Systems are built for curricula outside South Asia and do not map to the Sri Lankan Grade 4–5 syllabus.",
    },
  ];
  return (
    <div>
      <SubHeading intro="No reviewed system combines all of the properties a Sri Lankan primary classroom needs.">
        Research Gap
      </SubHeading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {gaps.map((g) => (
          <Card key={g.label} slug={g.slug} icon={g.icon} label={g.label}>
            <p>{g.body}</p>
          </Card>
        ))}
      </div>
      <p className="mt-8 rounded-2xl border bg-primary/10 p-6 text-foreground">
        <strong className="text-primary">The gap:</strong> a bilingual, offline, multi-domain AR
        framework, built around curriculum-aligned narrative storybooks and evaluated in a real Sri
        Lankan classroom.
      </p>
    </div>
  );
}

function ResearchProblem() {
  return (
    <div>
      <SubHeading>Research Problem</SubHeading>
      <blockquote className="rounded-2xl border-l-4 border-primary bg-card p-6 text-lg text-foreground shadow-sm">
        How can a narrative-based, bilingual AR storybook framework help Sri Lankan Grade 4–5
        students understand STEAM concepts that static textbook illustrations cannot show?
      </blockquote>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card
          icon={<AlertTriangle className="h-5 w-5" />}
          label="The Challenge"
          className="bg-comp-physical-science-bg text-white border-transparent"
        >
          <p className="text-white/90">
            Grade 4–5 students struggle with topics that need{" "}
            <strong className="text-white">visual and process-based reasoning</strong>, from
            measurement instruments and life cycles to circuits, fractions and place value.
          </p>
        </Card>
        <Card
          icon={<School className="h-5 w-5" />}
          label="The Context"
          className="bg-comp-measurement-bg text-white border-transparent"
        >
          <p className="text-white/90">
            These concepts unfold in three dimensions and over time. Reduced to a printed
            illustration, learners have no way to observe the process itself.
          </p>
        </Card>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
          <div
            key={s.v}
            className="flex flex-col h-full rounded-3xl border bg-card p-6 shadow-soft"
          >
            <p className="font-display text-3xl font-extrabold text-gradient">{s.v}</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{s.k}</p>
            <p className="text-sm text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Objectives() {
  return (
    <div>
      <SubHeading>Research Objectives</SubHeading>
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="rounded-3xl border bg-card p-8 shadow-card lg:col-span-3">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">Main objective</p>
          <p className="mt-2 font-display text-xl font-bold text-foreground">
            Design, build and evaluate a bilingual, offline, narrative-based AR storybook framework
            for Sri Lankan Grade 4–5 STEAM education.
          </p>
          <p className="mt-6 text-xs font-bold uppercase tracking-wider text-primary">
            Specific objectives
          </p>
          <ul className="mt-3 space-y-3">
            {[
              ...COMPONENTS.map((c) => `Develop the ${c.name} AR storybook, "${c.storybook}".`),
              "Provide one shared Sinhala–English content layer and tap-based interaction model across all four components.",
              "Run fully offline on ordinary Android phones, with optional anonymised log sync.",
              "Evaluate learning gains, usability and engagement in a real classroom.",
            ].map((o) => (
              <li key={o} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{o}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-card border p-8 shadow-sm lg:col-span-2">
          <h4 className="font-display text-xl font-bold">Research Questions</h4>
          <ul className="mt-5 space-y-5">
            <li>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                RQ1 · Learning outcome
              </p>
              <p className="mt-1 text-muted-foreground">
                What learning gains follow narrative-based AR storybook instruction, and is
                post-instruction performance higher than after textbook instruction?
              </p>
            </li>
            <li>
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                RQ2 · Usability & engagement
              </p>
              <p className="mt-1 text-muted-foreground">
                How do learners and teachers experience usability, engagement and feedback quality,
                and what do the interaction logs show about on-task behaviour?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Methodology() {
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
    <div>
      <SubHeading intro="Four architecturally independent but structurally consistent apps: the same offline Vuforia + Unity pipeline and the same bilingual services layer.">
        Methodology
      </SubHeading>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            AR content pipeline
          </p>
          <ol className="mt-6 space-y-2">
            {pipeline.map((p, i) => (
              <li key={p.t}>
                <div className="flex gap-4 rounded-2xl bg-surface p-4 border shadow-sm">
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
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

        <div className="rounded-3xl bg-card border p-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Shared services layer
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.t}
                className="rounded-2xl bg-surface p-4 border shadow-sm flex flex-col h-full"
              >
                <div className="text-foreground">{s.icon}</div>
                <p className="mt-2 font-display font-bold text-foreground">{s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border bg-card p-8 shadow-card">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm">
            <FlaskConical className="h-5 w-5" />
          </span>
          <h4 className="font-display text-xl font-bold">Evaluation design</h4>
        </div>
        <p className="mt-4 text-muted-foreground">
          A{" "}
          <strong className="text-foreground">
            quasi-experimental, non-equivalent control-group
          </strong>{" "}
          study at a private tuition institute in Sri Lanka in August 2026. Students completed a{" "}
          <strong className="text-foreground">12-item, 55-point</strong> curriculum-aligned test
          written in Sinhala and reviewed by teachers. Engagement was measured through instrumented
          AR sessions, a student survey and a teacher panel.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: `Experimental · n = ${RESULTS.arN}`, v: "Pre-test → AR session → Post-test" },
            { k: `Control · n = ${RESULTS.controlN}`, v: "Textbook instruction → Test" },
            { k: "Teacher panel · n = 5", v: "Five-point Likert review" },
            {
              k: "Session logs",
              v: `${RESULTS.session.logged} logged · ${RESULTS.session.analysable} analysable`,
            },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl bg-surface border p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                {x.k}
              </p>
              <p className="mt-1 font-display font-bold text-foreground">{x.v}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-surface border p-4 text-xs text-muted-foreground">
          Institute approval and guardian consent were obtained. Logs are keyed to anonymous session
          and device IDs only.
        </p>
      </div>
    </div>
  );
}

function Results() {
  const r = RESULTS;
  return (
    <div>
      <SubHeading
        intro={`${r.improved} of ${r.arN} students improved after a single AR session, and none declined.`}
      >
        Results
      </SubHeading>
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
            icon: <CheckCircle2 className="h-4 w-4" />,
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
          <div className="mt-auto rounded-2xl bg-surface border p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-primary">
              <AlertTriangle className="h-4 w-4" /> Reading these results
            </p>
            <p className="mt-2">
              Assignment was by intact class and the control group sat no pre-test, so the study
              shows an
              <strong className="text-foreground font-semibold"> association</strong> between AR
              instruction and higher attainment rather than firmly attributed causation. The
              single-session, immediate post-test design means the effect is an upper bound.
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
        <Card slug="life-science" icon={<CheckCircle2 className="h-5 w-5" />} label="What worked">
          <p>
            Teachers rated attention retention and narrative enjoyment highest (4.8/5). Favourite
            activities were spread evenly across all four domains, so no single component carried
            the appeal.
          </p>
        </Card>
        <Card slug="measurement" icon={<Lightbulb className="h-5 w-5" />} label="What to improve">
          <p>
            6 students (18.8%) found instructions hard to follow, and 14 reported at least one
            difficulty. Audio clarity, 3D manipulation and curriculum-level calibration are the main
            refinement targets.
          </p>
        </Card>
        <Card slug="physical-science" icon={<Clock className="h-5 w-5" />} label="Next steps">
          <p>
            A randomised multi-site trial with a pre-tested control and delayed post-test,
            device-level benchmarking, and item-level response capture for instrument validation.
          </p>
        </Card>
      </div>
    </div>
  );
}

function Technologies() {
  const tech = [
    {
      icon: <Boxes className="h-5 w-5" />,
      t: "Unity 3D",
      d: "Cross-platform engine running the AR scenes, interactions and C# app logic.",
    },
    {
      icon: <ScanLine className="h-5 w-5" />,
      t: "Vuforia Engine",
      d: "On-device ImageTarget recognition and tracking of the printed storybook pages.",
    },
    {
      icon: <PenTool className="h-5 w-5" />,
      t: "Blender",
      d: "Modelling and animation of the 3D objects, characters and processes.",
    },
    {
      icon: <Palette className="h-5 w-5" />,
      t: "Adobe Illustrator",
      d: "Storybook illustration and layout, designed to double as AR markers.",
    },
    {
      icon: <Database className="h-5 w-5" />,
      t: "Firebase",
      d: "Optional sync of anonymised session logs when a connection is available.",
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      t: "Android",
      d: "Target platform: ordinary Android 8.0+ phones, no headsets or depth sensors.",
    },
  ];
  return (
    <div>
      <SubHeading>Technologies Used</SubHeading>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tech.map((x, i) => (
          <div
            key={x.t}
            className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-soft"
          >
            <span
              className={`grid h-11 w-11 place-items-center rounded-xl bg-comp-${slugAt(i)} text-white shadow-sm`}
            >
              {x.icon}
            </span>
            <p className="mt-4 font-display text-lg font-bold text-foreground">{x.t}</p>
            <p className="mt-1 text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: <Wifi className="h-5 w-5" />,
            t: "Fully offline",
            d: "Tracking and rendering run on-device after install.",
          },
          {
            icon: <Smartphone className="h-5 w-5" />,
            t: "Low-cost hardware",
            d: "No headsets, depth sensors or peripherals.",
          },
          {
            icon: <ShieldCheck className="h-5 w-5" />,
            t: "Privacy by design",
            d: "Logs keyed to anonymous session and device IDs only.",
          },
        ].map((f) => (
          <div key={f.t} className="rounded-2xl bg-surface border p-5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary">
              {f.icon}
            </span>
            <p className="mt-3 font-display font-bold text-foreground">{f.t}</p>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Commercialization() {
  return (
    <div>
      <SubHeading>A scalable path from classroom to country</SubHeading>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm">
              <Users className="h-5 w-5" />
            </span>
            <h4 className="font-display text-xl font-bold">Target Market</h4>
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
              <li key={x.t} className="flex items-center gap-3 rounded-2xl bg-surface border p-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-card border text-muted-foreground shadow-sm">
                  {x.i}
                </span>
                <span className="text-sm font-medium text-foreground">{x.t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border bg-card p-8 shadow-card">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary shadow-sm">
              <Wallet className="h-5 w-5" />
            </span>
            <h4 className="font-display text-xl font-bold">Revenue Model</h4>
          </div>
          <div className="mt-5 space-y-4">
            {[
              {
                t: "B2B Institutional Licensing",
                d: "Annual per-school licences for all four components with an admin dashboard.",
                slug: "measurement",
              },
              {
                t: "Printed AR Storybooks",
                d: "Physical sales of the four marker-enabled storybooks per student.",
                slug: "physical-science",
              },
              {
                t: "Freemium Entry",
                d: "One chapter per subject free to lower adoption barriers.",
                slug: "life-science",
              },
            ].map((r, i) => (
              <div key={r.t} className="flex gap-4 rounded-2xl border bg-surface p-4">
                <span
                  className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl font-display font-bold shadow-sm bg-comp-${r.slug}-bg text-white`}
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

      <div className="mt-8 rounded-3xl bg-card border p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-6">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
            <TrendingUp className="h-6 w-6" />
          </span>
          <div className="flex-1">
            <h4 className="font-display text-xl font-bold text-foreground">Future Potential</h4>
            <p className="mt-1 text-muted-foreground">
              Expansion to Grades 6–9 Science and Mathematics, a Tamil-medium release, and SAARC
              region localisation position AR STEAM as a regional category leader.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────── milestones ───────── */

function Milestones() {
  return (
    <Section
      id="milestones"
      eyebrow="Milestones"
      title="Project assessments"
      intro="Select an assessment to see what it covers, when it takes place and the marks allocated."
    >
      <Accordion type="single" collapsible defaultValue="0" className="mx-auto max-w-4xl space-y-4">
        {MILESTONES.map((m, i) => (
          <AccordionItem
            key={m.title}
            value={String(i)}
            className="overflow-hidden rounded-2xl border bg-card px-6 shadow-sm"
          >
            <AccordionTrigger className="gap-4 py-5 hover:no-underline">
              <span className="flex flex-1 flex-wrap items-center gap-4">
                <span
                  className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-comp-${slugAt(i)}-bg font-display font-bold text-white shadow-sm`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-lg font-bold text-foreground">
                  {m.title}
                </span>
                <span className="flex gap-2 text-xs font-semibold">
                  <span className="inline-flex items-center gap-1 rounded-full border bg-surface px-3 py-1 text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5" /> {m.date}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border bg-surface px-3 py-1 text-muted-foreground">
                    <Award className="h-3.5 w-3.5" /> {m.marks} marks
                  </span>
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 sm:pl-[3.75rem] text-base">
              <p className="text-muted-foreground">{m.description}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-primary">
                Deliverables
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {m.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-md border bg-surface px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/* ───────── documents ───────── */

/** One link per component: the component's file if it exists, otherwise a pending entry. */
function perComponent(pick: (slug: ComponentSlug) => ResourceLink | undefined): ResourceLink[] {
  return COMPONENTS.map((c) => {
    const link = pick(c.slug);
    return link ? { ...link, label: c.short } : pending(c.short);
  });
}

function Documents() {
  return (
    <Section
      id="documents"
      eyebrow="Documents"
      title="Project documents"
      intro="Documents produced so far and those still pending. Pending items will be linked here once submitted."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="Project Charter"
          description="Group scope, roles and schedule"
          icon={<ScrollText className="h-6 w-6" />}
          slug="measurement"
          links={[pending("Project Charter")]}
        />
        <ResourceCard
          title="Proposal Documents"
          description="Individual component proposals"
          icon={<FileText className="h-6 w-6" />}
          slug="physical-science"
          links={perComponent((s) => ASSETS[s].proposalDoc)}
        />
        <ResourceCard
          title="Check List Documents"
          description="Progress check lists"
          icon={<ClipboardCheck className="h-6 w-6" />}
          slug="life-science"
          links={[pending("Check List 1"), pending("Check List 2")]}
        />
        <ResourceCard
          title="Final Documents"
          description="Group report and individual final reports"
          icon={<FileCheck2 className="h-6 w-6" />}
          slug="number-concepts"
          links={[pending("Group Final Report"), ...perComponent((s) => ASSETS[s].finalDoc)]}
        />
        <ResourceCard
          title="Research Paper"
          description={GROUP.paperTitle}
          icon={<FileText className="h-6 w-6" />}
          slug="measurement"
          links={[pending("Under double-blind review")]}
        />
        <ResourceCard
          title="Source & Builds"
          description="Source code, APKs and teacher guides"
          icon={<Github className="h-6 w-6" />}
          slug="physical-science"
          links={[
            { label: "GitHub Repository", href: GROUP.github, type: "github" },
            ...COMPONENTS.flatMap((c) => {
              const a = ASSETS[c.slug];
              return [
                ...(a.apk ? [{ label: `${c.short} APK`, href: a.apk, type: "apk" as const }] : []),
                ...a.guides.map((g) => ({ ...g, label: `${c.short}: ${g.label}` })),
              ];
            }),
          ]}
        />
      </div>
    </Section>
  );
}

/* ───────── presentations ───────── */

function Presentations() {
  return (
    <Section
      id="presentations"
      eyebrow="Presentations"
      title="Presentation slides"
      intro="Slides from past presentations for each component. Upcoming presentations will be added as they are delivered."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PRESENTATIONS.map((p, i) => (
          <ResourceCard
            key={p.key}
            title={p.title}
            description={p.description}
            icon={<Presentation className="h-6 w-6" />}
            slug={slugAt(i)}
            links={COMPONENTS.map((c) => slideLink(c.slug, p.key, c.short))}
          />
        ))}
      </div>
    </Section>
  );
}

/* ───────── about us ───────── */

function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="The research team"
      intro={`${GROUP.id} · Final year research group, ${GROUP.institute} ${GROUP.year}.`}
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <Person {...m} />
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-6 border-t pt-10">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          <GraduationCap className="h-5 w-5" /> Supervised by
        </p>
        <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          {SUPERVISORS.map((s) => (
            <Person key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border bg-surface p-6">
        <p className="flex items-center gap-2 font-bold uppercase tracking-wider text-xs text-primary">
          <Award className="h-4 w-4" /> Achievements
        </p>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-muted-foreground">
          <li>Research paper "{GROUP.paperTitle}" submitted and under double-blind review.</li>
          <li>
            Classroom evaluation with {RESULTS.arN + RESULTS.controlN} students and a five-teacher
            panel.
          </li>
        </ul>
      </div>
    </Section>
  );
}

function Person({ name, role, email }: { name: string; role: string; email?: string }) {
  const photo = PHOTOS[name];
  return (
    <div className="group flex h-full flex-col items-center gap-5 rounded-2xl bg-card p-6 text-center border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
      {photo && (
        <div className="relative h-40 w-40 overflow-hidden rounded-full bg-surface p-1.5 shadow-sm border">
          <img
            src={photo.img}
            alt={name}
            loading="lazy"
            className={`h-full w-full rounded-full object-cover ${photo.pos}`}
          />
        </div>
      )}
      <div>
        <p className="text-base font-bold text-foreground">{name}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {role}
        </p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5" /> {email}
          </a>
        )}
      </div>
    </div>
  );
}

/* ───────── contact us ───────── */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend: the template opens the visitor's mail client with the message pre-filled.
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `[${GROUP.id}] ${form.subject}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const field =
    "w-full rounded-xl border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <Section
      id="contact"
      eyebrow="Contact Us"
      title="Get in touch"
      intro="Questions about the research, the storybooks or a classroom trial? Send us a message."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {[
            {
              icon: <Mail className="h-5 w-5" />,
              k: "Email",
              v: CONTACT.email,
              href: `mailto:${CONTACT.email}`,
            },
            {
              icon: <Phone className="h-5 w-5" />,
              k: "Phone (SLIIT)",
              v: CONTACT.phone,
              href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
            },
            {
              icon: <MapPin className="h-5 w-5" />,
              k: CONTACT.institute,
              v: CONTACT.address,
            },
          ].map((c, i) => (
            <div
              key={c.k}
              className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-sm"
            >
              <span
                className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-comp-${slugAt(i)} text-white shadow-sm`}
              >
                {c.icon}
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {c.k}
                </p>
                {c.href ? (
                  <a href={c.href} className="font-semibold text-foreground hover:text-primary">
                    {c.v}
                  </a>
                ) : (
                  <p className="font-semibold text-foreground">{c.v}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={send}
          className="space-y-4 rounded-3xl border bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-1.5 text-sm font-medium">
              <span>Name</span>
              <input required value={form.name} onChange={set("name")} className={field} />
            </label>
            <label className="space-y-1.5 text-sm font-medium">
              <span>Email</span>
              <input
                required
                type="email"
                value={form.email}
                onChange={set("email")}
                className={field}
              />
            </label>
          </div>
          <label className="block space-y-1.5 text-sm font-medium">
            <span>Subject</span>
            <input required value={form.subject} onChange={set("subject")} className={field} />
          </label>
          <label className="block space-y-1.5 text-sm font-medium">
            <span>Message</span>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={set("message")}
              className={field}
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-soft focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none"
          >
            <Send className="h-4 w-4" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
