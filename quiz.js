const startBtn = document.querySelector('.start-btn'); 
const popupInfo =document.querySelector('.popup-info');
const exitBtn = document.querySelector('.btn-53');

const main = document.querySelector('.main');
var audio = document.getElementById('audio');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
        popupInfo.classList.remove('active');
        main.classList.remove('active');
        audio.play();      
}

function login(){
    window.open("login.html", "_blank");
}