function welcoming() {
  alert("Welcome to our adapt agency ^_^");
  var name = prompt("What is your name?");
  alert("Welcome " + name + "!!");
}

function checking() {
  var answer = prompt("What do you prefer, cats or dogs?");
  if(answer === "cats") {
    alert("You are our favourite customer ^_^!");
  } else {
    alert("You are in the wrong place!!!");
  }
}

welcoming();
checking();
