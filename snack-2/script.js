const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'


// Ciclo for classico

for (let index = 0; index < people.length; index++) {
  const element = people[index].name;
  console.log(element);
};



// Metodo array for each

people.forEach(person => {
  console.log(person.name);
});




