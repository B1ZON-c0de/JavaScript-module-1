let password;

function validPass(str) {
  let valid = /^(?=.*[A-ZА-Я])(?=.*\d+)\S{3,30}$/.test(str);

  return valid;
}

do {
  password = prompt('Введите пароль').trim();

  !validPass(password) && alert('Пароль не удовлетворяет условиям!');
} while (!validPass(password));

validPass(password) && alert('Пароль валидный. Добро пожаловать в аккаунт!');
