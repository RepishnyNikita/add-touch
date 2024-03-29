function accordion() {
  const accordion = document.querySelectorAll('[data-name="accordion"]');
  
  accordion.forEach(function (item) {
    item.addEventListener("click", function () {
      this.lastElementChild.classList.toggle("accordion__desc--hidden");
      this.firstElementChild.lastElementChild.firstElementChild.classList.toggle('accordion__header-button__icon--open')
    });
  });
}
accordion();


function navMobile() {
  const navIcon = document.querySelector(".nav-toggle");
  const navMobile = document.querySelector(".nav-mobile");
  const navMobileIcon = document.querySelector(".nav-mobile__icon");
  const navMobileList = document.querySelectorAll(".nav-mobile__list-item");

  function icon (){
    if (navMobileIcon.getAttribute("src") == "./img/svg/nav.svg") {
      navMobileIcon.src = "./img/svg/close-nav.svg";
    } else {
      navMobileIcon.src = "./img/svg/nav.svg";
    }
  }

  navIcon.addEventListener("click", function () {
    this.classList.toggle("nav-toggle--open")
    navMobile.classList.toggle("open");

    icon();
    
  });

  navMobileList.forEach(function(item){
    item.addEventListener('click', function(){
      navIcon.classList.remove("nav-toggle--open");
      navMobile.classList.remove("open");

      icon();
    })
  });
  
}
navMobile();
