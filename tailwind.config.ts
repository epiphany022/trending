import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.w-1808px': {
          width: '1808px',
        },
        '.w-416px': {
          width: '416px',
        },
        '.h-278px': {
          height: '278px'
        },
        '.translate-4': {
          transform:  `translateX(4px) translateY(-4px)` 
        },
        '.line': {
          width: '46px',
          height: '4px',
          borderRadius: '11px',
        },
        '.line-intro': {
          background: 'linear-gradient(to bottom, #38C1A5, #0891D5)'
        },
        '.line-basic': {
          background: 'linear-gradient(to bottom, #D9E313, #3CBC34)'
        },
        '.line-bitcoin': {
          marginTop: -10,
          background: 'linear-gradient(to bottom, #E0AD38, #EB3E1C)'
        },
        '.text-xxs': {
          fontSize: '9px'
        },
        '.rounded-intro': {
          borderRadius: '20px'
        },
        '.control': {
          width: "190px",
          height: "378px",
          background: "linear-gradient(270deg, #030303 0%, rgba(3, 3, 3, 0.8) 55.46%, rgba(3, 3, 3, 0) 100%)",
        },
        '.control-prev': {
          transform: "rotate(-180deg)",
          left: '-64px'
        },
        '.control-next': {
          right: '-64px'
        }
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
