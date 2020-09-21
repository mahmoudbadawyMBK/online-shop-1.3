$(function() {

  // constructor Func
  function User(_Name, _email, _phone, _password) {
    this.Name = _Name;
    this.Email = _email;
    this.Phone = _phone;
    this.Password = _password;

  }

  $("#regForm").on("submit", function(e) {
    e.preventDefault();
    status = false;
    username = $("#username");
    email = $("#email");
    pwd = $("#pwd");
    phone = $("#phone");
    users = [];



    //username
    var userpattern = /^[a-zA-Z]{6,10}$/;
    if (!userpattern.test(username.val())) {
      username.addClass("border-danger");
      $("#usernameMsg").html(
        "<span class='text-denger'>plz Enter Valid username 6-10 characters</span>"
      );
      status = false;
      username.focus();
      return false;
    } else {
      username.removeClass("border-danger");
      $("#usernameMsg").html("");
      status = true;
    }


    //email
    emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailpattern.test(email.val())) {
      email.addClass("border-danger");
      $("#emailMsg").html(
        "<span class='text-denger'> PLZ E Correct E-mail Valid</span>"
      );

      status = false;
      email.focus();
      return false;
    } else {

      if (localStorage.getItem("Users") == null) {
        localStorage.setItem("Users", "[]");
      }
      var flag = JSON.parse(localStorage.getItem("Users")).some(function(user) {
        return user.Email == $("#email").val();

      });

      if (flag == true) {
        email.addClass("border-danger");
        $("#emailMsg").html(
          "<span class='text-denger'>  this Email Can not register => Please Register by another One</span>"
        );
        status = false;
        email.focus();
        return false;

      } else {

        email.removeClass("border-danger");
        $("#emailMsg").html("");
        status = true;
      }
    }






    //password
    passwordpattern = /^[a-zA-Z0-9_-]{5,15}$/;

    if (!passwordpattern.test(pwd.val())) {
      pwd.addClass("border-danger");
      $("#pwdMsg").html(
        "<span class='text-denger'> Please enter Correct format password "
      );

      status = false;
      pwd.focus();
      return false;
    } else {
      pwd.removeClass("border-danger");
      $("#pwdMsg").html("");
      status = true;
    }



    //phone
    phonepattern = /^[0-9-+]+$/;

    if (!phonepattern.test(phone.val())) {
      phone.addClass("border-danger");
      $("#phoneMsg").html(
        "<span class='text-denger'> Please Enter Your Phone Number correct</span>"
      );

      status = false;
      phone.focus();
      return false;
    } else {
      phone.removeClass("border-danger");
      $("#phoneMsg").html("");
      status = true;
    }






      userdata = JSON.parse(localStorage.getItem("Users"));
      user = new User(
        username.val(),
        email.val(),
        parseInt(phone.val()),
        parseInt(pwd.val())
      );
      
      // console.log(user);
      userdata.push(user);

      
      // users = userdata.concat(JSON.parse(window.localStorage.getItem("users") || "[]"));

      localStorage.setItem("Users", JSON.stringify(userdata));

      window.location.href = "login.html";

      });
});
