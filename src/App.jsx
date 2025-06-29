import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktail from './components/Cocktail';


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {

  return (
    
    <main >
        <Navbar />
        <Hero  />
        {/* <div className='h-dvh bg-black'></div> */}
        <Cocktail />
    </main>
  )
}

export default App