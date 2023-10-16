//MENU PARA MOBILE
//criando função para ativar o conteúdo ao apertar o botão
export default function menuMobileInit() {
    const menu = document.querySelector('.js-menu')
    const toggle = document.querySelectorAll('.js-menu .toggle')
    const span = document.querySelector('.js-menu .toggle span')
    const div = document.querySelectorAll('.js-menu li')
    
    toggle.forEach((item) =>{
        item.addEventListener('click', () =>{
            div.forEach((item) =>{
                menu.classList.toggle('active')
                item.classList.toggle('active')
                if (menu.classList.contains('active') == true){
                    span.innerText = "close"
                }
                else{
                    span.innerText = "menu"
                }
            })
        } )
    })
    
}
