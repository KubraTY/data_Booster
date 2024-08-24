import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customPurple: '#5e0bc7',
        customPurple_light:'#9548f5',
      },
    },
  },
  plugins: [],
} satisfies Config;
