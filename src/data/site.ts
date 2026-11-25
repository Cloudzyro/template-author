// Everything the site says lives here: the author, books (with buy links, praise and
// excerpts), events, press kit and newsletter. Change it and rebuild.

export const author = {
  name: "Marian Oduya",
  tagline: "Novelist",
  description:
    "Marian Oduya is the author of three novels about families, small towns and the things people keep. Her fourth, The Salt Archive, is out April 13, 2027.",
  shortBio:
    "Marian Oduya grew up in a river town in western Pennsylvania and now lives in Providence, Rhode Island, where she teaches fiction two evenings a week. She is the author of three novels.",
  longBio: [
    "Marian Oduya grew up above her parents' hardware store in Calder Falls, Pennsylvania, a town of seven thousand people and one bridge. She studied history, worked for a decade in a county records office, and wrote her first novel in the hour before work.",
    "That novel, The Quiet Years, followed four sisters across a hard winter and won the Fernhill First Novel Prize. Lantern Weather and Small Hours followed, and her stories have appeared in a handful of quarterlies.",
    "She lives in Providence, Rhode Island, with her husband and a very old dog, and teaches fiction two evenings a week at a community writing center.",
  ],
  email: "hello@marianoduya.example",
  agent: { name: "Ruth Delacourt", agency: "Delacourt and Finch Literary", email: "rights@delacourtfinch.example" },
  publicist: { name: "Owen Mbeki", house: "Harrowgate Press", email: "publicity@harrowgate.example" },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "Bluesky", href: "https://bsky.app/" },
  ],
};

export const nav = [
  { href: "/books", label: "Books" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/press", label: "Press" },
  { href: "/newsletter", label: "Newsletter" },
];

// Cover designs are drawn in code. `motif` picks the shape: tide, window, rings or stems.
export type Cover = { bg: string; ink: string; accent: string; motif: "tide" | "window" | "rings" | "stems" };
export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  year: number;
  release: string; // YYYY-MM-DD
  upcoming?: boolean;
  publisher: string;
  pages: number;
  formats: { name: string; isbn: string }[];
  hook: string;
  synopsis: string[];
  excerpt: string[];
  praise: { quote: string; source: string }[];
  buy: { label: string; href: string }[];
  cover: Cover;
};

// Buy links point to example.com. Replace them with your bookseller, publisher and audiobook links.
const buy = (slug: string) => [
  { label: "Your local bookstore", href: `https://example.com/bookstores/${slug}` },
  { label: "Online bookseller", href: `https://example.com/books/${slug}` },
  { label: "Ebook", href: `https://example.com/ebook/${slug}` },
  { label: "Audiobook", href: `https://example.com/audio/${slug}` },
];

