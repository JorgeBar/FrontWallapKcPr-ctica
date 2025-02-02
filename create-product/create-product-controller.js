import { createProduct } from "./create-product-model.js";
import { spinner } from "../utils/spinnerController.js";

export function createProductController(createProductForm){

   
    createProductForm.addEventListener("submit", async (event)=>{
        event.preventDefault();


        const name = createProductForm.querySelector("#name").value
        const description = createProductForm.querySelector("#description").value;
        const price = parseFloat(createProductForm.querySelector("#price").value);
        const type = createProductForm.querySelector("#type").value;
        const image = createProductForm.querySelector("#image").value;


        if(!name || !description || !price ||!type){
            alert("Relleno todos los campos");
            return;
        }
        if (isNaN(price) || price <= 0) {
            alert("Por favor, ingrese un precio válido.");
            return;
        }

        try {
            spinner()
            const product = await handleProductCreation({ name, description, price, type, image });
            alert("Producto creado");
            setTimeout(() => {
              window.location.href = "/";
            }, 1000);
      
          } catch (error) {
            alert("Error al crear el producto: " + error.message);
          } finally {
            spinner()
          }
        });
      
      
        // 3. Función para manejar la creación del producto
        async function handleProductCreation(productData) {
          // Llamar a la función createProduct para crear el producto en el backend
          try {
            const product = await createProduct(
              productData.name,
              productData.description,
              productData.price,
              productData.type,
              productData.image
            );
            return product; // Devuelve el producto creado
          } catch (error) {
            throw new Error("Fallo de lectura de producto");
          }
        }
      }