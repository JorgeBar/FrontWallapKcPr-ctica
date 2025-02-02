//nexo de union entre el modelo y la vista

import { getProducts } from "./products-model.js";
import { buildEmptyProductList, buildProduct } from "./products-view.js";
import { spinner } from "../utils/spinnerController.js";
import { fireEvent } from "../utils/fire-event.js";
 

function drawProducts(products,productsContainer){
    if(!products.length) {
        productsContainer.innerHTML = buildEmptyProductList();
    }else{
        products.forEach(product => {  
            const newProduct = buildProduct(product)
            productsContainer.appendChild(newProduct);
        });
    }
}

export async function  productsController (productsContainer){
    
    
    productsContainer.innerHTML = "";
    
    spinner()
    try {
        const products = await getProducts();
        fireEvent("Los prodcutos se han cargados correctamente", "success", productsContainer);
        drawProducts(products, productsContainer)
        
    } catch (error) {
        //alert(error.message)
        fireEvent(error.message, "error", productsContainer);

    }finally{

       spinner();
    }
}


