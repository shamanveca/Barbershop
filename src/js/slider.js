var slider_reviews = Array.from(document.querySelectorAll(".reviews__item"));
var slider_adventages = Array.from(document.querySelectorAll(".adventages__item"));

var prev = document.querySelector(".reviews__prev");
var next = document.querySelector(".reviews__next");

var slider_button_reviews = Array.from(document.querySelectorAll(".reviews__toggle .slider__toggle"));
var slider_button_adventages = Array.from(document.querySelectorAll(".adventages__toggles .slider__toggle"));

// ------------ Слайдер отзывов -------------
// ------------ Вариант 2 -------------------
var indButtonPush = 0;
var indButtonActive = 0;
slider_button_reviews.forEach(function(el) {
    el.addEventListener("click", function(evt) {
        evt.preventDefault();
        indButtonPush = slider_button_reviews.indexOf(el);
        // console.log(indButtonPush);

        slider_button_reviews.forEach(function(el) {
            if (el.classList.contains("slider__toggle--active")) {
                indButtonActive = slider_button_reviews.indexOf(el);
                // console.log(indButtonActive);
            }

            slider_button_reviews[indButtonActive].classList.remove("slider__toggle--active");
            slider_reviews[indButtonActive].classList.remove("slider__item--active");

            slider_button_reviews[indButtonPush].classList.add("slider__toggle--active");
            slider_reviews[indButtonPush].classList.add("slider__item--active");
        });
    });
});

// --------------- Кнопка назад --------------------
prev.addEventListener("click", function(evt) {
    evt.preventDefault();

    slider_button_reviews.forEach(function(el) {
        if (el.classList.contains("slider__toggle--active")) {
            indButtonActive = slider_button_reviews.indexOf(el);
        }
    });

    if (indButtonActive == 0) {
        slider_button_reviews[indButtonActive].classList.remove("slider__toggle--active");
        slider_reviews[indButtonActive].classList.remove("slider__item--active");

        slider_button_reviews[slider_button_reviews.length - 1].classList.add("slider__toggle--active");
        slider_reviews[slider_reviews.length - 1].classList.add("slider__item--active");
    }

    slider_button_reviews[indButtonActive].classList.remove("slider__toggle--active");
    slider_reviews[indButtonActive].classList.remove("slider__item--active");

    slider_button_reviews[indButtonActive - 1].classList.add("slider__toggle--active");
    slider_reviews[indButtonActive - 1].classList.add("slider__item--active");
});

// --------------- Кнопка вперед --------------------
next.addEventListener("click", function(evt) {
    evt.preventDefault();

    slider_button_reviews.forEach(function(el) {
        if (el.classList.contains("slider__toggle--active")) {
            indButtonActive = slider_button_reviews.indexOf(el);
        }
    });

    if (indButtonActive == slider_button_reviews.length - 1) {
        slider_button_reviews[indButtonActive].classList.remove("slider__toggle--active");
        slider_reviews[indButtonActive].classList.remove("slider__item--active");

        slider_button_reviews[0].classList.add("slider__toggle--active");
        slider_reviews[0].classList.add("slider__item--active");
    }

    slider_button_reviews[indButtonActive].classList.remove("slider__toggle--active");
    slider_reviews[indButtonActive].classList.remove("slider__item--active");

    slider_button_reviews[indButtonActive + 1].classList.add("slider__toggle--active");
    slider_reviews[indButtonActive + 1].classList.add("slider__item--active");
});


// ------------ Слайдер преимуществ -------------
var indButtonPush_adventages = 0;
var indButtonActive_adventages = 0;
slider_button_adventages.forEach(function(el) {
    el.addEventListener("click", function(evt) {
        evt.preventDefault();
        indButtonPush_adventages = slider_button_adventages.indexOf(el);
        // console.log(indButtonPush);

        slider_button_adventages.forEach(function(el) {
            if (el.classList.contains("slider__toggle--active")) {
                indButtonActive_adventages = slider_button_adventages.indexOf(el);
                // console.log(indButtonActive);
            }

            slider_button_adventages[indButtonActive_adventages].classList.remove("slider__toggle--active");
            slider_adventages[indButtonActive_adventages].classList.remove("slider__item--active");

            slider_button_adventages[indButtonPush_adventages].classList.add("slider__toggle--active");
            slider_adventages[indButtonPush_adventages].classList.add("slider__item--active");
        });
    });
});