import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

function CounterEffect() {
  const [counter, setCounter] = useState(5);
  const counterElementRef = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    /*
    if(counter <= MAXIMUN_COUNT) return
    setCounter((prev) => prev + 1);
    */
    setCounter((prev) => Math.min(prev + 1, MAXIMUN_COUNT));
  };

  useEffect(() => {
    if (counter < 10) return;

    console.log(
      "%cSe llego al valor maximo",
      "color:red; background-color:black"
    );

    const tl = gsap.timeline();

    tl.to(counterElementRef.current, {
      y: -10,
      duration: 0.2,
      ease: "ease.out",
    });

    tl.to(counterElementRef.current, {
      y: 0,
      duration: 1,
      ease: "bounce.out",
    });
  }, [counter]);

  return (
    <>
      <h1>CounterEffect:</h1>
      <h2 ref={counterElementRef}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default CounterEffect;
