import { getCookiedResults } from "../library";
import { UserResults } from "../types";
import styles from "../page.module.css";


export default async function results() {
    try {
        var CookiedResults = await getCookiedResults();
        
        // Check if CookiedResults is of type UserResults
        if (isUserResults(CookiedResults)) {
            const tableRows = Object.entries(CookiedResults).map(([key, value]) => (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{JSON.stringify(value)}</td>
                </tr>
            ));

            return (
                <div className={styles.results}>
                    <div className={styles.resultsBox}>
                    <h1>What are your preferences</h1>
                    <table>
                        <tbody>
                            {tableRows}
                        </tbody>
                    </table>
                    <a href="/"><button>Go to the main site</button></a>
                    </div>
                </div>
            );
        } else {
            return (
                <div className={styles.results}>
                    <div className={styles.resultsBox}>
                    <h1>There are no results</h1>
                    <a href="/"><button>Go to the main site</button></a>
                    </div>
                </div>
            );

        }
    } catch (error) {
        console.error(error);
        return null;
    }
}

// Type guard to check if the value is of type UserResults
function isUserResults(value: any): value is UserResults {
    // You may need to implement more specific checks depending on the structure of UserResults
    return typeof value === "object" && value !== null;
}
