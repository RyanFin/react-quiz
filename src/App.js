import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";
import { useQuiz } from "./contexts/QuizContext";

export default function App() {
  const { status, dispatch } = useQuiz();

  // fetch data from API with useEffect() hook
  useEffect(
    function () {
      fetch("http://localhost:8000/questions")
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "dataReceived", payload: data });
        })
        .catch((err) => dispatch({ type: "dataFailed" }));
    },
    [dispatch]
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {/* conditional rendering based on the state.status values received */}
        {/* test this by throttling to Slow3G in chrome Dev tools Network tab */}
        {status === "loading" && <Loader />}
        {/* test by turning off fake API */}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question />
            {/* // dispatch an action from within the next button */}
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
