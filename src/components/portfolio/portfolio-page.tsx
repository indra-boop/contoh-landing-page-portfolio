import { useEffect, useId, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { z } from "zod";
import { cn } from "@/lib/cn";
import {
  bookingKinds,
  categories,
  facts,
  nav,
  projects,
  skillGroups,
  type Category,
  type Project,
} from "@/data/portfolio";

type Filter = "All" | Category;

const filters: Filter[] = ["All", ...categories];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please add your name."),
  email: z.email("Use a real email address."),
  message: z.string().trim().min(16, "A sentence or two is enough to start."),
  kind: z.enum(["Club", "Listening bar", "Festival", "Radio", ""]),
});

type ContactValues = z.infer<typeof contactSchema>;

const emptyContact: ContactValues = {
  name: "",
  email: "",
  message: "",
  kind: "",
};

const toneClass: Record<Project["tone"], string> = {
  ink: "bg-ink text-paper",
  paper: "bg-foam text-ink",
  sand: "bg-sand text-ink",
  accent: "bg-accent text-paper",
};

const heightClass: Record<Project["height"], string> = {
  poster: "h-poster",
  feature: "h-poster md:h-feature",
  band: "h-band",
};

export function PortfolioPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState<string>("work");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit?.target.id) setCurrent(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.05, 0.2] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen bg-paper text-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to discography
      </a>
      <div className="h-1 bg-accent" aria-hidden="true" />
      <Header
        current={current}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <main>
        <Hero />
        <Work filter={filter} visible={visible} onFilter={setFilter} />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header({
  current,
  menuOpen,
  onToggle,
  onNavigate,
}: {
  current: string;
  menuOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="font-display text-lg leading-none tracking-tight">
          Sero Hale
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              aria-current={current === item.id ? "true" : undefined}
              className={cn(
                "px-3 py-3 text-sm transition-colors",
                current === item.id ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              <span
                className={cn(
                  "border-b pb-0.5",
                  current === item.id ? "border-accent" : "border-transparent",
                )}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="press inline-flex h-11 items-center gap-2 px-2 text-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={onToggle}
        >
          {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen ? (
        <nav id="mobile-nav" className="border-t border-line px-5 py-2 md:hidden" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onNavigate}
              className="flex h-12 items-center border-b border-line font-display text-2xl last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
      <p className="rise text-xs uppercase tracking-label text-muted">Discography · Vol. 08 · Jakarta</p>
      <div className="mt-6 grid items-end gap-8 md:grid-cols-12">
        <h1 className="rise rise-2 font-display text-7xl leading-display tracking-tight sm:text-8xl md:col-span-8 lg:text-9xl">
          <span className="block">Sero</span>
          <span className="block italic">Hale</span>
        </h1>
        <p className="rise rise-3 max-w-sm text-pretty md:col-span-4 md:justify-self-end">
          DJ and producer. House, dub, and breaks for small rooms. Releases, 2021—2026.
        </p>
      </div>
      <div className="rise rise-4 mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-5 text-sm text-muted">
        <span>Hale Records</span>
        <span className="hidden h-px w-8 bg-line sm:block" aria-hidden="true" />
        <span>Booking open for 2026</span>
        <a href="#work" className="text-ink underline decoration-accent decoration-2 underline-offset-4">
          Read the catalog
        </a>
      </div>
    </section>
  );
}

function releaseWord(filter: Category, count: number) {
  if (filter === "EP") return count === 1 ? "EP" : "EPs";
  if (filter === "Single") return count === 1 ? "single" : "singles";
  if (filter === "Remix") return count === 1 ? "remix" : "remixes";
  return count === 1 ? "mix" : "mixes";
}

function Work({
  filter,
  visible,
  onFilter,
}: {
  filter: Filter;
  visible: Project[];
  onFilter: (filter: Filter) => void;
}) {
  const countLabel =
    filter === "All" ? `${visible.length} releases` : `${visible.length} ${releaseWord(filter, visible.length)}`;

  return (
    <section id="work" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-label text-muted">Catalog</p>
            <h2 className="mt-2 font-display text-4xl leading-display md:text-5xl">Discography</h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            <span className="md:hidden">The note sits under each sleeve.</span>
            <span className="hidden md:inline">Hover a sleeve — or focus it — to read the note.</span>
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by format">
          {filters.map((item) => {
            const count =
              item === "All" ? projects.length : projects.filter((project) => project.category === item).length;
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => onFilter(item)}
                className={cn(
                  "press inline-flex h-11 items-center gap-2 rounded-pill border px-4 text-sm transition-colors",
                  selected
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-transparent text-ink hover:border-ink",
                )}
              >
                {item}
                <span className={cn("tabular-nums", selected ? "text-paper/70" : "text-muted")}>{count}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-muted" aria-live="polite">
          Showing {countLabel}
        </p>

        <ul key={filter} className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
          {visible.map((project) => (
            <li
              key={project.id}
              className={cn(
                "card-in min-w-0",
                filter === "All" ? project.span : visible.length === 1 ? "md:col-span-7" : "md:col-span-6",
              )}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const titleId = useId();
  const summaryId = useId();
  const numeralTone =
    project.tone === "ink" || project.tone === "accent" ? "text-paper/20" : "text-ink/15";

  return (
    <article className="group relative">
      <h3 className="sr-only" id={titleId}>
        {project.title}
      </h3>
      <button type="button" className="w-full text-left" aria-labelledby={titleId} aria-describedby={summaryId}>
        <div className={cn("relative overflow-hidden", toneClass[project.tone], heightClass[project.height])}>
          <div className="flex items-center justify-between p-5 text-xs uppercase tracking-label">
            <span>{project.index}</span>
            <span className="tabular-nums">{project.year}</span>
          </div>
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute select-none",
              project.layout === "br" && "-bottom-8 -right-3",
              project.layout === "tl" && "top-14 left-4",
              project.layout === "center" && "inset-0 flex items-center justify-center",
            )}
          >
            <span
              className={cn(
                "poster-num block font-display italic leading-none",
                project.height === "band" ? "text-8xl" : "text-poster",
                numeralTone,
              )}
            >
              {project.index}
            </span>
          </span>
          {project.tone === "sand" ? (
            <div className="absolute top-1/2 right-5 left-5 h-px bg-ink/20" aria-hidden="true" />
          ) : null}
          <p className="absolute bottom-5 left-5 text-xs uppercase tracking-label opacity-80">
            {project.category}
          </p>
          <div className="reveal absolute inset-x-0 bottom-0 hidden border-t border-line bg-paper px-5 py-4 text-ink md:block">
            <p className="text-sm text-pretty">{project.summary}</p>
            <p className="mt-2 text-xs uppercase tracking-label text-muted">{project.role}</p>
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <span className="font-display text-2xl leading-tight md:text-3xl">{project.title}</span>
          <span className="shrink-0 tabular-nums text-sm text-muted">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-muted">
          {project.category} · {project.client}
        </p>
        <p id={summaryId} className="mt-3 text-sm text-pretty md:sr-only">
          {project.summary}
        </p>
      </button>
    </article>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="flex min-h-80 flex-col justify-between bg-ink p-8 text-paper md:col-span-5">
          <p className="text-xs uppercase tracking-label text-sand">The booth</p>
          <p className="font-display text-8xl italic leading-none">S.</p>
          <p className="max-w-xs font-display text-3xl leading-display italic">
            Records for rooms that are already listening.
          </p>
        </div>
        <div className="md:col-span-7 md:py-4">
          <p className="text-xs uppercase tracking-label text-muted">About</p>
          <h2 className="mt-2 font-display text-4xl leading-display md:text-5xl">A small room, on purpose.</h2>
          <div className="mt-6 max-w-xl space-y-4 text-pretty">
            <p>
              Sero Hale plays house, dub, and breaks from Jakarta — listening bars, late clubs, and the
              occasional radio hour. The sets are long. The records are chosen to be lived with, not shouted
              over.
            </p>
            <p>
              Hale Records is the imprint: singles, EPs, and the odd remix. Most of it is written, edited, and
              pressed in small runs. Bookings go through the desk below.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-label text-muted">{fact.label}</dt>
                <dd className="mt-1 font-display text-xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-label text-muted">Sound</p>
          <h2 className="mt-2 font-display text-4xl leading-display md:text-5xl">What the night is made of.</h2>
          <p className="mt-4 text-pretty text-muted">
            Not a rider. The floor, the studio, and the radio hour — the three places the records actually live.
          </p>
        </div>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-baseline justify-between border-b border-ink pb-3">
                <h3 className="font-display text-2xl">{group.title}</h3>
                <span className="text-xs tabular-nums text-muted">{group.index}</span>
              </div>
              <ul className="mt-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line py-3 text-sm transition-transform duration-200 ease-out hover:translate-x-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [values, setValues] = useState<ContactValues>(emptyContact);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [sent, setSent] = useState<ContactValues | null>(null);
  const baseId = useId();

  function update<K extends keyof ContactValues>(key: K, value: ContactValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && next[key as keyof ContactValues] === undefined) {
          next[key as keyof ContactValues] = issue.message;
        }
      }
      setErrors(next);
      return;
    }
    setSent(parsed.data);
    setErrors({});
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-24">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-label text-muted">Contact</p>
          <h2 className="mt-2 font-display text-4xl leading-display md:text-5xl">Book a date.</h2>
          <p className="mt-4 max-w-sm text-pretty">
            City, room, and the kind of night. A few lines is enough — club, listening bar, festival, or radio.
          </p>
          <p className="mt-8 text-sm text-muted">
            booking@serohale.com
            <br />
            Replies within a few days.
          </p>
        </div>
        <div className="md:col-span-7">
          {sent ? (
            <div role="status" className="border-t border-ink pt-8">
              <p className="font-display text-5xl italic leading-display">Noted.</p>
              <p className="mt-4 max-w-md text-pretty">
                Thank you, {sent.name}. I’ll write to {sent.email} within a few days
                {sent.kind ? ` about the ${sent.kind.toLowerCase()} booking` : ""}.
              </p>
              <button
                type="button"
                className="press mt-8 h-12 border border-ink px-6 text-sm"
                onClick={() => {
                  setSent(null);
                  setValues(emptyContact);
                }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="border-t border-ink">
              <Field
                id={`${baseId}-name`}
                label="Name"
                value={values.name}
                error={errors.name}
                autoComplete="name"
                onChange={(value) => update("name", value)}
              />
              <Field
                id={`${baseId}-email`}
                label="Email"
                type="email"
                value={values.email}
                error={errors.email}
                autoComplete="email"
                onChange={(value) => update("email", value)}
              />
              <fieldset className="border-b border-line py-5">
                <legend className="text-xs uppercase tracking-label text-muted">Kind of night</legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {bookingKinds.map((kind) => {
                    const selected = values.kind === kind;
                    return (
                      <button
                        key={kind}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => update("kind", selected ? "" : kind)}
                        className={cn(
                          "press h-11 rounded-pill border px-4 text-sm transition-colors",
                          selected ? "border-ink bg-ink text-paper" : "border-line hover:border-ink",
                        )}
                      >
                        {kind}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <div className="border-b border-line py-5">
                <label htmlFor={`${baseId}-message`} className="text-xs uppercase tracking-label text-muted">
                  Note
                </label>
                <textarea
                  id={`${baseId}-message`}
                  value={values.message}
                  rows={5}
                  onChange={(event) => update("message", event.target.value)}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
                  className="mt-2 w-full resize-y bg-transparent text-base outline-none placeholder:text-muted"
                  placeholder="City, date, and the room."
                />
                {errors.message ? (
                  <p id={`${baseId}-message-error`} className="mt-2 text-sm text-accent" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
                <p className="text-sm text-muted">No mailing list. Just a reply.</p>
                <button type="submit" className="press h-12 bg-ink px-6 text-sm text-paper">
                  Send the booking
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="border-b border-line py-5">
      <label htmlFor={id} className="text-xs uppercase tracking-label text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 w-full bg-transparent text-base outline-none"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <p className="font-display text-6xl leading-display italic sm:text-8xl">Hale</p>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-label text-sand">Index</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-label text-sand">Desk</p>
            <p className="mt-4 text-sm">
              Sero Hale
              <br />
              Jakarta, Indonesia
              <br />
              booking@serohale.com
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-label text-sand">Colophon</p>
            <p className="mt-4 text-sm text-pretty text-sand">
              Set in Fraunces and Outfit. A discography laid out like a catalog, not a press sheet.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-paper/25 pt-6 text-xs uppercase tracking-label text-sand">
          <p>© 2026 Sero Hale</p>
          <a href="#top" className="hover:text-paper">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
