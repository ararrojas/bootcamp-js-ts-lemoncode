import { Carta } from "./modelo";

export function barajarCartas (array: Carta[]):void{
    for(let i = array.length -1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
};


