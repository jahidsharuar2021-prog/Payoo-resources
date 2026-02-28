console.log('add money.js comming');
document.getElementById('add-money-btn').addEventListener('click',function(){
   console.log('add money btn is clicking now');

  //1- bank account get
   const bankAccount=getvalueFromInput('add-money-bank');
 if(bankAccount=='Select A Bank'){
    alert('Please selct a bank');
    return;

 }
 //2- get bank account number
   const accno=getvalueFromInput('add-money-number');
   if(accno.length !==11){
    alert("please enter 11 digit number");
    return;
   }
   // 3- get amount
   const amount=getvalueFromInput('add-money-amount');
   const currentBalance=getBalance();
   const newBalance= currentBalance + Number(amount);
   console.log(newBalance);
   

   //4- verfiy the correct pin number
   const pin=getvalueFromInput('add-money-pin');
   if(pin=='1234'){
    alert(`add money successful from bank-name
         ${bankAccount} 
         at ${new Date()}`);
    setBalance(newBalance);
   }
   else{
    alert('please enter your correct pin number');
   }
})