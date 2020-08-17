let menuItem = document.querySelectorAll(".menu-item"),
  menu = document.getElementsByClassName('menu')[0],
menuItemLi = document.createElement('li'),
title = document.getElementById('title'),
adv = document.getElementsByClassName('adv')[0],
feedback = document.getElementById('prompt');


menu.insertBefore(menuItem[2],menuItem[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = "Пятый пункт";
menu.appendChild(menuItemLi);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
title.innerText = "Мы продаем только подлинную технику Apple";
adv.remove();

let promptfeedback = prompt('Как вы оноситель к технике Apple?','');
feedback.textContent = promptfeedback;