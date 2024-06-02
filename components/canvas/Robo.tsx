import React, { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';

function Robo() {
  const roboRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1.5 } });

    tl.from(roboRef.current, { opacity: 0, y: 50, clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' });

    return () => {
      tl.to(roboRef.current, { opacity: 1, y: -50, clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' });
    };
  }, []);

  return (
    <div className="absolute md:relative top-0 left-0 w-full h-full z-0 md:z-99" ref={roboRef}>
      <Spline scene="https://prod.spline.design/kLy6Hv5KFweKu9AO/scene.splinecode" />
    </div>
  );
}

export default Robo;
