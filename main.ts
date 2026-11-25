import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "One star. He waters me every Sunday at 9 a.m. whether I'm thirsty or not, then blames the brown leaves on my attitude — I have roots, not a calendar, and I've started filing complaints with the succulent next door.";

// Gate: UTF-8 text of 1 to 279 characters, not only white space, one line.
if (entry.length < 1 || entry.length > 279 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`gate failed: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
