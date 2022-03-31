export default class FetchApiData {
    async get(url){
        const fetchResponse = await fetch(url);
        const jsonResponse = await fetchResponse.json();
        return jsonResponse;
    }
}

const fetchData = new FetchApiData();
const weatherWrapper = document.querySelector('#weatherWrapper');
const dataWrapper = document.querySelector('#dataWrapper');
const userCard = document.querySelector('#userCard');
const exchangeRate = document.querySelector('#exchangeRate');
const loadNews = document.querySelector('#loadNews');
const loadComments = document.querySelector('#loadComments');
const generateUser = document.querySelector('#generateUser');
const selectNewsCategory = document.querySelector('#newsCategory');
const newsCategory = ['all','national','business','sports','world','politics','technology','startup','entertainment','science','automobile','miscellaneous'];

export {fetchData, weatherWrapper, dataWrapper, userCard, exchangeRate, loadNews, loadComments, generateUser, selectNewsCategory, newsCategory}

export const loader = (containerID)=>{
    containerID.innerHTML = `<div class="d-flex justify-content-center"><span class="p-2">Loading...</span>
    <div class="spinner-border m-2" role="status"></div></div>`;
}