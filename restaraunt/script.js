const clientName = prompt('Введите своё имя').trim();
let clientSpentForAllTime;
let clientSpentToday;

function strToNumber(str) {
  let num = +str.replace(/\$/g, '');
  return num;
}

function strIsPrice(str) {
  let isPrice = /\d+\$/g.test(str);

  return isPrice;
}

function discountCalc(arg) {
  let discount = 0;

  if (100 < arg && arg < 300) {
    discount = 10; //10%
  } else if (300 < arg && arg < 500) {
    discount = 20; //20%
  } else if (500 < arg) {
    discount = 30; //30%
  }

  return discount;
}

do {
  clientSpentForAllTime = ` ${+prompt(
    'Сколько клиент потратил за все время?'
  ).trim()}$`;

  clientSpentToday = ` ${+prompt('Сколько клиент потратил сегодня?').trim()}$`;

  if (!strIsPrice(clientSpentForAllTime) || !strIsPrice(clientSpentToday)) {
    alert(
      'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!'
    );
  }
} while (!strIsPrice(clientSpentForAllTime) || !strIsPrice(clientSpentToday));

clientSpentForAllTime = strToNumber(clientSpentForAllTime);
clientSpentToday = strToNumber(clientSpentToday);

let discount = discountCalc(clientSpentForAllTime);

alert(`Вам предостовляется скидка в ${discount}%`);

if (clientSpentToday) {
  clientSpentForAllTime += clientSpentToday;
}

alert(
  `Спасибо, ${clientName}! К оплате ${
    clientSpentToday - (discount * clientSpentToday) / 100
  }$. За всё время в нашем ресторане вы потратили ${clientSpentForAllTime}$`
);
