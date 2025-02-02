import { productDetailController } from "../product-detail/product-detail-Controller.js";

document.addEventListener("DOMContentLoaded",()=>{

    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");

    const productDetailContainer = document.querySelector('#product-detail')
    productDetailController(productDetailContainer, productId)
})