import React from "react";
//import ReactDom from "react-dom";
import "../discrete_maths/Quiz.css";
import questions from "../../documents/questions";
import { useState } from 'react';

function Quiz() {
    
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

    function RefreshPage() {
        window.location.reload();
    }
	return (
		<div className='Quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="actions">
                        <button onClick={RefreshPage}>Restart</button>
                    </div>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)} className="options" id="opt">{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Quiz;