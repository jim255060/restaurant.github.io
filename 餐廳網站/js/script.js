let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

//按下按鈕之後的變化
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// 回到首頁按鈕
window.onscroll = () => {
    if (window.scrollY > 500) {
        document.querySelector('#scroll-up').classList.add('active');
    }
    else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}