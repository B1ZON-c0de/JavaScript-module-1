const str = 'Это строка!';
const num = 10;
const bigNumber = 20n;
const bool = true;
const nothing = null;
let undf;
const obj = {};
const id = Symbol();

function parseTypes(variable) {
  typeof variable !== 'symbol' &&
    console.log(Number(variable), Boolean(variable), String(variable));
  typeof variable === 'symbol' &&
    console.log(Boolean(variable), String(variable));
}

parseTypes(str);
parseTypes(num);
parseTypes(bigNumber);
parseTypes(bool);
parseTypes(nothing);
parseTypes(undf);
parseTypes(obj);
parseTypes(id);
