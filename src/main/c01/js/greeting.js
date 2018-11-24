var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
    greeting = 'good evening!';
} else if (hourNow > 12) {
greeting = 'good day!'
} else if (hourNow > 0) {
    greeting = 'good day!';
}else{
    greeting = 'WELCOME!';
}
document.write('<h3>' + greeting + '<h3>');