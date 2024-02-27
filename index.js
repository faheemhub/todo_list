window.onload = function(){
var addbtn = document.getElementById("add-btn");
var inpval = document.getElementById('add-box');
var list = document.getElementById('list');

if(localStorage.getItem('data') != null){
    var localdata = JSON.parse(localStorage.getItem("data"));
    localdata.forEach(ele => {
    newToDoList(ele);
    console.log(ele);
});
}

addbtn.onclick = function(){
    if(inpval.value != ""){
    newToDoList();
    }else{
        alert('Input Field is Empty.')
    }
}

function newToDoList(ele){
    var item_val = inpval.value;
    console.log(ele)
    if(ele){
        item_val = ele.name;
    }
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.innerText = item_val;
    li.appendChild(span);
    var label = document.createElement('label');
    list.appendChild(li);
    var i = document.createElement('i');
    i.className = "fa-solid fa-trash-can list-icon";
    label.appendChild(i);
    li.appendChild(label);
    list.appendChild(li);
    inpval.value = "";

    var del_rec = label.getElementsByTagName('i');
    del_rec[0].onclick = function(){
        var delc = confirm("Do you want to delete this record?");
        if (delc){
            li.remove();
            updateLocalStorage();
        }
    }
    updateLocalStorage();    
}
function updateLocalStorage(){
    var li_el = document.querySelectorAll('li');
    var i;
    var arr_list = [];
    for(i=0; i<li_el.length; i++){
        var span = li_el[i].getElementsByTagName('span');
        arr_list.push({
            name:span[0].innerText
        });
    }
    console.log(arr_list);
    localStorage.setItem("data", JSON.stringify(arr_list));
}
}


