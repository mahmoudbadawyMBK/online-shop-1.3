function Email(_name,_email,_subject){
    this.fullname=_name,
    this.email=_email,
    this.subject=_subject
}

window.addEventListener('load', function () {


  // alert('nice');
  // Selectors 
  nameInput = document.getElementById("fullname");
  emailInput = document.getElementById("email");
  subjectInput = document.getElementById("subject");

  //registers events
  //fullname input
  nameInput.addEventListener('blur', function () {
  if (!isusernamevalid()) {
    nameInput.focus();
    nameInput.select();
    nameInput.style.border="2px solid red";
    usernameerror.style.display = "block";
  } else {
    nameInput.style.border="";
    usernameerror.style.display = "none";
  }
 });
  //email input

 emailInput.addEventListener('blur', function () {
  if (!iseuseemailvalid()) {
    emailInput.focus();
    emailInput.select();
    emailInput.style.border="2px solid red";
    useremailerror.style.display = "block";

}
else {
    emailInput.style.border="";
    useremailerror.style.display = "none";
}
});


  // form sumbit 
  document.forms[0].addEventListener('submit', function (e) {
    e.preventDefault();
    if(!(isusernamevalid()  && iseuseemailvalid()))
    {
        e.preventDefault();
    }
    
    if (!isusernamevalid()) {
        nameInput.focus();
        nameInput.select();
        nameInput.style.border="2px solid red";
        usernameerror.style.display = "block";

    }
  

    if (!iseuseemailvalid()) {
        emailInput.focus();
        emailInput.select();
        emailInput.style.border="2px solid red";
        useremailerror.style.display = "block";

    }


    if (localStorage.getItem("contactsEmails") == null) {
        localStorage.setItem("contactsEmails", "[]");
      }
      old = JSON.parse(localStorage.getItem("contactsEmails"));
        email = new Email( nameInput.value,emailInput.value,subject.value);
       old.push(email);
        
      
        localStorage.setItem("contactsEmails", JSON.stringify(old));
        $.notify("Your Message is Delivered , Will get Back to You In three Days Business ","success");  
        setTimeout(function(){window.location.reload();}, 5000);
        
});


});
//Regex Checks 

function isusernamevalid() {
    var userexpression = /^[a-zA-Z]{5,20}$/;
    if (nameInput.value.match(userexpression)) return true;
    else return false;
  }
  
  function iseuseemailvalid() {
    var emailExpr = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailInput.value.match(emailExpr)) return true;
    else return false;
  }

  
 
