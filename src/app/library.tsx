'use server'
import { cookies } from 'next/headers';
import { Answer } from './types';


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
