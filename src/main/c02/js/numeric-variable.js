var price, quantity, total;
// price 5, quantity = 14; - this is good too
price = 5;
quantity = 14;
total = price * quantity;

var el = document.getElementById('cost')
el.textContent = total + 'zł'; /*this replace text in div with id 'cost'*/