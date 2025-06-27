import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'


gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {

  return (
    
    <div className=' flex-center h-[100vh]'>

        <div className=' text-3xl text-indigo-300 '>hello Gsap</div>
    </div>
  )
}

export default App