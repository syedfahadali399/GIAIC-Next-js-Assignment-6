import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      'max-xl': { max: '1380px' },
      'max-lg': { max: '1280px' },
      'max-slg': {max: '1180px'},
      'max-sml': { max: '1080px' },
      'max-ult': { max: '980px'},
      'max-lt': { max: '880px'},
      'max-mt': { max: '768px' },
      'max-st': { max: '680px' },
      'max-ust': { max: '580px' },
      'max-lm': { max: '480px' },
      'max-mm': { max: '425px' },
      'max-sm': { max: '375px' },
      'max-usm': {max: '340px' }
    },
  },
  plugins: [],
} satisfies Config;