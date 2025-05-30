//ПРИМЕР ПОКАЗАННЫЙЙ В ЗАДАНИИ
// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!');
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`);
//   }
// }

// ПРИМЕР С WHILE
// let i = 0;
// while (i < 3) {
//   let newStudent = prompt('Введите имя нового студента!').trim();
//   newStudent && alert(`Добро пожаловать, ${newStudent}!`);
//   ++i;
// }

// ПРИМЕР С DO...WHILE
let i = 0;
do {
  let newStudent = prompt('Введите имя нового студента!').trim();
  newStudent && alert(`Добро пожаловать, ${newStudent}!`);
  ++i;
} while (i < 3);
