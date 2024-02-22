'use client'
import Image from "next/image";
import styles from "./page.module.css";
import cursor from "../../public/cursor.png"
import Quiz from "./quiz";

import { useState } from 'react';


function displayQuiz(){
        
    }


export default function Home() {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartTest = () => {
        setShowQuiz(true);
        }
 return(
 <div className={styles.welcomeDiv} style={{cursor:`url(${cursor.src}), crosshair`}}>
    <h1>Linux Distro Chooser</h1>
    <p>Start choosing your distro today!</p>
    <br /> <br />
    {!showQuiz && (
        <button onClick={handleStartTest}>Start Test</button>
    )}
    {showQuiz && <Quiz />}
    
 </div>
 );
}
