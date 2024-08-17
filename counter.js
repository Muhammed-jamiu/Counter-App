// const { use } = require("react");

let number = document.getElementById("num");
let add = document.getElementById("add");
let Subtract = document.getElementById("Subtract");
let reset = document.getElementById("reset");
let notification = document.getElementById("notification");
let close = document.getElementById("close");

const closeMessage = () => {
  notification.style.display = "none";
};
close.addEventListener("click", () => {
  notification.style.display = "none";
});

function messageMe() {
  notification.style.display = "flex";
}

let counter = 0;
add.addEventListener("click", () => {
  if (counter >= 0) {
    counter = counter + 1;
    number.innerHTML = counter;
    // console.log("Yes keep going---", counter);
    closeMessage();
    return;
  }
});

Subtract.addEventListener("click", () => {
  if (counter > 0) {
    counter = counter - 1;
    number.innerHTML = counter;
    // console.log("Sorry you can't go beyond 0");
    return;
  }
  if (counter <= 0) {
    // return alert("Sorry, You can't go beyound Zero 0");
    messageMe();
  }
});

reset.addEventListener("click", () => {
  if (counter > 0) {
    counter = 0;
    return (number.innerHTML = counter);
  }
});

//Different work------- down ward
//Number divisible by 3 => Fizz
//Number divisible by 5 => Buzz
//Number divisible  both by 3 & 5=> FizzBuzz
//Not division by 3 or 5 => input

// let outPut = fizzBuzz(15);
// console.log(outPut);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a Number";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  if (input % 3 === 0 && input % 5 === 0) return "Fizz-Buzz";

  return input;
}

// fizzBuzz(3);

//Another one
const checkSpeed = (speed) => {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit) {
    console.log("The speed is: OK");
  } else {
    let point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point === 0) {
      point = point + 1;
      return console.log("The speed is :OK");
    }
    if (point >= 12) {
      console.log("License Suspended,it's an offense to exced 12 point");
    } else {
      console.log(`You have ${point} point now`);
    }
  }
};
// const speedResult = checkSpeed(101);
// console.log(speedResult);

// another function for loop
function showNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2 === 0) {
      console.log(i, "EVEN");
    } else {
      console.log(i, "ODD");
    }
  }
}
// showNumbers(11);
// trying it on function while loop
function showNumber(range) {
  let x = 1;
  while (x < range) {
    if (x % 2 === 0) {
      console.log(x, "even");
    } else {
      console.log(x, "odd");
    }
    x++;
  }
}
// const numberResult = showNumber(11);
// console.log(numberResult);
// trying it on function do while loop

const whiledo = (range) => {
  let x = 0;
  do {
    x++;
    if (x % 2 === 0) console.log(x, "EVEN");
    else console.log(x, "ODD");
  } while (x < range);
};

// console.log(whiledo(10));

// for-off syntax
// for (iteration_variable {of} iteration_statement){statement}
//Note we use {for-of} for iterable value
const iterableValue = ["Hello", "welcome", "how are you"];
iterableValue.ass = ["yes"];
for (const anyvalue of iterableValue) {
  // console.log(anyvalue);
}

//with what i understand with FOR-OF is that No.1 we can only use FOR-OF for a value, array ,object e.t.c that are itreable. No.2 FOR-OF list out all the values inside the arry you have, but that of FOR-OF with props of {in} will only print out the index of the values inside the array
// but
//That of FOR-IN deals with keys of the object not the value which simply use it on object
const iterableValues = ["Hello", "welcome", "how are you"];
for (const key in iterableValues) {
  // console.log(key);
}

// another one
// Here we are to show on console all the object with type of String
// Do loop we are using here is for-in loop
const product = {
  name: "hp-laptop",
  version: 20.02,
  price: " $90",
  generation: "five generation",
};
function showProperties(obj) {
  for (let key in product) {
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
  }
}
// showProperties(product);

// another one
//create a function called sum with limit so that we return all the multiples of 3 and 5 btw 1-10
// Hint: multiples of 3=> 3,6 & 9
//Hint: multiples of 5=> 5 & 10

const sum = (limit) => {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

const result = sum(10);
// console.log(result);

// another one
// this is to calculate the grade of student
const marks = [80, 80, 50];
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";
  return "A";
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    sum += value;
    return sum / array.length;
  }
}
// console.log(calculateGrade(200));
// ANOTHER ONE
// show stars of this pattern
// *
// **
// ***
// ****
// *****
// we use for loop here
const showStars = (rows) => {
  let pattern = "";
  for (let row = 0; row < rows; row++) {
    pattern += "*";
    console.log(pattern);
  }
};

// showStars(6);

// using while loop to print out thesame result

