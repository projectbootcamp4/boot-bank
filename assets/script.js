convertButton = document.getElementById("btn-convert").addEventListener("click", getConversion)
resultExchange = document.getElementById("result")

function getConversion() {
    var inputValue = document.getElementById("i-value").value;
    var inputFrom = document.getElementById("from-convert").value;
    var inputTo = document.getElementById("to-convert").value;

    if (inputFrom === "" || inputTo === "" || inputValue === "") {
        alert("Need input!")
        return false
    }
    url = 'https://api.exchangerate-api.com/v4/latest/' + inputFrom;

    fetch(url)

    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        console.log(data.rates[inputTo])
        exchange = data.rates[inputTo];

        resultant = inputValue * exchange;
        console.log(resultant)
        resultExchange.innerHTML = resultant;
      
      });
};