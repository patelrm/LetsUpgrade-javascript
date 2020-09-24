let products = [
  {
    id: 1,
    name: "Sport shose",
    size: "5to 11",
    color: "white",
    price: 1200,
    image: "product1.jpg",
    description: "Good looking white shose",
  },
  {
    id: 2,
    name: "womam Watch",
    size: "-",
    color: "white",
    price: 1500,
    image: "product2.jpg",
    description: "fojjil",
  },

  {
    id: 3,
    name: "Red Dress",
    size: "S",
    color: "red",
    price: 900,
    image: "product3.jpg",
    description: "Good ",
  },

  {
    id: 4,
    name: "chex top",
    size: "M",
    color: "brown",
    price: 3000,
    image: "product4.jpg",
    description: "Beautifull top",
  },

  {
    id: 5,
    name: "court",
    size: "S",
    color: "pink",
    price: 1300,
    image: "product5.jpg",
    description: "Good court",
  },

  {
    id: 6,
    name: "plant",
    size: "-",
    color: "green",
    price: 2500,
    image: "product6.jpg",
    description: "Green plant ",

	},
  {
    id: 7,
    name: "Watch",
    size: "-",
    color: "green",
    price: 1500,
    image: "product7.jpg",
    description: "Good looking Watchs",
  },
  {
    id: 8,
    name: "Lamp",
    size: "-",
    color: "multi color",
    price: 1500,
    image: "product8.jpg",
    description: "Good looking Watchs",
  },
  
  {
    id: 9,
    name: "couple derss",
    size: "-",
    color: "Black & whrite",
    price: 1500,
    image: "product9.jpg",
    description: "Buy 2 get 1",
  },
  
];

cart = [];
let count=0;
function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
	  
	let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
	
	
  });

  displayProducts(searchedProducts);
}


function search(){
    let str= document.getElementById("serstr").value;
    console.log(str);
    let items = merch.filter(function(ele) {
      return ele.name.indexOf(str)!=-1;
    });
    displaymerch(items);


}
// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search


function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}


function addToCart(id)
 {
flag=false;
  let item = getProductByID(products, id);

  cart.forEach(function(element){
      if(element.id==item.id){
          flag=true;
          
      }
      

  })
  if (flag) {
      alert("Manners Maketh Man!\ndont add the same product twice");
    return 0;
  }
  cart.push(item);
  count+=1;
  document.getElementById("num").innerText=count;
  let type="cartd";
  let place="cartcard";
  displaymerch(cart, "cart");

}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
}