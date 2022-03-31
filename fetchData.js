import {fetchData, weatherWrapper} from './utilities.js';
import {renderUser, renderTestimonial, renderNews, renderCurrency, renderWeather} from './renderUI.js';

export const fetchUser = () =>{
    fetchData.get('https://randomuser.me/api/').then(data=> {
        renderUser(data.results[0]);
        fetchCurrency(data.results[0].nat);
        const {latitude, longitude} = data.results[0].location.coordinates;
        fetchWeather(latitude,longitude, data.results[0].location.city);
    });
}

export const fetchNews = (cate)=>{
    fetchData.get(`https://inshortsapi.vercel.app/news?category=${cate}`).then(data=> {
        renderNews(data);
    });
}

export const fetchCurrency = (cur) =>{
    fetchData.get('https://open.er-api.com/v6/latest/USD').then(data=>{
        renderCurrency(data,cur);
    });
}

export const fetchWeather = (lat,lon,city) => {   
    const weatherPromise = fetchData.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`);
    weatherPromise.then(data => {
        renderWeather(data,city);
    }).catch(error=>{
        weatherWrapper.innerHTML='';
        weatherWrapper.insertAdjacentHTML('beforeend',`Place not found.`);
    })
}

export const fetchTestimonial = () =>{
    fetchData.get('https://testimonialapi.toolcarton.com/api').then(data=> {
        renderTestimonial(data);
    });
}