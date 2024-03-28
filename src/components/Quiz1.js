import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Quiz1() {
	const questions = [
	  {
		questionText: "Question 1",
		answerOptions: [
		  { answerText: "Answer 1", isCorrect: false },
		  { answerText: "Answer 2", isCorrect: false },
		  { answerText: "Answer 3", isCorrect: true },
		  { answerText: "Answer 4", isCorrect: false },
		],
	  },
	  {
		questionText: "Question 2",
		answerOptions: [
		  { answerText: "Answer 1", isCorrect: false },
		  { answerText: "Answer 2", isCorrect: false },
		  { answerText: "Answer 3", isCorrect: true },
		  { answerText: "Answer 4", isCorrect: false },
		],
	  },
	];
  
	const { width, height } = useWindowSize();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  
	const handleAnswerOptionClick = (isCorrect) => {
	  if (isCorrect) {
		setScore(score + 1);
	  }
  
	  const nextQuestion = currentQuestion + 1;
	  if (nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	  } else {
		setShowScore(true);
	  }
	};
  
	function refreshPage() {
	  window.location.reload(false);
	}
  
	return (
	  <>
		<div className="header">
			  Quiz
		  </div>
	   <div className="app">
			{showScore ? (
			  <>
				<div className="score-section">
				  <div className="score-section-score">
					  Вы набрали {score} из {questions.length} очков
				  </div>
				  <div>
					  {score === questions.length ? (
					  <>
						  <Confetti width={width} height={height} numberOfPieces={500} />
						  <div className="score-section-message">
						  Поздравляем 🥇 🥳 🍾
						  </div>
						  <div className="score-section-message">
							  Ваш приз - X
						  </div>
					  </>
				  )
				  : ( 
					<>
					<div className="score-section-message">
						{score > 3 ? "Вы почти у цели 🎯 🙌" : "Мы в Вас верим 🙌 ✨"}
					</div>
					<div className="score-section-message">
						<button onClick={refreshPage}>Попробовать еще раз</button>
					</div>
					</>
					)}			
					</div>
				</div>
			  </>
			) : (
			  <>
				<div className="question-section">
				  <div className="question-count">
					<span>Вопрос {currentQuestion + 1}</span> из {questions.length}
				  </div>
				  <div className="question-text">
					{questions[currentQuestion].questionText}
				  </div>
				</div>
				<div className="answer-section">
				  {questions[currentQuestion].answerOptions
			.sort(() => Math.random() - 0.5)
			.map((answerOption) => (
					<button
					  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
					>
					  {answerOption.answerText}
					</button>
				  ))}
				</div>
			  </>
			)}
		  </div>
		  </>
		);
	  }
  