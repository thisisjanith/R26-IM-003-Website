import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
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
      // storage unavailable
    }
  };

  return { theme, toggle };
}

/* ───────── page shell ───────── */

export type NavItem = { id: string; label: string };

/** Main tabs, in the order required by the CDAP website structure. Same on every page. */
export const SITE_NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "domain", label: "Domain" },
  { id: "milestones", label: "Milestones" },
  { id: "documents", label: "Documents" },
  { id: "presentations", label: "Presentations" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

export function SiteShell({
  home = false,
  children,
}: {
  home?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-200">
      <SiteHeader nav={SITE_NAV} home={home} />
      {children}
      <SiteFooter />
    </div>
  );
}

function SiteHeader({ nav, home }: { nav: NavItem[]; home: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Scroll-spy only applies on the home page, where the sections live.
  const [active, setActive] = useState(home ? (nav[0]?.id ?? "") : "");
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!home) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -70% 0px", threshold: 0 }
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [nav, home]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <span className="font-display text-lg font-bold tracking-tight">
              AR<span className="text-gradient">STEAM</span>.lk
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:gap-2 xl:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <NavLink
                  item={n}
                  home={home}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                    active === n.id
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative grid h-9 w-9 place-items-center rounded-full bg-surface border border-border text-foreground transition-all hover:bg-border focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
              <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`} />
            </button>

            {home ? (
              <a
                href="#components"
                className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground whitespace-nowrap transition-transform hover:-translate-y-0.5 hover:shadow-soft focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:flex"
              >
                View Components
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : (
              <Link
                to="/"
                hash="components"
                className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground whitespace-nowrap transition-transform hover:-translate-y-0.5 hover:shadow-soft focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none md:flex"
              >
                All Components
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}

            <button
              className="rounded-full p-2 text-foreground xl:hidden hover:bg-surface focus:ring-2 focus:ring-primary focus:outline-none"
              onClick={() => setOpen((s) => !s)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t bg-background px-2 pb-4 pt-2 shadow-sm xl:hidden animate-fade-up">
            <div className="grid grid-cols-2 gap-2">
              {nav.map((n) => (
                <NavLink
                  key={n.id}
                  item={n}
                  home={home}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
                />
              ))}
            </div>
            <p className="mt-4 border-t px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Components
            </p>
            <div className="mt-2 grid grid-cols-1 gap-2">
              {COMPONENTS.map((c) => (
                <Link
                  key={c.slug}
                  to="/components/$slug"
                  params={{ slug: c.slug }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-md bg-comp-${c.slug} text-white`}>
                    <ComponentIcon slug={c.slug} className="h-4 w-4" />
                  </span>
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

/** In-page anchor on the home page; a link back to the home section everywhere else. */
function NavLink({
  item,
  home,
  className,
  onClick,
}: {
  item: NavItem;
  home: boolean;
  className: string;
  onClick?: () => void;
}) {
  return home ? (
    <a href={`#${item.id}`} onClick={onClick} className={className}>
      {item.label}
    </a>
  ) : (
    <Link to="/" hash={item.id} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t bg-surface py-12 text-foreground transition-colors duration-200 mt-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-display text-lg font-bold">AR STEAM.lk</p>
              <p className="text-sm font-medium text-primary mt-1">
                {GROUP.id}
              </p>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              {GROUP.title}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Quick links
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {SITE_NAV.map((n) => (
                <li key={n.id}>
                  <Link
                    to="/"
                    hash={n.id}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Components
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {COMPONENTS.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/components/$slug"
                    params={{ slug: c.slug }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Supervised by
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Mr. Ishara Gamage</li>
              <li>Mr. Nushkan Nismi</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between border-t pt-8 sm:flex-row gap-4">
          <p className="text-sm text-muted-foreground">
            © {GROUP.year} {GROUP.institute} · Mendis, Bandara, Jayasundara, Ilayperuma
          </p>
        </div>
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
    <section id={id} className="relative scroll-mt-24 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            {title}
          </h2>
          {intro && <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Card({
  icon,
  label,
  slug,
  accent,
  className = "",
  children,
}: {
  icon: React.ReactNode;
  label: string;
  slug?: ComponentSlug;
  accent?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const isColored = className?.includes('text-white') || className?.includes('bg-comp-');

  return (
    <div className={`group relative flex flex-col overflow-hidden rounded-2xl border ${className.includes('bg-') ? '' : 'bg-card'} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${className} ${isColored ? 'shadow-lg ring-1 ring-inset ring-white/10' : ''}`}>
      {slug && <div className={`absolute inset-x-0 top-0 h-1 bg-comp-${slug}`} />}
      
      {/* Premium effects for colored cards */}
      {isColored && (
        <>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-150 group-hover:bg-white/15" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 pointer-events-none" />
        </>
      )}

      <div className="relative z-10 flex items-center gap-4">
        {slug ? (
          <span className={`flex h-12 w-12 items-center justify-center rounded-xl bg-comp-${slug}-bg text-white`}>
            {icon}
          </span>
        ) : isColored ? (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md shadow-inner border border-white/20">
            {icon}
          </span>
        ) : (
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
            {icon}
          </span>
        )}
        <p className={`text-sm font-bold uppercase tracking-wider ${isColored ? 'text-white' : 'text-foreground'}`}>{label}</p>
      </div>
      <div className={`relative z-10 mt-6 text-base leading-relaxed flex-1 ${isColored ? 'text-white/90' : 'text-muted-foreground'}`}>{children}</div>
    </div>
  );
}

export function MediaTile({
  src,
  label,
  slug,
  className = "",
}: {
  src: string;
  label: string;
  slug: ComponentSlug;
  className?: string;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block relative overflow-hidden rounded-2xl border shadow-sm cursor-zoom-in ${className}`}
    >
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={1024}
        height={1024}
        className="h-full min-h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
        <span className={`h-8 w-1.5 rounded-full bg-comp-${slug}`} />
        <span className="font-display font-semibold text-white drop-shadow-sm">{label}</span>
      </div>
    </a>
  );
}

export function InteractionCard({
  n,
  icon,
  title,
  body,
  slug,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
  slug: ComponentSlug;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="relative flex items-start gap-5">
        <span
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-comp-${slug} text-white`}
        >
          {icon}
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Interaction {n}
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function ResourceCard({
  title,
  description,
  icon,
  slug,
  links,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: ComponentSlug;
  links: { label: string; href: string; type: string; download?: string }[];
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-6 flex items-start gap-5">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-comp-${slug} text-white shadow-sm`}
        >
          {icon}
        </span>
        <div className="flex-1">
          <p className="font-display text-lg font-bold text-foreground">{title}</p>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="mt-auto space-y-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            download={l.download}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={l.type === "pending"}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
              l.type === "pending"
                ? "pointer-events-none bg-surface text-muted-foreground"
                : `bg-comp-${slug} text-white hover:opacity-90`
            }`}
          >
            <span>{l.label}</span>
            <span className={`rounded-full px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold ${
               l.type === "pending" ? "bg-border text-muted-foreground" : "bg-white/20"
            }`}>
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
    <div className="absolute inset-0 -z-10 overflow-hidden bg-background">
      {/* Intense colorful blurred orbs */}
      <div className="absolute -left-[10%] -top-[10%] h-[700px] w-[700px] rounded-full bg-comp-measurement-bg/40 blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute right-[0%] top-[10%] h-[500px] w-[500px] rounded-full bg-comp-number-concepts-bg/40 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute left-[20%] top-[50%] h-[800px] w-[800px] rounded-full bg-comp-life-science-bg/30 blur-[160px] mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute -right-[10%] top-[70%] h-[600px] w-[600px] rounded-full bg-comp-physical-science-bg/40 blur-[140px] mix-blend-multiply dark:mix-blend-screen" />
    </div>
  );
}
