import { fetchUser, fetchNews, fetchTestimonial } from './fetchData.js';
import { renderNewsCategory} from './renderUI.js';
import {weatherWrapper, dataWrapper, userCard, exchangeRate, loadNews, loadComments, generateUser, selectNewsCategory, newsCategory, loader} from './utilities.js';

window.addEventListener('load',()=>{
    loader(userCard);
    loader(dataWrapper);
    loader(exchangeRate);
    loader(weatherWrapper);
    fetchUser();
    fetchNews(newsCategory[0]);
    renderNewsCategory();
});

selectNewsCategory.addEventListener('change',(e)=>{
    e.preventDefault();
    loader(dataWrapper);
    fetchNews(selectNewsCategory.value);
});

generateUser.addEventListener('click',(e)=>{
    loader(userCard);
    loader(weatherWrapper);
    e.preventDefault();
    fetchUser();
});

loadComments.addEventListener('click',(e)=>{
    e.preventDefault();
    loadNews.classList.remove('active');
    loadComments.classList.add('active');
    selectNewsCategory.classList.add('d-none');
    loader(dataWrapper);
    fetchTestimonial();
});

loadNews.addEventListener('click',(e)=>{
    e.preventDefault();
    loadComments.classList.remove('active');
    loadNews.classList.add('active');
    selectNewsCategory.setAttribute('disabled','disabled');
    selectNewsCategory.classList.remove('d-none');
    loader(dataWrapper);
    fetchNews(selectNewsCategory.value);
});
