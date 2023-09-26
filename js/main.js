

const imagens = document.querySelectorAll('.js-list li')
const textos = document.querySelectorAll('.js-content section')

console.log(imagens)
console.log(textos)

function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

imagens.forEach((item, indice) =>{
    item.addEventListener('click',() =>{
    ativarConteudo(indice)
    })
})

 const titulos = document.querySelectorAll('.js-text nav')
 const respostas = document.querySelectorAll('.js-text div')

 console.log(titulos)
 console.log(respostas)

 function ativarDeNovo(indice){
     respostas[indice].classList.toggle('active')
 }

 titulos.forEach((item, indice) =>{
     item.addEventListener('click', () =>{
         ativarDeNovo(indice)
     })
 })
