const inputBox=document.getElementById("input-box")
const divcontainer=document.querySelector(".divcontainer")
function addtask()
{
    if(inputBox.value===""){
        alert("write something")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value;
        divcontainer.appendChild(li)
        let span =document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value="";
    saveData();
}
divcontainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked") ;
    saveData();}
    else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove() ;
    saveData();
    }
},false);
function saveData(){
    localStorage.setItem( "data",
    divcontainer. innerHTML) ;
}
    function showTask(){
    divcontainer. innerHTML= localStorage.getItem("data");
    }
    showTask();