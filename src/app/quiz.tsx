import styles from "./page.module.css";


export default function Quiz(){
    return(
    <div className={styles.quiz}>

    </div>
    
    )}


export function displayQuestion(question: Question) {
    return (
        <form>
            <h3>{question.title}</h3>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <input type="radio" name="option" value={option.value} />
                        <label>{option.toDisplay}</label>
                    </li>
                ))}
            </ul>
        </form>
    );
}
