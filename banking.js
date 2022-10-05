document.getElementById('deposite-btn').addEventListener('click', function () {

    // input deposite
    const desopiteAmount = document.getElementById('deposite-amount');
    const newDepositeAmountText = desopiteAmount.value;

    // previous total deposite
    const depositeTotal = document.getElementById('deposite-total');
    const previuosDepositeText = depositeTotal.innerText;

    // previous total balance
    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;



    // convert into float
    const previuosDeposite = parseFloat(previuosDepositeText);
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    const previousBalance = parseFloat(previousBalanceText);

    // total deposite
    const newDepositeTotal = previuosDeposite + newDepositeAmount;
    depositeTotal.innerText = newDepositeTotal;

    // total new balance
    const newBalanceTotal = newDepositeAmount + previousBalance;
    balance.innerText = newBalanceTotal;



    // clear
    desopiteAmount.value = '';

})

document.getElementById('withdraw-btn').addEventListener('click', function () {

    // input of withdraw

    const withdraw = document.getElementById('withdraw-amount');
    const WithdrawAmountText = withdraw.value;

    // new withdraw amount
    const newWithdarwAmount = parseFloat(WithdrawAmountText);

    // previous withdraw 

    const previousTotalWithdraw = document.getElementById('withdraw');
    const previousTotalWithdrawText = previousTotalWithdraw.innerText;

    // withdraw amount convert into number

    const previousTotalWithdrawAmount = parseFloat(previousTotalWithdrawText);

    // new total of withdraw amount
    const totalWithdrawAmount = previousTotalWithdrawAmount + newWithdarwAmount;
    previousTotalWithdraw.innerText = totalWithdrawAmount;

    // total balance after withdarw

    // previous total balance
    const balance = document.getElementById('balance');
    const previousBalanceText = balance.innerText;
    const previousBalance = parseFloat(previousBalanceText);

    // total new balance
    const newBalanceTotal = previousBalance - newWithdarwAmount;
    balance.innerText = newBalanceTotal;

    // clear value of withdraw input
    withdraw.value = '';



})

