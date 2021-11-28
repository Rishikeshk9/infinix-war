module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        lg: "0 15px 15px rgba(255, 255, 255, 0.25)",
      },
      opacity: {
        1: ".02",
      },
      colors: {
        offwhite: "#aaa",
      },
    },
    backdropFilter: {
      none: "none",
      blur: "blur(20px)",
    },
    border: {
      0.5: "0.5px solid",
    },
    zIndex: { 100: 100, 99: "-80" },

    glow: {
      colors: {
        // Defaults to all theme colors
        // ...
      },
      styles: {
        // Defaults to these values
        default: (baseColor) =>
          `0 1px 3px 0 rgba(${baseColor}, 0.4), 0 1px 2px 0 rgba(${baseColor}, 0.24)`,
        md: (baseColor) =>
          `0 4px 6px -1px rgba(${baseColor}, 0.4), 0 2px 4px -1px rgba(${baseColor}, 0.24)`,
        lg: (baseColor) =>
          `0 10px 15px -3px rgba(${baseColor}, 0.4), 0 4px 6px -2px rgba(${baseColor}, 0.20)`,
        xl: (baseColor) =>
          `0 20px 25px -5px rgba(${baseColor}, 0.4), 0 10px 10px -5px rgba(${baseColor}, 0.16)`,
        "2xl": (baseColor) => `0 25px 50px -12px rgba(${baseColor}, 1)`,
        outline: (baseColor) => `0 0 0 3px rgba(${baseColor}, 0.5)`,
        none: "none",
      },
    },
    // ...
  },
  variants: {
    extend: {
      dropShadow: ["hover", "focus"],
      opacity: ["responsive", "hover", "focus", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "group-hover"],
      blur: ["hover", "focus"],
      border: ["hover", "focus"],
      borderColor: ["hover", "focus"],
    },
  },
  plugins: [require("tailwindcss-glow"), require("tailwindcss-filters")],
};
