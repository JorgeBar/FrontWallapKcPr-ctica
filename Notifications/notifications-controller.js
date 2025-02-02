import { buildNotification } from "./notifications-view.js";


export function  notificationsController (notificationsContainer){

    const showNotification = (message, type = "success") =>{
       
        notificationsContainer.innerHTML = buildNotification(message ,type);


        setTimeout(()=>{
            notificationsContainer.innerHTML = ""
        },4000)

    }
    return {
        showNotification
    }
}