export const books: Book[] = [
  {
    slug: "the-salt-archive",
    title: "The Salt Archive",
    year: 2027,
    release: "2027-04-13",
    upcoming: true,
    publisher: "Harrowgate Press",
    pages: 352,
    formats: [
      { name: "Hardcover", isbn: "978-0-00-000001-1" },
      { name: "Ebook", isbn: "978-0-00-000002-8" },
      { name: "Audiobook, read by the author", isbn: "978-0-00-000003-5" },
    ],
    hook: "A county archivist finds her own birth certificate filed under the wrong name, in a box marked for destruction.",
    synopsis: [
      "Nell Okafor has spent eleven years in the basement of the Ashby County records office, deciding which pieces of other people's lives are worth keeping. Then a box from the flooded courthouse in Salt Fork turns up with her own birth certificate inside, under a name she has never heard.",
      "Over one wet spring, Nell follows the paper trail back to a town that no longer exists, a mother who kept everything and a father who kept nothing, and the summer of 1979 that both of them spent their lives not talking about.",
    ],
    excerpt: [
      "The box had been marked for destruction in red grease pencil, twice, by two different hands. Nell set it on the sorting table anyway. Nobody had ever been fired for looking.",
      "Inside were the usual things a flooded courthouse gives up: deeds gone soft as felt, a ledger of dog licenses, a single child's shoe. And in a manila folder that had somehow stayed dry, a birth certificate with her own date and her own hospital and a name that was not hers.",
    ],
    praise: [
      { quote: "Oduya writes about paper the way other novelists write about weather: as the thing that decides everything.", source: "Early reader, The Fernhill Review" },
      { quote: "Patient, funny and quietly devastating. I didn't want it to end.", source: "Advance reader, Lake Street Books" },
    ],
    buy: buy("the-salt-archive"),
    cover: { bg: "#1f3a44", ink: "#f2ebdd", accent: "#d9a35b", motif: "tide" },
  },
  {
    slug: "small-hours",
    title: "Small Hours",
    year: 2024,
    release: "2024-03-05",
    publisher: "Harrowgate Press",
    pages: 304,
    formats: [
      { name: "Hardcover", isbn: "978-0-00-000011-0" },
      { name: "Paperback", isbn: "978-0-00-000012-7" },
      { name: "Ebook", isbn: "978-0-00-000013-4" },
    ],
    hook: "A night-shift nurse and the insomniac widower in room 14 trade stories until morning.",
    synopsis: [
      "Every night for a month, Adaeze Cole finishes her rounds at the Riverside care home and stops at room 14, where Walter Lindqvist, ninety-one and wide awake, is waiting with a story.",
      "Some of his stories are true. Some of hers aren't. By the time spring comes, both of them will have told the one they swore they never would.",
    ],
    excerpt: [
      "Walter kept his reading glasses on even with the light off, as if the dark might at any moment present him with something to read.",
    ],
    praise: [
      { quote: "A small book with an enormous heart. Oduya has a gift for the conversations people have only at three in the morning.", source: "The Northern Quarterly" },
      { quote: "Tender without a drop of sentimentality.", source: "Atlantic Seaboard Review of Books" },
    ],
    buy: buy("small-hours"),
    cover: { bg: "#e9e1cf", ink: "#2a2a33", accent: "#b2452f", motif: "window" },
  },
  {
    slug: "lantern-weather",
    title: "Lantern Weather",
    year: 2021,
    release: "2021-09-14",
    publisher: "Harrowgate Press",
    pages: 368,
    formats: [
      { name: "Hardcover", isbn: "978-0-00-000021-9" },
      { name: "Paperback", isbn: "978-0-00-000022-6" },
      { name: "Ebook", isbn: "978-0-00-000023-3" },
    ],
    hook: "Three generations of a ferry-running family, and the storm that ended the crossing.",
    synopsis: [
      "For sixty years the Abara family ran the only ferry across the Monongah, until a bridge, a storm and a quarrel ended it in the same autumn.",
      "Told by a grandmother, a son and a granddaughter in turn, Lantern Weather is a novel about work, about rivers and about who gets to tell a family's story.",
    ],
    excerpt: ["My grandmother said the river had two voices, and that you only heard the second one if you were about to do something foolish."],
    praise: [
      { quote: "Wide, generous and sharply observed. A novel you could live inside.", source: "The Fernhill Review" },
      { quote: "Oduya's river is as alive as any of her people.", source: "Midland Books Weekly" },
    ],
    buy: buy("lantern-weather"),
    cover: { bg: "#8c3b2e", ink: "#f6ecdc", accent: "#f0c27a", motif: "rings" },
  },
  {
    slug: "the-quiet-years",
    title: "The Quiet Years",
    year: 2018,
    release: "2018-02-06",
    publisher: "Harrowgate Press",
    pages: 288,
    formats: [
      { name: "Paperback", isbn: "978-0-00-000031-8" },
      { name: "Ebook", isbn: "978-0-00-000032-5" },
    ],
    hook: "Four sisters, one farmhouse and the winter their father didn't come home.",
    synopsis: [
      "In the winter of 1994, the Ebere sisters wait out a season of snow in their father's farmhouse after he leaves for town and doesn't return.",
      "Winner of the Fernhill First Novel Prize, The Quiet Years is a debut about loyalty, money and the stories sisters tell each other to get through the dark.",
    ],
    excerpt: ["By the second week of snow we had stopped saying his name, as if he were a draft we could keep out by shutting the right door."],
    praise: [
      { quote: "An assured, unshowy debut.", source: "Midland Books Weekly" },
      { quote: "Four voices, perfectly pitched.", source: "The Northern Quarterly" },
    ],
    buy: buy("the-quiet-years"),
    cover: { bg: "#c9d2c4", ink: "#1f2a22", accent: "#47613f", motif: "stems" },
  },
];
export const praiseNote = "Reviews, publications and readers are fictional, written for this template.";

export type Event = { date: string; time: string; title: string; venue: string; city: string; note?: string; rsvp?: string };

// Dates in YYYY-MM-DD. Past events move to the Past list by themselves at build time.
export const events: Event[] = [
  { date: "2027-04-13", time: "7:00 pm", title: "Launch: The Salt Archive", venue: "Lake Street Books", city: "Providence, RI", note: "In conversation with Dana Wells", rsvp: "https://example.com/events/salt-archive-launch" },
  { date: "2027-04-16", time: "6:30 pm", title: "Reading and signing", venue: "The Corner Bookshop", city: "Boston, MA", rsvp: "https://example.com/events/corner-bookshop" },
  { date: "2027-04-22", time: "7:00 pm", title: "In conversation with Hollis Grant", venue: "Riverbend Public Library", city: "Pittsburgh, PA", note: "Free, with the library's spring series", rsvp: "https://example.com/events/riverbend" },
  { date: "2027-05-08", time: "2:00 pm", title: "Panel: Writing small towns", venue: "Hudson Valley Book Festival", city: "Kingston, NY" },
  { date: "2026-10-17", time: "7:00 pm", title: "Small Hours paperback reading", venue: "Paper Moon Books", city: "Hartford, CT" },
  { date: "2026-06-03", time: "6:00 pm", title: "Fiction workshop", venue: "Westminster Writing Center", city: "Providence, RI" },
];

export const press = {
  intro: "For interviews, review copies and event requests, please contact the publicist. For rights and permissions, the agent.",
  assets: [
    { label: "Author photo, high resolution", note: "Replace with your own photo; credit the photographer" },
    { label: "Book covers, front and full jacket", note: "From your publisher's media kit" },
    { label: "Short and long bio, as text", note: "On this page, free to use" },
  ],
  interviews: [
    { outlet: "The Northern Quarterly", title: "Marian Oduya on archives, rivers and the hour before work", date: "2024-04-02" },
    { outlet: "Midland Public Radio", title: "Bookends: Small Hours", date: "2024-03-12" },
    { outlet: "The Fernhill Review", title: "Debut of the year: a conversation", date: "2018-05-20" },
  ],
};

export const newsletter = {
  title: "Letters from the records room",
  text: "A short letter every month or two: what I'm reading, where I'll be, and the occasional thing I found in a box. No more than that.",
  privacy: "Your email is only used for this letter. Unsubscribe from any issue.",
};
