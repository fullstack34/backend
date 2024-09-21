/*
console.log("Antes da requisição");

let dadosDaRequisicao;

fetch('https://viacep.com.br/ws/01001000/json/')
  .then(response => response.json())
  .then(data => {
    dadosDaRequisicao = data;
    console.log("Dados da requisição");
  });

console.log("Depois da requisição");
console.log(dadosDaRequisicao.cep);
*/

// async/await

async function request() {
  console.log("Antes da requisição");

  let requisicao = await fetch('https://viacep.com.br/ws/01001000/json/');
  let data = await requisicao.json();
  console.log("Dados da requisição");

  console.log("Depois da requisição");
}


async function somar(a, b) {
  return a + b;
}

let soma = somar(1, 2);

soma.then(resultado => {
  console.log(resultado);
})

async function verResultadoDaSoma() {
  let resultado = await somar(3, 3);
  console.log(resultado);
}

verResultadoDaSoma();

