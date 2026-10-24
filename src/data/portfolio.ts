export const categories = ["Funkot", "Breakbeat", "Speed Trance"] as const;

export type Category = (typeof categories)[number];
export type Tone = "ink" | "paper" | "sand" | "accent";
export type Layout = "br" | "tl" | "center";

export const bookingKinds = ["Klub", "Festival", "Acara", "Radio"] as const;
export type BookingKind = (typeof bookingKinds)[number];

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
    id: "lampu-merah",
    index: "01",
    title: "Lampu Merah",
    year: "2025",
    category: "Funkot",
    client: "Shadytronic",
    role: "Single · 160 BPM",
    summary: "Funkot untuk jam sibuk. Kick rapat, melody dangdut yang tidak buru-buru, dan bass yang tetap di lantai.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "feature",
  },
  {
    id: "mesin",
    index: "02",
    title: "Mesin",
    year: "2024",
    category: "Breakbeat",
    client: "Shadytronic",
    role: "EP · 148 BPM",
    summary: "Enam trek breakbeat. Break-nya kering, dan B-side-nya hampir seperti surat yang diputar saat lampu masih redup.",
    tone: "sand",
    layout: "tl",
    span: "md:col-span-5",
    height: "feature",
  },
  {
    id: "jalur",
    index: "03",
    title: "Jalur",
    year: "2025",
    category: "Speed Trance",
    client: "Shadytronic",
    role: "Single · 180 BPM",
    summary: "Indonesia Speed Trance. Lead-nya naik pelan, lalu tidak turun sampai ruangan sudah ikut.",
    tone: "paper",
    layout: "center",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "panggung",
    index: "04",
    title: "Panggung",
    year: "2023",
    category: "Funkot",
    client: "Shadytronic",
    role: "Remix · 162 BPM",
    summary: "Remix yang menyisakan vokalnya, lalu memindahkan sisanya ke pola funkot. Dub-nya yang lebih sering diputar.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "rel",
    index: "05",
    title: "Rel",
    year: "2024",
    category: "Breakbeat",
    client: "Shadytronic",
    role: "Single · 150 BPM",
    summary: "Satu alat peak-time dan dub-nya. Dibuat untuk diputar dua kali, berurutan, tanpa pidato.",
    tone: "accent",
    layout: "tl",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "ombak",
    index: "06",
    title: "Ombak",
    year: "2022",
    category: "Funkot",
    client: "Shadytronic",
    role: "EP · 158 BPM",
    summary: "EP awal. Sample gitar, hat yang berdebu, dan judul yang diambil dari cuaca minggu itu.",
    tone: "sand",
    layout: "center",
    span: "md:col-span-5",
    height: "poster",
  },
  {
    id: "langit",
    index: "07",
    title: "Langit",
    year: "2026",
    category: "Speed Trance",
    client: "Shadytronic",
    role: "EP · 186 BPM",
    summary: "Empat trek speed trance untuk penutup. Satu lampu, dan lead yang datang seperti bisikan yang keras.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "poster",
  },
  {
    id: "sirkuit",
    index: "08",
    title: "Sirkuit",
    year: "2021",
    category: "Breakbeat",
    client: "Shadytronic",
    role: "Mix · 64 menit",
    summary: "Mix panjang: breakbeat, funkot, lalu speed trance di sepertiga terakhir. Catatan pertama yang keluar dari hard drive.",
    tone: "paper",
    layout: "tl",
    span: "md:col-span-12",
    height: "band",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Lantai",
    items: ["Funkot", "Breakbeat", "Speed trance", "Transisi panjang", "Set penutup"],
  },
  {
    index: "02",
    title: "Studio",
    items: ["Aransemen", "Sampling", "Edit", "Dub", "Sequencing"],
  },
  {
    index: "03",
    title: "Radio",
    items: ["Guest mix", "Kurasi", "Catatan trek", "Listening set", "Ident"],
  },
] as const;

export const facts = [
  { label: "Label", value: "Shadytronic" },
  { label: "Asal", value: "Indonesia" },
  { label: "Genre", value: "Funkot" },
  { label: "Juga", value: "Breakbeat · Trance" },
] as const;

export const nav = [
  { href: "#work", id: "work", label: "Diskografi" },
  { href: "#about", id: "about", label: "Tentang" },
  { href: "#skills", id: "skills", label: "Suara" },
  { href: "#contact", id: "contact", label: "Booking" },
] as const;
