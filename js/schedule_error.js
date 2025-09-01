var schedule_form = document.querySelector(".appointment_form");
var us_name = schedule_form.querySelector("[name=name]");
var phone = schedule_form.querySelector("[name=phone]");
var time = schedule_form.querySelector("[name=time]");
var date = schedule_form.querySelector("[name=date]");

var regName = /^[а-яёА-ЯЁ]{2,}$/;
var regPhone = /^[\+]?[0-9]{1,3}[(\-\s]*?[0-9]{3}[)\-\s]*?[0-9]{3}[-\s]?(([0-9]{4})||([0-9]{2}[-\s]?[0-9]{2}))$/;

schedule_form.addEventListener("submit", function (evt) {
    if (!us_name.value && !phone.value && !time.value && !date.value) {
        evt.preventDefault();

        schedule_form.classList.remove("modal_error");
        schedule_form.offsetWidth = schedule_form.offsetWidth;
        schedule_form.classList.add("modal_error");
    } else if (!regName.test(us_name.value)) {
        evt.preventDefault();

        us_name.classList.remove("schedule_error");
        us_name.offsetWidth = us_name.offsetWidth;
        us_name.classList.add("schedule_error");

    } else if (!regPhone.test(phone.value)) {
        evt.preventDefault();

        phone.classList.remove("schedule_error");
        phone.offsetWidth = phone.offsetWidth;
        phone.classList.add("schedule_error");

    } else if (us_name.classList.contains("schedule_error")) {
        us_name.classList.remove("schedule_error");
    } else if (phone.classList.contains("schedule_error")) {
        phone.classList.remove("schedule_error");
    }
});

us_name.addEventListener("focusout", function(evt) {
    if (us_name.value && !regName.test(us_name.value)) {
        us_name.classList.remove("schedule_error");
        us_name.offsetWidth = us_name.offsetWidth;
        us_name.classList.add("schedule_error");
    } else {
        us_name.classList.remove("schedule_error");
    }
});

phone.addEventListener("focusout", function(evt) {
    if (phone.value && !regPhone.test(phone.value)) {
        phone.classList.remove("schedule_error");
        phone.offsetWidth = phone.offsetWidth;
        phone.classList.add("schedule_error");
    } else {
        phone.classList.remove("schedule_error");
    }
});