function showHash(rows) {
  let pattern = "";
  let row = 0;
  while (row < rows) {
    // pattern = row;
    pattern += "#";
    console.log(pattern, row);
    row++;
    //Note here it's is row that control the pattern of the looping
    //be4 the itreation start where row=0, the patter is = #,when it the itreation start where row=1, the pattern is =## ,to the end of the itreation
  }
}
// showHash(5);
// using do-while loop to print thesame result

function showAt(rows) {
  let pattern = "";
  let row = 1;
  do {
    pattern += "@";
    console.log(row, pattern);
    row++;
  } while (row <= rows);
}

// showAt(10);

//the last question of the control statment section
//Question with a javascript code that print out the prime number btw 0-20

function showPrimes(limit) {
  for (let number = 2; number < limit; number++) {
    factor(number);
  }
}
// showPrimes(20);
function factor(number) {
  let isPrime = true;
  for (let factor = 2; factor < number; factor++) {
    if (number % factor === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
  }
}

//Object section
const circle = {
  radius: 10,
  location: {
    x: 1,
    y: 1,
  },
  isvisble: true,
  //the below function is called method
  draw: function () {
    console.log("Working on object section");
  },
};

// console.log(circle.radius);
//to make the above code clearner called Factory Function

function createCircle(radius, draw) {
  //Note here we can add as much as possible to the props

  return {
    radius, //nOTE since the key and the value are thesame we simply write the key
    draw() {
      console.log("Hello!");
    },
  };
}

//with the above function we can easly have different circle with different radius e.g
const circle1 = createCircle(10);
const circle2 = createCircle(40);
const circle3 = createCircle(20);
const circle4 = createCircle(50);
// console.log(circle1);

const users = {
  name: "Musa Aka'aba",
  gender: "Male",
  state: "Kogi State",
  user1: {
    name: "Muhammed-Jamiu",
    state: "Kogi State",
    gender: "Male",
  },
  user2: {
    name: "Momoh Hashid",
    state: "Kogi State",
    gender: "Male",
  },
  message(limit) {
    console.log("Hello! Working on Object(OOP)");
    let row = 0;
    let pattern = "";
    while (row <= limit) {
      pattern += "#";
      row++;
      console.log(pattern);
    }
  },
  sum(x, y) {
    return x + y * y + x;
  },

  evenValue(value) {
    // let array = ["khadija", "Nafisat", "Latifah"];
    for (let index = 2; index < value; index++) {
      if (index % 2 !== 0 && index % 3 !== 0) {
        console.log(index);
      }
    }
  },
};
// console.log(users.evenValue(20)); // console.log(users.sum(12, 20)); // console.log(users.message(5));
// console.log(Object.values(users));

//2nd example under object
const square = {
  radius: 20,
  message() {
    console.log("Hello! Welcome to our world of Coding");
  },
};

for (const entry of Object.entries(square)) {
  // console.log(entry);
}

if ("message" in square) {
  // console.log("Hello");
}

//another section on object called cloning(copying)

const user = {
  name: "Muhammed-Jamiu",
  gender: "Male",
  age: 27,
  message() {
    console.log("Hello! World");
  },
  user1: {
    surName: "Abdulsalam",
    firstName: "Muhammed-jamiu",
    otherName: "Male",
  },
};

if ("gender" in user) {
  // console.log("present");
}
// let another = console.log(Object.assign(user));
const newUser = Object.assign(user.user1.surName);
// console.log(newUser);

// under build-it object Math

const round = Math.round(1.565);
// console.log(round);

function getTwoNumber(max, min) {
  let Number = Math.floor(Math.random() * (max + min) * min);
  // console.log(Number);
}

getTwoNumber(20, 10);

// console.log(Math.pow(12, 1));

// Not that we have two types of string
//1. primitive string
//2. object string
// e.g on each

const messageME = "Hello! Thank you for banking with ours";

// let thesame = messageME.();
// thesame = messageME.trim();

// console.log(thesame);

const yes = "Welcome";
const world = "world";
const ways = `Hello! 
${yes} 
to our 
${world}
 of
 Coding 
 ${func(false, 10)}
 `;
// usea();
// console.log(ways);

function func(a, b) {
  if (typeof a !== "number") {
    return b;
  } else {
    return a;
  }
}

//another built-in object Date
// const now = new Date(2024, 7, 12, 3);

// exciese 1

const address = {
  street: "Beside car wash",
  city: "Samaru",
  zipCode: "12wa134",
};

const showAdress = (address) => {
  for (const key in address) {
    console.log(`${key} : ${address[key]}`);
  }
};

// showAdress(address);

// create factory function
function createAddres(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}
// console.log(createAddres("Beside car wash", "Samaru", "12wa134"));

//creating construction function

class Address {
  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }
}

// console.log(Address("Beside car wash", "Samaru", "12wa134"));

