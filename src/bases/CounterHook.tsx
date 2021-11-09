import { useCounter } from "../hooks/useCounter";

function CounterHook() {
  const { counter, elementToAnimateRef, handleClick } = useCounter({
    maxCount: 15,
  });
  return (
    <>
      <h1>CounterHook:</h1>
      <h2 ref={elementToAnimateRef}>{counter}</h2>

      <button onClick={handleClick}>+1</button>
    </>
  );
}

export default CounterHook;
