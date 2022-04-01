 var nameInput = document.querySelector('#name');
 var email =  document.querySelector('#email');
 var message =  document.querySelector('#message');
 var success =  document.querySelector('#success');
 var errorNodes =  document.querySelectorAll('.error');
 var bot = {
     TOKEN: "5191680739:AAFFWW2jw5IRdzhDEYSPSC5a38QnT3lOGwA",
     chatID: "-779091359",
 }

 function validateForm(){
    
 clearMessages();
     let errorFlag = false;
     
     if(nameInput.value.length < 1){
         errorNodes[0].innerText = "Name cannot be blank";
         nameInput.classList.add("error-border");
          errorFlag = true;
      }
    
     
       if(!emailIsValid(email.value)){
         errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
            errorFlag = true;
    }  
     if(message.value.length< 1){
          errorNodes[2].innerText = "Please enter message";
         message.classList.add("error-border");
          errorFlag = true;
    }  
    fetch( `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${message.value}`) 
   .then(function(response){
      console.log(response); 
   
     if(!errorFlag){
         success.innerText = "Success!";
         saveInfo();
       }
    })
    
 }
    

  function clearMessages(){
     for(let i=0; i<errorNodes.length; i++){
         errorNodes[i].innerText= "";
           }
//       success.innerText = "";
      nameInput.classList.remove("error-border");
     email.classList.remove("error-border");
      message.classList.remove("error-border");
  }

  function emailIsValid(email){
      let pattern = /\S+@\S+\.\S+/;
       return pattern.test(email);
 }
 


 var saveInfo = function() {
     var name = nameInput.value;
     var emailSave = email.value;
     var listR = [];
     var userInfo = {
         name: nameInput.value,
         email: email.value,
     }
     listR.push(userInfo)
     localStorage.setItem("userlist", JSON.stringify(listR));
     localStorage.setItem("name", name)
     localStorage.setItem("email", emailSave)
    }