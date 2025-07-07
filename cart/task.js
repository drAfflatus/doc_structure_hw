
let incBtns = document.querySelectorAll(".product__quantity-control_inc");
let decBtns = document.querySelectorAll(".product__quantity-control_dec");
let addCart = document.querySelectorAll(".product__add");
let cart = document.querySelectorAll(".cart > .cart__products");


function actionAdd(elm){

let parent = elm.closest('.product');
let val = Number(parent.querySelector(".product__quantity-value").textContent);
let pic = String(parent.querySelector("img").src);
let cartProd = document.querySelectorAll(".cart__product");

const productInCard = Array.from(cartProd).find((el)=>{
if (el.getAttribute('data-id') === parent.dataset.id) {return true;}
return false;
});


if(!productInCard) {
    let templ = `<div class="cart__product" data-id=${parent.dataset.id}>
                 <img class="cart__product-image" src=${pic}>
                 <div class="cart__product-count">${val}</div>
                 </div>`

    let cartProds =document.querySelector('.cart__products');   
    cartProds.insertAdjacentHTML('beforeend', templ);

} else {
    let countCore = productInCard.querySelector(".cart__product-count");
    countCore.textContent = Number(countCore.textContent) + val;
    return ;
}
}

function actionDecInc(elm,operation){
let parent = elm.closest('.product');
let values = parent.querySelector(".product__quantity-value");
let val = Number(values.textContent);
if (operation==="+"){
    values.textContent = ++val;
}

if (operation==="-"){
    if (val > 1) {values.textContent = --val;}
}
}

incBtns.forEach((elm) => { // навешиваем слушателей на уменьшение выбр товара
    elm.onclick = () => {
        actionDecInc(elm,"+");
    }
}
)

decBtns.forEach((elm) => {  // слушатели на увеличение выбр товара
    elm.onclick = () => {
        actionDecInc(elm,"-");
    }
}
)

addCart.forEach((elm) => {   // слушатели на добавление в корзинку
    elm.onclick = () => {
        actionAdd(elm);
    }
}
)
