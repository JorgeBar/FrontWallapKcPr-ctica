//modelo - obtencion de datos que necesita nuestra aplicación

// los tweets tienen que venir desde sparrest 


export async function  getProducts  ()  {

  try {
    const response = await fetch("http://localhost:8000/api/products?_expand=user");
    const products = await response.json();     
    if(!response.ok){
      throw new Error("Recurso no existente");
    }                                         
    
    return products;
  } catch (error) {
    throw new Error(error.message)
    
  }
  
}