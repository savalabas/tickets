import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

//Init materialize-css select
var selects = document.querySelectorAll("select");
M.FormSelect.init(selects);

export function getSelectInstance(elem) {
    return M.FormSelect.getInstance(elem);
}

//Init materialize-css autocomplete
var autocomplete = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplete, {
    data: {
        Apple: null,
        Microsoft: null,
        Google: "https://placehold.it/250x250",
    },
});

export function getAutocompleteInstance(elem) {
    return M.Autocomplete.getInstance(elem);
}

//Init materialize-css datepicker
var datepicker = document.querySelectorAll(".datepicker");
M.Datepicker.init(datepicker, {
    showClearBtn: true,
});

export function getDatepickerInstance(elem) {
    return M.Datepicker.getInstance(elem);
}
