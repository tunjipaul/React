import { useState } from "react";
import Question from "./Question";
import ScoreBoard from "./ScoreBoard";
import AnswerFeedback from "./AnswerFeedback";

const questions = [
  {
    question: "What is the capital of Lagos State?",
    options: ["Lagos Island", "Ikeja", "Victoria Island", "Lekki"],
    answer: "Ikeja",
  },
  {
    question: "What is the capital of Rivers State?",
    options: ["Warri", "Calabar", "Port Harcourt", "Asaba"],
    answer: "Port Harcourt",
  },
  {
    question: "What is the capital of Kano State?",
    options: ["Kano", "Kaduna", "Zaria", "Gusau"],
    answer: "Kano",
  },
  {
    question: "What is the capital of Oyo State?",
    options: ["Abeokuta", "Ibadan", "Ilorin", "Oshogbo"],
    answer: "Ibadan",
  },
  {
    question: "What is the capital of Enugu State?",
    options: ["Nsukka", "Enugu", "Awka", "Abakaliki"],
    answer: "Enugu",
  },
];

function QuizApp() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = () => {
    if (!selected) return;
    const correct = questions[current].answer === selected;
    if (correct) setScore(score + 1);
    setIsCorrect(correct);
    setFeedback(correct ? "Correct!" : "Wrong!");
    setTimeout(() => {
      setFeedback("");
      setIsCorrect(null);
      setSelected("");
      setCurrent(current + 1);
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setFeedback("");
  };

  if (current >= questions.length)
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Nigerian States Quiz</h1>
        <p>
          Final Score: {score}/{questions.length}
        </p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Nigerian States Quiz</h1>
      <ScoreBoard score={score} total={questions.length} />
      <Question
        data={questions[current]}
        selected={selected}
        onSelect={setSelected}
        onSubmit={handleAnswer}
        number={current + 1}
      />
      <AnswerFeedback feedback={feedback} isCorrect={isCorrect} />
    </div>
  );
}

export default QuizApp;
