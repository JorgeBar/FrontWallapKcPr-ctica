export function fireEvent( message, type, element){
    const customEvent = new CustomEvent("loading-prodcuts-info" , {
        detail: {
            message,
            type,
        }
    });
    element.dispatchEvent(customEvent)
}