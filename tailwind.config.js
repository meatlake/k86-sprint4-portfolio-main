/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "bg-image": "url('../public/images/bg-about.svg')",
        "bg-sterren": "url('/images/Sterren.svg')",
        "bg-slider": "url('../public/images/bgQuiz.svg')",
        "bg-quiz": "url('../public/images/sliderBg.svg')",
        vormgevingFemke1: "url('/images/fruit.jpg')",
        vormgevingFemke2: "url('/images/berg.jpg')",
        vormgevingFemke3: "url('/images/kunsttt.jpg')",
        vormgevingFemke4: "url('/images/Frame.jpg')",
        vormgevingFemke5: "url('/images/paintingDamian.jpg",
        animatieKevin1: "url('/images/animatieKevin1.png')",
        animatieKevin2: "url('/images/animatieKevin2.png')",
        animatieKevin3: "url('/images/animatieKevin3.png')",
        coderJulian1: "url('/images/coderJulian1.png')",
        blobGroen: "url('../public/blobGroen.png')",
        blobBlue: "url('../public/blobBlue.png')",
        blobOrange: "url('../public/blobOrange.png')",
        blobPink: "url('../public/blobPink.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
