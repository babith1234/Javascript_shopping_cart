let basket = JSON.parse(localStorage.getItem("data"))|| [];
let data = [
  {
    id:"item-1",
    name:"Wildcraft bag",
    price:$200,
    img:"../images/bag.png",
  },
  {
    id:"item-2",
    name:"Polino bag",
    price:$300,
    img:"../images/bag2.png",
  },
  {
    id:"item-3",
    name:"Adidas bag",
    price:$206,
    img:"../images/bag3.png",
  },
  {
    id:"item-4",
    name:"Nike bag",
    price:$270,
    img:"../images/bag4.png",
  },
  {
    id:"item-5",
    name:"Pole star bag",
    price:$200,
    img:"../images/bag5.png",
  },
  {
    id:"item-6",
    name:"wildcraft bag",
    price:$500,
    img:"../images/bag6.png",
  },
  {
    id:"item-7",
    name:"Puma bag",
    price:$300,
    img:"../images/bag7.png",
  },
  {
    id:"item-8",
    name:"Adobe bag",
    price:$204,
    img:"../images/bag8.png",
  }
]


function addToCart(itemId) {
  const item = document.getElementById(itemId);
  let search = basket.find((x)=>x.id===itemId);
  
  if(search === undefined){
    basket.push({
      id:itemId,
      item:1,
    });
  }
 
  else{
       search.item+=1;
  }
  localStorage.setItem("data",JSON.stringify(basket))
}

/*******************************CART PAGE*****************************************/


let shoppingCart = document.getElementById("shopping-cart");

let generateCart = () => {
  return (shoppingCart.innerHTML = basket
    .map((x) => {
      let { id, item } = x;
      let search = data.find((y) => y.id === id) || [];
      return `<div class="cart-item">Hello</div>`;
    })
    .join(""));
};

generateCart();