// question3
const movies = {
  title: "What can you do",
  body: "Walking Home",
  author: "Muhammed-Jamiu",
  views: 200,
  comments: [
    { author: "Musa", body: "The teacher" },
    { author: "Hashid", body: "Team work" },
  ],
  isLive: true,
  message() {
    console.log("Hello! Welcome to our world of Coding");
  },
};

// if ("isLive" in movies) {
//   console.log("Present Sir");
// } else {
//   console.log("Absent Sir");
// }

// console.log(movies);

//The question is that we should create a construction function of the movies object above where the organistion have not published the movies
//solution

class NotPublished {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }
}

// const post = new NotPublished("a", "b", "c");
// console.log(post);

//Array Section below
//example
const snumber = [1, 3];
// console.log(snumber[3]);
snumber.push(4, 10); // this add value at the End
// console.log(snumber);
delete snumber[2];
// console.log(snumber.length);

//adding value at the begininig
snumber.unshift(0);
// console.log(snumber);
// console.log(snumber.length);

// snumber.shift();
// console.log(snumber);
// console.log(snumber.length);

let array1 = [11, 0, 25, 10, 19, 8, 9];
let atlast = [11, 0, 25, 10, 19, 8, 9];

let found = array1.findIndex((element) => element === 10);

// console.log(found);

//set array to empty array

let numba = [1, 2, 3, 5, 4, 7, 5, 9];
numba = [];

let cost = numba;
// console.log(cost);

// console.log(numba);

// numba.length = 0;
numba.splice(0, numba.length);
// console.log(numba);

// Array exicese
function arrayFormRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
    return output;
  }
}

const solution = arrayFormRange(-1, -20);
// console.log(solution);
//Not working

const restnumber = [1, 2, 3, 4, 5];

function includes(array, searchElement) {
  for (const element of array) {
    if (element === searchElement) return console.log(true);
    // return console.log(false);
  }
}

// includes(restnumber, -2);

const movie = [
  { title: "a", year: 2024, rating: 4.5 },
  { title: "b", year: 2021, rating: 4.5 },
  { title: "c", year: 2023, rating: 4.5 },
  { title: "d", year: 2022, rating: 4.5 },
];

//javascript essemtails excirse below
let isString = "name";
console.log(`${typeof isString}: ${isString}`);
let isNumber = 27;
console.log(`${typeof isNumber}: ${isNumber}`);

const isBoolen = true;
console.log(`${typeof isBoolen}:${isBoolen}`);

const isNull = null;
console.log(`${typeof isNull}:${isNull}`);

const isUndefined = undefined;
console.log(`${typeof isUndefined}: ${isUndefined}`);

const isNaN = NaN;
console.log(`${typeof isNaN}: ${isNaN}`);

const isBigInit = 238n;
console.log(`${typeof isBigInit}: ${isBigInit}`);

const str1 = 44 - "1";
console.log(str1);

// Data type object
const ticket = {
  from: "samaru",
  to: "sabon-gari",
  price: `${200}`,
};

console.log(Object.keys(ticket));

const isempty1 = {};

isempty1.surName = "Abdulsalam";
console.log(isempty1);
isempty1.name = "Muhammed-Jamiu";
console.log(isempty1);

//Under Array
const smallLibrary = [
  { title: "Speaking JavaScript", author: "Axel Eauschmayer", page: 460 },
  {
    title: "Programming JavaScript Application",
    author: "Eric Elliott",
    page: 254,
  },
  {
    title: "Understnding ECMAScript 6",
    author: "Nicholas C. Zakas",
    page: 352,
  },
];

console.log(
  smallLibrary.push({
    title: "Learning Javascript Design Patterns",
    author: "Addy Osmani",
    page: 245,
  })
);

console.log(smallLibrary.shift([1]));
console.log(smallLibrary.length);
console.log(Object.values(smallLibrary));

//Arithmetic operator
console.log(2 ** 4);

//dialog box
// let userNumber = prompt("Enter any Number");
// console.log(userNumber);jkasdhjqdau
// userNumber >= 90 && userNumber <= 110;
// ? console.log("Bingo")
// : console.log("Miss");

///write a code that displace number from 100 down to zero

function countDown(num) {
  for (let index = num; index > 10; index--) {
    console.log(index);
  }
}
// countDown(100);

// function countDown(num) {
//   let count = "";
//   while (count < num) {
//     count += 10;
//     console.log(count);
//   }
// }

// countDown(100);
let numbers = [21, 45, 100, 12, 10, 60, 11, 78, 61, 4, 39, 22];

numbers.forEach((number) => {
  if (number > 10 && number <= 55) {
    // console.log(number, "Even Number");
    console.log(number);
  }
});

let vessel = {
  LATITUDE: 40.07288,
  LONGITUDE: 154.48535,
  COURSE: 285.6,
  SPEED: 14.0,
  IMO: 9175717,
  NAME: "MARENO",
};

for (let key in vessel) {
  console.log(`${key} ${vessel[key]}`);
}
