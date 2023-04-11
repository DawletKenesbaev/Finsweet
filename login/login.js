const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})

const username= document.querySelector('.username');
const userpassword= document.querySelector('.password');
const form= document.querySelector('.form');
const login= document.querySelector('.login');



form.addEventListener('click', (event) => {
    if (event.target.classList.contains('input')) {
      // Remove the acti class from all input fields
      const inputs = form.querySelectorAll('.input');
      inputs.forEach((input) => {
        input.classList.remove('acti');
      });
      
      // Add the acti class to the clicked input field
      event.target.classList.add('acti');
    }
  });
login.addEventListener('click',()=>{
    if (username.value && userpassword.value && userpassword.length>8) {
        alert('you are logged succesfully')
        username.classList.remove('danger')
        userpassword.classList.remove('danger')
    }
    else {
        alert('username or password is incorrect')
        username.classList.add('danger')
        userpassword.classList.add('danger')
        }

})


  // for hide/show 
