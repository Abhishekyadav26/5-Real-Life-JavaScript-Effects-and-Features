var isstatus = document.querySelector("h4")
var addfriend = document.querySelector("#Add")

var flag = 0;

addfriend.addEventListener("click" , function(){
    if(flag == 0){
        isstatus.innerHTML = "friends"
        isstatus.style.color = "green"
        addfriend.innerHTML = "remove"
        addfriend.style.color = "red"
        flag = 1;
    }
    else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "red"
        addfriend.innerHTML = "Add friend"
        addfriend.style.color = "#dadada"
        flag = 0
    }
})

