function accordion (){
    const toggleIcon = document.querySelector(".accordion__header-toggle");
    const accordionDesc = document.querySelector(".accordion__desc");
    const accordion = document.querySelectorAll('[data-name="accordion"]')


    accordion.forEach(function(item){

    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('accordion__desc--hidden')
    });
})
}

accordion()

function navMobile(){
    const navIcon = document.querySelector('.nav-toggle')
    const navMobile = document.querySelector('.nav-mobile')
    const navMobileIcon = document.querySelector('.nav-mobile__icon')

    navIcon.addEventListener('click', function () {

        navMobile.classList.toggle('open')

        if (navMobileIcon.getAttribute("src") == "./img/svg/nav.svg"){
            navMobileIcon.src = "./img/svg/close-nav.svg"}
        else{
            navMobileIcon.src = "./img/svg/nav.svg"}
    })  
}

navMobile()

