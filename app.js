let input=document.querySelector("input");
let Taskbtn=document.querySelector("button");
let ol=document.querySelector("ol");
input.setAttribute("placeholder","Enter your task");

//To Add Tasks
Taskbtn.addEventListener("click",function(){
   

    
    if(input.value.trim()==="")
        return;
    let li=document.createElement("li");
    let textSpan = document.createElement("span");
    textSpan.textContent = input.value;
    let delBtn=document.createElement("button");
    delBtn.textContent="delete";
    delBtn.classList.add("delBtn");
    ol.append(li);
    li.append(textSpan);
    li.append(delBtn);
    input.value="";
});

//To Delete Tasks

ol.addEventListener("click",function(event){
    if(event.target.nodeName==="BUTTON"){
        let confirmDelete=confirm("Are you sure? This task will be permanently deleted.");
        if(!confirmDelete)
            return;
        let li=event.target.parentElement;
        let text=li.firstChild.textContent;
        li.remove();
        alert(`${text} Task deleted`);
    }
})

//You can press Enter instead of "Add Task"
input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        Taskbtn.click();
    }
});
