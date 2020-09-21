document.addEventListener('load',function(){
    document.getElementById('laptops').addEventListener('click',get_labtop_products);
});

function get_labtop_products(){
    laptopsArr=[];
    arr = JSON.parse(localStorage.getItem('Products'));
    arr.forEach(function(product){
        if(product.category == "labtop"){
            laptopsArr.push(product);
        }
    });

    



}