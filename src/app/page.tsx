import Image from "next/image";
import styles from "./page.module.css";
import cursor from "../../public/cursor.png"



export default function Home() {
 return(
 <div className={styles.welcomeDiv} style={{cursor:`url(${cursor.src}), crosshair`}}>
    <h1>Linux Distro Chooser</h1>
    <p>Start choosing your distro today!</p>
    <br /> <br />
    <button>Start Test</button>
 </div>
 );
}
