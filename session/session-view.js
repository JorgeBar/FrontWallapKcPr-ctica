export function buildAuthorizedSession(){
    return `
    <a href="/create-product.html">Crear Product</a>
    <button> Cerrar sesión</button> 
    `

}

export function buildUnauthorizedSession(){
    return `
    <button><a href="/login.html">Login</a></button>
    <button><a href="/signup.html">Signup</a></button>
     `
}