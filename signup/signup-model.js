export async function createUser (email, password){
    //pendiente hacer gestionde errores en tweets model
    const response = await fetch("http://localhost:8000/auth/register",{
        method: "POST",
        body: JSON.stringify({
            username:email,
            password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok){
        throw new Error("error creando usuario")
    }
}