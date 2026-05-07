import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FCFAF7",
        sage: "#98A79E",
        sand: "#EDE6DD",
        slate: "#4E5754",
        gold: "#B99A68"
      }
    }
  },
  plugins: []
} satisfies Config;
