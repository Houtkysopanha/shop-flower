const firsr_name = document.getElementById('Firsname');
const last_name  = document.getElementById('Lastname');
const email = document.getElementById('Email');
const pass  = document.getElementById('Password');
const phone  = document.getElementById('Phone');
const makenewpass  = document.getElementById('Makenewpass');
const confirmPass  = document.getElementById('confirmPass');
const addres  = document.getElementById('Address');
const city = document.getElementById('City');
const firsrname_error = document.getElementById('Firsname_error');
const lastname_error  = document.getElementById('Lastname_error');
const email_error = document.getElementById('email_error');
const pass_error  = document.getElementById('password_error');
const phone_error  = document.getElementById('phone_error');
const makenewpass_error  = document.getElementById('newpass_error');
const confirmPass_error  = document.getElementById('confirm_error');
const addres_error  = document.getElementById('address_error');
const city_error = document.getElementById('city_error');

form.addEventListener('submit', (e) => {

    if(firsr_name.value === '' || firsr_name.value == null){
        e.preventDefault();
       firsrname_error.innerText = 'First Name is required';
    }
    else{
        firsrname_error.innerText = '';
    }

    if(last_name.value === '' || last_name.value == null){
        e.preventDefault();
       lastname_error.innerText = 'Last Name is required';
    }
    else{
        lastname_error.innerText = '';
    }
        

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(!email.value.match(email_check)){
        e.preventDefault();
        email_error.innerText = 'Valid Email is Required';
    }
    else{
        email_error.innerText = ' ';
    }

    
    if(pass.value.length <= 5) {
        e.preventDefault();
        pass_error.innerText = 'Password must be 8 character';
    }
    else{
        pass_error.innerHTML = ' '; 
    }

    if(email.value.match(email_check) && pass.value.length > 5){
        showSuccessMessage();
    }

    if(phone.value.length <=5 ){
        e.preventDefault();
        phone_error.innerText = 'Phnoe Number is required';
    }
    else{
        phone_error.innerHTML = ' '; 
    }

    if(makenewpass.value.length <=5 ){
        e.preventDefault();
        makenewpass_error.innerText = 'Please Make a New Password';
    }
    else{
        makenewpass_error.innerHTML = ' '; 
    }
    if(confirmPass.value.length <=5 ){
        e.preventDefault();
        confirmPass_error.innerText = 'Please confirm your Password';
    }
    else{
        makenewpass_error.innerHTML = ' '; 
    }

    if(addres.value.length <=5 ){
        e.preventDefault();
        addres_error.innerText = 'Please Completed you address';
    }
    else{
        addres_error.innerHTML = ' '; 
    }

    if(city.value === '' || city == null){
        e.preventDefault();
       city_error.innerText = 'Please Completed your City';
    }
    else{
        city_error.innerText = '';
    }


    if(firsr_name.value&& last_name.value&&phone.value.length <=5 && makenewpass.value.length <=5 && addres.value.length <=5 && city.value && email.value.match(email_check) && pass.value.length > 5){
        showSuccessMessage();
    }

});

function  showSuccessMessage(){
    alert('Your Account have been Creat by succesfully.');
    form.reset();
}