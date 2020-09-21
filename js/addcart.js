function mailproducts(_title,_quantity){
  this.title=_title;
  this.quantity=_quantity;

}
window.addEventListener("load", doitfirst);


function doitfirst() {
  items = JSON.parse(sessionStorage.getItem("items"));      // indexes of products that was added to cart [0,5,6]
  products = JSON.parse(localStorage.getItem("Products"));  // [{}] the arr of objs with all products 
  tbody = document.getElementsByTagName("tbody")[0];        // empty part of table to append in it 
  total = document.getElementById("total");                 // disabled input for showing the total price 
  totalprice = 0;
  count = 1;
for (let i = 0; i < items.length; i++) {                  // loop over the basket of products (indexes)
    for (let j = 0; j < products.length; j++) {             // find them in the array ob objs  
      if (items[i] == j) {                                   //compare to get the obj
        // console.log(products[j]);
        html =                                                //append
          "<tr>\
            <th scope='row'>" + (count++) + "</th>\
            <td>" +products[j].name +"</td>\
            <td class='prices' >" +products[j].price + "</td>\
            <td><img src='imgs/" +products[j].image +"'  class='img-fluid' style='width:100px;'></td>\
            <td><input type='number' value='1' min='1' max='"+products[j].count +"' class='quantity' ></td>\
            <td><button id='" +i +"' class='btn btn-lg btn-danger '>remove</button></td>\
           </tr>";

        tbody.innerHTML += html;              
      }
    }
  }

  /**
 * ============== calcuate the price of items ================================= 
 */
totalprice=0;
totalp(); 

for (let i = 0; i < quantity.length; i++) {
  quantity[i].addEventListener('change',function(){
    totalprice=0;
    totalp();
  });
}


  /***
 * ============================================================
 *  Delete one element from session item array 
 */

  deleteElement = document.querySelectorAll(".btn-danger");
  
 
    deleteElement.forEach(function(elem) {
      elem.addEventListener("click", function() {
        index = parseInt(elem.getAttribute("id"));
        itemsArr = JSON.parse(sessionStorage.getItem("items"));
        itemsArr.splice(index, 1);
        sessionStorage.setItem("items", JSON.stringify(itemsArr));
        location.reload();
        // console.log(items);
      });
    });
 



/***
    * ===============================================================
    *  To decrese count item and buy it 
    */
   quantity=document.getElementsByClassName("quantity");
   products =JSON.parse(localStorage.getItem('Products'));// [{}]
   sessItems=JSON.parse(sessionStorage.getItem('items'));
    

    //========== buy button ===========
    //on click check if he is logged in 


    //start of confirm(buy btn)
   document.getElementById("confirm").addEventListener("click", function(e){  
     e.preventDefault();
     //if there is nothing called LoginUser in sessionStorage Set one
     if(sessionStorage.getItem("LoginUser") ==null){
       sessionStorage.setItem("LoginUser","");
       
     }

     //if he isnot logged in redirect  him to login
      if(sessionStorage.getItem("LoginUser")==""){
       window.location.href="login.html";
     }else{

      //decrease Count in products arr 

          mail=[];
          for(let i=0;i<sessItems.length;i++){

             j = sessItems[i];                     //store index of product
            spliced= products.splice(j,1)[0];      //{}  , splice obj (product)            

            spliced.count = (spliced.count) - (+quantity[i].value) ;   //change count to the  new count  


            mail.push({title:products[j].name ,quantity:+quantity[i].value );
            products.splice(j,0,spliced);        // restore obj to its position in products arr 
            
            localStorage.setItem("mail",mail);
            localStorage.setItem("Products",JSON.stringify(products));     //update products arr in each iteration 

           
          }
          // console.log("mailpro",mailpro);
      localStorage.getItem("mail");
      console.log("mail",mail);          
              Send_Email();

              sessionStorage.removeItem('items');
              setTimeout(function(){   window.location.reload();  }, 5000);     //to refresh page after selling
      }

  }); //end of confirm(buy btn)


}//end of doitfirst()

// ======================================= Functions ===============================================


// sending mail
function Send_Email() {


  window.location.href="mailto:admin@gmail.com?cc=ahmed@gmail.com&bcc=mf952611@gmail.com&subject=welcome&"+
  "body= Your purchase has been successful of ";
}


//total price 
function totalp(){
  prices=document.getElementsByClassName("prices");
  quantity=document.getElementsByClassName("quantity");

  for (let i = 0; i < quantity.length; i++) {
   totalprice += (+quantity[i].value) * (+prices[i].innerText);
    
  }
  total.value = totalprice;            // display of the value  total=5000$

  return totalprice;
}