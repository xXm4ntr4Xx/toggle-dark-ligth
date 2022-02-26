import type { NextPage } from 'next'
import {useTheme} from 'next-themes'
import{useState,useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  const [mounted,setMounted] = useState(false)
const {theme,setTheme}= useTheme();//remember to avoid missmatch on server

useEffect(()=>setMounted(true),[])
if(!mounted)return null

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Current theme mode: {theme}</h1>
      
      <button className="px-6 py-2 mt-10 bg-black dark:bg-white text-white dark:text-black "
      onClick={()=>setTheme(theme==='light'?'dark':'light')}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </div>
  )
}

export default Home
