import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import decrement from "./Actions/decrement";
import increment from "./Actions/increment";

export default function App2() {
  const counter = useSelector((state) => state.counter);
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        increment
      </button>{" "}
      <button
        onClick={() => {
          dispatch(increment(1000));
        }}
      >
        increment
      </button>{" "}
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          dispatch(decrement(22));
        }}
      >
        decrement
      </button>{" "}
      <h2>Counter: {number}</h2>
    </>
  );
}
