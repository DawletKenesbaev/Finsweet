const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})

const blog = document.querySelector('.blog')
const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': 'Pfe8gDS-TQj5Vl_G8dtx6KovxR16c4asK4uTZLIaEPM'
    },

};
let url = 'https://api.newscatcherapi.com/v2/search?q=Business';
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let dataslice = data.articles.slice(3, 6)
        let fatchdatatemp = dataslice.map((Business) => {
            const { media, author, title, summary } = Business;

           return ` <div class="blog__card">
           <div class="blog__card-box"> <img src="${media}" alt="SMt" class="blog__card-img"></div> 
           <span class="blog__card-span">${author}</span>
           <h3 class="blog__card-des">${title} </h3>
           <p class="blog__card-par">${summary}</p>
       </div>`
        })
        blog.innerHTML = fatchdatatemp.join()
    })
    .catch(err => console.error(err));
