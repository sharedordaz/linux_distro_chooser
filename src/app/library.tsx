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

export async function uploadAnswer(){

    }
