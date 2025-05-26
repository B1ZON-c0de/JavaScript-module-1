const carName = 'Mercedes';
let maxCarSpeed = '232 км/ч';
let carOwner = 'Роман';

const arr = [carName, maxCarSpeed, carOwner];

for (el of arr) {
  alert(el);
}

setTimeout(() => {
  maxCarSpeed = '250 км/ч';
  console.log('У машины изменилась сокрость. Теперь она:', maxCarSpeed);
}, 2000);

setTimeout(() => {
  maxCarSpeed = '230 км/ч';
  console.log('У машины изменилась скорость. Теперь она:', maxCarSpeed);
}, 4000);

setTimeout(() => {
  maxCarSpeed = '200 км/ч';
  console.log('У машины изменилась скорость. Теперь она:', maxCarSpeed);
}, 6000);

setTimeout(() => {
  carOwner = 'Владимир';
  console.log('У машины изменился владелец. Теперь он:', carOwner);
}, 8000);

setTimeout(() => {
  carOwner = 'Олег';
  console.log('У машины изменился владелец. Теперь он:', carOwner);
}, 10000);
