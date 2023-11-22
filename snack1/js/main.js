'use strict';

// array 
const bici = [
    // oggetto 
    {
        nome : 'bici 1',
        peso : 15
    },
    // oggetto 
    {
        nome : 'bici 2',
        peso : 17
    },
    // oggetto 
    {
        nome : 'bici 3',
        peso : 14
    },
    // oggetto 
    {
        nome : 'bici 4',
        peso : 13
    },
    // oggetto 
    {
        nome : 'bici 5',
        peso : 20
    }
]

// variabili che salvano la bici che pesa di meno
let nomeI = null;
let pesoI = null;

// bici che pesa di meno
bici.forEach((elemento) => {
    const {nome , peso} = elemento;
    if(pesoI === null || peso < pesoI){
        nomeI = nome;
        pesoI = peso;
    }
});

//stampa il risultato
document.querySelector('h2').innerText = `La bici che pesa di meno è: ${nomeI} ${pesoI}kg`;