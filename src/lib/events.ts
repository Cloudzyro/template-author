import { events } from "../data/site";

// Split at build time. Rebuild (or redeploy) after an event to move it to the past list.
const today = new Date().toISOString().slice(0, 10);
export const upcoming = events.filter((e) => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));
export const past = events.filter((e) => e.date < today).sort((a, b) => b.date.localeCompare(a.date));

export function longDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
