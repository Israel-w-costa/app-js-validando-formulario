const botaoIniciarCamera = document.querySelector ('[data-video-botao]')
const campoCamera =document.querySelector ('[data-camera]')
const video = document.querySelector ('[data-video]')
const botaoTirarFoto = document.querySelector ('[data-tirar-foto]')
const canvas =document.querySelector ('[data-video-canvas]')
const mensagem =document.querySelector ('[data-mensagem]')
const botaoEnviar = document.querySelector ('[ data-enviar]')

let imagemURL = ""



botaoIniciarCamera.addEventListener ('click', async function () {
 const iniciarVideo = await navigator.mediaDevices.getUserMedia ({video:true, audio:false})

 botaoIniciarCamera.style.display = 'none'
 campoCamera.style.display = 'block'
 video.srcObject = iniciarVideo   
})

botaoTirarFoto.addEventListener ('click', function ()  {
    canvas.getContext ('2d').drawImage (video, 0,0,canvas.width,canvas.height)

    imagemURL= canvas.toDataURL ("image/jpeg")

    campoCamera.style.display ='none'

    mensagem.style.display ='block'

})

botaoEnviar.addEventListener ('click', () => {
    const armazenamentoLocal = localStorage.getItem ('cadastrar')
    const armazenamentoLocalconvertido = JSON.parse (armazenamentoLocal)
    armazenamentoLocalconvertido.imagem = imagemURL

    localStorage.setItem ('cadastrar', JSON.stringify(armazenamentoLocalconvertido))

    window.location.href = './abrir-conta-form-3.html'
})





