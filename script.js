products = [
    {
        id: 1,
        name: "Royal-Blue-Shirt",
        img: "https://i.ibb.co/PGFt3PG/1.jpg",
        price: 2000
       
    },
    {
        id: 2,
        name: "Orange T-Shirt",
        img: "https://i.ibb.co/1qKtYNm/2.png",
        price: 2500
        
    },
    {
        id: 3,
        name: "Half Sleeve Shirt",
        img: "https://i.ibb.co/gwvWQJz/3.jpg",
        price: 700
      
    },
    {
        id: 4,
        name: "Aadi T-Shirt",
        img: " https://i.ibb.co/2c2wn7V/4.jpg",
        price: 650
     
    },
    {
        id: 5,
        name: "TriBlend T-Shirt",
        img: "https://i.ibb.co/42P1db2/5.png",
        price: 700
      
    },
    {
        id: 6,
        name: "Gilldan T-Shirt",
        img: "https://i.ibb.co/jkc4sHH/6.jpg",
        price: 800
  
    },
    {
        id: 7,
        name: "CottonKing",
        img: "https://i.ibb.co/gr4zkpK/7.jpg",
        price: 1400
 
    },
    {
        id: 8,
        name: "Gilldan Yellow T-Shirt",
        img: "https://i.ibb.co/VLM1nkw/8.jpg",
        price: 1200
        
    },
    {
        id: 9,
        name: "Men's Shirt",
        img: "https://i.ibb.co/3CGy1P0/9.jpg",
        price: 1500
      
    },
    {
        id: 10,
        name: "DIOR Men's T-Shirt",
        img: "https://i.ibb.co/WG2T0dr/10.jpg",
        price: 2000
      
    },
    {
        id: 11,
        name: "Friends Hoodie",
        img: " https://i.ibb.co/dL5sW5v/11.jpg",
        price: 2500
    },
    {
        id: 12,
        name: "Grey Hoodie",
        img: " https://i.ibb.co/nkdg8hW/12.jpg",
        price: 3000
    },
    {
        id: 13,
        name: "RTS Ladies T-Shirt",
        img: "https://i.ibb.co/PxMHP2v/13.png",
        price: 300
    },
    {
        id: 14,
        name: "Pink Tank-Top",
        img: "https://i.ibb.co/ww4g2P4/14.png",
        price: 250
      
    },
    {
        id: 15,
        name: "Black Ladies T-Shirt",
        img: "https://i.ibb.co/NL2TXC9/15.jpg",
        price: 400
    }
  
]
let Total = 0;
products.forEach(product =>{
  
    displayProduct(product);
})

function displayProduct(product) {
    var productsDiv = document.getElementById('pro-container');
    var productAddDiv = document.createElement('div');
    productAddDiv.className = 'add-Div';
    productAddDiv.innerHTML=`
   <div onClick="addToCart('${product.id}')">
   <img src="${product.img}">
   <p>${product.name}</p>
   <p>${product.price} BDT</p>
   </div>
    
    
    `
    
  
    productsDiv.appendChild(productAddDiv);
}


function addToCart(id){
  
    let price=0;
    let name ='';
    let imgUrl = '';

   products.forEach(product=>{
       if(product.id == id){
           price = product.price;
           name = product.name;
           imgUrl = product.img;

       }
   })

   
   var cartDiv = document.getElementById('Cart-container');
    var addDiv = document.createElement('div');
    addDiv.className = 'addDiv';
    addDiv.innerHTML=`
    <div>
   <img src="${imgUrl}">

   <span>${name} </span><span> BDT${price}</span>
   <button onClick="removeFromCart('${price}')" id="trash-btn"><img id ="btn-img" src="https://img.icons8.com/material-rounded/24/000000/trash.png"/>
   
   </div>
  
    
    
    `
    cartDiv.appendChild(addDiv);

    // cartCalculation(price ,true);
    cartAddCalculation(price)
   
}
function cartAddCalculation(price){
 
       Total = Total+price;
        updateCartCalculation(Total);
}

function removeFromCart(price){
 
       Total = Total-price;
        updateCartCalculation(Total);

        document.getElementById("trash-btn").parentElement.parentElement.remove();
}





function updateCartCalculation(Total) {
  
    const total ="BDT"+Total;
    document.getElementById("subtotal").innerText=total;
    document.getElementById("total").innerText=total;
    document.getElementById("pay-btn-text").innerText=total;


 

}