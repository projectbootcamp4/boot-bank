// Global variable
var acctBalanceLbl = document.getElementById("acctBalanceLbl");
var deposits = [];
var withdrawals = [];
var totalBalance = 10000;

var userDeposit = document.getElementById("userDeposit");
var btnDeposit = document.getElementById("loan-btn");
var userWithdraw = document.getElementById("userWithdraw");
 var btnWithdraw = document.getElementById("transfer-btn");
 var depositError = document.getElementById("depositerror");
 var withdrawalError = document.getElementById("withdrawalerror");
 var depositAmount = document.getElementById("depositAmount");
 var withdrawalAmount = document.getElementById("withdrawalAmount");
 var date = document.getElementById("date");

 var currentDate = new Date().toLocaleDateString();

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
    /* 
    the default value for minimumFractionDigits depends on the currency
    and is usually already 2
    */
  });
document.getElementById("acctBalanceLbl").innerHTML = totalBalance;

// accept deposits from user, store deposits in array
btnDeposit.addEventListener('click', function()  {
        
    if (userDeposit.value < 0.01 || userDeposit.value > 10000) {
         //  alert("You can only deposit between $0.01 and $10,000.")
         depositError.textContent = "You can only deposit between $0.01 and $10,000.";
         depositError.style.color = "red";
            return userDeposit.value = '';
        } else {
        // push deposit to array
       
        deposits.push(Number(userDeposit.value));
        // calculate Total Balance
        totalBalance += (Number(userDeposit.value));
        depositError.textContent = "";
        // format TotalBalance to show $ XX.XX (2 decimal places)
        var totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerText = totalBalanceFormatted;
        depositAmount.innerText = deposits;
        date.innerText = currentDate;
        
    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }    
});


// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', function() {

    
        // checks if withdrawal meets parameters
        if (userWithdraw.value > totalBalance - 100) {
           // alert("Your total balance cannot drop below $100.");
           withdrawalError.textContent = "Your total balance cannot drop below $100.";
           withdrawalError.style.color = "red";
            return userWithdraw.value = '';
        } else {

        // push withdrawal to array
        withdrawals.push(Number(userWithdraw.value));
        
        // calculate Total Balance
        totalBalance -= (Number(userWithdraw.value));
        withdrawalError.textContent = "";
        // format TotalBalance to show $ XX.XX (2 decimal places)
        var totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
        withdrawalAmount.innerText = withdrawals;
        date.innerText = currentDate;

        // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
});

// format TotalBalance to show $ XX.XX (2 decimal places)

var totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
