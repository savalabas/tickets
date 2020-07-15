import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";

document.addEventListener("DOMContentLoaded", () => {
    initApp();

    //Events

    // Hendlers
    async function initApp() {
        await locations.init();
        console.log(locations.shortCitiesList);
        formUI.setAutocompleteData(locations.shortCitiesList);
    }
});

// locations.init().then((res) => {
//     console.log(res);
//     console.log(locations);
//     console.log(locations.getCiteisByCountryCode("PE"));
// });

// api.countries().then((res) => console.log(res));
// api.cities().then((res) => console.log(res));
