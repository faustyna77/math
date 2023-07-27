const button=document.querySelector('.button')
const input=document.querySelector('.input')
const body=document.querySelector('body')

tabcolors=["red","yellow","green","blue","violet"]





const getColor=()=>

{
    tabcolorR=(Math.floor(Math.random()*255))
tabcolorG=Math.floor(Math.random()*255)
tabcolorB=Math.floor(Math.random()*255)
let getnewcolor='#'+tabcolorB+tabcolorG+tabcolorR
    
    body.style.backgroundColor=getnewcolor
    
    input.value=getnewcolor
}



button.addEventListener('click',getColor)