export default function ehMaiorDeIdade(campo) {
    const idade = new Date (campo.value) 
    if (!validacaoDeMaiorDeIdade (idade)) {
        campo.setCustomValidity("Você deve ser maior que 18 anos para se cadastrar.")
    }
}

function validacaoDeMaiorDeIdade(idade) {
    const dataAtual = new Date ()
    const idadeAtual = new Date (idade.getUTCFullYear () + 18, idade.getUTCMonth (), idade.getUTCDate ())

    return dataAtual >= idadeAtual 
}