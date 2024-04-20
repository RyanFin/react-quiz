import { useReducer, useState } from "react";

// current state and action as args
// compute the next state
function reducer(state, action) {
  console.log(state, action);

  if (action.type === "inc") {
    // the next state will be incremented by 1
    return state + 1;
  }

  if (action.type === "dec") {
    // the next state will be decremented by 1
    return state - 1;
  }

  if (action.type === "setCount") {
    // set state as the value in the payload field
    return action.payload;
  }
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  // returns a state and a dispatch function that can be used to update the state
  const [count, dispatch] = useReducer(reducer, 0);

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    // dispatch actions with a type and optionally a payload
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
