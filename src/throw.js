

function exibirNome(nome) {
  if(typeof nome !== 'string') {
    let error = new Error("Coluna product_name da tabela produtcs no banco de dados loja, aceita apenas string.");
    error.code = "STRING REQUIRED"
    throw error;
  }
  return nome;
}

try {
  let nome = exibirNome(0);
  console.log(nome);
} catch (error) {
  let errorKeys = Object.getOwnPropertyNames(error);
  console.log(errorKeys);
  console.log("Ocorreu um erro na aplicação");
}