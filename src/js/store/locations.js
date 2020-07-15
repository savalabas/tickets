import api from "../services/apiService";

class Locations {
    constructor(api) {
        this.api = api;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null;
    }

    async init() {
        const response = await Promise.all([
            this.api.cities(),
            this.api.countries(),
        ]);
        const [cities, countries] = response;
        // this.cities = cities;
        this.countries = this.serialaizeCountries(countries);
        this.cities = this.serialaizeCitiez(cities);
        this.shortCitiesList = this.createShortCitiesList(this.cities);
        return response;
    }

    createShortCitiesList(cities) {
        // {'city name, country name': null}
        // Object.entries(cities) => [key, value]
        return Object.entries(cities).reduce((acc, [key]) => {
            acc[key] = null;
            return acc;
        }, {});
    }

    serialaizeCountries(countries) {
        // {'contry code': {country ...}}
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc;
        }, {});
    }

    serialaizeCitiez(cities) {
        // {'City name, Coutnry name': {city ...}}
        return cities.reduce((acc, city) => {
            const country_name = this.getCountryByCode(city.country_code);
            const city_name = city.name || city.name_translations.en;
            const key = `${city_name}, ${country_name}`;
            acc[key] = city;
            return acc;
        }, {});
    }

    getCountryByCode(code) {
        return this.countries[code].name;
    }

    getCiteisByCountryCode(code) {
        return this.cities.filter((city) => city.country_code === code);
    }
}

const locations = new Locations(api);

export default locations;
