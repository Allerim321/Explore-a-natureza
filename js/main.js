//IMAGENS
//criando variáveis
const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-content section')
//imrpimindo variáveis
console.log(imagens)
console.log(textos)

//criando função para ativar o conteúdo
function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

//percorrendo as imagens e ativando a função de clique
imagens.forEach((item, indice) =>{
    item.addEventListener('click',() =>{
    ativarConteudo(indice)
    })
})
////////////////////////////////////////////////////////////////////////////////////////////

//FAQ
//criando variáveis
 const titulos = document.querySelectorAll('.js-text nav')
 const respostas = document.querySelectorAll('.js-text div')

 //imprimindo variáveis
 console.log(titulos)
 console.log(respostas)

 //criando função para ativar a classe e fazer aparecer o texto
 function ativarDeNovo(indice){
     respostas[indice].classList.toggle('active')
 }

 //ativando a função de clique
 titulos.forEach((item, indice) =>{
     item.addEventListener('click', () =>{
         ativarDeNovo(indice)
     })
 })
////////////////////////////////////////////////////////////////////////////////////////////

//FORMULARIO
// criando as variáveis form e dados
const form = document.querySelector('.js-modal form')
const dados = {}

//criando uma função para ativar o conteúdo
function ativarFormulario(){
    form.forEach((item) =>{
        item.classList.remove('active')
    })
    form.classList.add('active')
}

// criando uma função para pegar os eventos do formulário
function pegarValor(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
    ativarConteudo(indice)
}

// utilizando a função addEventListener para converter na linguagem JSON e salvar os dados
form.addEventListener('change', pegarValor)
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    localStorage.setItem(dados.email, JSON.stringify(dados))
    form.classList.remove('active');
})
