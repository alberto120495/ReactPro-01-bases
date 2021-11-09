import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export const useCounter = ({ maxCount = 10 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimateRef = useRef<any>(null);

  const timeLineRef = useRef(gsap.timeline());

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimateRef.current) return;

    timeLineRef.current
      .to(elementToAnimateRef.current, {
        y: -10,
        duration: 0.2,
        ease: "ease.out",
      })
      .to(elementToAnimateRef.current, {
        y: 0,
        duration: 1,
        ease: "bounce.out",
      })
      .pause();
  }, []);

  useEffect(() => {
    //if (counter < maxCount) return;
    timeLineRef.current.play(0);
  }, [counter, maxCount]);

  return {
    counter,
    elementToAnimateRef,
    handleClick,
  };
};
