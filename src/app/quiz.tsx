import styles from "./page.module.css";


export default function Quiz(){
    return(
    <div className={styles.quiz}>

    </div>
    
    )}


export function displayQuestion(question: Question){
    return(
        <form>
        <h3>{question.title}</h3>
            <ul>
                <li></li>
                <li></li>
            </ul>
        </form>
    )
    }
