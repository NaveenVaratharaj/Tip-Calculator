// var new1 = document.querySelector("button"); //Selecting the Button
// new1; 
// new1.innerText = "Button Chnage"; // Changing the text inside the button

//Query Selector selects the first element matches the element
//Query Selector All selects All the  element matches the element

const button = document.querySelector('button');
const output = document.querySelector("output");
function myfunction(){
    const input = document.querySelector('input');
    // console.log(input.value*50);
    var valuetip = (input.value*0);
    document.getElementById("demo").innerHTML = "You can pay ₹" +input.value*0.15.toFixed(2) + " as a tip ";
}

