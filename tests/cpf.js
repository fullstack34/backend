
module.exports = (cpf) => {
    if(cpf.length !== 11) {
        return "cpf invalido"
    }

    return "cpf valido"
}