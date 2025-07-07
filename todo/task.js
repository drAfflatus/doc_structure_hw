const tInput = document.getElementById('task__input');
let myStorage = window.localStorage;



function saveToStorage(){  //  
let dimTitles = Array.from(document.querySelectorAll(".task__title"));
let allRows = [];
if (myStorage.getItem('addedrow'))
  allRows = JSON.parse(myStorage.getItem('addedrow'));

let addRow = [];
for (let index = 0; index < dimTitles.length; ++index) {
  addRow[index] = dimTitles[index].textContent;
}   // заполнили массив
 
allRows[0]= addRow;
myStorage.removeItem('addedrow');
myStorage.setItem('addedrow', JSON.stringify(allRows));
}



function taskAdd(val){
/*<div class="task">
  <div class="task__title">
    Сходить в магазин
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>*/

let templ =  `<div class="task__title">${val}</div>
              <a href="#" class="task__remove">&times;</a>`;
let taskL =document.getElementById('tasks__list');   
let div = document.createElement('div');
div.className = 'task';
div.innerHTML = templ;
taskL.append(div);
  
let tRemove=div.querySelector('.task__remove');
tRemove.onclick =  function (event){
tRemove.parentElement.remove();
saveToStorage();
}
}


tInput.oninput = function () {
document.getElementById('tasks__add').onclick = function () {
if (tInput.value) {
  taskAdd(tInput.value);
  saveToStorage();
  tInput.value = '';
  }
  return false;
};
};




let allRows1 = [];   // первоначальное заполнение из хранилища
if (myStorage.getItem('addedrow'))
  allRows1 = JSON.parse(myStorage.getItem('addedrow'))[0];
for (key in allRows1) {
  taskAdd(allRows1[key]);
}
saveToStorage();

