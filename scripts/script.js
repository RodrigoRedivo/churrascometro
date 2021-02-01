// Carne - 400 gramas por pessoa + de 6 horas - 650 gramas
// Cerveja - 1200 ml por pessoa + 6 horas - 2 Litros
// Refrigerante/agua - 1 litro por pessoa + 6 horas 1,5 litros.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("-> Calculando . . . ");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = '<h2>Você vai precisar de:</h2>'
    resultado.innerHTML += `<p>🍖 ${qtdTotalCarne / 1000} KG de Carne </p>`
    resultado.innerHTML += `<p>🍻 ${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja </p>`
    resultado.innerHTML += `<p>🍹${Math.ceil(qtdTotalBebidas / 2000)} Bebidas de 2 Litros </p>`
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}