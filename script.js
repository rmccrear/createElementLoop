// 'use strict';

let sugarCookie = {
  name: "Robert's best sugar cookies",
  price: 12,
  qty: 12
}

let gingerbread = {
  name: "Fantastic Gingerbread cookies",
  price: 8.00,
  qty: 4
}

sugarCookie.total = sugarCookie.price * sugarCookie.qty;
gingerbread.total = gingerbread.price * gingerbread.qty;
// pbCookie.total =  pbCookie.price * pbCookie.qty;
// cocoCookie.total =  cocoCookie.price * cocoCookie.qty;

let parentForRobertsShop = document.getElementById("cookie-box-robert");
let sugarCookieElm = document.createElement('li');
sugarCookieElm.textContent = sugarCookie.name + sugarCookie.total;
parentForRobertsShop.appendChild(sugarCookieElm);

let cookieElm2 = document.createElement('li');
cookieElm2.textContent = gingerbread.name + gingerbread.total;
parentForRobertsShop.appendChild(cookieElm2);


let cookieOrderArray = [
  { name: 'Snickerdoodle', price: 3, qty: 3 },
  { name: 'Chocolate Chip', price: 4, qty: 5 },
  { name: 'Molasses', price: 4, qty: 1 },
  { name: 'Peanut Butter', price: 4, qty: 7 },
]
let subtotal = 0

let parentForThomasShop = document.getElementById("cookie-box-thomas");

for (let i = 0; i < cookieOrderArray.length; i++) {
  let cookieNameElm = document.createElement('h2');
  cookieNameElm.textContent = cookieOrderArray[i].name

  let priceElm = document.createElement('p');
  priceElm.textContent = "Price 🍪 " + cookieOrderArray[i].price;

  let qtyElm = document.createElement('p');
  qtyElm.textContent = "Quantity 🍪 " + cookieOrderArray[i].qty;

  
  parentForThomasShop.appendChild(cookieNameElm)
  parentForThomasShop.appendChild(qtyElm)
  parentForThomasShop.appendChild(priceElm)

  subtotal += cookieOrderArray[i].qty * cookieOrderArray[i].price
}
  
  let thomasTotalElm = document.createElement('p');
  thomasTotalElm.textContent = "Total Price🍪 $" + subtotal.toFixed(2);  
  parentForThomasShop.appendChild(thomasTotalElm)


// DEE COOKIE 
let matchaCookie = {
  name: "Dee's Matcha Cookies",
  price: 13.5,
  qty: 12
}

let lemonLavender = {
  name: "Dee's Lemon Lavender Cake",
  price: 15,
  qty: 12
}

matchaCookie.total = matchaCookie.price * matchaCookie.qty
lemonLavender.total = lemonLavender.price * lemonLavender.qty

let matchaCookieTotal = matchaCookie.price * matchaCookie.qty
let parentForMatchaCookie = document.getElementById("dee-matcha-cookie");

let matchaCookieElm = document.createElement('li');
matchaCookieElm.textContent = "HIGH QUALITY MATCHA COOKIES, NOT INCLUDING TAX 🍵🍪🫖" + matchaCookieTotal;
parentForMatchaCookie.appendChild(matchaCookieElm);

let lemonLavenderElm = document.createElement('li');
lemonLavenderElm.textContent = `HIGH QUALITY ${lemonLavender.name} COOKIES-NOT INCLUDING TAX 🍋🍪🌺` + lemonLavender.total;
parentForMatchaCookie.appendChild(lemonLavenderElm);


// Gerard Donut
let glazedDonutPrice = 11;
let glazedDonutQty = 12;
let glazedDonutTotal = glazedDonutPrice * glazedDonutQty;

let parentForGlazedDonut = document.getElementById("donut-box-gerard");
let glazedDonutElm = document.createElement('em');
glazedDonutElm.textContent = "Glazed Donuts 🍩" + glazedDonutTotal;
// parentForGerardsShop is not defined
// (check what you named it above.)
// parentForGerardsShop.appendchild(glazedDonutElm); // parentForGeradsShop is not defined
parentForGlazedDonut.appendChild(glazedDonutElm);


//Justin's Cookies
let jayCookies = {
  name: "Jay's Wonderful Cookies",
  price: 10,
  qty: 8
}
let jayCookiesPrice = 10;
let jayCookiesQty = 8;
let jayCookiesTotal = jayCookiesPrice * jayCookiesQty;

let parentForJayCookies = document.getElementById("jays-cookies");
let jayCookiesElm = document.createElement("li");
jayCookiesElm.textContent = "jays cookies" + jayCookiesTotal;
parentForJayCookies.appendChild(jayCookiesElm);






// Bianca's Cookie
let redVelvetCookiePrice = 5.00
let redVelvetCookieQty = 10
let redVelvetTotal = redVelvetCookiePrice * redVelvetCookieQty;

let parentForRedVelvetCookie = document.getElementById("cookie-box-bianca");
let redVelvetElement = document.createElement("p");
redVelvetElement.textContent = `Red Velvet Cookie only ${redVelvetTotal} !!`;
parentForRedVelvetCookie.appendChild(redVelvetElement);





let brownDonut = {
  name: "Brown Donut",
  price: "12",
  qty: 5
}
let donutCookiePrice = 5.00;
let donutCookieQty = 5;
let donutTotal = donutCookiePrice * donutCookieQty;
brownDonut.total = brownDonut.price * brownDonut.qty
let parentBrianDonutCookie = document.getElementById('my-cookie-box')
let donutCookieElm = document.createElement('li')
donutCookieElm.textContent = "Glazed Donuts" + donutTotal;
parentBrianDonutCookie.appendChild(donutCookieElm);

// let brownDonut1 = document.getElementById('new-brown-donut')
let brownDonutElm = document.createElement('li')
brownDonutElm.textContent = `This the total of one donut ${brownDonut.total} `;
parentBrianDonutCookie.appendChild(brownDonutElm);



let lemonCookiePrice = 5.00;
let lemonCookieQty = 12.00;
let lemonCookieTotal = lemonCookiePrice + lemonCookieQty;

let parentLemonCookie = document.getElementById('andrea-lemon-drop');
let lemonCookieElm = document.createElement('li');
lemonCookieElm.textContent = "Lemon cookies🍋" +
  lemonCookieTotal;
parentLemonCookie.appendChild(lemonCookieElm);


















































































































































































































































































































































































































































sn




















