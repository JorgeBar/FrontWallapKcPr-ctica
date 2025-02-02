// cálculo del html que vamos a mostrar al usuario
 export const buildProduct = (product) =>{

    const ProductLink = document.createElement('a');
    ProductLink.setAttribute("href", `/product-detail.html?id=${product.id}`);

    const newProduct = document.createElement('div');
    newProduct.classList.add('product-card');
    
    newProduct.innerHTML = `
    <div class="product-info">
    <h3 class="product-name">${product.name}</h3>
    <span>user: ${product.user.username}</span>
    <p class="product-description">${product.description}</p>
    <img class="product-image" src="${product.image}" alt="${product.name}"/> 
    <span class="product-price">$${product.price}</span>
      <span class="product-type">${product.type}</span>
    </div>
  `;


  ProductLink.appendChild(newProduct);

    return ProductLink;

}

export const buildEmptyProductList = () =>{
    return '<h2>No hay productos disponibles</h2>'
   
}

