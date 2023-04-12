const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})
const blog = document.querySelector('.blog')
const search = document.querySelector('.searchblog')
let url = 'https://api.newscatcherapi.com/v2/search?q=Business';
const searchUrl = 'https://api.newscatcherapi.com/v2/search?q=';
const pegenation= document.querySelector('.pagenation');
let page =1;
    
   
  
function fetchData() {
    const inputCondition = search.value;
    if (inputCondition) {
        url = `${searchUrl}${inputCondition}`
        console.log('if');
    } else {
        console.log('else');
        url = `https://api.newscatcherapi.com/v2/search?q=Business`
    }

    const options = {
        method: 'GET',
        params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': 'leR2Kz-q3s3ExDerhCHpA0BVgQ1_Rh5SA8sr4WbMQMw'
            // additional key : HJFlDk1O7ZGxpfuz_WyMxxt1XCXksP8vJoweDzJNS8s
        },
    
    };
  
    fetch(url, options).then(response => response.json()).then(data => {
            let totalPage= data.total_pages>8 ? 8: data.total_pages;
            if (data.articles === undefined) {
                blog.innerHTML='';
                console.log('elde');
                blog.textContent = 'Nothing Found'
             
            }
            else {
                blog.innerHTML='';
                console.log('ifif');
                let i = (page-1)*3
                let dataslice = data.articles.slice(i,i+3)
                dataslice.map((Business) => {
                    const { media, author, title, summary } = Business;
                     console.log(Business);
                     const card = document.createElement('div')
                     card.classList.add('blog__card')
                     blog.appendChild(card)
                
                     const img = document.createElement('img')
                     img.classList.add('blog__card-img')
                     card.appendChild(img)
                     img.src = media
                     img.alt= title
    
                const bar = document.createElement('div')
                bar.classList.add('blog__card-bar')
                card.appendChild(bar)
    
                
              
                const span = document.createElement('span')
                span.classList.add('blog__card-span')
                bar.appendChild(span)
                span.textContent=author
    
    
                const des = document.createElement('h3')
                des.classList.add('blog__card-des')
                bar.appendChild(des)
                des.textContent=title
    
    
    
                const par = document.createElement('p')
                par.classList.add('blog__card-par')
                bar.appendChild(par)
                par.textContent=summary
                })
     
            }
            pegenation.innerHTML= '';

            if (totalPage>1) {
                for (let index = 1; index <= totalPage; index++) {
                    const btnPage =document.createElement('button')
                    btnPage.innerText = index;
                    btnPage.classList.add('btnPage')
                    if (page===index) {
                        btnPage.classList.add('activeBtn')
                        
                    } 
                    btnPage.addEventListener('click',(e)=>{
                        e.preventDefault();
                        page = index;
                        fetchData();
                    }) 
                    pegenation.appendChild(btnPage)                  
                }
                
            }
           
        })
   

}
   
        fetchData();
        search.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            
            fetchData();
            
          }
        });
        