const javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';

const { floor } = Math;

function strFormat(str) {
  const endIndex = floor(str.length / 2);
  let newStr = str.slice(0, endIndex);
  newStr = newStr
    .replaceAll(/a/g, 'A')
    .replaceAll(/а/g, 'А')
    .replaceAll(/\s/g, '')
    .repeat(3);

  return newStr;
}

console.log(
  strFormat(javaScriptDescription)[
    floor(strFormat(javaScriptDescription).length / 2)
  ]
);

console.log(strFormat(javaScriptDescription));
