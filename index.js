
const bill = document.getElementById('bill');
const tip5 = document.getElementById('tip-5');
const tip10 = document.getElementById('tip-10');
const tip15 = document.getElementById('tip-15');
const tip25 = document.getElementById('tip-25');
const tip50 = document.getElementById('tip-50');
const customTip = document.getElementById('tip-custom');
const totalPeople = document.getElementById('total-people');
const tipPerPerson = document.getElementById('tip-per-person');
const amountPerPerson = document.getElementById('amount-per-person');
const btnReset = document.getElementById('btn-reset');
const errorEl = document.getElementById('error');


function billPercision(event){
    const billEl = event.target;
    const billVal = bill.value;
    billEl.value = Math.floor(billVal*100) / 100;
}

function removeFloat(event){
    const totalPeopleEl = event.target;
    const people = totalPeopleEl.value;
    totalPeopleEl.value = Math.floor(people);
}

function generaeTotal(tip){
    const tipPercent = +tip.value.replace(/[^0-9]/, '')*.01;
    const amountOfPeople = +totalPeople.value
    let currentBill = +bill.value;
    totalPeople.style.border = '1px solid red';
    if(amountOfPeople > 0){
        totalPeople.style.border = 'none'
        error.textContent ='';
        let eachTip = (currentBill* tipPercent) /amountOfPeople;
        let billPerPerson = (currentBill + (currentBill * tipPercent)) / amountOfPeople; 
        tipPerPerson.textContent = `$${eachTip.toFixed(2)}`;
        amountPerPerson.textContent = `$${billPerPerson.toFixed(2)}`;
    }
    else{
        totalPeople.style.border = '1px solid red';
        error.textContent =`Can't be zero`;
    }
}

function customTipHandler(event){
    const customTipEl = event.target;
    const tip = customTipEl.value;
    customTipEl.value = Math.floor(tip);
    generaeTotal(customTipEl);
}

function resetScreen(){
    tipPerPerson.textContent = `$0`;
    amountPerPerson.textContent = `$0`;
}


bill.addEventListener('change',billPercision);
totalPeople.addEventListener('change', removeFloat)

tip5.addEventListener('click',() => {
    generaeTotal(tip5);
});
tip10.addEventListener('click',() =>{
    generaeTotal(tip10);
});
tip15.addEventListener('click',() =>{
    generaeTotal(tip15);
});
tip25.addEventListener('click',() =>{
    generaeTotal(tip25);
});
tip50.addEventListener('click',() =>{
    generaeTotal(tip50);
});

customTip.addEventListener('change',customTipHandler)

btnReset.addEventListener('click', resetScreen);