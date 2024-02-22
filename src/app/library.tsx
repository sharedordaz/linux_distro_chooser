'use server'
import { cookies } from 'next/headers';
import { Answer, answersCounter } from './types';


export default async function Library(){
    return(<p>Nothing</p>)
    }

export async function checkAnswer(option: Answer){
            
         cookies().set(`Answer`, `${option.valueToSumTo}: ${option.value}`);
         console.log(cookies().get('Answer'));

      }

export async function returnAnswer() {
    return new Promise((resolve, reject) => {
        const actualAnswer = cookies().get("Answer");
        if (actualAnswer) {
            //console.log(`ANSWER READ: ${actualAnswer.value}`);
            resolve(actualAnswer.value);
        } else {
            reject(new Error("No answer found in cookies."));
        }
    });
}

export async function parseAnswers(answersArray: any[]){
    console.log(`UNPARSED ANSWERS: ${answersArray}`)

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
            multikey.forEach((v : string) => {console.log(v)})
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
    console.log(JSON.stringify(counter))



}
