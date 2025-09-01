var button_map = document.querySelector(".js_button_map");
var popup_map = document.querySelector(".modal_map");
var close_popup_map = popup_map.querySelector(".modal_close");
var overlay_map = document.querySelector(".overlay");

//-------------- Открытие и закрытие модалки --------------------
button_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.add("modal_show");
    overlay_map.classList.add("overlay_show");
});

close_popup_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal_show");
    overlay_map.classList.remove("overlay_show");
});

overlay_map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal_show");
    overlay_map.classList.remove("overlay_show");
});


//------------- Закрытие модалки клавишей Esc ---------------
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {

        if (popup_map.classList.contains("modal_show")) {
            evt.preventDefault();
            popup_map.classList.remove("modal_show");
            overlay_map.classList.remove("overlay_show");
        }
    }
});