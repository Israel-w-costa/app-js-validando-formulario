export default function ehMaiorDeIdade(campo) {
    const idade = new Date (campo.value) 
    console.log ( validacaoDeMaiorDeIdade (idade))
   
}

function validacaoDeMaiorDeIdade(idade) {
    const dataAtual = new Date ()
    const idadeAtual = new Date (idade.getUTCFullYear () + 18, idade.getUTCMonth (), idade.getUTCDate ())

    return dataAtual >= idadeAtual 
}
