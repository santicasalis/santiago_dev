/** @type {import('tailwindcss').Config} */

    module.exports = {
        content: [
          "./pages/**/*.{ts,tsx}",
          "./public/**/*.html",
        ],
        plugins: [
          require("flowbite/plugin")
        ],
        theme: {},
      };