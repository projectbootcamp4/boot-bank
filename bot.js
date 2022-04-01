botButton = document.getElementById("bot-btn").addEventListener("click", getToken);

function getToken() {
var input = document.getElementById("bot-message").value
console.log(input)
url = "https://api.telegram.org/bot5233658091:AAEdJMSfyzxehFe65PADr1c2zGFlf5TRvIg/sendMessage?chat_id=5218071898&text=" + input;
    
fetch(url) 
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);

});
};

