let btn = document.querySelector('.toggle-btn')
let icon = document.querySelector('i')
let modeText = document.querySelector('.mode-text');
let link = document.querySelector('#css');
let img = document.querySelectorAll('img')
let darkMode = false;
btn.addEventListener('click',()=>{
    if(darkMode===false){ 
        modeProps("href","sass/dark-mode.css",true,"fas fa-moon","Dark Mode","dark-mode-img/img-")

    }else if(darkMode===true){
        modeProps("href","sass/index.css",false,"fas fa-sun","Light Mode","light-mode-img/img-")
    }
})

function modeProps(styleAttribute,attributeValue,darkModeLogic,iconClass,modeName,imgSrc){
    link.setAttribute(styleAttribute,attributeValue)
    darkMode=darkModeLogic;
    icon.className=iconClass;
    modeText.textContent=modeName
    img.forEach((item,index)=>{item.src=imgSrc+`${index+1}.png`;})
}