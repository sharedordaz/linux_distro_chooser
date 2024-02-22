'use server'
import { cookies } from 'next/headers';

export default async function uploadAnswer(option: any){
            
         cookies().set(`Answer`, `${option.valueToSumTo}: ${option.value}`);
         console.log(cookies().get('Answer'));

      }
