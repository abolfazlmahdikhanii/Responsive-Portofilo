
const nav=document.querySelector('.container-nav') 
const txt=document.querySelectorAll('.container-nav a') 
const menuBtn=document.querySelector('.m-icon') 
const closeMenuBtn=document.querySelector('.close-icon') 
const menu=document.querySelector('.menu') 

menuBtn.addEventListener('click',()=>{
    menu.classList.add('visible')
    menuBtn.classList.add('active')
})
closeMenuBtn.addEventListener('click',()=>{
    menu.classList.remove('visible')
    menuBtn.classList.remove('active')
})
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        nav.classList.add('stiky')
        txt.forEach((item)=>{
            item.classList.add('stiky')
        })
    }
    else{
        nav.classList.remove('stiky')
        txt.forEach((item)=>{
            item.classList.remove('stiky')
        })
    }
})