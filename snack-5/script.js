const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]



// Ciclo for classico

const numsPari = [];

for (let index = 0; index < nums.length; index++) {

    if (nums[index] % 2 === 0) {


        const element = nums[index]
        numsPari.push(element)
    }

};

console.log(numsPari);


// Metodo Filter

const numsPariMetodoFilter = nums.filter(num => num % 2 === 0);

console.log(numsPariMetodoFilter);
