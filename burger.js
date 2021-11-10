let burgerBtn = document.querySelector('.nav-burger');
let burgerMenu = document.querySelector('.burger-menu');



burgerBtn.addEventListener('click', function (evt) {
   evt.stopPropagation();
   if (burgerMenu.classList.contains('no-active-menu')) {
      burgerMenu.classList.add('active-menu');
      burgerMenu.classList.remove('no-active-menu'); 
   }
   else {
      burgerMenu.classList.add('no-active-menu');
      burgerMenu.classList.remove('active-menu');
   }
})

window.addEventListener('click', function () {
   if (burgerMenu.classList.contains('active-menu')) {
      burgerMenu.classList.remove('active-menu');
      burgerMenu.classList.add('no-active-menu')
   }
})

window.addEventListener('click', function () {
   alert('Кек');
})


  




