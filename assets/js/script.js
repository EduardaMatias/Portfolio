/* efeito máquina de escrever */

function write(elemento) {
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, index) =>{
      setTimeout(() => elemento.innerHTML += letra, 100 * index)
    });
  }
  
  const descricao = document.querySelector('.descricao')
  write(descricao)

/* botão voltar ao topo */

let button = document.querySelector('#button')

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block"
  } else {
    button.style.display = "none"
  }
}

function backToTop(){
  window.scrollTo(0,0)
}

/*validações contato */
let nomeOK = false
let emailOK = false
let assuntoOK = false

let txtNome = document.querySelector('#txtNome')
let inputNome = document.querySelector('#nome')


function validaNome(){
  if(inputNome.value.length <= 3){
    txtNome.style.display = "block"
    nomeOK = false
  } else {
    txtNome.style.display = "none"
    nomeOK = true
  }
}

let txtEmail = document.querySelector('#txtEmail')
let inputEmail = document.querySelector('#email')
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function validaEmail(){
  if(emailRegex.test(inputEmail.value)){
    txtEmail.style.display = "none"
    emailOK = true
  } else {
    txtEmail.style.display = "block"
    emailOK = false
  }
}

let txtAssunto = document.querySelector('#txtAssunto');
let inputAssunto = document.querySelector('#assunto')

function validaAssunto(){
  txtAssunto.innerHTML = inputAssunto.value.length + '/300'
  let valorMax = 300
  let valorMin = 10
  if(inputAssunto.value.length <= valorMin || inputAssunto.value.length > valorMax ){
    txtAssunto.style.display = "block"
    txtAssunto.style.color = "var(--vermelho)"
    assuntoOK = false
  } else{
    txtAssunto.style.display = "block"
    txtAssunto.style.color = "var(--branco)"
    assuntoOK = true
  }
}

function Enviar(){
  if(nomeOK && assuntoOK && emailOK){
    alert("Formulario enviado. Em breve entrarei em contato!")
    backToTop()
    inputNome.value = ''
    inputEmail.value = ''
    inputAssunto.value = ''
  } else {
    alert("Preencha todos os campos corretamente!")
  }
}
  
