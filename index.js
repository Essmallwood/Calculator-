
//getting our little button 
let btn = document.getElementById('btn'); 

//adding an eventlistener to the button 

btn.addEventListener('click', function(){

//getting values inputs 

let billamount = document.getElementById('billAmount').value;
let tipPercent = document.getElementById('tipPercent').value;
let people = document.getElementById('numberofPeople').value;


//   20   = 100/20
let tipAmount = tipPercent/100;


//20/2
let totalTipPerPerson = document.getElementById('tipAmount').value = ( billamount*tipAmount)/people;

//(100 + 7.50)
let totalBills = document.getElementById('totalBill').value = (parseFloat(billamount) + parseFloat(tipPercent))/people;

if(people >= 2){
const changeTipAmount = document.getElementById('bacon');
changeTipAmount.innerHTML= 'Tip per person'; 
const totalPerPerson  = document.getElementById('milkshake');
totalPerPerson.textContent = 'Total per person'; 


}




} )

