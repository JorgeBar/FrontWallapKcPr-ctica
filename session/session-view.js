export function buildAuthorizedSession(){
    return `
    <a href="/create-product.html">Crear Product</a>
    <button> Cerrar sesión</button> 
    `

}

export function buildUnauthorizedSession(){
    return `
    <a href="/login.html">Login</a>
    <a href="/signup.html">Signup</a>
     `
}