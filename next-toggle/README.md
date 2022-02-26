Guide to create a toggle button with next.js
1. Install tailwindss on your project

2. Clear your index.js/tsx file


3. Inside tailwind.config.js add inside module exports 
   - darkMode:'class',
      example of final tailwind.config.js file:
      
      ////////
      module.exports = {
  //target the dark mode on this project
  darkMode:'class',//fo m toggle manually between dark/ligth mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
////////




4. Install next-themes package
   - npm i next-themes


5. Go on app.js/tsx and do the following action:
  import {ThemeProvider} from 'next-themes and wrap the <Component {...pageProps}/> with the <ThemeProvide> component we
   import
  
  
6. create the use theme function   const{theme,setThemes}=useTheme()
  
  
7. create the button on index.js/tsx and inside the button create a text that contain any text set by the conditional
  render{theme === 'light ? 'Dark':'Light'}
  
8. style the button to have different color on dark and light mode
  
  
9.add the onclick function to the button
  - onClick={()=>setTheme(theme==='light'?'dark':'light')
  

10. Last thing is to add useState and useEffect hooks to help server understand how we set the theme avoid error on console
  const[mounted,setMounted] =useState(false)
  useEffect(()=>setMounted(true),[])
  
  if(!mounted) return null , else return the entire index.tsk return value
  
  
