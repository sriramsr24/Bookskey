var plusbutton=document.getElementById("btn")
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
plusbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})
var delbtn=document.getElementById("delbtn")
delbtn.addEventListener("click",function(){
    overlay.style.display="none"
    popup.style.display="none"
})

var container=document.getElementById("container")
var add=document.getElementById("addbtn")
var booktitle=document.querySelector(".book-tittle")
var bookauther=document.querySelector(".book-auther")
var discription=document.querySelector(".discription")

add.addEventListener("click",function(){
    var newdiv=document.createElement("div")
    newdiv.setAttribute("id","book-container")
    newdiv.innerHTML=`<h3>${booktitle.value}</h3>
   <h5>${bookauther.value}</h5>
   <p>${discription.value}</p>
   <button onclick="del(event)">Delete</button>`
    container.append(newdiv)
    overlay.style.display="none"
    popup.style.display="none"  
})
function del(event){
    event.target.parentElement.remove()
}