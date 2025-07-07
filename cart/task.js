
let incBtns = document.querySelectorAll(".product__quantity-control_inc");
let decBtns = document.querySelectorAll(".product__quantity-control_dec");
let AddCart = document.querySelectorAll(".product__add");
let Cart = document.querySelectorAll(".cart > .cart__products");


function ActionAdd(elm){
// Товар в корзине представляется следующей разметкой:

// <div class="cart__product" data-id="1">
//     <img class="cart__product-image" src="image.png">
//     <div class="cart__product-count">20</div>
// </div>

let parent = elm.closest('.product');
let val = Number(parent.querySelector(".product__quantity-value").textContent);
let pic = String(parent.querySelector("img").src);

let name1 = document.querySelectorAll(".cart__product");
    for(let i=0; i< name1.length; i++){

        if (name1[i].getAttribute('data-id') === parent.dataset.id) {
            let count_core = name1[i].querySelector(".cart__product-count");
            count_core.textContent = Number(count_core.textContent) + val;
            return ;
        }
     
    }

let templ = `<div class="cart__product" data-id=${parent.dataset.id}>
                <img class="cart__product-image" src=${pic}>
                <div class="cart__product-count">${val}</div>
            </div>`

let taskL =document.querySelector('.cart__products');   
let InnerHTML = templ;
taskL.insertAdjacentHTML('beforeend', templ);

}


function ActionDecInc(elm,operation){
    let parent = elm.closest('.product');
        let values = parent.querySelector(".product__quantity-value");
        let val = Number(values.textContent);

        if (operation==="+"){
            values.textContent = ++val;
        }

        if (operation==="-"){
        if (val > 1)  // По тз мин значение - 1
            values.textContent = --val;
        }

}




incBtns.forEach((elm) => { // навешиваем слушателей на уменьшение выбр товара
    elm.onclick = () => {
        ActionDecInc(elm,"+");
    }
}
)


decBtns.forEach((elm) => {  // слушатели на увеличение выбр товара
    elm.onclick = () => {
        ActionDecInc(elm,"-");
    }
}
)


AddCart.forEach((elm) => {   // слушатели на добавление в корзинку
    elm.onclick = () => {
        ActionAdd(elm);
    }
}
)
