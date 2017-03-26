import axios from 'axios';

const API_KEY = 'a00d50daca3b6856ff8bf351924b48ba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ir`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}