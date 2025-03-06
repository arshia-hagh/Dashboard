/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "primery-color" : "var(--primeryB)",
        "secondery-color": "var(--seconderyB)",
        "gray-black": "var(--bg-gray-black)",
        "white-black": "var(--bg-white-black)",
        "black-gray": "var(--bg-black-gray)",
        
        "gray-color": "#353E4D",
        "orange-color": "#F46D22",
        "blackGray-color": "#1E2A41",
        "purple-color": "#8C77ED"
      },
      colors:{
        "primery-color": "var(--primeryT)",
        "secondery-color": "var(--seconderyT)",
        "gray-black": "var(--text-gray-black)",
        "icon-bg": "var(--bg-icon)",
        "icon2-bg": "var(--bg-icon2)",
        "black-gray": "var(--text-gray-black)",
        "white-black": "var(--text-white-black)",
        "secondery-gray-black": "var(--secondery-text-gray-black)",
        "light-black": "#14161D",
        "green-color": "#1ECB4F",
        "orange-color": "#F46D22",
      },
   
      screens:{
        'sm' : '350px',
        'md' : '750px',
        'lg': '1024px'

      }
    },
  },
  plugins: [],
}