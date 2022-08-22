let values = [];
let result;
let button = document.querySelector('.equal');
let number = document.querySelectorAll('.button');
let symbol = document.querySelectorAll('.symbol');
let opeartion1 = document.querySelector('.previous-operand');
let opeartion2 = document.querySelector('.current-operand');
let screen = document.querySelector('.screen');
let removeAll = document.querySelector('.ac');
let equation = document.querySelector('.eq');
let a = opeartion1;
let b = opeartion2;
let value = opeartion2.textContent;
let valueB;
let solution;
removeAll.addEventListener('click', () => {
  opeartion1.innerHTML = '';
  value = null;
  valueB = null;
  opeartion2.innerHTML = '';
  screen.innerHTML = '';
  a = opeartion1;
});

number.forEach(function (i) {
  i.addEventListener('click', function () {
    result = i.getAttribute('value');
    if (result == '+') {
      a = b;
    } else if (result == '-') {
      a = b;
    } else if (result == '/') {
      a = b;
    } else if (result == '*') {
      a = b;
    }
    screen.innerHTML += result;
    a.innerHTML += result;
    value = opeartion2.textContent;
    valueB = opeartion1.textContent;
  });
});
let myEquation;
button.addEventListener('click', sum);
function sum() {
  myEquation = screen.textContent;
  equation.onclick = () => (screen.innerHTML = myEquation);

  if (value.charAt(0) == '+') {
    value = value.substring(1);
    valueB = Number(valueB);
    value = Number(value);
    solution = valueB + value;
    screen.innerHTML = solution;
    opeartion1.innerHTML = solution;
    opeartion2.innerHTML = null;
  } else if (value.charAt(0) == '-') {
    value = value.substring(1);
    valueB = Number(valueB);
    value = Number(value);
    solution = valueB - value;
    screen.innerHTML = solution;
    opeartion1.innerHTML = solution;
    opeartion2.innerHTML = null;
  } else if (value.charAt(0) == '/') {
    value = value.substring(1);
    valueB = Number(valueB);
    value = Number(value);
    solution = valueB / value;
    screen.innerHTML = solution;
    opeartion1.innerHTML = solution;
    opeartion2.innerHTML = null;
  } else if (value.charAt(0) == '*') {
    value = value.substring(1);
    valueB = Number(valueB);
    value = Number(value);
    solution = valueB * value;
    screen.innerHTML = solution;
    opeartion1.innerHTML = solution;
    opeartion2.innerHTML = null;
  }
}
let d = document.querySelector('.d');
let one = 'you son of a bitch';
let two = 'you suck';
let three = 'you are dumbass';
let four = 'only idiots click this button';
let five = 'you fool ';
let six = 'you stupid bitch';
let insultsArr = [one, two, three, four, five, six];
let randInsult;
d.onclick = () => {
  randInsult = Math.floor(Math.random() * 5);
  screen.innerHTML = insultsArr[randInsult];
};
