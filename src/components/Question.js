import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <>
      <h4>{question.question}</h4>
      <Options question={question} />
    </>
  );
}
