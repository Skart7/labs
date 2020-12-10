const btnMenu = document.querySelector('.menu_btn')
const sitebar = document.querySelector('.sitebar')
const overlay = document.querySelector('.overlay')

btnMenu.addEventListener('click', openMenu)

function openMenu(){
    sitebar.classList.add('open')
    activeOverlay()
}

function closeMenu(){
    sitebar.classList.remove('open')
    removeOverlay()
}

function activeOverlay(){
    overlay.classList.add('active')
    overlay.addEventListener('click', function(){
        closeMenu()
    })
}

function removeOverlay(){
    overlay.classList.remove('active')
}



//scroll to blocks

function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const nav_link = document.querySelectorAll('.nav_link')

nav_link.forEach( event => {
    event.addEventListener('click', function(){
        let element = document.querySelector(this.dataset.scroll)
        scrollTo(element)
    })
})

const nav_link_sitebar = document.querySelectorAll('.nav_link_sitebar')

nav_link_sitebar.forEach( event => {
    event.addEventListener('click', function(){
        let element = document.querySelector(this.dataset.scroll)
        scrollTo(element)
        closeMenu()
    })
})

// header fixed

const header = document.querySelector('.header')


if(header.pageYOffset <= 61){
    header.classList.remove('fixed')
}else{
    header.classList.add('fixed')
}
console.log(pageYOffset)

