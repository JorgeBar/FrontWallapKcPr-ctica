import { getCurrentUserInfo } from "../auth/auth-model.js";
import { buildDeleteButton, buildProductDetail, buildHomePageButton } from "./product-detail-view.js"
import { getProduct, removeProduct } from "./product-detail-model.js"

export async function productDetailController(productDetailContainer , productId){

    productDetailContainer.innerHTML = "";

    try {
     const product = await getProduct(productId)


     productDetailContainer.innerHTML = buildProductDetail(product);

     const homeButtonElement = buildHomePageButton();
     productDetailContainer.appendChild(homeButtonElement);
 
     homeButtonElement.addEventListener("click", () => {
       window.location.href = "/";
     });   

     
     
     
     
     const token = localStorage.getItem('jwt');
     
     if (token) {
        try {
          const user = await getCurrentUserInfo();
  
          if (user.id === product.user.id) {
            const removeButtonElement = buildDeleteButton();
            productDetailContainer.appendChild(removeButtonElement);
  
            removeButtonElement.addEventListener("click", async () => {
              const shouldRemoveProduct = confirm("¿Seguro que quiere borrarlo?");
              if (shouldRemoveProduct) {
                try {
                  await removeProduct(product.id);
                  window.location.href = "/";
                } catch (error) {
                  alert("Error eliminando producto: " + error.message);
                }
              }
            });
          }
        } catch (error) {
          console.warn("El usuario no está autenticado o hubo un problema al verificar su sesión.");
        }
      }
    } catch (error) {
     
      if (error.message.includes("not found")) {
        alert("No hay producto existente o hubo un fallo.");
      } else if (error.message.includes("network")) {
        alert("Hubo un problema de red. Por favor, inténtalo de nuevo más tarde.");
      } else {
        alert("Ocurrió un error inesperado: " + error.message);
      }
  
      // Redirigir a la página principal tras el error
      window.location.href = "/";
    } 
  }


// 1- conocoer quién es el dueño del tweet mostrado --> expand

// 2- conocer el identificador del usuario logado 

//3-  compara el di del autor del tweet mostrado con el id del usuario logado

//4- si los id`s son iguales, pintar el boton

//5- cuando el botón se pulse,borrar el tweet, previa confiramción


