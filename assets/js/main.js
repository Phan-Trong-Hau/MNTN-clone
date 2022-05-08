(function ($) {
    "use strict";
  
    $('a[href^="#"]').click(function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 1500);
    });

    const sliders = document.querySelectorAll(".hero-slider__item");
    const sections = document.querySelectorAll(".content-list");
    const activeClass = "is-show";
    sliders[0].classList.add(activeClass);

    window.addEventListener("scroll", () => {
        for (let i = 0; i < sections.length; i++) {
            const element = sections[i];
            if(window.scrollY >= element.getBoundingClientRect().top * 5){
                sliders.forEach((sliderRemove) => {
                    sliderRemove.classList.remove(activeClass);
                });
                sliders[i+1].classList.add(activeClass);
            }else if (window.scrollY <= 700){
                sliders.forEach((sliderRemove) => {
                    sliderRemove.classList.remove(activeClass);
                });
                sliders[0].classList.add(activeClass);
            }
        }
    });

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".navbar-list");
    const activeClass1 = "show";

    toggle.addEventListener("click", function() {
        // console.log('hi');
        menu.classList.add(activeClass1);
    });

    window.addEventListener('click', function(e){   
        if ((menu.contains(e.target) && !e.target.matches(".menu-toggle")) || (!menu.contains(e.target) && !e.target.matches(".menu-toggle"))){
            menu.classList.remove(activeClass1);
        }
    });

})(jQuery);