import {  REGEXP } from "../utils/constants.js";
import { createUser } from "./signup-model.js";

export function signupControler(form){
    //1- obtener los datos del formulario
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
     const userEmailElement = form.querySelector("#user-mail")    
     const passwordElement = form.querySelector("#password")    
     const passowrdConfirmElement = form.querySelector("#password-confirm") 
     
     const userEmail = userEmailElement.value;
     const password = passwordElement.value;
     const passwordConfirm = passowrdConfirmElement.value;
     
     const errors = [];
     //2- validarlos

     const emailRegExp = new RegExp(REGEXP);
     if(!emailRegExp.test(userEmail)){
        errors.push('formato de mail incorrecto')
     };

     if(password !== passwordConfirm){
        errors.push('las passwords no son iguales')
     }

     for (const error of errors) {
        //mostrar notificaciones
     }
     if(errors.length ===0){
      handleCreateUser(userEmail, password);
      }
      alert('Usuario registrado')
   })
   
}

async function handleCreateUser (userEmail, password) {
   try {
   await createUser(userEmail, password)
   window.location.href = "/"
      
   } catch (error) {
      alert(error.message)
   }
}