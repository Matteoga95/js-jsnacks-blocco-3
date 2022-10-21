// Snack 3 @qui
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.

const animals = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'non-mammiferi' },
    { nome: 'gatto', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'passserotto', famiglia: 'uccelli', classe: 'mammiferi' },
    { nome: 'coccodrillo', famiglia: 'rettili', classe: 'non-mammiferi' }
  ]
// Crea un nuovo array con la lista dei mammiferi.

const mammiferi = animals.filter((animale) => animale.classe ==="mammiferi");

console.log(mammiferi);