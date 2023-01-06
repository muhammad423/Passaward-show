const pasEl = document.querySelector('.password');
const btn = document.getElementById('eye')

btn.addEventListener('click', () =>{
    if(btn.classList.contains('fa-eye')){
      pasEl.setAttribute('type', 'text')
      btn.classList.replace('fa-eye','fa-eye-slash')
    }else{
        pasEl.setAttribute('type', 'password')
        btn.classList.replace('fa-eye-slash', 'fa-eye')
    }
})