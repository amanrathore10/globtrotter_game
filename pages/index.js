import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadFace, setShowSadFace] = useState(false);

  useEffect(() => {
    fetchNewQuestion();
  }, []);

  const fetchNewQuestion = () => {
    fetch("/api/destination", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ askedQuestions }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setQuestion(data);
          setSelectedAnswer(null);
        }
      });
  };

  const checkAnswer = (answer) => {
    setTotalQuestions(totalQuestions + 1);
    setAskedQuestions([...askedQuestions, question.city]);

    if (answer === question.city) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setWrongAnswers(wrongAnswers + 1);
      setShowSadFace(true);
      setTimeout(() => setShowSadFace(false), 2000);
    }
    setSelectedAnswer(answer);
  };

  return (
    <div className={styles.container}>
      {showConfetti && <Confetti />}
      <h1 className={styles.title}>Guess the Destination! 🌍</h1>

      {question && (
        <div className={styles.card}>
          <p className={styles.clue}>{question.clues[0]}</p>
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => checkAnswer(option)}
              className={styles.button}
              disabled={!!selectedAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {selectedAnswer && (
        <p className={styles.result}>
          {selectedAnswer === question.city ? "🎉 Correct!" : "😢 Wrong!"} -{" "}
          {question.fun_fact[0]}
        </p>
      )}

      {showSadFace && <div className={styles.sadFace}>😢</div>}

      <button onClick={fetchNewQuestion} className={styles.playAgain}>
        Next Question 🔄
      </button>

      <p className={styles.score}>
        Score: {score} | Total Questions: {totalQuestions} | Correct: {score} | Wrong: {wrongAnswers}
      </p>
    </div>
  );
}
