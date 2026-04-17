/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#001F26",
          900: "#001F26",
          800: "#0A2A33",
          700: "#143542",
          600: "#1F4051",
          500: "#2A4B60",
          400: "#3A5F78",
          300: "#567A92",
          200: "#7FA3B8",
          100: "#B3D0DE",
          50: "#E6F3F8",
        },

        secondary: {
          DEFAULT: "#DEB665",
          900: "#DEB665",
          800: "#CFA457",
          700: "#B8924D",
          600: "#A18044",
          500: "#8B6E3A",
          400: "#A98B57",
          300: "#C5AB7A",
          200: "#DDC9A3",
          100: "#EFE2CC",
          50: "#FAF6ED",
        },

        title: {
          DEFAULT: "#DEB665",
        },

        error: "#FF0000",
        success: "#009165",
        warning: "#F68C4E",
      },
      borderColor: {
        shade: {
          900: "#2c2b2b",
          800: "#393838",
          700: "#464444",
          600: "#535151",
          500: "#605e5e",
          400: "#6d6a6a",
          300: "#7a7777",
        },
      },
      boxShadow: {
        sm: "0px 0px 4.08px 0px #0000001f",
        md: "0px 0px 8px 0px #0000003f",
      },
      spacing: {
        xs: "0.5rem",
        sm: "0.7rem",
        base: "1rem",
      },
      backgroundColor: {
        bgLight: "#f2f4f7",
        bgGrey: "#ececec",
      },
      textColor: {
        content: {
          900: "#2c2b2b",
          800: "#393838",
          700: "#464444",
          600: "#535151",
          500: "#605e5e",
          400: "#6d6a6a",
          300: "#7a7777",
        },
      },
      fontFamily: {
        graveurRegular: ["graveur-regular"],
        interLight: ["inter-light"],
        interRegular: ["inter-regular"],
        interMedium: ["inter-medium"],
        interSemibold: ["inter-semibold"],
        interBold: ["inter-bold"],
      },

      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
      maxWidth: {
        xxl: "2000px",
      },
      screens: {
        xxs: "320px",
        xs: "475px",
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "20px",
        md: "7px",
        sm: "3px",
      },
      animation: {
        slowspin: "spin 3s linear infinite", // Slower (3s per rotation)
        fastspin: "spin 500ms linear infinite", // Faster (0.5s per rotation)
      },
    },
  },
  plugins: [
    function ({ addComponents, addBase, theme }) {
      addComponents({
        ".font-bold": {
          fontFamily: theme("fontFamily.interBold"),
        },
        ".font-medium": {
          fontFamily: theme("fontFamily.interMedium"),
        },
        ".font-semibold": {
          fontFamily: theme("fontFamily.interSemibold"),
        },
      });
      addBase({
        ":root": {
          "--error": theme("colors.error"),
          "--warning": theme("colors.warning"),
          "--success": theme("colors.success"),
        },
        body: {
          color: "#001F26",
          fontSize: "1rem",
          fontFamily: "inter-regular",
        },
        h1: {
          fontSize: "1.5rem",
          color: "#DEB665",
          fontFamily: "inter-bold",
        },
        h2: {
          color: "#DEB665",
        },
        h4: {
          color: "#DEB665",
        },
        h3: {
          fontSize: "1.25",
          color: "#DEB665",
          fontFamily: "inter-bold",
        },

        h6: {
          color: "#DEB665",
          fontFamily: "inter-semibold",
        },
        label: {
          fontFamily: "inter-semibold",
          color: "#001F26",
        },
      });
    },
  ],
};
