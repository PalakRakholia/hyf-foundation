console.log("Script loaded");

const products = getAvailableProducts();

// This should create the ul and the li's with the individual products details
function renderProducts(products) {
  const ulElement = document.querySelector("#list");
  if(products.length === 0){
    liElement.innerHTML = `No Items to Display currently`;
  }
  for (let i = 0; i < products.length; i++) {
    const liElement = document.createElement("li");
    liElement.innerHTML = ` - ${products[i].name} - Price: ${products[i].price} - Rating: ${products[i].rating}`;
    //console.log(liElement);
    ulElement.appendChild(liElement);
  }
}

renderProducts(products);
