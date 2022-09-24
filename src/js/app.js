(function(){
  var burger = document.querySelector('.__burger__container'),
      header = document.querySelector('.__mobile__header');
  burger.addEventListener("click", function() {
    header.classList.toggle('__menu__opened');
  });
}());