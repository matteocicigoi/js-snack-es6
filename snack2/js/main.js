'use strict';
/* funzioni */

//  genera un numero
function random(numberMin, numberMax){
    return(Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin);
}
/* main */

// squadre
let squadre = [
    // squadra
    {
        nome : 'ATALANTA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'BOLOGNA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'CAGLIARI',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'EMPOLI',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'FIORENTINA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'FROSINONE',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'GENOA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'HELLAS VERONA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'INTER',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'JUVENTUS',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'LAZIO',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'LECCE',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'MILAN',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'MONZA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'NAPOLI',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'ROMA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'SALERNITANA',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'SASSUOLO',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'TORINO',
        punti : 0,
        falli : 0
    },
    // squadra
    {
        nome : 'UDINESE',
        punti : 0,
        falli : 0
    }
]

// genera i punti e falli
squadre = squadre.map((squadra) => {
    const {nome} = squadra;
    return {
        nome,
        punti : random(0, 100),
        falli : random(0, 15)
    }
});

// nuovo array contentente solo i nomi e falli
const squadre2 = squadre.map((squadra) => {
    const {nome, falli} = squadra;
    return {
        nome,
        falli
    }
});
console.log('nomi punti e falli', squadre);
console.log('nomi e falli',squadre2);