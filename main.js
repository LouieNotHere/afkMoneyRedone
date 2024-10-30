function getFirstDate() {
  const now = new Date();
  
  const dateStr = now.toLocaleString();

  localStorage.setItem('moneyIncrAfk.visitDateTime', dateStr);

  console.log("Date and time saved:", dateStr);
}

function getVisitDate() {
  var firstDate = localStorage.getItem('moneyIncrAfk.visitDateTime');
  
  return "Fun fact: You first visited this page since " + firstDate + "!";
}

function displayCreator(name, year) {
  var output;
  var now = new Date();
  
  if (now.getFullYear() > year) {
    output = name + " @ " + year + " - " + now.getFullYear();
  } else {
    output = name + " @ " + year;
  }
  
  return output;
}

function firstFunc() {
  if (!localStorage.getItem('moneyIncrAfk.firstVisit')) {
    var username = prompt("Please enter your username")
    
    getFirstDate();
    
    localStorage.setItem('moneyIncrAfk.firstVisit', 'true');
    localStorage.setItem('moneyIncrAfk.username', username);
  }
}

function greetUser() {
  var username = localStorage.getItem('moneyIncrAfk.username');
  
  // arrays of greetings
  var greetings = ["Greetings, ", "Hello, ", "What's up, ", "Hi, ", "Good day, ",
    "Bienvenido, ", "Welcome back, ", "Howdy, ", "Hola, ", "Kamusta, ",
    "Bonjour, ", "Welcome, ", "All hail ", "Please welcome, ", "Hey there, ",
    "Hiya, ", "Hey, ", "Heya ", "How's it going ", "Yo ",
    "It's good to see you "];
  
  return greetings[Math.floor(Math.random() * greetings.length)] + username + "!";
}

window.onload = function() {
  // detect if the user has opened the page for the first time, and execute if not yet
  firstFunc();
  
  document.getElementById("visitDate").innerHTML = getVisitDate();
  document.getElementById("greeting").innerHTML = greetUser();
};
