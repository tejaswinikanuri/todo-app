let addBtn = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector("ul");
let delList = document.querySelector("#del");

let addTask = function() {
    let ele = document.createElement("li");
    ele.innerText = input.value;
    list.appendChild(ele);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    ele.appendChild(delBtn);
    input.value="";
}

let enter = function(event) {
    if(event.key=="Enter") {
        addTask();
    }
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", enter);



// let delBtns = document.querySelectorAll(".delete");
// for (btn of delBtns) {
//     btn.addEventListener("click", function(){
//         let par = this.parentElement; //delBtns.parentElement();
//         par.remove();
//     })
// }

//EVENT DELEGATION - bubbling (child ele -> par)
list.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON") { //del only if button triggers, otherwise dont del
        let par = event.target.parentElement;
        par.remove();
        delList.appendChild(par);
        par.removeChild(par.firstElementChild);
    }
})

let addTasks = document.querySelector("#adds")
if(addTasks.firstChild.value == ""){
    let h4 = document.querySelector("h4");
    h4.innerText = "hurray !!! No Tasks !!!!!";
}
