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

  navIcon.addEventListener("click", function () {
    this.classList.toggle("nav-toggle--open")
    navMobile.classList.toggle("open");


    if (navMobileIcon.getAttribute("src") == "./img/svg/nav.svg") {
      navMobileIcon.src = "./img/svg/close-nav.svg";
    } else {
      navMobileIcon.src = "./img/svg/nav.svg";
    }
  });
}
navMobile();
