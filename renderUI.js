import { selectNewsCategory, newsCategory, userCard, dataWrapper, weatherWrapper, exchangeRate } from "./utilities.js";

export const renderUser = (data) => {
    const {title, first, last}= data.name;
    const avatarURL = data.picture.large;
    const {street, city, state, country, postcode} = data.location;
    userCard.innerHTML='';
    userCard.insertAdjacentHTML('beforeend',`
        <div class="p-3"><img src="${avatarURL}" class="card-img-top border rounded shadow-sm" alt=""></div>
        <div class="card-body pt-2 bg-secondary bg-gradient text-white rounded-bottom">
        <h4 class="card-title">${title}. ${first} ${last}</h4>
        <hr/>
        <p class="card-text"><strong>Location:</strong> ${street.number} ${street.name}, ${city}, ${state}, ${country} - ${postcode}</p>
        <p class="card-text">
            Phone: <span class="badge bg-light text-dark">${data.phone}</span> <span class="badge bg-light text-dark">${data.cell}</span><br/>
            Email: <small><a href="mailto:${data.email}" class="link-light">${data.email}</a></small>
        </p>
        </div>
    `);
};

export const renderNews=(news)=>{
    dataWrapper.innerHTML = '<div class="row row-cols-1 row-cols-md-2 g-4"></div>';
    news.data.forEach((item,i)=>{
        if (i<6) {
            const {title, content, imageUrl, date, readMoreUrl} = item
            dataWrapper.firstElementChild.insertAdjacentHTML('beforeend',`
            <div class="col">
                <div class="card h-100">
                    <img src="${imageUrl}" class="card-img-top maxHeight">
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${title}</h5>
                        <p class="card-text">${content}</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">${date}</small>
                        <a href="${readMoreUrl}" target="_blank" class="link-dark float-end">Read More</a>
                    </div>
                </div>
            </div>
            `);
            i++;
        }
    })
    selectNewsCategory.removeAttribute('disabled');
}
export const renderNewsCategory = ()=>{
    for(let item of newsCategory){
        selectNewsCategory.insertAdjacentHTML('beforeend',`
            <option value="${item}">${item.toUpperCase()}</option>
        `);
    }
}

export const renderTestimonial = (testimonials) => {
    dataWrapper.innerHTML='';
    testimonials.forEach((testimonial,i) => {
        if (i<5) {
            const {name, avatar, message, designation}= testimonial;
            dataWrapper.insertAdjacentHTML('beforeend',`
                <div class="card mb-3 shadow-sm">
                    <div class="row g-0">
                        <div class="col-md-3">
                            <img src="${avatar}" class="rounded-start w-100"/>
                        </div>
                        <div class="col-md-9">
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>${message}</p>
                                    <footer class="blockquote-footer">${name} <cite title="Source Title">- ${designation}</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }i++;
    });
}

export const renderWeather = (data,city) => {
    weatherWrapper.innerHTML='';
    weatherWrapper.insertAdjacentHTML('beforeend',`
        Weather forecast for <h5 class="d-inline">${city}</h5>
        <hr/>
        <img src="${data.weather[0].icon??''}"/> <h3 class="d-inline">${data.main.temp}<sup>0</sup>C</h3> ${data.weather[0].description}
        <br/><span>Wind ${data.wind.speed}km/hr.</span>
    `);
}

export const renderCurrency = (data, cur)=>{
    let userCur = '';
    const rates = Object.keys(data.rates);
    rates.forEach(item=>{
        if(item.includes(cur) === true) { 
            userCur = item;
        }
    })
    exchangeRate.innerHTML = `<span class="badge bg-secondary">1 USD</span> is equals to 
    <span class="badge bg-secondary">${data.rates[userCur]??''} ${userCur!=''?userCur:'Currency not found.'}</span>`
}