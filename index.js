// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

g = 'asd';
var g;

var x = 1;
console.log(x, window, this);
console.log(isNaN('a'));

a();
console.log(x);
function a() {
  var x = 6;
}
