// lazyload
lazyload();

//navbar
const nav = document.querySelector('nav');

window.addEventListener('scroll',()=>{
    const scrollPos = window.scrollY;
    if(scrollPos>10){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }
})

// 打字機效果
const dom = document.querySelector('.content'); 
// console.log(dom);
const data = 'Hello, Github.io, 你好.'.split('') ;
let index = 0 ;
function writing(index) { 
    if (index < data.length) {
         dom.innerHTML += data[index] 
         setTimeout(writing.bind(this), 200, ++index) 
        } 
};
writing(0);
