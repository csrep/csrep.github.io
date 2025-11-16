const fs = require("fs");
const path = require("path");

// CONFIG
const csvPath = "/Users/ibrahimkhalil/Downloads/cs-students.csv";
const outputDir = "/Users/ibrahimkhalil/Desktop/experiments/cs-reps-2/_alumni/ug2022-2026";

console.log("[DEBUG] CSV Path:", csvPath);
console.log("[DEBUG] Output Directory:", outputDir);

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  console.log("[DEBUG] Output directory missing, creating...");
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log("[DEBUG] Reading CSV file...");
let csvData = fs.readFileSync(csvPath, "utf8");

// Normalize Windows line endings
csvData = csvData.replace(/\r/g, "");

console.log("[DEBUG] Splitting CSV into lines...");
const lines = csvData.split("\n").filter(line => line.trim() !== "");

console.log("[DEBUG] Total lines including header:", lines.length);

// Extract header row
const headerLine = lines[0].trim();
console.log("[DEBUG] Raw header line:", headerLine);

const headers = headerLine.split(",").map(h => h.trim());

console.log("[DEBUG] Header columns parsed:", headers);

// Find required column indexes
const idxName = headers.indexOf("name");
const idxSession = headers.indexOf("Session");
const idxMajor = headers.indexOf("major");

console.log("[DEBUG] Index - name:", idxName);
console.log("[DEBUG] Index - session:", idxSession);
console.log("[DEBUG] Index - major:", idxMajor);

if (idxName === -1 || idxSession === -1 || idxMajor === -1) {
  console.error("[ERROR] One or more required headers missing!");
  process.exit(1);
}

console.log("[DEBUG] Processing student rows...");

const usedNames = {};

for (let i = 1; i < lines.length; i++) {
  const row = lines[i].trim();
  if (!row) continue;

  console.log(`[DEBUG] Line ${i}:`, row);

  const cols = row.split(",").map(c => c.trim());
  console.log("[DEBUG] Columns:", cols);

  const name = cols[idxName];
  const session = cols[idxSession];
  const major = cols[idxMajor];

  console.log("[DEBUG] Extracted fields:", { name, session, major });

  if (!name) {
    console.log(`[WARN] Skipping line ${i}: Missing name`);
    continue;
  }

  // Filename generation
  let fileName = name.toLowerCase().replace(/\s+/g, "-");

  if (usedNames[fileName]) {
    usedNames[fileName]++;
    fileName = `${fileName}${usedNames[fileName]}`;
  } else {
    usedNames[fileName] = 1;
  }

  const mdPath = path.join(outputDir, `${fileName}.md`);

  const batch_year = session.match(/\d{4}-\d{4}/)?.[0] || "";

  const mdContent = `---
layout: alumni-profile
title: "${name}"
name: "${name}"
batch_year: "2022-2026"
toc: false
role: "Computer Science Major"
organization: "Ashoka University"
---

${name} studied Computer Science at Ashoka University.`;

  console.log("[DEBUG] Writing file:", mdPath);

  fs.writeFileSync(mdPath, mdContent, "utf8");
}

console.log("\n[SUCCESS] Markdown files created successfully!");
