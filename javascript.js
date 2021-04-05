

alert('Welcome to our website!')

var username = prompt("Please share your name with us");
alert('Hello! ' + username + ' please enjoy your time with us');

var coffeetype = prompt('If you are a Black coffee person type BC but if you are a Turkish coffee person type TC if you prefer something else than coffee please type N for neither');



if (coffeetype == 'BC') { alert('You prefer to keep things simple. You are old school, patient, sometimes quiet, efficient and set in your ways <3'); }
else if (coffeetype == 'TC') { alert("You are a traditionalist, maybe even an old soul. You have solid roots,Being in your company is a treat! <3"); }
else { alert('You need to start liking coffee it will make you happier <3'); }



var recipe = prompt("what's your favourite coffee recipe ? please choose between:  A-> 'Nutella Frappuccino'  B->'Almond Cappuccino");


while (recipe !== 'A' && recipe !== 'a' && recipe !== 'B' && recipe !== 'b'){
  console.log(recipe);
  recipe = prompt("Please choose A or B");
}

var numberofrecipe = prompt("How many times you want us to print your recipe");

for (var i = 0; i < numberofrecipe; i++) {
  if (recipe == 'A' || recipe == 'a') {
    document.write('<img src="https://i.pinimg.com/236x/11/5a/f0/115af043a717b336e4a75231211d0155.jpg"/>');
  }
  else {
    document.write('<img src="https://i.pinimg.com/236x/f1/6a/de/f16ade97972ab67dec8099898a228644.jpg"/>');
  }
}

