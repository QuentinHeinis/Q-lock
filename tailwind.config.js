module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "true-gray": {
          "25": "#F5F5F5",
          "350": "#b4b4b4",
          "550": "#666666",
          "900": "#171717"
        },
        "Rose": "#F2325C"
      },
      "fontSize": {
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.5rem",
        "xl": "1.75rem",
        "2xl": "2.25rem"
      },
      "fontFamily": {
        "smythe": "Smythe",
        "source-sans-pro": "Source Sans Pro",
        "poppins": "Poppins"
      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.3125rem",
        "default": "0.625rem",
        "lg": "0.9375rem",
        "xl": "1.0625rem",
        "2xl": "1.3125rem",
        "3xl": "1.625rem",
        "4xl": "1.875rem",
        "5xl": "2.1875rem",
        "6xl": "2.8271484375rem",
        "7xl": "2.875rem",
        "8xl": "5.0888671875rem",
        "full": "9999px"
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}

