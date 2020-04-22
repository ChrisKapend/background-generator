let _ = require('lodash');

let color1 = document.querySelector('input[id="color1"]');
let color2 = document.querySelector('input[id="color2"');
let button = document.querySelector('input[type="button"]')
let body = document.getElementById('body')
color1.oninput = function (){
    console.log(this.value);
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
};
color2.oninput = function (){
    console.log(this.value);
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}`;
};
