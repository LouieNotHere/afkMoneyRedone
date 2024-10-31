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

    while (true) {
      let username = prompt("Please enter a username (no spaces allowed):");
      if (!username.includes(' ')) {
        localStorage.setItem('moneyIncrAfk.username', username);
        getFirstDate();

        localStorage.setItem('moneyIncrAfk.firstVisit', 'true');
        localStorage.setItem('moneyIncrAfk.username', username);
        break;
      } else {
        alert("The username provided has spaces. Please try again.");
      }
    }
  }
}

function equationVal(x) {
  const targetX = 100;
  const targetY = 100;
  const b = 1;
  const a = targetY / Math.log(b * targetX);
  const linearGrowth = 1.5;
  const k = 0.1;

  function logarithmicPart(x) {
    return a * Math.log(b * x);
  }

  function linearPart(x) {
    return 100 + linearGrowth * (x - 100);
  }

  function blend(x) {
    return 1 / (1 + Math.exp(-k * (x - 100)));
  }

  return (1 - blend(x)) * logarithmicPart(x) + blend(x) * linearPart(x);
}

function greetUser() {
  var username = localStorage.getItem('moneyIncrAfk.username');

  // arrays of greetings
  var greetings = ["Greetings, ", "Hello, ", "What's up, ", "Hi, ", "Good day, ",
    "Bienvenido, ", "Welcome back, ", "Howdy, ", "Hola, ", "Kamusta, ",
    "Bonjour, ", "Welcome, ", "All hail ", "Please welcome, ", "Hey there, ",
    "Hiya, ", "Hey, ", "Heya ", "How's it going ", "Yo ",
    "It's good to see you ", "Gluten tag ", "Ayo "];

  return greetings[Math.floor(Math.random() * greetings.length)] + username + "!";
}

window.onload = function() {
  // detect if the user has opened the page for the first time, and execute if not yet
  firstFunc();

  document.getElementById("visitDate").innerHTML = getVisitDate();
  document.getElementById("greeting").innerHTML = greetUser();
};