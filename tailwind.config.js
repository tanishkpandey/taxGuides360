import flowbiteReact from 'flowbite-react/tailwind';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbiteReact.content()
  ],
  theme: {
    extend: {
      colors: {
        typography: {
          light: '#ffffff',  
          offLight: '#f6f6f6',
          DEFAULT: '#5B21B6', 
          dark: '#314259',
          lightDark: '#797979'
        },
        brandColor: {
          light: '#1678FB',  // Light pink
          DEFAULT: '#EC4899', // Default pink
          dark: '#1a56db',   // Dark pink
        },
        customGreen: '#10B981', // Custom green color
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
};
