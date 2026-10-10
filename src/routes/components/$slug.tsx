import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Play,
  FileText,
  Presentation,
  Smartphone,
  ImageIcon,
  Lightbulb,
  AlertTriangle,
  Hash,
  Timer,
  XCircle,
  RotateCcw,
  Heart,
  Languages,
  Wifi,
  ChevronRight,
} from "lucide-react";

import {
  SiteShell,
  Section,
  Card,
  MediaTile,
  InteractionCard,
  ResourceCard,
  HeroBackdrop,
  ComponentIcon,
} from "@/components/site/layout";
import { SessionTable } from "@/components/site/charts";
import {
  COMPONENTS,
  PRESENTATIONS,
  RESULTS,
  getComponent,
  type ComponentSlug,
  type StudyComponent,
} from "@/data/project";
import { ASSETS, pending, slideLink, type ComponentAssets } from "@/data/assets";

export const Route = createFileRoute("/components/$slug")({
  loader: ({ params }) => {
    const component = getComponent(params.slug);
    if (!component) throw notFound();
    return component;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Narrative-Based AR for Early STEAM Education` },
          { name: "description", content: `${loaderData.tagline}. ${loaderData.summary}` },
          { property: "og:title", content: `${loaderData.name} · AR Storybook` },
          { property: "og:description", content: loaderData.summary },
        ]
      : [],
  }),
  component: ComponentPage,
});

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "concepts", label: "Concepts" },
  { id: "interactions", label: "Interactions" },
  { id: "media", label: "Media" },
  { id: "evaluation", label: "Evaluation" },
  { id: "resources", label: "Resources" },
];

function ComponentPage() {
  const c = Route.useLoaderData();
  const assets = ASSETS[c.slug];

  return (
    <SiteShell>
      {/* key resets scroll-linked state when switching between components */}
      <div key={c.slug}>
        <Overview c={c} assets={assets} />
        <Concepts c={c} />
        <Interactions c={c} />
        <Media c={c} assets={assets} />
        <Evaluation c={c} />
        <Resources c={c} assets={assets} />
        <OtherComponents current={c.slug} />
      </div>
    </SiteShell>
  );
}

/* ───────── overview hero ───────── */

function Overview({ c, assets }: { c: StudyComponent; assets: ComponentAssets }) {
  const index = COMPONENTS.findIndex((x) => x.slug === c.slug) + 1;
  return (
    <section id="overview" className="relative isolate overflow-hidden pt-28 lg:pt-32">
      <HeroBackdrop />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-10 lg:grid-cols-2 lg:pb-32">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-sm font-medium text-muted-foreground"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/" hash="components" className="transition-colors hover:text-foreground">
              Components
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{c.short}</span>
          </nav>

          <p
            className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-comp-${c.slug} animate-fade-up`}
          >
            <ComponentIcon slug={c.slug} className="h-3.5 w-3.5" />
            Component {String(index).padStart(2, "0")} of{" "}
            {String(COMPONENTS.length).padStart(2, "0")}
            {c.studentId && <span className="text-muted-foreground">· {c.studentId}</span>}
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl xl:text-6xl text-foreground animate-fade-up [animation-delay:100ms]">
            Narrative Based AR Storybook
            <br />
            for <span className={`text-comp-${c.slug}`}>{c.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl animate-fade-up [animation-delay:200ms]">
            <strong className="font-semibold text-foreground">{c.tagline}.</strong> {c.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:300ms]">
            <a
              href={assets.demoVideo ? "#media" : "#interactions"}
              className={`inline-flex items-center gap-2 rounded-full bg-comp-${c.slug} px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-soft focus:ring-2 focus:ring-comp-${c.slug} focus:ring-offset-2`}
            >
              <Play className="h-4 w-4 fill-white text-white" />
              {assets.demoVideo ? "Watch the Demo" : "See the Interactions"}
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-full bg-card border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Resources
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 animate-fade-up [animation-delay:400ms]">
            {[
              { k: "Sessions", v: String(c.metrics.n), icon: <Hash className="h-4 w-4" /> },
              { k: "Languages", v: "සිං / EN", icon: <Languages className="h-4 w-4" /> },
              { k: "Mode", v: "Offline", icon: <Wifi className="h-4 w-4" /> },
            ].map((s) => (
              <div
                key={s.k}
                className={`rounded-2xl bg-comp-${c.slug}-bg border-transparent p-4 text-white shadow-sm`}
              >
                <dt
                  className={`flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/70`}
                >
                  {s.icon}
                  {s.k}
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold">{s.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-2 animate-fade-up [animation-delay:500ms]">
            {SECTIONS.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border bg-surface px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:300ms]">
          {assets.marker ? (
            <div className="relative overflow-hidden rounded-[2rem] bg-card p-2 shadow-sm border">
              <img
                src={assets.marker}
                alt={`${c.storybook} storybook page marker`}
                className="aspect-[4/3] w-full rounded-[1.6rem] object-cover"
              />
              <StorybookBadge c={c} />
            </div>
          ) : (
            <div
              className={`relative overflow-hidden rounded-[2rem] bg-comp-${c.slug}-bg p-10 text-white shadow-lg border-transparent`}
            >
              <span
                className={`grid h-20 w-20 place-items-center rounded-3xl bg-white/20 text-white shadow-sm backdrop-blur-sm`}
              >
                <ComponentIcon slug={c.slug} className="h-10 w-10" />
              </span>
              <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-white/70">
                Illustrated storybook
              </p>
              <p className="mt-1 font-display text-3xl font-bold">{c.storybook}</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {c.concepts.map((t) => (
                  <div
                    key={t}
                    className={`rounded-2xl bg-white/10 border border-white/20 p-4 text-sm font-semibold backdrop-blur-sm`}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StorybookBadge({ c }: { c: StudyComponent }) {
  return (
    <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-black/60 backdrop-blur-md px-5 py-3 text-white shadow-sm border border-white/10">
      <span
        className={`grid h-9 w-9 place-items-center rounded-xl bg-comp-${c.slug}-bg text-white`}
      >
        <BookOpen className="h-4 w-4" />
      </span>
      <div className="leading-tight">
        <p className="text-xs text-white/70">Storybook page marker</p>
        <p className="text-sm font-semibold">{c.storybook}</p>
      </div>
    </div>
  );
}

/* ───────── concepts ───────── */

function Concepts({ c }: { c: StudyComponent }) {
  return (
    <Section id="concepts" eyebrow="Problem & Concepts" title={`What ${c.name} brings to life`}>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card accent="warm" icon={<AlertTriangle className="h-5 w-5" />} label="The Challenge">
          <p className="text-muted-foreground">{c.problem}</p>
        </Card>
        <Card accent={c.tone} icon={<Lightbulb className="h-5 w-5" />} label="Concepts Covered">
          <ul className="space-y-2">
            {c.concepts.map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-secondary text-primary">
                  <ComponentIcon slug={c.slug} className="h-4 w-4" />
                </span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card accent="primary" icon={<BookOpen className="h-5 w-5" />} label="The Storybook">
          <p className="text-muted-foreground">
            <strong className="text-foreground italic">{c.storybook}</strong> follows a named
            protagonist through a continuous plot. Each page is both a narrative panel and an AR
            marker, so the story leads straight into the 3D scene.
          </p>
        </Card>
      </div>
    </Section>
  );
}

/* ───────── interactions ───────── */

function Interactions({ c }: { c: StudyComponent }) {
  return (
    <Section
      id="interactions"
      eyebrow="Interactions"
      title="Direct, hands-on manipulation"
      intro="Every scene uses the same tap-based model as the other components, with immediate bilingual visual and audio feedback."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {c.interactions.map((it, i) => (
          <InteractionCard
            key={it.title}
            n={String(i + 1).padStart(2, "0")}
            slug={c.slug}
            icon={<ComponentIcon slug={c.slug} className="h-6 w-6" />}
            title={it.title}
            body={it.body}
          />
        ))}
      </div>
    </Section>
  );
}

/* ───────── media ───────── */

function Media({ c, assets }: { c: StudyComponent; assets: ComponentAssets }) {
  const hasMedia = assets.demoVideo || assets.marker || assets.diagram || assets.screens.length > 0;
  return (
    <Section id="media" eyebrow="Visual Media" title="See it in action">
      {!hasMedia && (
        <div className="mx-auto max-w-2xl rounded-3xl border border-dashed bg-card/60 p-10 text-center shadow-sm">
          <span
            className={`mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-comp-${c.slug}-bg text-white`}
          >
            <ImageIcon className="h-6 w-6" />
          </span>
          <p className="mt-4 font-display text-xl font-bold text-foreground">
            Demo media coming soon
          </p>
          <p className="mt-2 text-muted-foreground">
            Screenshots, the storybook marker design and a walkthrough video for {c.name} will be
            published here.
          </p>
        </div>
      )}

      {assets.demoVideo && (
        <div className="mx-auto mb-16 grid max-w-5xl items-center gap-10 lg:grid-cols-[360px_1fr]">
          <div className="relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.5rem] bg-surface border p-1.5 shadow-sm sm:max-w-[360px]">
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.15rem] bg-black">
              <video
                src={assets.demoVideo}
                autoPlay
                loop
                muted
                playsInline
                controls
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className={`text-xs font-bold uppercase tracking-wider text-comp-${c.slug}`}>
              Prototype
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold">Product walkthrough</h3>
            <p className="mt-3 text-muted-foreground">
              A learner scans a storybook page and works through the anchored AR scene, with
              bilingual prompts guiding each step.
            </p>
          </div>
        </div>
      )}

      {(assets.marker || assets.diagram) && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {assets.marker && (
            <MediaTile
              className="lg:col-span-5"
              src={assets.marker}
              label="Storybook Page Marker Design"
              slug={c.slug}
            />
          )}
          {assets.diagram && (
            <MediaTile
              className="lg:col-span-7"
              src={assets.diagram}
              label="Component System Diagram"
              slug={c.slug}
            />
          )}
        </div>
      )}

      {assets.screens.length > 0 && (
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span
              className={`grid h-12 w-12 place-items-center rounded-xl bg-comp-${c.slug}-bg text-white shadow-sm`}
            >
              <Smartphone className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl font-bold">App UI Interaction Flow</h3>
          </div>
          <div className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-10 [-webkit-overflow-scrolling:touch]">
            {assets.screens.map((img, i) => (
              <figure
                key={img}
                className="group relative w-[260px] flex-none snap-center overflow-hidden rounded-[2.5rem] bg-card p-1.5 shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-soft sm:w-[300px]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.15rem]">
                  <img
                    src={img}
                    alt={`${c.name} UI screen ${i + 1}`}
                    className="aspect-[9/16] h-full w-full bg-black object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                      Screen {String(i + 1).padStart(2, "0")}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}

/* ───────── evaluation ───────── */

function Evaluation({ c }: { c: StudyComponent }) {
  const m = c.metrics;
  return (
    <Section
      id="evaluation"
      eyebrow="Classroom Evaluation"
      title="How learners used this component"
      intro="Session-level logs from the Learning Evaluation Module during the August 2026 classroom study."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          {
            icon: <Hash className="h-4 w-4" />,
            label: "Analysable sessions",
            value: String(m.n),
            sub: `of ${RESULTS.session.analysable} across all components`,
          },
          {
            icon: <Timer className="h-4 w-4" />,
            label: "Mean AR time",
            value: `${m.arTime[0]}s`,
            sub: `SD ${m.arTime[1]}s`,
          },
          {
            icon: <XCircle className="h-4 w-4" />,
            label: "Quiz mistakes",
            value: m.mistakes[0].toFixed(2),
            sub: "mean per session",
          },
          {
            icon: <RotateCcw className="h-4 w-4" />,
            label: "Retries",
            value: m.retries[0].toFixed(2),
            sub: "mean per session",
          },
          {
            icon: <Heart className="h-4 w-4" />,
            label: "Picked as favourite",
            value: String(c.favouriteVotes),
            sub: `students chose ${c.favouriteLabel.toLowerCase()}`,
          },
        ].map((s) => (
          <div key={s.label} className="rounded-3xl border bg-card p-5 shadow-soft">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              {s.icon}
              {s.label}
            </p>
            <p className="mt-2 font-display text-3xl font-extrabold text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <SessionTable highlight={c.slug} />
      </div>

      <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
        Knowledge-test gains were measured for the framework as a whole.{" "}
        <Link to="/" hash="domain" className="font-semibold text-primary hover:underline">
          See the group results
        </Link>{" "}
        under Domain › Results.
      </p>
    </Section>
  );
}

function Resources({ c, assets }: { c: StudyComponent; assets: ComponentAssets }) {
  return (
    <Section id="resources" eyebrow="Resource Repository" title={`${c.name} deliverables`}>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ResourceCard
          title="Research Proposal"
          description="Individual component proposal"
          icon={<FileText className="h-6 w-6" />}
          slug={c.slug}
          links={[assets.proposalDoc ?? pending()]}
        />
        <ResourceCard
          title="Presentation Slides"
          description="Proposal, progress & final decks"
          icon={<Presentation className="h-6 w-6" />}
          slug={c.slug}
          links={PRESENTATIONS.map((p) => slideLink(c.slug, p.key, p.title))}
        />
        <ResourceCard
          title="Android APK Build"
          description="Install on Android 8.0+"
          icon={<Smartphone className="h-6 w-6" />}
          slug={c.slug}
          links={[
            assets.apk ? { label: "Download APK", href: assets.apk, type: "apk" } : pending(),
          ]}
        />
        <ResourceCard
          title="Lesson Plan Kit"
          description="Teacher guides (Sinhala/EN)"
          icon={<BookOpen className="h-6 w-6" />}
          slug={c.slug}
          links={assets.guides.length ? assets.guides : [pending()]}
        />
        {assets.demoVideo && (
          <ResourceCard
            title="Demo Video"
            description="High-res product walkthrough"
            icon={<Play className="h-6 w-6" />}
            slug={c.slug}
            links={[{ label: "View Video", href: assets.demoVideo, type: "mp4" }]}
          />
        )}
      </div>
    </Section>
  );
}

function OtherComponents({ current }: { current: ComponentSlug }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">
        Other components
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {COMPONENTS.filter((x) => x.slug !== current).map((x) => (
          <Link
            key={x.slug}
            to="/components/$slug"
            params={{ slug: x.slug }}
            className="group flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <span
              className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-comp-${x.slug}-bg text-white`}
            >
              <ComponentIcon slug={x.slug} />
            </span>
            <div className="flex-1">
              <p className="font-display font-bold text-foreground">{x.name}</p>
              <p className="text-xs text-muted-foreground">{x.tagline}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </section>
  );
}
