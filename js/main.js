
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

 export default function menuMobileInit() {
    const toggle = document.querySelector('.toggle');
    const menuList = document.querySelector('.menulink');

    if (toggle && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const toggleIcon = toggle.querySelector('span');
            toggleIcon.classList.toggle('active');
            toggleIcon.innerText = toggleIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        toggle.addEventListener('click', toggleMenu);
    }
}

// criando as variáveis form e dados
const form = document.querySelector('.form')
const dados = {}

// criando uma função para pegar os eventos do formulário
function pegarForm(event){
    dados[event.target.name] = event.target.value
    console.log(dados)
}

// utilizando a função addEventListener para converter na linguagem JSON e salvar os dados
form.addEventListener('change', pegarForm)
form.addEventListener('submit', (event) =>{
    event.preventDefault()
    localStorage.setItem(dados.email, JSON.stringify(dados))
})

// const botao=document.querySelector('')

// function mudarNome(){
//     botao.innerHTML='copiado'
        // setTimeout(() =>{
        //     BigInt.innerText='copiar'
        // }, 2000)
// }

// botao.addEventListener('click', mudarNome)

// function mostrarConsole(msg){
//     console.log(msg)
// }
// setTimeout(mostrarConsole, 2000)
