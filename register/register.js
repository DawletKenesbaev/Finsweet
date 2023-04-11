const hamburger = document.querySelector('.hamburger'),
navbar = document.querySelector('.navbar__menu');

hamburger.addEventListener('click', ()=>{
    navbar.classList.toggle('active')
    hamburger.classList.toggle('active')
})

const form = document.querySelector('.form');
const input = document.querySelectorAll('.input');


const btnRegister= document.querySelector('.register');



// form.addEventListener('click',function (e) {
//     if (e.target.classList='input') {
//         e.target.classList.toggle('acti')
//     }
// })


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
form.addEventListener('submit', function (event){
    event.preventDefault();
    let result = 0;
    let result2 = 0;
    for (let index = 0; index < 5; index++) {
        if (!input[index].value){
           input[index].classList.add('danger')
        }
        else {
            input[index].classList.remove('danger') 
        }
        let arr =[];
        arr.push(input[index].value)
        console.log( arr.every(checkAge));
        function checkAge(age) {
          return age;
        }
        result =arr.every(checkAge)
        if (input[3].value===input[4].value) {
            result2= true 
            console.log('tru');
        }
        else {
            result2= false 
            console.log('xsc');
        }
       
    }
    console.log(result2);
    if (result && result2) {
        alert('You registered succesfully')
    }
    else if (result) {
        alert('password confirmation is incorrect')
        input[3].classList.add('danger')
        input[4].classList.add('danger')
    }
    else {
        alert('Make sure you enter all informations')
    }
    });
   