let userName = prompt('Как вас зовут?');
userName = userName.trim().toUpperCase();

alert(`Вас зовут ${userName}`);

let userAge = prompt('Сколько вам лет?');
userAge = +userAge.trim();

alert(`Вас зовут ${userName} и вам ${userAge} лет`);
console.log(typeof userAge);
