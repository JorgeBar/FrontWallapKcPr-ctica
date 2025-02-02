export const isUserLoggedIn = ()=>{
    const token = localStorage.getItem('jwt');
    return !!token;//transformación a booleano
}