import { Link } from "@tanstack/react-router";

import {
  COMPONENTS,
  OVERALL_METRICS,
  RESULTS,
  type ComponentSlug,
  type SessionMetrics,
} from "@/data/project";

// Single-series charts: the mark that carries the story uses --chart-emph, comparison
// marks use --chart-muted. Text always uses text tokens, never the mark colour.

function Tooltip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      role="tooltip"
      className={`pointer-events-none absolute z-20 w-max max-w-[240px] rounded-xl border bg-popover px-3 py-2 text-xs text-popover-foreground opacity-0 shadow-card transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}

function TipRow({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-muted-foreground">{k}</span>
      <span className="font-semibold tabular-nums">{v}</span>
    </div>
  );
}

/* ───────── knowledge test: group means with 95% CI ───────── */

export function OutcomeChart() {
  const max = RESULTS.maxScore;
  const ticks = [0, 10, 20, 30, 40, 50];
  const y = (v: number) => `${(v / max) * 100}%`;

  return (
    <figure>
      <figcaption className="mb-4">
        <p className="font-display text-lg font-bold text-foreground">
          Knowledge test score (of {max})
        </p>
        <p className="text-sm text-muted-foreground">
          Group means; whiskers show 95% confidence intervals.
        </p>
      </figcaption>
      <div className="flex gap-3">
        {/* y-axis */}
        <div className="relative h-64 w-6 flex-shrink-0 text-right text-[11px] tabular-nums text-muted-foreground">
          {ticks.map((t) => (
            <span key={t} className="absolute right-0 translate-y-1/2" style={{ bottom: y(t) }}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1">
          <div className="relative h-64">
            {ticks.map((t) => (
              <div
                key={t}
                className="absolute inset-x-0 h-px bg-[var(--chart-grid)]"
                style={{ bottom: y(t) }}
              />
            ))}
            <div className="absolute inset-0 flex">
              {RESULTS.groups.map((g) => {
                const emph = g.key === "post";
                return (
                  <div key={g.key} tabIndex={0} className="group relative flex-1 outline-none">
                    {/* column */}
                    <div
                      className="absolute bottom-0 left-1/2 w-6 -translate-x-1/2 rounded-t-[4px] transition-opacity group-hover:opacity-85"
                      style={{
                        height: y(g.mean),
                        background: emph ? "var(--chart-emph)" : "var(--chart-muted)",
                      }}
                    />
                    {/* CI whisker */}
                    <div
                      className="absolute left-1/2 w-px -translate-x-1/2 bg-foreground/70"
                      style={{
                        bottom: y(g.ci[0]),
                        height: `${((g.ci[1] - g.ci[0]) / max) * 100}%`,
                      }}
                    />
                    <div
                      className="absolute left-1/2 h-px w-3 -translate-x-1/2 bg-foreground/70"
                      style={{ bottom: y(g.ci[1]) }}
                    />
                    <div
                      className="absolute left-1/2 h-px w-3 -translate-x-1/2 bg-foreground/70"
                      style={{ bottom: y(g.ci[0]) }}
                    />
                    {/* value label */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 pb-1.5 text-sm tabular-nums ${emph ? "font-bold text-foreground" : "font-medium text-muted-foreground"}`}
                      style={{ bottom: y(g.ci[1]) }}
                    >
                      {g.mean.toFixed(2)}
                    </span>
                    <Tooltip className="left-1/2 top-2 -translate-x-1/2">
                      <p className="mb-1 font-semibold">{g.label}</p>
                      <TipRow k="Mean" v={`${g.mean} (${g.pct}%)`} />
                      <TipRow k="95% CI" v={`${g.ci[0]} – ${g.ci[1]}`} />
                      <TipRow k="SD" v={g.sd} />
                      <TipRow k="Median" v={g.median} />
                      <TipRow k="n" v={g.n} />
                    </Tooltip>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-2 flex border-t border-[var(--chart-grid)] pt-2">
            {RESULTS.groups.map((g) => (
              <p
                key={g.key}
                className="flex-1 text-center text-xs font-medium text-muted-foreground"
              >
                {g.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
}

export function OutcomeTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <caption className="sr-only">Knowledge test performance on the 55-point instrument</caption>
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="py-2 pr-4 font-semibold">Group</th>
            <th className="py-2 pr-4 text-right font-semibold">n</th>
            <th className="py-2 pr-4 text-right font-semibold">Mean (%)</th>
            <th className="py-2 pr-4 text-right font-semibold">SD</th>
            <th className="py-2 text-right font-semibold">95% CI</th>
          </tr>
        </thead>
        <tbody className="tabular-nums">
          {RESULTS.groups.map((g) => (
            <tr key={g.key} className="border-b border-border/60">
              <td className="py-2 pr-4 font-medium text-foreground">{g.label}</td>
              <td className="py-2 pr-4 text-right">{g.n}</td>
              <td className="py-2 pr-4 text-right">
                {g.mean.toFixed(2)} ({g.pct})
              </td>
              <td className="py-2 pr-4 text-right">{g.sd.toFixed(2)}</td>
              <td className="py-2 text-right">
                [{g.ci[0]}, {g.ci[1]}]
              </td>
            </tr>
          ))}
          <tr>
            <td className="py-2 pr-4 font-medium text-foreground">AR gain</td>
            <td className="py-2 pr-4 text-right">{RESULTS.arN}</td>
            <td className="py-2 pr-4 text-right">{RESULTS.gain.mean.toFixed(2)} (18.6)</td>
            <td className="py-2 pr-4 text-right">4.31</td>
            <td className="py-2 text-right">
              [{RESULTS.gain.ci[0]}, {RESULTS.gain.ci[1]}]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ───────── horizontal bars: teacher ratings & survey ───────── */

export function TeacherRatings() {
  return (
    <figure>
      <figcaption className="mb-5">
        <p className="font-display text-lg font-bold text-foreground">Teacher panel ratings</p>
        <p className="text-sm text-muted-foreground">
          Mean on a 1–5 scale, n = 5 practising primary teachers.
        </p>
      </figcaption>
      <ul className="space-y-4">
        {RESULTS.teacher.map((r) => (
          <li key={r.label} tabIndex={0} className="group relative outline-none">
            <p className="text-sm text-foreground">{r.label}</p>
            <div className="mt-1.5 flex items-center gap-3">
              <div className="relative h-2.5 flex-1">
                {[1, 2, 3, 4].map((t) => (
                  <div
                    key={t}
                    className="absolute inset-y-[-3px] w-px bg-[var(--chart-grid)]"
                    style={{ left: `${(t / 5) * 100}%` }}
                  />
                ))}
                <div
                  className="absolute inset-y-0 left-0 rounded-r-[4px]"
                  style={{ width: `${(r.mean / 5) * 100}%`, background: "var(--chart-emph)" }}
                />
              </div>
              <span className="w-8 text-right text-sm font-semibold tabular-nums text-foreground">
                {r.mean.toFixed(1)}
              </span>
            </div>
            <Tooltip className="bottom-full right-0 mb-1">
              <TipRow k="Mean" v={r.mean.toFixed(2)} />
              <TipRow k="SD" v={r.sd.toFixed(2)} />
              <TipRow k="Median" v={r.median} />
            </Tooltip>
          </li>
        ))}
      </ul>
      <div className="relative mr-11 mt-2 h-4 text-[11px] tabular-nums text-muted-foreground">
        {[0, 1, 2, 3, 4, 5].map((t) => (
          <span key={t} className="absolute -translate-x-1/2" style={{ left: `${(t / 5) * 100}%` }}>
            {t}
          </span>
        ))}
      </div>
    </figure>
  );
}

export function SurveyMeters() {
  const n = RESULTS.arN;
  return (
    <figure>
      <figcaption className="mb-5">
        <p className="font-display text-lg font-bold text-foreground">Student experience survey</p>
        <p className="text-sm text-muted-foreground">
          Share of AR-group students agreeing, n = {n}.
        </p>
      </figcaption>
      <ul className="space-y-4">
        {RESULTS.survey.map((s) => {
          const pct = (s.count / n) * 100;
          return (
            <li key={s.label} tabIndex={0} className="group relative outline-none">
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm text-foreground">{s.label}</p>
                <span className="text-sm font-semibold tabular-nums text-foreground">
                  {pct.toFixed(1)}%
                </span>
              </div>
              <div className="mt-1.5 h-2.5 rounded-full bg-[color-mix(in_oklch,var(--chart-emph)_15%,transparent)]">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, background: "var(--chart-emph)" }}
                />
              </div>
              <Tooltip className="bottom-full right-0 mb-1">
                <TipRow k="Students" v={`${s.count} of ${n}`} />
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

/* ───────── per-component session metrics (paper Table III) ───────── */

const fmt = ([m, sd]: [number, number], d = 1) => `${m.toFixed(d)} ± ${sd.toFixed(d)}`;

export function SessionTable({ highlight }: { highlight?: ComponentSlug }) {
  const row = (
    key: string,
    name: React.ReactNode,
    m: SessionMetrics,
    strong = false,
    hl = false,
  ) => (
    <tr
      key={key}
      className={`border-b border-border/60 ${hl ? "bg-primary/10" : ""} ${strong ? "font-semibold text-foreground" : ""}`}
    >
      <td className="py-2.5 pl-3 pr-4 text-foreground">{name}</td>
      <td className="py-2.5 pr-4 text-right">{m.n}</td>
      <td className="py-2.5 pr-4 text-right">{fmt(m.arTime)}</td>
      <td className="py-2.5 pr-4 text-right">{fmt(m.quizTime)}</td>
      <td className="py-2.5 pr-4 text-right">{fmt(m.mistakes, 2)}</td>
      <td className="py-2.5 pr-3 text-right">{fmt(m.retries, 2)}</td>
    </tr>
  );
  return (
    <div className="overflow-x-auto rounded-3xl border bg-card p-4 shadow-soft sm:p-6">
      <table className="w-full min-w-[640px] text-sm">
        <caption className="mb-4 text-left">
          <span className="block font-display text-lg font-bold text-foreground">
            Instrumented AR session metrics
          </span>
          <span className="block text-sm text-muted-foreground">
            Mean ± SD over {OVERALL_METRICS.n} analysable sessions, logged by the Learning
            Evaluation Module.
          </span>
        </caption>
        <thead>
          <tr className="border-b text-left text-xs uppercase tracking-wider text-muted-foreground">
            <th className="py-2 pl-3 pr-4 font-semibold">Component</th>
            <th className="py-2 pr-4 text-right font-semibold">Sessions</th>
            <th className="py-2 pr-4 text-right font-semibold">AR time (s)</th>
            <th className="py-2 pr-4 text-right font-semibold">Quiz time (s)</th>
            <th className="py-2 pr-4 text-right font-semibold">Mistakes</th>
            <th className="py-2 pr-3 text-right font-semibold">Retries</th>
          </tr>
        </thead>
        <tbody className="tabular-nums text-muted-foreground">
          {COMPONENTS.map((c) =>
            row(
              c.slug,
              <Link
                to="/components/$slug"
                params={{ slug: c.slug }}
                className="hover:text-primary hover:underline"
              >
                {c.name}
              </Link>,
              c.metrics,
              false,
              highlight === c.slug,
            ),
          )}
          {row("overall", "Overall", OVERALL_METRICS, true)}
        </tbody>
      </table>
    </div>
  );
}
