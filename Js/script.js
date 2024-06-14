var limk =document.getElementById("link");
var main =document.getElementById("main");
   
limk.onmousemove=function(){
    main.style.top="73px";
    
}
limk.onmouseleave=function(){
    main.style.top="-600px";
    
}
// 
let skill =document.querySelector(".Our-Skills");
let spans =document.querySelectorAll(".progras span");

window.onscroll=function(){
    if(window.scrollY >= skill.offsetTop -200){
        console.log("now");
        
        
    }
}
