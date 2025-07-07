

let div;
const DimTT = Array.from(document.querySelectorAll('a.has-tooltip'));


DimTT.forEach(function (elm) {
    elm.onclick = function (event) {
        let topPos = elm.getBoundingClientRect().top < window.innerHeight/2 ?  elm.getBoundingClientRect().bottom + 10 : elm.getBoundingClientRect().top - 30;
        let leftPos = elm.getBoundingClientRect().left < window.innerWidth/2 ? elm.getBoundingClientRect().left + 10 : elm.getBoundingClientRect().left - 10;
 
    if (document.contains(document.getElementById("forDeleting1234"))) {
     document.getElementById("forDeleting1234").remove(); // удаляем выскочку если он уже имеется
    }


    div = document.createElement("div"); // рисуем выскочку
    div.setAttribute("class","tooltip tooltip_active");
    div.setAttribute("id","forDeleting1234");
    div.setAttribute("style",`left: ${leftPos}px; top: ${topPos}px`);
    div.textContent = elm.title;

    elm.insertAdjacentElement('afterEnd', div);
    
        return false;
    };
});