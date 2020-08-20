window.addEventListener('DOMContentLoaded',function(){

  'use strict';

  let infoHeader = document.querySelector('.info-header'),
  infoHeaderTab = document.querySelectorAll('.info-header-tab'),
  infoTabcontent = document.querySelectorAll('.info-tabcontent');

  function showTab (a) {
    if (infoTabcontent[a].classList.contains('hide')){
      infoTabcontent[a].classList.remove('hide');
      infoTabcontent[a].classList.add('show');
    }
  }

  function hideTab (b) {
    for ( let i = b; i < infoTabcontent.length; i++){
      infoTabcontent[i].classList.remove('show');
      infoTabcontent[i].classList.add('hide');
    }
  }

  hideTab(1);

  infoHeader.addEventListener('click',function(event){
    let target = event.target;
    if (target && target.classList.contains('info-header-tab')){
      for (let i = 0; i < infoHeaderTab.length; i++){
        if (target == infoHeaderTab[i]){
          hideTab(0);
          showTab(i);
          break;
        }
      }
    }
  });


  // Timer

  let dataDeadline = '2020-08-15';

  function getTimeRemaining (endtime){
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hours = Math.floor((t / 1000 / 60 / 60));
    return {
      'seconds' : seconds,
      'minutes' : minutes,
      'hours' : hours,
      'total' : t
    }
  }

  function setClock (id, endtime){
    let timer = document.getElementById(id),
    hours = timer.querySelector('.hours'),
    minutes = timer.querySelector('.minutes'),
    seconds = timer.querySelector('.seconds'),
    timeIntenval = setInterval(updateClock, 1000);

    function updateClock(){
      
      let t = getTimeRemaining(endtime);
      if (t.hours < 10){
        hours.textContent = '0' + t.hours;
      } else { hours.textContent = t.hours;}
      if (t.minutes < 10){
        hours.textContent = '0' + t.minutes;
      } else { minutes.textContent = t.minutes;}
      if (t.seconds < 10){
        seconds.textContent = '0' + t.seconds;
      } else { seconds.textContent = t.seconds;}
      
      if (t.total <= 0){
        clearInterval(timeIntenval);
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';
      }
    }
  }


  setClock('timer', dataDeadline);


  // Modal

  let modalButton = document.querySelector('.more'),
  overlay = document.querySelector('.overlay'),
  modalClose = document.querySelector('.popup-close');

  modalButton.addEventListener('click', function(){
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
  });


  modalClose.addEventListener('click', function(){
    overlay.style.display = 'none';
    modalButton.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  let tabInfo = document.querySelector('.info');

  tabInfo.addEventListener('click',function(event){
    let target = event.target;
    if (target && target.classList.contains('description-btn')){
      overlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  });


  // class Option{
  //   constructor(height, width, bg, fontSize, textAlign) {
  //     this.height = height;
  //     this.width = width;
  //     this.bg = bg;
  //     this.fontSize = fontSize;
  //     this.textAlign = textAlign;
  //   }
  //   createDiv() {
  //     let div = document.createElement('div');
  //     document.body.appendChild(div);
  //     let param = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign}`;
  //     div.style.cssText = param;
  //   }

  // }

  // let rectangle = new Option(200, 200, 'red', 20, 'center');
  // rectangle.createDiv();


  // Form

  // let message = {
  //   loading: 'Загрузка...',
  //   success: 'Спасибо, скоро мы с вами свяжемся!',
  //   failure: 'Что-то пошло не так...'
  // };

  // let mainForm = document.querySelector('.main-form'),
  // input = mainForm.getElementsByTagName('input'),
  // statusMessage = document.createElement('div');
  // statusMessage.classList.add('status');
  
  // mainForm.addEventListener('submit', function(event){
  //   event.preventDefault();
  //   mainForm.appendChild(statusMessage);

  //   let request = new XMLHttpRequest();
  //   request.open('POST','server.php');
  //   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  //   let formData = new FormData(mainForm);
  //   request.send(formData); 
  // });


  let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);

    request.send(json);

    request.addEventListener('readystatechange', function() {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }
    
});
});