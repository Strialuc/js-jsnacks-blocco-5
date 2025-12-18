const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const nuovoArray=[];

for (let index = 0; index < numbers.length; index++) {

    const element = numbers[index] + 1;

    nuovoArray.push(element) ;

}

 console.log(nuovoArray);


