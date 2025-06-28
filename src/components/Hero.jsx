import { useGSAP } from "@gsap/react";
import React from "react";
import HeroLeftLeaf from "/images/hero-left-leaf.png";
import HeroRightLeaf from "/images/hero-right-leaf.png";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
  const heroSplit = new SplitText('.title',{ type:'chars, words'});
  const paragraphSplit = new SplitText('.subtitle',{ type:'lines'});

  heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'));
  gsap.from(heroSplit.chars,{
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.04
  })
  gsap.from(paragraphSplit.lines,{
    opacity:0,
    yPercent:100,
    duration:1.8,
    ease:'expo.out',
    stagger:0.06,
    delay:1,
  })
  gsap.timeline({
    scrollTrigger:{
        trigger:'#hero',
        start:'top',
        end:'bottom top',
        scrub:true
    }
  })
  .to('.right-leaf',{y:400},0)
  .to('.left-leaf',{y:-400},0)

  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img src={HeroLeftLeaf} alt="left-leaf" className="left-leaf" />
        <img src={HeroRightLeaf} alt="left-leaf" className="right-leaf" />
        <div className="body">
          <div className="content">
            <div className="space-y-5  hidden md:block">
                <p>Cool. Crisp. Classic</p>
                <p className="subtitle">
                    Sip the  Spirit <br /> Of Summer
                </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">
                    Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses. 
                </p>
                <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
