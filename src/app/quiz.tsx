'use client'
import styles from "./page.module.css";
import { useState } from 'react';
import questionsData from './questions.json';
import { checkAnswer, parseAnswers, returnAnswer, storeResults } from './library';
import { Answer, UserResults } from "./types";

export const answersArray: any[] = [];
export var QuizResults: UserResults | [] = [];
var quizSubmitted: boolean = false;


function redirectToAnotherPage() {
    console.log("Redirection to /results")
    const router = useRouter();
    router.push('/results'); // Replace '/your-page' with the path of the page you want to navigate to
}




export default function Quiz() {
 //Set a question index, from the Json with questions. Enter to the "questions value"
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(""); // State to track selected option for current question
    const questions = questionsData.questions;
    const currentQuestion = questions[currentQuestionIndex];

    function handleNextQuestion () {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(""); // Reset selected option for the next question
            //returnAnswer();
            returnAnswer()
            .then( value => {
                console.log(value);
                answersArray.push(value);
                console.log(`ANSWERS ARRAY: ${answersArray}`)
                })
            .catch(error => {
                console.error(error)
                })
        }
    };

    function handleSubmitQuiz (){
        //console.log("Quiz Submitted")
            returnAnswer()
            .then( value => {
                console.log(value);
                answersArray.push(value);
                console.log(`ANSWERS ARRAY: ${answersArray}`)
                })
            .catch(error => {
                console.error(error)
                })

            parseAnswers(answersArray).then( value => {
                QuizResults = value;
                storeResults(QuizResults);
                quizSubmitted = true;
                
                //console.log(`QUIZ RESULTS: \n${JSON.stringify(QuizResults)}`);

                }).catch(error => {
                    console.error(error);
                    })
            
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
      <button onClick={handleNextQuestion} disabled={selectedOption === "" || currentQuestionIndex === questions.length - 1}>Next</button>
      {currentQuestionIndex === questions.length - 1 && (
      <button onClick= {handleSubmitQuiz}>
        Submit Quiz
      </button>

      )}

    {quizSubmitted === true && (
      <a href="/results"><button>
        See Results
      </button>
      </a>

      )}
    </div>
  );
}






