
// // ============ constructor Function ================
// function Product(_id,_name, _price, _image, _category, _count,_desc) {
//   this.id=_id,
//   this.name = _name,
//   this.price = _price,
//   this.image = _image,
//   this.category = _category,
//   this.count = _count;
//    this.desc=_desc;
// }

// products = [];

// //======== pushing Users Objs in Local storage ===========
// products.push(new Product(1,"hp", 5000, "l1.jpg", "laptop", 5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(2,"dell inspiron13", 8000, "l2.jpg", "laptop", 6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(3,"apple mac book", 20000, "l3.jpg", "laptop", 10,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(4,"lenovo", 5000, "l4.jpg", "laptop", 12,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(5,"hp", 5000, "l5.jpg", "laptop", 4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(6,"dell inspiron15", 10000, "l6.jpg", "laptop", 5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(7,"apple ", 50000, "l1.jpg", "laptop", 7,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(8,"hp", 5000, "l2.jpg", "laptop", 4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(9,"toshipa", 4000, "l3.jpg", "laptop", 2,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));

// products.push(new Product(10,"sony", 8000, "p3.jpg", "phone", 6,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(11,"iphone xs", 20000, "mp1.jpg", "phone", 10,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(12,"lenovo", 5000, "mp2.jpg", "phone", 12,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(13,"nokia", 5000, "mp3.jpg", "phone", 4,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(14,"sony", 10000, "mp4.jpg", "phone", 5,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(15,"iphone xs+ ", 22000, "mp5.jpg", "phone", 7,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(16,"nokia", 4000, "mp6.jpg", "phone", 2,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(17,"lenovo", 5000, "mp7.jpg", "phone", 12,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));
// products.push(new Product(18,"iphone  ", 22000, "p3.jpg", "phone", 7,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae voluptas "));



// localStorage.setItem("Products", JSON.stringify(products));
window.addEventListener("load", doitfirst);

function doitfirst() {
  //============= checking if there is session =========== 
//   if(sessionStorage.getItem("LoginUser") == ""){  window.location.href = "login.html";}

//showing and hidding the login and signout and singup
switch_btns(); 



//signout button 
signoutbtn.addEventListener("click",function () {
    sessionStorage.setItem("LoginUser" , "");
});


//appending the product div 

   shopdiv = document.getElementById("shop");
   products = JSON.parse(localStorage.getItem("Products"));

  for (let i = 0; i < products.length; i++) {
    console.log(products[i], i);
    html =  '<div class="col-md-3 col-sm-6 col-xs-12 box rr wow flipInY"\
                data-wow-duration="2s" data-wow-delay=".3s" data-wow-offset="300">\
                <img src="imgs/'+ products[i].image+'" alt="Lisbon">\
                <div class="city-feature">\
                    <i class="fa fa-user icon-small"></i>'+ products[i].name+'</div>\
                <div class="city-feature">\
                    <i class="fa fa-star icon-small"></i> L.E. '+ products[i].price+'</div>\
                <div class="city-feature">\
                    <i class="fa fa-star icon-small"></i>'+ products[i].category+'</div>\
                <a href="details.html" class="details" data-item="' +i +'"> Details </a>\
                <br>\
            </div>';

  shopdiv.innerHTML += html;
  }// end of for loop

    
//==============details of  product button ===============

details = document.getElementsByClassName("details");
item = [];
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function() {
    index = (+details[i].getAttribute("data-item"));
    item.push(index);

    sessionStorage.setItem("details", JSON.stringify(item));
  });
}

}// end of doitfirst()  





//=========================  Functions   ================================


//showing and hidding the login , signout and singup btns 
function switch_btns(){
    loginbtn=document.getElementById("login");    //login button
    signupbtn=document.getElementById("signup");    //signup button
    signoutbtn=document.getElementById("signout");    //signout button
    user=document.getElementById('user');              //empty space for useremail

    //check if there is alogged in user or not 

    if(sessionStorage.getItem("LoginUser") == ""||sessionStorage.getItem("LoginUser") == null){ 
         signoutbtn.style.display="none";
    }else if(sessionStorage.getItem("LoginUser") != ""){       //there is logged in user
      signoutbtn.style.display="inline";                  //show Signout
      signupbtn.style.display="none";                   //hide signup btn
      loginbtn.style.display="none";                      //hide login btn
      html=sessionStorage.getItem("LoginUser");          //show useremail from the session 
      user.innerHTML=html;
    }
}