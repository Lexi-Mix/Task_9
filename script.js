let chichi = {
    name: 'Rimma',
    age: 12,
    hair: {
        color: 'brown',
        long: 43,
    },
    method:hairdresser
}

function hairdresser() {
    chichi.hair.color = 'green';
    chichi.hair.long = 2;   
    return chichi.hair.color; 
}

let ask = prompt("asdsad", "name");
console.log(chichi[ask]);