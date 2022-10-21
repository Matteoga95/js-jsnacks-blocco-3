// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const automobili = [
    {
        "marca": "mercedes",
        "modello": "doppiaT",
        "alimentazione": "benzina"
   
    },
    {
        "marca": "ford",
        "modello": "fiesta",
        "alimentazione": "benzina"
   
    },
    {
        "marca": "ford",
        "modello": "focus",
        "alimentazione": "diesel"
   
    },
    {
        "marca": "fiat",
        "modello": "panda",
        "alimentazione": "benzina"
   
    },
    {
        "marca": "fiat",
        "modello": "scudo",
        "alimentazione": "gpl"
   
    },
    {
        "marca": "opel",
        "modello": "astra",
        "alimentazione": "metano"
   
    },
    {
        "marca": "opel",
        "modello": "ex",
        "alimentazione": "diesel"
   
    },
    {
        "marca": "tesla",
        "modello": "modelx",
        "alimentazione": "elettrico"
   
    },
    {
        "marca": "tesla",
        "modello": "modely",
        "alimentazione": "elettrico"
   
    },
    {
        "marca": "subaru",
        "modello": "stellar",
        "alimentazione": "diesel"
   
    }
]

// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

const onlyBenzina = automobili.filter(function(auto){
    if (auto.alimentazione  == "benzina"){
        return auto
    }

})

const onlyDiesel = automobili.filter(function(auto){
    if (auto.alimentazione  == "diesel"){
        return auto
    }

})

const notDieselBenzina = automobili.filter(function(auto){
    if (auto.alimentazione  !== "diesel" && auto.alimentazione  !== "benzina"){
        return auto
    }

})


// Infine stampa separatamente i 3 array.

console.log(onlyBenzina);
console.log(onlyDiesel);
console.log(notDieselBenzina);