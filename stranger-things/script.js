function consoleLogAnyTypes(str) {
  typeof str !== 'symbol' &&
    console.log(String(str), Number(str), Boolean(str));
  typeof str === 'symbol' && console.log(String(str), Boolean(str));
}

consoleLogAnyTypes(console.log);
consoleLogAnyTypes({ name: 'Maxim' });
consoleLogAnyTypes(Symbol('key'));
consoleLogAnyTypes(Number);
consoleLogAnyTypes('');
consoleLogAnyTypes(0);
consoleLogAnyTypes(-10);
consoleLogAnyTypes('-105');
