// rfc means 'React Functional Component'
// type in rfc with snippet to immediately launch a new template
function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button>Let's Start</button>
    </div>
  );
}

export default StartScreen;
