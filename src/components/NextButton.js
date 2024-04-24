function NextButton({ dispatch, answer }) {
  // if there is no answer
  if (answer === null) {
    return null;
  }

  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
