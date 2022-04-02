convertButton = document.getElementById("btn-convert").addEventListener("click", getConversion)
resultExchange = document.getElementById("result")
errorStatus = document.getElementById("error-status")

var specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

function getConversion() {
    var inputValue = document.getElementById("i-value").value;
    var inputFrom = document.getElementById("from-convert").value.toUpperCase();
    var inputTo = document.getElementById("to-convert").value.toUpperCase();
    console.log(inputFrom)
    if (Number.isInteger(parseInt(inputValue)) === false || specialCharacters.test(inputValue)) {
        errorStatus.innerHTML = "Sume to Convert Should be a Number or a Special Character!";
        return false
    }
    if (inputFrom === "" || inputTo === "" || inputValue === "") {
        errorStatus.innerHTML = "Need input!";
        return false
    
    } else if (/\d/.test(inputFrom) || /\d/.test(inputTo) || specialCharacters.test(inputFrom) || specialCharacters.test(inputTo)){
        errorStatus.innerHTML = "Currency Name Does Not Contain Numbers or Special Characters";
        return false
    }

    url = 'https://api.exchangerate-api.com/v4/latest/' + inputFrom;

    fetch(url)

    .then(function (response) {
        console.log(response)
        return response.json();
        
      })
      .then(function (data) {
        console.log(data)
        if (data.result === "error") {
            errorStatus.innerHTML = "Your 'from' country  name is incorrect";
            return false
        }
        console.log(data.rates[inputTo])
        exchange = data.rates[inputTo];

        resultant = inputValue * exchange;
        console.log(resultant)
        resultExchange.innerHTML = resultant;
        if (typeof(data.rates[inputTo]) === "undefined") {
            errorStatus.innerHTML = "Your 'to' country  name is incorrect";
            return false
        } else {
            errorStatus.innerHTML = "";
        }
      
      });
};