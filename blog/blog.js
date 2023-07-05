const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})
const form = document.querySelector('.form');
const btn = document.querySelector('.submit');
const box =document.querySelector('.boxmain');



const url = 'https://reqres.in/api/users';




fetch(url).then((response) => response.json()).then((data) => {
    console.log(data.data);
   let newf= data.data.slice(0,2).map((user) => {
        const {  first_name, last_name, avatar } = user;
        console.log(avatar);
    return `<div class="box__bar">
    <div class="box__bar-flex">
        <img src="${avatar}" alt="" class="box__bar-img">
        <h4 class="box__bar-span">${first_name} ${last_name}</h4>
    </div>
   
    <h3 class="box__bar-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</h3>
    <p class="box__bar-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.</p>
</div>`
       

    })
    box.innerHTML = newf.join('');
  
}).catch((error) => console.error(error));


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fullname= document.querySelector('.inputName').value;
    const title= document.querySelector('.inputTitle').value;
    const des= document.querySelector('.inputDes').value;
    const  img= document.querySelector('.inputImg').files[0]  ;
     
   const read = new FileReader();
   read.readAsDataURL(img)
   read.onload = ()=>{
    const imgURL = read.result;
    
    const formData = {
        fullname:fullname,
        title:title,
        des:des,
    }
    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => {
       const newBox=document.createElement('div');
       console.log(data);
       newBox.innerHTML=`<div class="box__bar">
       <div class="box__bar-flex">
           <img src="${imgURL}" alt="" class="box__bar-img">
           <h4 class="box__bar-span">${data.fullname}</h4>
       </div>
      
       <h3 class="box__bar-title">${data.title}</h3>
       <p class="box__bar-des" >${data.des}</p>
       <button class="deleteBtn" data-id='${data.id}'>Delete</button>
   </div>`
     box.appendChild(newBox)

   
     form.reset();
    }).catch((error) => console.log(error));

   }

})
async function deleteUser(id){
    try {
        const response = await fetch(`${url}/${id}`,{
            method: 'Delete'

        });
        if (response.ok) {
            return response.text();
        }

    } catch (error) {
        return console.log(error);
    }
}
box.addEventListener('click', (e)=>{
   if (e.target.classList.contains('deleteBtn')) {
    const id =e.target.dataset.id
    deleteUser(id).then(()=>{
           const box = e.target.closest('div')
           box.remove();
    })
   }
})


    