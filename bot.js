botButton = document.getElementById("bot-btn").addEventListener("click", getToken);


function getToken() {
var input = document.getElementById("bot-message").value
console.log(input)

/* need get email from login page:*/
var email = document.getElementById("bot-email").value

/* front slash means start and end of expression, back slash is an escape character (similar to new line), + joins the strings, S is whitespace */

/* the variable that is being declared states that an email should be: letters or numbers + @ + numbers or letters + . + number or leters */
var valid = /\S+@\S+\.\S+/;
        if (valid.test(email) === false) {
            alert("invalid email")
            return false
        }

url = "https://api.telegram.org/bot5233658091:AAEdJMSfyzxehFe65PADr1c2zGFlf5TRvIg/sendMessage?chat_id=5218071898&text=" + email + " : " + input;
    
fetch(url) 
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);

});
};

