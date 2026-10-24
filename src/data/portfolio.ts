export const categories = ["Product", "Editorial", "Systems", "Motion"] as const;

export type Category = (typeof categories)[number];
export type Tone = "ink" | "paper" | "sand" | "accent";
export type Layout = "br" | "tl" | "center";

export type Project = {
  id: string;
  index: string;
  title: string;
  year: string;
  category: Category;
  client: string;
  role: string;
  summary: string;
  tone: Tone;
  layout: Layout;
  span: string;
  height: "poster" | "feature" | "band";
};

export const projects: Project[] = [
  {
    id: "atelier",
    index: "01",
    title: "Atelier Index",
    year: "2025",
    category: "Product",
    client: "Holm Ceramics",
    role: "Design & build",
    summary:
      "A quiet catalog for a stoneware studio — pieces, glazes, and the waitlist, set like a lookbook rather than a shop.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "feature",
  },
  {
    id: "harbor",
    index: "02",
    title: "Harbor Ledger",
    year: "2023",
    category: "Product",
    client: "The North Room",
    role: "Product design",
    summary:
      "Reservations for a twelve-room inn. Dates, rooms, and a handwritten confirmation — no funnel and no upsells.",
    tone: "sand",
    layout: "tl",
    span: "md:col-span-5",
    height: "feature",
  },
  {
    id: "field",
    index: "03",
    title: "Field Notes",
    year: "2024",
    category: "Editorial",
    client: "Salt & Meridian",
    role: "Art direction",
    summary:
      "A seasonal journal on coastal land. Long essays, field photographs, and a contents page that behaves like a map.",
    tone: "paper",
    layout: "center",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "quiet",
    index: "04",
    title: "Quiet Type",
    year: "2024",
    category: "Editorial",
    client: "Voss Foundry",
    role: "Design & front end",
    summary:
      "A specimen for a text face cut for small sizes. Proofs, waterfalls, and a buy page that does not shout.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "northline",
    index: "05",
    title: "Northline",
    year: "2025",
    category: "Systems",
    client: "Aarhus Transit",
    role: "Design systems",
    summary:
      "Wayfinding tokens, sign templates, and a component library the sign shop and the app team actually share.",
    tone: "accent",
    layout: "tl",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "orchard",
    index: "06",
    title: "Orchard",
    year: "2022",
    category: "Systems",
    client: "Grove Market",
    role: "Brand & build",
    summary:
      "A system for a neighborhood grocer — labels, receipts, and a small site that lists only what is in season.",
    tone: "sand",
    layout: "center",
    span: "md:col-span-5",
    height: "poster",
  },
  {
    id: "vesper",
    index: "07",
    title: "Vesper",
    year: "2026",
    category: "Motion",
    client: "Maison Elan",
    role: "Titles & direction",
    summary:
      "A forty-second film for a night fragrance. One room, one light, and titles that arrive like a whisper.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "poster",
  },
  {
    id: "kite",
    index: "08",
    title: "Kite",
    year: "2021",
    category: "Motion",
    client: "Independent",
    role: "Title sequence",
    summary:
      "Opening titles for a short documentary about a father and a handmade kite. Paper, wind, and the grain of 16mm.",
    tone: "paper",
    layout: "tl",
    span: "md:col-span-12",
    height: "band",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Interface",
    items: ["Product design", "Art direction", "Design systems", "Prototyping", "Accessibility"],
  },
  {
    index: "02",
    title: "Engineering",
    items: ["TypeScript", "React", "CSS & layout", "Motion", "Design tokens"],
  },
  {
    index: "03",
    title: "Editorial",
    items: ["Typography", "Longform", "Information design", "Brand systems", "Writing"],
  },
] as const;

export const facts = [
  { label: "Based", value: "Copenhagen" },
  { label: "Since", value: "2016" },
  { label: "Now", value: "Spring 2027" },
  { label: "Languages", value: "English, Danish" },
] as const;

export const nav = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;
