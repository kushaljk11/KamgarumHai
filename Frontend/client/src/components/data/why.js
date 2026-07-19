import { WifiOff, BellRing, ListChecks, Zap } from "lucide-react";

const REASONS = [
  {
    tag: "Offline first",
    icon: WifiOff,
    title: "Works with no signal at all",
    body: "Add a task on a bus with no bars, cross it off in a tunnel. Everything saves on your phone first and syncs the moment you're back online.",
  },
  {
    tag: "Smart reminders",
    icon: BellRing,
    title: "Reminds you more than once",
    body: "Set a nudge for this morning and a firmer one for this evening. YadGarum reschedules itself instead of asking you to build the schedule.",
  },
  {
    tag: "Today, not backlog",
    icon: ListChecks,
    title: "Shows you today, not everything",
    body: "Old, undone tasks don't pile up on your screen and wear you down. YadGarum surfaces what's due now and quietly holds the rest for later.",
  },
  {
    tag: "No friction",
    icon: Zap,
    title: "Opens in under a second",
    body: "No spinners, no sync screens, no onboarding tour. It's a list — so it behaves like one, the moment you tap the icon.",
  },
];

export default REASONS;