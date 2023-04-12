const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})
const form = document.querySelector('.form');
const input = document.querySelectorAll('.input');
 
const btnRegister= document.querySelector('.register');

console.log('HI');


form.addEventListener('click', (event) => {
    if (event.target.classList.contains('input')) {

      const inputs = form.querySelectorAll('.input');
      inputs.forEach((input) => {
        input.classList.remove('acti');
      });
      

      event.target.classList.add('acti');
    }
  });
  
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let result1 = true;
    let result2 = false;
    let result3= false;
  

    for (let index = 0; index < 5; index++) {
      if (!input[index].value) {
        input[index].classList.add('danger');
        result1 = false;
      } else {
        input[index].classList.remove('danger');
      }
    }
  
    let arr = [];
    for (let index = 0; index < 5; index++) {
      arr.push(input[index].value);
    }
    if (arr.some((val) => val)) {
    } else {
      result1 = false;
    }
  
    if (input[3].value === input[4].value) {
        result2  = true;
    } else {
      input[3].classList.add('danger');
      input[4].classList.add('danger');
    }
  
    if (input[3].value.length >= 8) {
        result3 = true;
    } else {
      input[3].classList.add('danger');
      input[4].classList.add('danger');
    }

    if (result1 && result2  && result3) {
      alert('You registered successfully');
    } else if (result1 && result2 ) {
      alert('Password should have at least 8 characters');
    } else if (result1) {
      alert('Password confirmation is incorrect');
      input[3].classList.add('danger');
      input[4].classList.add('danger');
    } else {
      alert('Make sure you enter all information');
    }
  });





