/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
           'sz425' : {'min': '250px' , 'max':'1370px'},
            'sz325' : {'min': '325px', 'max':'600px'}
        }
    },
  },
  plugins: [],
}

