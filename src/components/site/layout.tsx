import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Sun,
  Moon,
  Ruler,
  Sprout,
  Atom,
  Calculator,
} from "lucide-react";

import { COMPONENTS, GROUP, type ComponentSlug, type Tone } from "@/data/project";

export const GRADIENT: Record<Tone, string> = {
  primary: "bg-gradient-primary",
  warm: "bg-gradient-warm",
  cool: "bg-gradient-cool",
  fresh: "bg-gradient-fresh",
};

export function ComponentIcon({
  slug,
  className = "h-5 w-5",
}: {
  slug: ComponentSlug;
  className?: string;
}) {
  const Icon = {
    measurement: Ruler,
    "life-science": Sprout,
    "physical-science": Atom,
    "number-concepts": Calculator,
  }[slug];
  return <Icon className={className} />;
}

/* ───────── theme ───────── */

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) as
      | "light"
      | "dark"
      | null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode); theme still applies for this visit
    }
  };

  return { theme, toggle };
}

/* ───────── page shell ───────── */

export type NavItem = { id: string; label: string };

export function SiteShell({
  nav,
  home = false,
  children,
}: {
  nav: NavItem[];
  home?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Background />
      <SiteHeader nav={nav} home={home} />
      {children}
      <SiteFooter />
    </div>
  );
}

function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute -top-32 -left-32 h-[800px] w-[800px] animate-pulse-glow rounded-full bg-gradient-cool opacity-30 blur-[150px]" />
      <div className="absolute top-1/4 -right-40 h-[900px] w-[900px] animate-float-slow rounded-full bg-gradient-warm opacity-20 blur-[150px]" />
      <div className="absolute bottom-10 left-1/4 h-[700px] w-[700px] animate-float-medium rounded-full bg-gradient-fresh opacity-20 blur-[150px]" />
    </div>
  );
}

