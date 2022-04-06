// Global variables
var acctBalanceLbl = document.getElementById("acctBalanceLbl");
var deposits = [];
var withdrawals = [];
var totalBalance = 10000;
var totalDepositAmount=0;
var totalWithdrawalAmount=0;

var userDeposit = document.getElementById("userDeposit");
var btnDeposit = document.getElementById("loan-btn");
var userWithdraw = document.getElementById("userWithdraw");
 var btnWithdraw = document.getElementById("transfer-btn");
 var depositError = document.getElementById("depositerror");
 var withdrawalError = document.getElementById("withdrawalerror");
 var depositAmount = document.getElementById("depositAmount");
 var withdrawalAmount = document.getElementById("withdrawalAmount");
 var date = document.getElementById("date");
 var deposit_date = document.getElementById("deposit_date");
 var withdrawal_date = document.getElementById("withdrawal_date");
 var totalDeposit = document.getElementById("totalDeposit");
 var totalWithdrawal = document.getElementById("totalWithdrawal");

 var currentDate = new Date().toLocaleDateString();
date.innerText = currentDate();
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
        deposit_date.innerText = currentDate;

       // Display total deposit amount
       totalDepositAmount += (Number(userDeposit.value));
       totalDeposit.innerText = totalDepositAmount;
        
    // print deposit to console to verify success
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }    
});


// accept withdrawals from user, store withdrawals in array
btnWithdraw.addEventListener('click', function() {
    
        if(userWithdraw.value === "")
        {
            withdrawalError.textContent = "Please enter the value";
            withdrawalError.style.color = "red";
        }
        // checks if withdrawal meets parameters
        else if (userWithdraw.value > totalBalance - 100) {
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
        withdrawal_date.innerText = currentDate;

        // Display total deposit amount
       totalWithdrawalAmount += (Number(userWithdraw.value));
       totalWithdrawal.innerText = totalWithdrawalAmount;

        // print withdrawal to console to verfify success
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
});

// format TotalBalance to show $ XX.XX (2 decimal places)

var totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
