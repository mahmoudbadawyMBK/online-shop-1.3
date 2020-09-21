window.addEventListener("load", doitfirst);

function doitfirst() {

  //get  product from details session storage
  item = JSON.parse(sessionStorage.getItem('details'));      // [2] or [5] or ....

  //query all products from Local storage
  products = JSON.parse(localStorage.getItem('Products'));   // [{},{},...]


  row = document.getElementsByClassName("fs1")[0];        //the empty row in details.html , appending to it

        html='<div class="row">\
               <div class="col-md-9 col-md-push-3"><div id="" class="" data-ride="">\
                 <br>\
                   <img src="imgs/'+products[item[0]].image+'" class="img1" alt="...">\
                </div>\
               <div>\
              <h3 class="li">Product Description</h3>\
              </div>\
                 <div>\
                    <p class="text">\
                    '+products[item[0]].desc+' </p>\
                    <h4> Payment facilities </h4>\
                    <ul class="det">\
                      <li>5% down payment </li>\
                      <li>Premiums </li>\
                      <li> 0% interest </li>\
                      <li> The installments are monthly  </li>\
                    </ul>\
                    </div>\
              </div>\
              <div class="lefts col-md-3 col-md-pull-9">\
                <i class="fas fa-map-marker ddd fa-2x"></i>\
                <P class="text" >'+products[item[0]].name+'</P>\
                <i class="fas far fa-building ddd fa-2x"></i>\
                <P class="text">Home delivery service</P>\
                <i class="fas fa-pencil-ruler ddd fa-2x"></i>\
                <P class="text"> black </P>\
                <i class="fas fa-money-bill-wave-alt ddd fa-2x"></i>\
                <P class="text">price : '+products[item[0]].price+' L.E. </P>\
                  <a   name="submit" class="bg-white text-success" type="submit" id="contact-submit" style="margin-left:220px; margin-top:20px;"><i class="fa fa-shopping-cart fa-5x"></i> </a>\
            </div>\
          </div> ';

          row.innerHTML = html;
      
     
    

  // #contact-submit == add to cart button ,, onclick fire add_to_cart func
  document.getElementById("contact-submit").addEventListener('click',function(e){
    e.preventDefault();
    add_to_cart();
    $.notify("Product added to the cart","success");   
  });

}//end of doitfirst





//=========================     Functions    ====================================

// 1- 

function add_to_cart(){

  // get cart arr from session storage
  cartarr = JSON.parse(sessionStorage.getItem("items"));

  // if cart arr isn't there , set new empty arr
  if(!cartarr){
    sessionStorage.setItem("items", "[]");
    cartarr=JSON.parse(sessionStorage.getItem("items"));

  }
    
  // check the product in the cart or not 
  // if not push it and set the arr 

  if(!find() )
    
    cartarr.push(item[0]);
    sessionStorage.setItem("items", JSON.stringify(cartarr));

  
} //end of add_to_cart



//-------------------------------------------------------------------------------------
// 2-

 function find(){

  // look for the product in cart arr , if there return true
  match= cartarr.filter(function(elem){
      if(elem == item[0]) return true; 
  });
     if(match && match[0]) return true;
   
                  
}//end of find

