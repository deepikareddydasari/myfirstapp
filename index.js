// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS  Starter</h1>`;

  function signup(){
   var name = document.getElementById('name').value;
   var pwd = document.getElementById('password').value;
   var gen = document.getElementById('gender').value;
   var Dob = document.getElementById('dob').value;
   var rel = document.getElementsByName('Religion');
   for( var i=0;i<rel.length;i++){
     if(rel[i].checked)
     var relig = rel[i].value
   }
    if(name == ''){
      alert("Enter Username")}
      else if(pwd == ''){
        alert("Enter Password")
      }

  
   var obj = {Name :"name", Pwd:"pwd",Gender:"gen",Birth:"Dob",Religion:"relig"}
   jso = JSON.stringify(obj)
   //for storing data.
   localStorage.setItem("test",jso)
   //for retrieving data
  text = localStorage.getItem("test")
  myobj = JSON.parse(text)
 alert(myobj.name + " "+ myobj.pwd +" "+ myobj.gen+  ""+myobj.relig+"***"+myobj.Dob)


  }
window.signup = signup;