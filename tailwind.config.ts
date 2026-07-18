import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#11211d",
        mist: "#f5f3eb",
        sand: "#dccfb7",
        leaf: "#184d47",
        gold: "#db8d26",
        coral: "#df6d57",
        slate: "#4c615c"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        panel: "0 22px 60px rgba(17, 33, 29, 0.12)",
        soft: "0 12px 30px rgba(24, 77, 71, 0.12)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(219, 141, 38, 0.28), transparent 32%), radial-gradient(circle at top right, rgba(24, 77, 71, 0.22), transparent 28%), linear-gradient(160deg, #f7f3e8 0%, #eef4ef 100%)"
      }
    }
  },
  plugins: []
};

export default config;
