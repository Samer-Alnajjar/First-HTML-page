function welcoming() {
  alert("Welcome to our adapt agency ^_^");
  var name = prompt("What is your name?");
  while(name === "") {
    name = prompt("What is your name?");
  }
  alert("Welcome " + name + "!!");
}

function checking() {  
  var answer = prompt("What do you prefer, cats or dogs?");

  while(answer !== "cats") {
    alert("You are in the wrong place, we here prefer cats!!!");
    answer = prompt("What do you prefer, cats or dogs?");
  }
  alert("You are in the right plcae ^_^");
}

let getCat = function() {
  let userInput = prompt("Please enter what personality of cat you want? friendly / active / old");
  let cat ="";

  while(userInput !== "friendly" && userInput !== "active" && userInput !== "old") {
    userInput = prompt("Please enter what personality of cat you want? friendly / active / old");
  }

  if(userInput === "friendly") {
    cat = '<img src="cat3.jpg">'
  } else if (userInput === "active") {
    cat = '<img src="cat1.jpg">'
  } else if (userInput === "old") {
    cat = '<img src="cat2.jpg">'
  }

  return cat;
}

let howMany = function () {
  let count = prompt("How many cat do you want?");

  while(count === "" || isNaN(count)) {
    count = prompt("Please enter the number of cats you want!!");
  }

  return count;
}

let showCat = function() {
  let cat = getCat();
  let total = howMany();
  let result = "";

  for(let i = 0; i < total; i++) {
    result = result + '<p>cat number #' + i+1 + " " + cat + '</p>'
  }

  alert("Please scroll down to see your cat/s");
  return result;
}

welcoming();
checking();
