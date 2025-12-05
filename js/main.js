const characters = {
  letters: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  symbols: [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ],
};

const lengthEl = document.getElementById("length");
const numbersCheckboxEl = document.getElementById("numbers-toggle");
const symbolsCheckboxEl = document.getElementById("symbols-toggle");
const generateButtonEl = document.getElementById("generate");
const passwordElArray = document.querySelectorAll("[id*=password-]");

function getRandomInteger(factor = 1, offset = 0) {
  return Math.floor(Math.random() * factor) + offset;
}

function getRandomElement(array) {
  const i = getRandomInteger(array.length - 1);
  return array[i];
}

function getRandomCharacterType() {
  const i = getRandomInteger(3);
  let array = [];
  switch (i) {
    case 0: {
      array = characters.letters;
      break;
    }
    case 1: {
      array = characters.numbers;
      break;
    }
    case 2: {
      array = characters.symbols;
    }
  }
  return array;
}

function getRandomCharacter() {
  const characters = getRandomCharacterType();
  return getRandomElement(characters);
}

function getLength() {
  return parseInt(lengthEl.value);
}

function generatePassword() {
  const length = getLength();
  let password = "";
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter();
  }
  return password;
}

function generatePasswords() {
  for (let passwordEl of passwordElArray) {
    const password = generatePassword();
  }
}

generateButtonEl.addEventListener("click", generatePasswords);
