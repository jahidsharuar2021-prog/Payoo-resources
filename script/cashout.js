document.getElementById('cashout-btn').addEventListener('click',function(){

    //1- get the agent number $ validate
    const cashoutNumberInput=document.getElementById('cashout-number');
    const  cashoutNumber= cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !==11){
        alert('Invalid number');
        return;
    }

    
    //2- get the current balance,validate , convert  to number
    const balanceElement=document.getElementById('balance');
    const balance=balanceElement.innerText;
    console.log(balance);

    //3- get the amount ,validate,convert to umber
    const cashoutAmountInput=document.getElementById('cashout-amount');
    const cashoutAmount=cashoutAmountInput.value;
    console.log(cashoutAmount);
    
     //4-calculated  new balance
     const newBalance=Number(balance)-Number(cashoutAmount);
     
     if(newBalance<0){
        console.log('Invalid amount');
        return;
     }
    
     //5- get the pin and verify
     const cashoutPinInput=document.getElementById('cashout-pin');
     const cashoutpin=cashoutPinInput.value;
     if(cashoutpin=='1234'){

      //5-1 true:show an alert>set Balance
      alert('cashout successful');
       console.log("new balance",newBalance);
       balanceElement.innerText=newBalance;

     }
     else{

         //5-2 true:show an error alert>return
         alert('Invalid pin');
         return;
     }

})