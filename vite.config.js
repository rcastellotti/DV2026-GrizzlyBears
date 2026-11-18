import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

<<<<<<< HEAD
=======
// GitHub Pages sets VITE_BASE to /DV2026-GrizzlyBears/ at build time.
>>>>>>> origin/main
const base = process.env.VITE_BASE || "/";

function gitCommit() {
  if (process.env.VITE_COMMIT) return process.env.VITE_COMMIT.trim();

  try {
    return execSync("git rev-parse --short HEAD", {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "dev";
  }
}

export default defineConfig({
  base,
  define: {
    __COMMIT__: JSON.stringify(gitCommit()),
    __REPO__: JSON.stringify(
<<<<<<< HEAD
      process.env.VITE_REPO_URL || "https://github.com/rcastellotti/DV2026-GrizzlyBears",
=======
      process.env.VITE_REPO_URL ||
        "https://github.com/rcastellotti/DV2026-GrizzlyBears",
>>>>>>> origin/main
    ),
  },
  plugins: [preact(), tailwindcss()],
});
