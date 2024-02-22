'use client'
import styles from "./page.module.css";
import { useState } from 'react';
import questionsData from './questions.json';
import { checkAnswer } from './library';
import { Answer } from "./types";




export default function Quiz() {
 //Set a question index, from the Json with questions. Enter to the "questions value"
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(""); // State to track selected option for current question
  const questions = questionsData.questions;
  const currentQuestion = questions[currentQuestionIndex];



  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(""); // Reset selected option for the next question
      console.log(selectedOption)
    }

    //console.log(option);

  };

function handleOptionChange (option: Answer) {
    setSelectedOption(option.toDisplay);
    checkAnswer(option);// Update selected option when an option is clicke
  };

  return (
    <div className={styles.quiz}>
      <h2>{currentQuestion.title}</h2>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index} > 
            <input checked={selectedOption === option.toDisplay} onClick={() => handleOptionChange(option)} type="radio" id={option.toDisplay}  name={`question-${currentQuestionIndex}`} value={option.value}/>
            <label htmlFor={option.toDisplay}>{option.toDisplay}</label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
    </div>
  );
}






