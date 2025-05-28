const myName = 'Роман';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен Минин';
const reasonText =
  'нравится процесс решения разных задач используя язык программирования';
const numberOfMonth = 2;

let myInfoText = `«Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!»`;

function consoleLogStr(str) {
  console.log(str);
  console.log(str.length);
  console.log(str[0], str[str.length - 1]);
}

console.log(myInfoText);

myInfoText = myInfoText
  .replaceAll(programmingLanguage, programmingLanguage.toLowerCase())
  .replaceAll('курс', 'курс'.toUpperCase());

consoleLogStr(myInfoText);
