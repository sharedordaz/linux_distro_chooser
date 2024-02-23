'use server'
import { cookies } from 'next/headers';
import { Answer, LinuxDistribution, UserResults, answersCounter } from './types';
import { useRouter } from 'next/navigation';


export default async function Library(){
    return(<p>Nothing</p>)
    }


export async function checkAnswer(option: Answer){
            
         cookies().set(`Answer`, `${option.valueToSumTo}: ${option.value}`);
         console.log(cookies().get('Answer'));

      }

export async function returnAnswer() {
    console.log("RUNNING RETURN ANSWER()")
    return new Promise((resolve, reject) => {
        const actualAnswer = cookies().get("Answer");
        if (actualAnswer) {
            //console.log(`ANSWER READ: ${actualAnswer.value}`);
            resolve(actualAnswer.value);
        } else {
            reject(new Error("ReturnAnswer() failed on find cookies."));
        }
    });
}

export async function parseAnswers(answersArray: any[]){
    console.log(`parseAnswers:\nUNPARSED ANSWERS: ${answersArray}`)

    const counter: answersCounter = {
    release: {
        rolling: 0,
    },
    packageManager: {
        APT: 0,
        DNF: 0,
        PACMAN: 0,
        OtherPM: 0
    },
    desktopEnvironment: {
        KDE: 0,
        GNOME: 0,
        XFCE: 0,
        Mate: 0,
        Cinnamon: 0,
        LXQT: 0,
        WM: 0,
        Deepin: 0,
    },
    dificulty: 'Easy',
    focusedOn: 'Desktop',
    rawTerminal: false,
    ARM: false,
    gaming: false
    };


    answersArray.forEach(value => {
        //console.log(value);
        let key_itsvalue = value.split(":");
        let key = key_itsvalue[0];

        let itsvalue = parseInt(key_itsvalue[1]);
        if (key.includes(',')){ // Manage multikey values
            console.log("MULTIKEY DETECTED")
            let multikey = key.split(',');
            multikey.forEach((v : string) => {
            switch(v){
            case 'APT':
                counter.packageManager.APT += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;
            case 'DNF':
                counter.packageManager.DNF += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;
            case 'PACMAN':
                counter.packageManager.PACMAN += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'OtherPM':
                counter.packageManager.OtherPM += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;
//--------Desktop Environment
            case 'KDE':
                counter.desktopEnvironment.KDE += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'GNOME':
                counter.desktopEnvironment.GNOME += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'XFCE':
                counter.desktopEnvironment.XFCE += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'Mate':
                counter.desktopEnvironment.Mate += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'Cinnamon':
                counter.desktopEnvironment.Cinnamon += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'LXQT':
                counter.desktopEnvironment.LXQT += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'WM':
                counter.desktopEnvironment.WM += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;

            case 'Deepin':
                counter.desktopEnvironment.Deepin += itsvalue;
                console.log(`Added ${itsvalue} points to ${v}`);
                break;
                    }

                console.log(v)
                })
            }
        console.log(key, itsvalue);
        
        switch (key){
            case 'Rolling Release':
                counter.release.rolling += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;
            case 'APT':
                counter.packageManager.APT += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;
            case 'DNF':
                counter.packageManager.DNF += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;
            case 'PACMAN':
                counter.packageManager.PACMAN += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'OtherPM':
                counter.packageManager.OtherPM += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;
//--------Desktop Environment
            case 'KDE':
                counter.desktopEnvironment.KDE += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'GNOME':
                counter.desktopEnvironment.GNOME += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'XFCE':
                counter.desktopEnvironment.XFCE += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'Mate':
                counter.desktopEnvironment.Mate += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'Cinnamon':
                counter.desktopEnvironment.Cinnamon += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'LXQT':
                counter.desktopEnvironment.LXQT += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'WM':
                counter.desktopEnvironment.WM += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

            case 'Deepin':
                counter.desktopEnvironment.Deepin += itsvalue;
                console.log(`Added ${itsvalue} points to ${key}`);
                break;

//------------------Difficult
            case 'Easy':
            case 'Middle':
            case 'Advanced':
            case 'Expert':
                counter.dificulty = key;
                break;
            case 'Desktop':
            case 'Server':
            case 'Enterprise':
            case 'Tools':
                counter.focusedOn = key;
                break;
            case 'RawTerminal':
                counter.rawTerminal = true;
                break;
            case 'ARM':
                counter.ARM = true
                break;
            case 'EasyGPU':
                counter.gaming = true
                   }

    })
    //console.log(JSON.stringify(counter))

    const results = showIdealDistro(counter);
    return new Promise((resolve, reject) => {
        if (results) {
            //console.log(`ANSWER READ: ${actualAnswer.value}`);
            resolve(results);
        } else {
            reject(new Error("The quiz results could not be calculated"));
        }
    });

}

function showIdealDistro(counter: answersCounter ){
    const userResults: UserResults = {
    release: 'Stable',
    packageManager: 'APT',
    dificulty: 'Expert',
    desktopEnvironment: 'KDE',
    focusedOn: 'Desktop' ,
    rawTerminal: false,
    arm: false,
    easyGPU: false, //Install NVidia or AMD drivers by default, good for gaming.
};

    console.log(counter);


    let biggestNumber = 0;
    //Evaluate the best package manager based on points
    //console.log(counter.packageManager)
    Object.entries(counter.packageManager).forEach((entry) => {
        //console.log(`VALUE: ${entry}`)

        if (entry[1] > biggestNumber){
                biggestNumber = entry[1]
                //console.log(biggestNumber)
                userResults.packageManager = entry[0];
            }
        })
    
    let biggestNumber2 = 0;
    //Evaluate the best desktopEnvironment based on points
    Object.entries(counter.desktopEnvironment).forEach((entry) => {
        console.log(`VALUE: ${entry}`)

        if (entry[1] > biggestNumber2){
                biggestNumber2 = entry[1]
                //console.log(biggestNumber)
                userResults.desktopEnvironment = entry[0];
            }
        })

    //Check if the user wants rolling release
    if (counter.release.rolling > 0){
        userResults.release = "Rolling Release";
        }
    else{
        userResults.release = "Stable";
        }
    //Other Easy to process results
    userResults.dificulty = counter.dificulty;
    userResults.focusedOn = counter.focusedOn;
    userResults.easyGPU = counter.gaming;
    userResults.rawTerminal = counter.rawTerminal;
    userResults.arm = counter.ARM;
        
    console.log(userResults)
    return userResults;
    }

export async function storeResults (results: any ){
    console.log('StoreResults: ');
    cookies().delete('Results');
    cookies().set(`Results`, JSON.stringify(results));
    console.log("RESULTS COOKIED: ",cookies().get('Results'));

    }

export async function getCookiedResults(){
        return new Promise((resolve, reject) => {
        const results = cookies()?.get("Results")?.value;
        if (results) {
            //console.log(`ANSWER READ: ${results}`);
            let parsedResults = JSON.parse(results);
            
            resolve(parsedResults);
        } else {
            reject(new Error("Results from getCookiedResults() dont working."));
        }
    });

    
    }

