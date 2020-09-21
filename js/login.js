$(function() {

  $("#logForm").on("submit", function(e) {
    var status = false;
    e.preventDefault();
    var email = $("#email");
    var pwd = $("#pwd");


    //email
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email.val())) {
      email.addClass("border-danger");
      $("#emailMsg").html("<span class='text-denger'>  PLZ E Correct E-mail format</span>" );
      status = false;
      email.focus();
      return false;
    } else {
      email.removeClass("border-danger");
      $("#emailMsg").html("");
      status = true;
    }



    // password
    var patternPass = /^[a-zA-Z0-9_-]{5,15}$/; 

    if (pwd.val() == "") {
      pwd.addClass("border-danger");
      $("#pwdMsg").html("<span class='text-denger'> Please enter password</span>");

      status = false;
      pwd.focus();
      return false;

    } else {

      if (patternPass.test(pwd.val())) {
        pwd.removeClass("border-danger");
        $("#pwdMsg").html("");
        status = true;
      } else {
        pwd.addClass("border-danger");
        $("#pwdMsg").html("<span class='text-denger'> Please enter Correct format password ");
        status = false;
        pwd.focus();
        return false;
      }

    }



    var flag = JSON.parse(localStorage.getItem("Users")).some(function(userdata) {

      return userdata.Email == $("#email").val() && userdata.Password == $("#pwd").val();
      
    });

    if (flag == true) {
      if (sessionStorage.getItem("LoginUser") == null) {
        sessionStorage.setItem("LoginUser", "");
      }
      sessionStorage.setItem("LoginUser", $("#email").val());
        window.location.href = "index.html";
    } else {
      $("#pwdHelp").text("Please Make Sure Your Email and Password").css("color", "red");
      status = false;
      return false;
    }

    $("#logForm").submit();
  });
});
