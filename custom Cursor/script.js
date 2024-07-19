var main = document.querySelector("html")
var cursor = document.querySelector(".cursor")

// main.addEventListener("mousemove", function(dets){
//     console.log(dets.x);
//     console.log(dets.y);
// })
main.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px"
} )