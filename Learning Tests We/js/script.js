// import  autorization  from "./api"

class ShowText  {
  constructor (btn, text, loginForm, BurgerMenu, video) {
    this.btn = btn
    this.text = text
    this.loginForm = loginForm
    this.BurgerMenu = BurgerMenu
    this.video = video 
  }
  showText() {
    const btn = document.getElementById('btn')
    const text = document.getElementById('text')
    const loginForm = document.getElementById('login')
    const BurgerMenu = document.getElementById('burger')
    const video = document.getElementById('video')
    btn.onclick = () => {
        text.classList.remove('hidden');
        loginForm.classList.add('hidden')
        BurgerMenu.classList.remove('hidden')
        video.classList.remove('hidden')
    }
}



}

function showText() {
    const btn = document.getElementById('btn')
    const text = document.getElementById('text')
    const loginForm = document.getElementById('login')
    const BurgerMenu = document.getElementById('burger')
    const video = document.getElementById('video')
    btn.onclick = () => {
        text.classList.remove('hidden');
        loginForm.classList.add('hidden')
        BurgerMenu.classList.remove('hidden')
        video.classList.remove('hidden')
    }
}

showText()

document.querySelector('.burger').addEventListener('click', function(){
  document.querySelector('.burger span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle("animate");
 
})

