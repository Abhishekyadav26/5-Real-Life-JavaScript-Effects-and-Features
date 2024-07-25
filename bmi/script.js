const form = document.querySelector('form');

// this will give empty value to height
// const height = document.querySelector('#height');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value) // for the selecting height parseInt converts str => int
    const weight = parseInt(document.querySelector('#weight').value) // for the selecting weight
    const result = document.querySelector('#results') // for the selecting the results

    if(height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = `please enter the correct height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please enter the correct weight ${weight}`   
    }
    else{
        const Bmi = (weight / ((height*height) / 10000)).toFixed(2);

        if(Bmi < 18.6){
            result.innerHTML = `<span> sorry bro you are under weight you bmi ${Bmi}  </span>`;
        }
        else if(Bmi > 24.9){
            result.innerHTML = `<span> sorry bro you are over weight you Bmi ${Bmi}  </span>`;
        }   
        else{
            result.innerHTML = `<span> congrats bro you are Normal weight you bmi ${Bmi}  </span>`; 
        }
    }
})

