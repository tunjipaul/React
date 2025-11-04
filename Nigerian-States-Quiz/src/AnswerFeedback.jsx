function AnswerFeedback({ feedback, isCorrect }) {
  if (!feedback) return null;
  return (
    <p
      style={{ fontWeight: "bold" }}
      className={`feedback ${isCorrect ? "correct" : "wrong"}`}
    >
      {feedback}
    </p>
  );
}

export default AnswerFeedback;
