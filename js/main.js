const toggleIcon = document.querySelector(".accordion__header-toggle");
const accordionDesc = document.querySelector(".accordion__desc");
const accordion = document.querySelectorAll('[data-name="accordion"]')


accordion.forEach(function(item){

    item.addEventListener('click', function () {
        this.nextElementSibling.classList.toggle('accordion__desc--hidden')
    });

})
