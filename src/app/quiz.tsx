'use client'
import styles from "./page.module.css";
import { useState } from 'react';
import questionsData from './questions.json';

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = questionsData.questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <div className={styles.quiz}>
      <h1>{currentQuestion.title}</h1>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option.toDisplay}</li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>Next</button>
    </div>
  );
}






