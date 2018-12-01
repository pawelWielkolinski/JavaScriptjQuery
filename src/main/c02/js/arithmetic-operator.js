var subtotal = (14+2)*5;
subtotal++; //incrementation by 1
subtotal--; //decrement by 1

var shipping = 0.5*(13+1);

var total =  subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;
