/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lemon: "lemon",
        oswald: "oswald",
        rubik_mono: "rubik-mono",
      },
      fontSize: {
        "mega-besar": "200px",
        "agak-kecil": "22px",
      },
      backgroundImage: {
        kucing: 'url("../public/kucing.jpeg")',
        mobil: 'url("../public/koenigsegg jesko.jpg")',
        rizz: 'url("../public/Rizzz me.jpg")',
        ust: 'url("../public/ust.khalid basalamah.jpg")',
      },
    },
    plugins: [],
  },
};
