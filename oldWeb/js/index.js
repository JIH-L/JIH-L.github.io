// lazyload
lazyload();

// loading
$(window).on("load",()=>{
$(".loader").fadeOut("slow");
})


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

//
window.sr = ScrollReveal({ 
    // 參數設定[註1]
    origin: "bottom",  // 起始位置
    distance: "20px",  // 距離
    duration: 500,  // 動畫時間
    delay: 0,  // 動畫延遲時間
    rotate: { x: 0, y: 0, z: 0 },  // 旋轉角度
    opacity: 0,  // 透明度
    scale: 0.9, // 縮放比例
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", // 動畫速度曲線
    container: window.document.documentElement, // 外層
    mobile: true, // 支援行動裝置
    reset: true, // 每次都啟動動畫
    useDelay: "always", // 延遲動畫次數
    viewFactor: 0.2, // 當該物件在可視範圍內，則顯示此物件(0.2表示可視範圍20%)
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, // 當外層有設定間隔造成偏移，則請設定在此維持精準度
    beforeReveal: function (domEl) { console.log(1) }, // 當啟動顯示前，則執行此函式
    beforeReset: function (domEl) {console.log(2) }, // 當重啟前，則執行此函式
    afterReveal: function (domEl) {console.log(3) }, // 當啟動後，則執行此函式
    afterReset: function (domEl) {console.log(4) } // 當重啟後，則執行此函式
});
sr.reveal( ".grid", {
    // 參數設定[註1]
});
