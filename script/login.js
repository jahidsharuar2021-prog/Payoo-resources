
// this output line only checking the line write or wrong
console.log('login functionality');

//button functionality started
document.getElementById('login-btn')
.addEventListener('click',function(){

//input number
const inputNumber=document.getElementById('input-number');
const contactNumber=inputNumber.value;
console.log(contactNumber);

//input pin
const inputPin=document.getElementById('input-pin');
const pin=inputPin.value;
console.log(pin);

// Match phone number or pin
if(contactNumber=="01916948899" && pin=="1234"){
    alert('Login successfully');
    window.location.assign('/home.html');
}
else{
    alert('Login failed');
    return;
}





})

