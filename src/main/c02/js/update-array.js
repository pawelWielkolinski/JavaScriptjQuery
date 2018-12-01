var colors;
colors = ['white',
'black',
'other'];

colors[2] = 'cyan';

var el = document.getElementById('colors');
el.textContent = colors[2]; //returns cyan