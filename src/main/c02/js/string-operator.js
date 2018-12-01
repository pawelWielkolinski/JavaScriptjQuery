var greeting = 'Hey, ';
var name = 'Sam';
var street = 'Smiths ';
var number = 4;

var welcomeMessage = greeting + name + '! Your new car waits on '+ street + number;

var el = document.getElementById('greeting');
el.textContent = welcomeMessage;