import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'login-bg': 'url("/login-image.png")',
        'form-bg': 'url("/form-border.svg")',
      },
      backgroundPosition: {
        'login-bg-position': 'center bottom',
      },
    },
  },
  plugins: [],
}
export default config
