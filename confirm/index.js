const arrQuestions = [
  'JavaScript появился в 1995 году?', //Yes
  'Спецификация JavaScript называется ECMAScript?', //Yes
  'JavaScript был создан за 1 месяц?', //No
];

const arrAnswers = [
  'JavaScript появился в 1995 году',
  'Спецификация JavaScript называется ECMAScript',
  'JavaScript был создан за 10 дней',
];

confirm(arrQuestions[0]) === true
  ? alert('Верно')
  : alert(`Неверно, ответ: ${arrAnswers[0]}`);

confirm(arrQuestions[1]) === true
  ? alert('Верно')
  : alert(`Неверно, ответ: ${arrAnswers[1]}`);

confirm(arrQuestions[2]) === false
  ? alert('Верно')
  : alert(`Неверно, ответ: ${arrAnswers[2]}`);
