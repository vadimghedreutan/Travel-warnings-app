import React, {useEffect} from 'react';
import gsap from 'gsap';

import './styles/app.scss';
import Header from './components/header';
import Banner from './components/banner';
import Cards from './components/cards';
import IntroOverlay from './components/introOverlay';

function App() {

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    // Prevent flashing 
    gsap.to("body", 0, {css: {visibility: "visible"} });

    //timeline
    const tl = gsap.timeline();

    tl.from(".line span", 1, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    }).to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    }).to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -.8,
      stagger: {
        amount: 0.4
      }
    }).to(".intro-overlay", 0, {css: {display: "none"} })

  }, []);

  return (
    <div>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cards />
    </div>
  );
}

export default App;