function SiteHeader({ nav, home }: { nav: NavItem[]; home: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(nav[0]?.id ?? "");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [nav]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}
        >
          <Link
            to="/"
            className={`flex items-center gap-2 ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-sm font-bold tracking-tight sm:text-base">
              AR<span className="text-gradient">STEAM</span>.lk
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                    active === n.id
                      ? scrolled
                        ? "bg-foreground/10 text-foreground font-semibold"
                        : "bg-white/15 text-white font-semibold"
                      : scrolled
                        ? "text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-foreground shadow-soft backdrop-blur transition-all hover:scale-105 hover:text-primary"
            >
              <Sun
                className={`h-4 w-4 transition-all ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
              />
              <Moon
                className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`}
              />
            </button>

            {home ? (
              <a
                href="#components"
                className="group hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] lg:inline-flex"
              >
                Explore Components
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ) : (
              <Link
                to="/"
                hash="components"
                className="group hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] lg:inline-flex"
              >
                All Components
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}

            <button
              className={`rounded-full p-2 lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="mt-2 rounded-2xl glass p-3 shadow-soft lg:hidden">
            <div className="grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
            </div>
            <p className="mt-3 border-t border-border px-3 pt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Components
            </p>
            <div className="mt-1 grid grid-cols-2 gap-2">
              {COMPONENTS.map((c) => (
                <Link
                  key={c.slug}
                  to="/components/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  <ComponentIcon slug={c.slug} className="h-4 w-4 text-primary" />
                  {c.short}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative mt-12 overflow-hidden bg-[oklch(0.15_0.04_265)] py-12 text-white/80">
      <div className="absolute inset-0 bg-hero opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display font-bold text-white">AR STEAM.lk</p>
              <p className="text-xs text-white/60">
                {GROUP.id} · {GROUP.institute} {GROUP.year}
              </p>
              <p className="mt-3 max-w-sm text-sm text-white/60">{GROUP.title}</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Components
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {COMPONENTS.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/components/$slug"
                    params={{ slug: c.slug }}
                    className="hover:text-white"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Supervised by
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Mr. Ishara Gamage</li>
              <li>Mr. Nushkan Nismi</li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {GROUP.year} Mendis B.M.U.I, Bandara M.R.J.K, Jayasundara R.K.M.J.Y, Ilayperuma M.I ·{" "}
          {GROUP.institute}
        </p>
      </div>
    </footer>
  );
}

/* ───────── content helpers ───────── */

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative overflow-hidden scroll-mt-24 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-multiply dark:mix-blend-screen dark:opacity-20">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 animate-float-slow rounded-full bg-gradient-cool opacity-10 blur-[100px]" />
        <div className="absolute right-0 top-3/4 h-[400px] w-[400px] translate-x-1/3 animate-float-medium rounded-full bg-gradient-warm opacity-10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Card({
  icon,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: Tone;
  children: React.ReactNode;
}) {
  const grad = GRADIENT[accent];
  const shadow = accent === "warm" ? "shadow-warm" : "shadow-soft";
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className={`absolute inset-x-0 top-0 h-1 ${grad}`} />
      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-xl text-white ${grad} ${shadow}`}
        >
          {icon}
        </span>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
      <div className="mt-5 text-base leading-relaxed">{children}</div>
    </div>
  );
}

export function MediaTile({
  src,
  label,
  tone,
  className = "",
}: {
  src: string;
  label: string;
  tone: Tone;
  className?: string;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden rounded-3xl shadow-card ring-1 ring-border cursor-zoom-in ${className}`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={1024}
        height={1024}
        className="h-full min-h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_265/0.85)] via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-white">
        <span className={`h-8 w-1.5 rounded-full ${GRADIENT[tone]}`} />
        <span className="font-display font-semibold drop-shadow">{label}</span>
      </div>
    </a>
  );
}

export function InteractionCard({
  n,
  icon,
  title,
  body,
  tone,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  tone: Tone;
}) {
  const grad = GRADIENT[tone];
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${grad} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
      />
      <div className="relative flex items-start gap-4">
        <span
          className={`grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl text-white shadow-soft ${grad}`}
        >
          {icon}
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Interaction {n}
          </span>
          <h3 className="mt-1 font-display text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function ResourceCard({
  title,
  description,
  icon,
  color,
  links,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  links: { label: string; href: string; type: string; download?: string }[];
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-soft transition-all hover:shadow-card">
      <div className="mb-5 flex items-start gap-4">
        <span
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-soft ${color}`}
        >
          {icon}
        </span>
        <div className="flex-1">
          <p className="font-display text-base font-bold text-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="mt-auto space-y-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            download={l.download}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={l.type === "pending"}
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${l.type === "pending" ? "pointer-events-none bg-secondary/50 text-muted-foreground" : "bg-secondary hover:bg-primary/10 hover:text-primary"}`}
          >
            <span className="font-semibold">{l.label}</span>
            <span className="rounded-full bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
              {l.type === "link" ? "G-Slides" : l.type}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit h-[600px] w-[600px] rounded-full border border-white/[0.06]" />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-orbit-reverse h-[900px] w-[900px] rounded-full border border-white/[0.04]" />
        </div>
        <div
          className="animate-particle absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-steam-orange/60 shadow-[0_0_12px_oklch(0.75_0.17_55/0.8)]"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="animate-particle absolute left-[65%] top-[70%] h-3 w-3 rounded-full bg-steam-green/60 shadow-[0_0_14px_oklch(0.74_0.16_155/0.8)]"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="animate-particle absolute left-[90%] top-[50%] h-2.5 w-2.5 rounded-full bg-steam-yellow/60 shadow-[0_0_15px_oklch(0.86_0.16_90/0.8)]"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="animate-particle absolute left-[80%] top-[15%] h-3.5 w-3.5 rounded-full border border-steam-purple/60 shadow-[0_0_10px_oklch(0.65_0.2_300/0.7)]"
          style={{ animationDelay: "1.5s", animationDuration: "12s" }}
        />
        <div
          className="animate-particle absolute left-[45%] top-[10%] h-4 w-4 rounded-full border border-steam-orange/50 shadow-[0_0_10px_oklch(0.75_0.17_55/0.6)]"
          style={{ animationDelay: "6s" }}
        />
        <div
          className="animate-particle absolute left-[25%] top-[75%] flex h-4 w-4 items-center justify-center text-sm font-light text-steam-pink/80"
          style={{ animationDelay: "4.5s", animationDuration: "10s" }}
        >
          +
        </div>
        <div
          className="animate-particle absolute left-[72%] top-[85%] flex h-4 w-4 items-center justify-center text-sm font-light text-steam-purple/70"
          style={{ animationDelay: "7s", animationDuration: "11s" }}
        >
          +
        </div>
        <div
          className="animate-particle absolute left-[5%] top-[55%] h-1.5 w-1.5 rotate-45 rounded-[1px] bg-white/60"
          style={{ animationDelay: "5s", animationDuration: "9s" }}
        />
        <div
          className="animate-particle absolute left-[35%] top-[40%] h-2 w-2 rounded-[2px] bg-steam-green/50"
          style={{ animationDelay: "1s", animationDuration: "15s" }}
        />
        <div className="absolute left-[15%] top-[30%] h-32 w-32 animate-pulse-glow rounded-full bg-gradient-cool opacity-15 blur-[40px]" />
        <div
          className="absolute right-[10%] top-[60%] h-40 w-40 animate-pulse-glow rounded-full bg-gradient-warm opacity-15 blur-[40px]"
          style={{ animationDelay: "2s" }}
        />
      </div>
    </>
  );
}
