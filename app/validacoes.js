import eUmCpf  from "./cpfValidacao.js";

const campoFormulario = document.querySelectorAll ('[required]')

campoFormulario.forEach ((campo) => {
    campo.addEventListener ('blur',() => vereficavalidacao (campo))
})

function vereficavalidacao (campo) {
   if (campo.name == "cpf" && campo.value.length >=11) {
    eUmCpf (campo)
   }
}



