const btn=document.querySelector("#Now");
btn.addEventListener("click",()=>{
    alert("hello");
});
const btn1=document.querySelector("#btn");
btn1.addEventListener("click",()=>{
    alert("hello");
    document.getElementById("first").innerHTML="Hello new room";
    document.getElementById("first").style.backgroundImage="url(room1.png)";
});
btn1.addEventListener("click",()=>{
    document.getElementById("first")
});