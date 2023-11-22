# Esercizio: Snack 1 - Snack 2 - Snack 3

## Snack 1

``` js
const bici = [
    {
        nome : 'bici 1',
        peso : 15
    }
]
```
- array bici
- variabile nome
- variabile peso
- foreach array bici
    - se la variabile peso è vuota o  peso attuale è < di quello salvato 
        - salva il nome e il peso alle variabili
- output nel dom

## Snack 2

``` js
const squadre = [
    {
        nome : 'squadra 1',
        punti : 0,
        falli : 0
    }
]
```
- array squadre
- map array squadre
    - punti generati da 0 a 100
    - falli generati da 0 a 15
- array squadre2 solo con i nomi e falli
- output in console

## Snack 3

``` js
function arrayMinMax(array, min, max){
    //
    return [];
}
```
- funzione arrayMinMax (array, numero min, numero max)
    - filter array 
        - se l'indice è >= a min e <= a max
            - restituisce true
        - restituisce false
- array valori
- array valoriFiltrati con arrayMinMax
