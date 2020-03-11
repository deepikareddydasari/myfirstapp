// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS  Starter</h1>`;

  function signup(){
   var name = document.getElementById('name').value;
   var pwd = document.getElementById('password').value;
   var gen = document.getElementById('gender').value;
   alert(name + " "+ pwd +" "+ gen)
  }
window.signup = signup;