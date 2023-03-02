const moto = {
    marca: "Yamaha",
    modelo: "YS Fazer",
    cilindrada: 249,
    pesoEmKg: 153,
    cv: 21,
    torqueEmKgfm: 2.1,
    capacidadeTanqueLitros: 19.2,
    marchas: 5,
    tempos: 4,
    cilindros: 1,
    ano: 2013,
    materialQuadro: "Aço",
};

// const apenasStringsEmValor = [];                      O resultado exibido é o mesmo obtido
// for (let strings in moto){                            utilizando a metodologia abaixo.
//     if (typeof moto[strings] === "string"){
//         apenasStringsEmValor.push(moto[strings]);
//     }
// }

const apenasStringsEmValor = Object.values(moto).filter((valor) => {
    return typeof valor === 'string';
});

const apenasStringsEmChave = Object.keys(moto).filter((valor) => {
    return typeof valor === 'string';
});

// const apenasNumberEmValor = [];                       O resultado exibido é o mesmo obtido
// for (let numbers in moto){                            utilizando a metodologia abaixo.
//     if (typeof moto[numbers] === "number"){
//         apenasNumberEmValor.push(moto[numbers]);
//     }
// }

const apenasNumberEmValor = Object.values(moto).filter((valor) => {
    return typeof valor === "number";
});


// const apenasStringsEmChave = [];                               Código não funcionou
// for (let strings in moto){                                     
//     if (typeof moto[strings] === "string"){
//         apenasStringsEmChave.push(moto[strings]);
//     }
// }


console.log(`As strings contidas nos valores das chaves do objeto moto são: 
${apenasStringsEmValor}\n`);

console.log(`Os 'number' contidos nos valores das chaves do objeto moto são:
${apenasNumberEmValor}\n`);

console.log(`As strings contidas nas chaves do objeto moto são:
${apenasStringsEmChave}\n`);
