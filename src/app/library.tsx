'use server'
import { cookies } from 'next/headers';

export default async function Library(){
    return(<p>Nothing</p>)
    }

export async function checkAnswer(option: any){
            
         cookies().set(`Answer`, `${option.valueToSumTo}: ${option.value}`);
         console.log(cookies().get('Answer'));

      }

export async function uploadAnswer(){

    }
