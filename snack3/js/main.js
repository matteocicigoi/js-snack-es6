'use strict';

/* funzioni */

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
function arrayMinMax(array, min, max){
    return array.filter((element, index) => {
        if(index >= min  && index <= max)return true;
    });
}

const a = [0, 1, 2, 3, 4, 5, 6, 7 ,8 ,9];

const b = arrayMinMax(a, 2, 6);

console.log(b);