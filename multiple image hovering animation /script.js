var elem = document.querySelectorAll(".elem")

// var elemImage = document.querySelector("#elem1 img")

// it's move the image in x axis as well as y axis.
// elem1.addEventListener("mousemove",function(dets){
//     elemImage.style.left = dets.x + "px";
//     elemImage.style.top = dets.y + "px";
// })

// // This code snippet adds an event listener to `elem1` for the "mouseenter" event. When the mouse enters the element `elem1`, the function specified will be executed. In this case, the function sets the `opacity` of `elemImage` to 1, making it fully visible. This code is typically used to create interactive effects on a webpage, such as showing additional information or highlighting an element when the user hovers over it.
// elem1.addEventListener("mouseenter",function(dets){
//     elemImage.style.opacity = 1;
// })

// elem1.addEventListener("mouseleave",function(dets){
//     elemImage.style.opacity = 0;
// })

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove", function(dets){
        val.childNodes[3].style.left = dets.x +"px"
        val.childNodes[3].style.top = dets.y +"px"
    })
});