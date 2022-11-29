/* Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */
let element;
const content = document.querySelector ('.content');

for ( let i = 1 ; i <= 100 ; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        element = `<div class="box m-2 fizz_buzz_color"> FizzBuzz </div>`;
        console.log ("FizzBuzz");
    }
    else if (i % 3 == 0) {
        element = `<div class="box m-2 fizz_color"> Fizz </div>`;
        console.log ("Fizz");
    }
    else if (i % 5 == 0) {
        element = `<div class="box m-2 buzz_color"> Buzz </div>`;
        console.log ("Buzz");
    }
    else {
        element = `<div class="box m-2"> ${i} </div>`;
        console.log (i)
    }

    content.innerHTML += element;
    {/* <div class="box bg-warning m-2"></div> */}
}