'use strict';
// list animation start
const list = Array.from(document.querySelector('.advantages-list').children);
let count = 0;
let prev = 0;

function greet() {
    list[count].classList.toggle('cheked');
    // deleteElement(count);
    prev = count;
    if (count == list.length - 1) {
        count = 0;
    } else {
        count += 1;
    }
}

function deleteElement(val) {
    if (val !== 0) {
        list[prev].classList.toggle('cheked');
    }
    if (prev == list.length - 1) {
        list[prev].classList.toggle('cheked');
    }
}
setInterval(greet, 100);
// list animation and

(() => {
    $(document).ready(function() {
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1500, function() {
                    window.location.hash = hash;
                });
            }
        });
    });

    // Slider
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'fraction',
        },
        speed: 3000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        breakpoints: {
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 1
            }
        }

    });


})();