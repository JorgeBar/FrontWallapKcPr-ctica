export async function createProduct(name, description, price, type, image){
 const token = localStorage.getItem('jwt')
     const response = await fetch("http://localhost:8000/api/products",{
        method: "POST",
        body: JSON.stringify({
            name,
            description,
            price,
            type,
            image
        }),
        headers:{
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}` 
        }
    })
    if (!response.ok) {
        throw new Error("Error creando producto");
      }
    
      const product = await response.json()
      return product;
}