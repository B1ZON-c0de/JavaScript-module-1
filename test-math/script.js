const arrQuestions = [
  'Сколько будет 2 + 2?',
  'Сколько будет 2 * 2?',
  'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
  'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
  'Сколько будет 2 + 2 * 2?',
];

const arrAnswers = [4, 4, 1, 12, 6];

correctAnswers = 0;
incorrectAnswers = 0;

for (let i = 0; i < 5; i++) {
  let answer = +prompt(arrQuestions[i]).trim();

  if (answer === arrAnswers[i]) {
    alert('Ответ верный');
    ++correctAnswers;
  } else {
    alert('Ответ неверный');
    ++incorrectAnswers;
  }
}

alert(
  `Конец теста! Правильные ответы: ${correctAnswers}; Неправильные ответы: ${incorrectAnswers}`
);
