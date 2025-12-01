var form__attributes = document.querySelector(".form__attributes");
var allInputs = Array.from(document.querySelectorAll(".contact-information__input"));

var userSurname = document.querySelector(".contact-information__input--surname");
var userName = document.querySelector("[name=name]");
var userMiddle_name = document.querySelector(".contact-information__input--middle-name");

var userTelephone = document.querySelector(".contact-information__input--telephone");
var userEmail = document.querySelector(".contact-information__input--email");

var popup_fail = document.querySelector(".popup-form--fail");
var popup_success = document.querySelector(".popup-form--success");
var overlay = document.querySelector(".overlay");

var success_btn = popup_success.querySelector(".popup-form__button");
var fail_btn = popup_fail.querySelector(".popup-form__button");

var regName = /^[а-яёА-ЯЁ]{2,}$/;
var regPhone = /^[\+]?[0-9]{1,3}[(\-\s]*?[0-9]{3}[)\-\s]*?[0-9]{3}[-\s]?(([0-9]{4})||([0-9]{2}[-\s]?[0-9]{2}))$/;
var regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


form__attributes.addEventListener("submit", function (evt) {
    if (!userSurname.value && !userName.value && !userTelephone.value && !userEmail.value) {
        evt.preventDefault();

        userSurname.classList.remove("contact-information__input--error");
        userName.classList.remove("contact-information__input--error");
        userTelephone.classList.remove("contact-information__input--error");
        userEmail.classList.remove("contact-information__input--error");

        userSurname.offsetWidth = userSurname.offsetWidth;
        userName.offsetWidth = userName.offsetWidth;
        userTelephone.offsetWidth = userTelephone.offsetWidth;
        userEmail.offsetWidth = userEmail.offsetWidth;

        userSurname.classList.add("contact-information__input--error");
        userName.classList.add("contact-information__input--error");
        userTelephone.classList.add("contact-information__input--error");
        userEmail.classList.add("contact-information__input--error");
    } 
    
    if (!regName.test(userSurname.value)) {
        evt.preventDefault();

        userSurname.classList.remove("contact-information__input--error");
        userSurname.offsetWidth = userSurname.offsetWidth;
        userSurname.classList.add("contact-information__input--error");
    } else if (userSurname.classList.contains("contact-information__input--error")) {
        userSurname.classList.remove("contact-information__input--error");
    }
    
    if (!regName.test(userName.value)) {
        evt.preventDefault();

        userName.classList.remove("contact-information__input--error");
        userName.offsetWidth = userName.offsetWidth;
        userName.classList.add("contact-information__input--error");
    } else if (userName.classList.contains("contact-information__input--error")) {
        userName.classList.remove("contact-information__input--error");
    }
    
    if (userMiddle_name.value && !regName.test(userMiddle_name.value)) {
        evt.preventDefault();

        userMiddle_name.classList.remove("contact-information__input--error");
        userMiddle_name.offsetWidth = userMiddle_name.offsetWidth;
        userMiddle_name.classList.add("contact-information__input--error");
    } else if (userMiddle_name.classList.contains("contact-information__input--error")) {
        userMiddle_name.classList.remove("contact-information__input--error");
    }
    
    if (!regPhone.test(userTelephone.value)) {
        evt.preventDefault();

        userTelephone.classList.remove("contact-information__input--error");
        userTelephone.offsetWidth = userTelephone.offsetWidth;
        userTelephone.classList.add("contact-information__input--error");
    } else if (userTelephone.classList.contains("contact-information__input--error")) {
        userTelephone.classList.remove("contact-information__input--error");
    }
    
    if (!regEmail.test(userEmail.value)) {
        evt.preventDefault();

        userEmail.classList.remove("contact-information__input--error");
        userEmail.offsetWidth = userEmail.offsetWidth;
        userEmail.classList.add("contact-information__input--error");
    } else if (userEmail.classList.contains("contact-information__input--error")) {
        userEmail.classList.remove("contact-information__input--error");
    }

    // Проверка через some есть ли есть хотябы один елемент с нужным классом
    var error = allInputs.some(function(el) {
        if (el.classList.contains("contact-information__input--error")) {
            return true;
        } else {
            return false;
        }
    });

    if (error) {
        evt.preventDefault();

        popup_fail.classList.add("popup-form--fail-show");
        overlay.classList.add("overlay--popup-show");

        fail_btn.addEventListener("click", function (evt) {
            evt.preventDefault();

            popup_fail.classList.remove("popup-form--fail-show");
            overlay.classList.remove("overlay--popup-show");
        });
    } else {
        evt.preventDefault();

        popup_success.classList.add("popup-form--success-show");
        overlay.classList.add("overlay--popup-show");

        success_btn.addEventListener("click", function (evt) {
            evt.preventDefault();

            popup_success.classList.remove("popup-form--success-show");
            overlay.classList.remove("overlay--popup-show");
        });
    }
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();

    popup_fail.classList.remove("popup-form--fail-show");
    popup_success.classList.remove("popup-form--success-show");
    overlay.classList.remove("overlay--popup-show");
});

//------------- Закрытие модалки клавишей Esc ---------------
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

        if (popup_fail.classList.contains("popup-form--fail-show") ||
            popup_success.classList.contains("popup-form--success-show")) {
            evt.preventDefault();

            popup_fail.classList.remove("popup-form--fail-show");
            popup_success.classList.remove("popup-form--success-show");
            overlay.classList.remove("overlay--popup-show");
        }
    }
});

//------------- Проверка полей на этапе заполнения ---------------
userSurname.addEventListener("focusout", function (evt) {
    if (userSurname.value && !regName.test(userSurname.value)) {
        userSurname.classList.remove("contact-information__input--error");
        userSurname.offsetWidth = userSurname.offsetWidth;
        userSurname.classList.add("contact-information__input--error");
    } else {
        userSurname.classList.remove("contact-information__input--error");
    }
});

userName.addEventListener("focusout", function (evt) {
    if (userName.value && !regName.test(userName.value)) {
        userName.classList.remove("contact-information__input--error");
        userName.offsetWidth = userName.offsetWidth;
        userName.classList.add("contact-information__input--error");
    } else {
        userName.classList.remove("contact-information__input--error");
    }
});

userMiddle_name.addEventListener("focusout", function (evt) {
    if (userMiddle_name.value && !regName.test(userMiddle_name.value)) {
        userMiddle_name.classList.remove("contact-information__input--error");
        userMiddle_name.offsetWidth = userMiddle_name.offsetWidth;
        userMiddle_name.classList.add("contact-information__input--error");
    } else {
        userMiddle_name.classList.remove("contact-information__input--error");
    }
});

userTelephone.addEventListener("focusout", function (evt) {
    if (userTelephone.value && !regPhone.test(userTelephone.value)) {
        userTelephone.classList.remove("contact-information__input--error");
        userTelephone.offsetWidth = userTelephone.offsetWidth;
        userTelephone.classList.add("contact-information__input--error");
    } else {
        userTelephone.classList.remove("contact-information__input--error");
    }
});

userEmail.addEventListener("focusout", function (evt) {
    if (userEmail.value && !regEmail.test(userEmail.value)) {
        userEmail.classList.remove("contact-information__input--error");
        userEmail.offsetWidth = userEmail.offsetWidth;
        userEmail.classList.add("contact-information__input--error");
    } else {
        userEmail.classList.remove("contact-information__input--error");
    }
});

