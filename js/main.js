const imagens = document.querySelectorAll('.js-conteudo li')
const textos = document.querySelectorAll('.js-conteudo section')

console.log(imagens)
console.log(textos)

function ativarConteudo(indice){
    textos.forEach((item) =>{
        item.classList.remove('active')
    })
    textos[indice].classList.add('active')
}

textos.forEach((item, indice) =>{
    item.addEventListener('click',() =>{
    ativarConteudo(indice)
    })
})