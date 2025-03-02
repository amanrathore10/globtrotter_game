import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import styles from "../styles/Home.module.css";
import classnames from "classnames";

const Game = ({ question, selectedAnswer, checkAnswer, nextQuestion, showConfetti, showSadFace }) => (
  <>
    {showConfetti && <Confetti />}
    <h1 className={styles.title}>Guess the Destination! 🌍</h1>
    {question && (
      <div className={styles.card}>
        <p className={styles.clue}>💡 {question.clues.map((clue, index) => (<span key={index}>{clue}</span>))}</p>
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => checkAnswer(option)}
            className={classnames(styles.button, {
              [styles.successButton]: selectedAnswer && selectedAnswer === question.city && selectedAnswer === option,
              [styles.errorButton]: selectedAnswer && selectedAnswer !== question.city && selectedAnswer === option,
            })}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
    )}
    {selectedAnswer && (
      <>
        <p className={styles.result}>
          {selectedAnswer === question.city ? "🎉 Correct!" : "😢 Wrong!"} -{" "}
        </p>
        {question.fun_fact?.length > 0 && <div className={styles.factsWrapper}>
          Fun facts about this destination:
          <p className={styles.funFact}>{question.fun_fact}</p></div>}
      </>
    )}
    {showSadFace && <div className={styles.sadFace}>😢</div>}
    <button onClick={nextQuestion} className={styles.playAgain}>
      Next Question ➡️
    </button>
  </>
);

const ScoreBoard = ({ totalQuestions, score, wrongAnswers }) => (
  <div className={styles.scoreBoard}>
    <div>Total Questions Attempted: {totalQuestions}</div>
    <div>Correct Answers: {score}</div>
    <div>Wrong Answers: {wrongAnswers}</div>
  </div>
);

const ChallengeForm = ({ inviter, handleUsernameChange, generateInviteLink, inviteLink, setChallengeFormVisible }) => (
  <>
    <input className={styles.challengerName} value={inviter} onChange={handleUsernameChange}></input>
    <button onClick={() => {
      generateInviteLink();
      if (inviteLink) {
        window.open(`https://wa.me/?text=Join me on Globetrotter! ${inviteLink}`, '_blank');
      }
      setChallengeFormVisible(false);
    }} className={styles.button} >Submit</button>
  </>
);

export default function Home() {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadFace, setShowSadFace] = useState(false);
  const [inviteLink, setInviteLink] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [inviter, setInviter] = useState('');
  const [challengeFormVisible, setChallengeFormVisible] = useState(false);
  const [inviteDetails, setInviteDetails] = useState({ invitedBy: '', myScore: 0 });

  useEffect(() => {
    let params = window.location.search.split('?')[1].split('&');
    params = params.reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[key] = value;
      return acc;
    }, {});

    if (params.invitedBy) {
      setInviter(params.invitedBy);
      setInviteDetails({ invitedBy: params.invitedBy, myScore: params.myScore });
    } else {
      startGame();
      fetchNewQuestion();
    }
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

  const nextQuestion = () => {
    setShowConfetti(false);
    setShowSadFace(false);
    fetchNewQuestion();
  };

  const handleUsernameChange = (e) => {
    setInviter(e.target.value);
  }

  const startGame = () => {
    setGameStarted(true);
    nextQuestion();
  };

  const generateInviteLink = () => {
    const link = `${window.location.origin}?invitedBy=${inviter}&myScore=${score}`;
    setInviteLink(link);
  };

  const challengeAFriend = () => {
    setChallengeFormVisible(true);
  }

  return (
    <div className={styles.container}>
      {gameStarted ? (
        <>
          <Game
            question={question}
            selectedAnswer={selectedAnswer}
            checkAnswer={checkAnswer}
            nextQuestion={nextQuestion}
            showConfetti={showConfetti}
            showSadFace={showSadFace}
          />
          <ScoreBoard
            totalQuestions={totalQuestions}
            score={score}
            wrongAnswers={wrongAnswers}
          />
          <div>
            <button className={styles.button} onClick={challengeAFriend}>
              Challenge a Friend
            </button>
            {challengeFormVisible && (
              <ChallengeForm
                inviter={inviter}
                handleUsernameChange={handleUsernameChange}
                generateInviteLink={generateInviteLink}
                inviteLink={inviteLink}
                setChallengeFormVisible={setChallengeFormVisible}
              />
            )}
          </div>
        </>
      ) : (
        <div className={styles.container}>
          <div>You are invited by - {inviteDetails.invitedBy}</div>
          <div>Beat his best score - {inviteDetails.myScore}</div>
          <div className={styles.button} onClick={startGame}>Start Game</div>
        </div>
      )}
    </div>
  );
}
