/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: "lemon",
      },
      fontSize: {
        "mega-besar": "200px",
      },
      backgroundImage: {
        kucing: 'url("../public/kucing.jpeg")',
        mobil: 'url("../public/koenigsegg jesko.jpg")'
      },
      

    },
    plugins: [],
  },
};
