import { useReducer } from "react";

const initialState = { count: 0, step: 1 };
// current state and action as args
// compute the next state
function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Unknown action");
  }

  // if (action.type === "inc") {
  //   // the next state will be incremented by 1
  //   return state + 1;
  // }

  // if (action.type === "dec") {
  //   // the next state will be decremented by 1
  //   return state - 1;
  // }

  // if (action.type === "setCount") {
  //   // set state as the value in the payload field
  //   return action.payload;
  // }
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  // returns a state and a dispatch function that can be used to update the state
  const [state, dispatch] = useReducer(reducer, initialState);

  // destructuring from state
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    // dispatch actions with a type and optionally a payload
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
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
