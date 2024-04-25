import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;

  // Mounts as the game starts. This is why we place the useEffect timer code in the Timer element
  useEffect(
    function () {
      // Will run the function we place in here every milliseconds
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000); //every second

      //   initiate cleanup function
      return () => clearInterval(id); //cancel the timer between renders, after it unmounts
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </div>
  );
}

export default Timer;
