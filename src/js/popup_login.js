var login_button = document.querySelector(".user-list__login");
var popup = document.querySelector(".modal_login");
var close_popup = document.querySelector(".modal_close");
var overlay = document.querySelector(".overlay");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

//------------- Отлов возможной ошибки LocalStorage ---------------
try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

//-------------- Открытие и закрытие модалки --------------------
login_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal_show");
    overlay.classList.add("overlay--login-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

close_popup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
    overlay.classList.remove("overlay--login-show");
    popup.classList.remove("modal_error");
});

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal_show");
    overlay.classList.remove("overlay--login-show");
    popup.classList.remove("modal_error");
});

//------------- Проверка содержимого полей ввода ---------------
form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove("modal_error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal_error");
        
    } else {
        if (isStorageSupport) { // Если локалСторадж существует и введены верные данные, то записываем логин в кеш
            localStorage.setItem("login", login.value);
        }
    }
});


//------------- Закрытие модалки клавишей Esc ---------------
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

        if (popup.classList.contains("modal_show")) {
            evt.preventDefault();
            popup.classList.remove("modal_show");
            overlay.classList.remove("overlay--login-show");
            popup.classList.remove("modal_error");
        }
    }
});