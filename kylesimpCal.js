




//getting our little button 
let btn = document.getElementById('btn'); 



//getting values inputs 



//adding an eventlistener to the button 

btn.addEventListener('click', function(){

  //  document.getElementById("10").options[document.getElementById("").selectedIndex].text

    let billamount = document.getElementById('billAmount').value;


    let tenPercent = document.getElementById('10').value = 10/100;
    let fifteenPercent = document.getElementById('15').value = 15/100;
    let twentyPercent = document.getElementById('20').value = 20/100;
    let customPercent = document.getElementById('tipPercent').value;


//   20   = 100/20
let tipAmount = customPercent/100;
let totalPriceAfterDiscount = billamount*tipAmount; 
// 20/100 
function display() {
    selectElement = document.querySelector('#exampleFormControlSelect2');
    fifteenPercent = document.querySelector('#10');
    output = billamount + ( billamount*tenPercent) ;
    document.querySelector('#totalBill').textContent = output;
}



let totalBills = document.getElementById('totalBill').value = (parseFloat(billamount) + parseFloat(totalPriceAfterDiscount));



})
// function displayTotal() {
//     selectElement = document.querySelector('.form-control');
//     output = selectElement.value;
//     document.querySelector('#totalBill').textContent = output;
// }