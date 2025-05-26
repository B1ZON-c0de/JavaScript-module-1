const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
  btn.addEventListener('click', (el) => {
    const answer = el.target.dataset.answer;

    answer === 'one' && alert('Брендон Эйх');
    answer === 'two' && alert('10 дней');
    answer === 'three' && alert('1995 год');
    answer === 'four' && alert('JavaScript это не Java');
    answer === 'five' && alert('ECMAScript');
  });
});
