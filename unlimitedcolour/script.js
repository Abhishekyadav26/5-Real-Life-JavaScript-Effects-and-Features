// generate a random colour

const randomcolor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#';
    for(let i = 0; i<6; i++){
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

let interid;
// if(!interid){
//     interid = setInterval(changebgcolor,1000)
// }
const startchangingcolor = function(){
    if(!interid){
        interid = setInterval(changebgcolor,1000)
    }
    function changebgcolor(){
        document.body.style.backgroundColor = randomcolor();
    }
};

const stopchangingcolor = function(){
    clearInterval(interid)
    interid = null;
} ;

document.querySelector('#start').addEventListener('click',startchangingcolor)

document.querySelector('#stop').addEventListener('click',stopchangingcolor)

// let body = document.querySelector('body');
// document.querySelector('#start').addEventListener('click', function(){
//     body.style.backgroundColor = randomcolor();
// })

