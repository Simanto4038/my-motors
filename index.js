const cartText = document.getElementById('cartList');


function addCart(productId,priceId,imgSrc) 
{
   const productName = document.getElementById(productId);
   const price =  document.getElementById(priceId);
   
   
   const li = document.createElement('li');
    li.className = "row d-flex m-1";
  
 li.innerHTML = 
   
   `
  
                          <div class="col-2">
                          <img src=${imgSrc} class="img-fluid" alt="">
                          </div>
                          <div class="col-10 d-flex justify-content-around">
                          <p class='productName'>${productName.innerText}</p> 
                          <p class='cartProductPrice'>${price.innerText}</p>
                         <p class='remove-item' > <i class="fas fa-times" onclick="remove(event)" style="color:red"></i> </p>
                           </div> 
                        
   `
   li.style.fontSize = '12px';
   li.style.fontWeight = '700';
   cartText.style.backgroundColor = 'white';
   cartText.appendChild(li);
   subtotalOfProductsInCart();
}
  
function subtotalOfProductsInCart()
 {
   const sub_total = document.getElementById('sub_total');
   let total_price = 0;
   const prices = document.getElementsByClassName('cartProductPrice');
 
   for (const price of prices)
    {
     total_price = total_price + parseInt(price.innerHTML) ;
     
   }

   sub_total.innerText = total_price;
   //console.log(total_price);
}

const remove = (event)=>
{
 // console.log(event.target.parentNode.parentNode.parentNode);
  event.target.parentNode.parentNode.parentNode.innerHTML= ' ';
  subtotalOfProductsInCart()
}
function darkMood()
{
 
   const main = document.getElementById('main_body');
 

 main.style.backgroundColor= 'black';

    
}

function darkMoodRemove()
{
 
   const main = document.getElementById('main_body');
 

 main.style.backgroundColor= 'white';

    
}