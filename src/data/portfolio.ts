export const categories = ["Single", "EP", "Remix", "Mix"] as const;

export type Category = (typeof categories)[number];
export type Tone = "ink" | "paper" | "sand" | "accent";
export type Layout = "br" | "tl" | "center";

export const bookingKinds = ["Club", "Listening bar", "Festival", "Radio"] as const;
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
    id: "night-market",
    index: "01",
    title: "Night Market",
    year: "2025",
    category: "Single",
    client: "Hale Records",
    role: "126 BPM · A / AA",
    summary:
      "Four cuts for the last hour. A dry kick, a borrowed vocal, and a bassline that refuses to hurry.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "feature",
  },
  {
    id: "low-tide",
    index: "02",
    title: "Low Tide",
    year: "2023",
    category: "EP",
    client: "Hale Records",
    role: "118–122 BPM · six tracks",
    summary:
      "Recorded between soundcheck and sunrise. The B-side is almost a letter, played with the lights still down.",
    tone: "sand",
    layout: "tl",
    span: "md:col-span-5",
    height: "feature",
  },
  {
    id: "room-tone",
    index: "03",
    title: "Room Tone",
    year: "2024",
    category: "Mix",
    client: "NTS",
    role: "74 minutes",
    summary:
      "A guest hour of dub, slow house, and records that only work once the room is already listening.",
    tone: "paper",
    layout: "center",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "afterimage",
    index: "04",
    title: "Afterimage",
    year: "2024",
    category: "Remix",
    client: "Lumen Park",
    role: "124 BPM",
    summary: "Keeps the vocal and throws the rest of the song out the window. The dub is the one to play.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "southbound",
    index: "05",
    title: "Southbound",
    year: "2025",
    category: "Single",
    client: "Hale Records",
    role: "130 BPM · tool & dub",
    summary: "One peak-time tool and its dub. Built to be played twice, back to back, without a speech.",
    tone: "accent",
    layout: "tl",
    span: "md:col-span-4",
    height: "poster",
  },
  {
    id: "open-window",
    index: "06",
    title: "Open Window",
    year: "2022",
    category: "EP",
    client: "Small Press",
    role: "110–116 BPM",
    summary: "The early EP. Guitar samples, dusty hats, and a title taken from the weather that week.",
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
    category: "Mix",
    client: "Rinse FM",
    role: "58 minutes · closing set",
    summary: "A closing set for a quiet room. One light, and records that arrive like a whisper.",
    tone: "ink",
    layout: "br",
    span: "md:col-span-7",
    height: "poster",
  },
  {
    id: "paper-kite",
    index: "08",
    title: "Paper Kite",
    year: "2021",
    category: "Remix",
    client: "Self-released",
    role: "122 BPM · first outing",
    summary:
      "The first remix that left the hard drive. A 16-bar loop, some paper, and a lot of wind in the recording.",
    tone: "paper",
    layout: "tl",
    span: "md:col-span-12",
    height: "band",
  },
];

export const skillGroups = [
  {
    index: "01",
    title: "Floor",
    items: ["Long blends", "Programming", "Reading a room", "Closing sets", "Dubplates"],
  },
  {
    index: "02",
    title: "Studio",
    items: ["Arrangement", "Sampling", "Edits", "Dub mixes", "Sequencing"],
  },
  {
    index: "03",
    title: "Radio",
    items: ["Guest mixes", "Curation", "Track notes", "Listening sets", "Idents"],
  },
] as const;

export const facts = [
  { label: "Based", value: "Jakarta" },
  { label: "Since", value: "2018" },
  { label: "Now", value: "Booking 2026" },
  { label: "Plays", value: "House, dub, breaks" },
] as const;

export const nav = [
  { href: "#work", id: "work", label: "Discography" },
  { href: "#about", id: "about", label: "About" },
  { href: "#skills", id: "skills", label: "Sound" },
  { href: "#contact", id: "contact", label: "Booking" },
] as const;
