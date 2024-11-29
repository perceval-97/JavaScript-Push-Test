/* const massMark = 78;
const massJonh = 92;
const heightMark = 1.69;
const heightJonh = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJonh / (heightJonh * heightJonh);

const markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);
console.log(markHigherBMI); */

/* const firstName = "Jonas";
const job = "teacher";
const birthyear = 1991;
const year = 2024;

const text = `I'm ${firstName}, a ${year - birthyear} year old ${job}.`;

console.log(text);

*/

/* const day = "tue";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meeting");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wesdnayday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;

  default:
    console.log("Not a valid day");
}

console.log(`
  
  `);

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meeting");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wesdnesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

*/

// const bill = 430;

/* Write your code below. Good luck! 🙂 */

/* const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
); */

/* function yearsUntilRetirement(birthyear, firstName) {
  const age = 2037 - birthyear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1997, "Amour"));

*/

/* const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

function checkWinners(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgDolphins * 2 <= avgKoalas) {
    return console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    return console.log(`No team win`);
  }
}

checkWinners(scoreDolphins, scoreKoalas);
*/

/* Write your code below. Good luck! 🙂 */

/* const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

console.log(bills, tips);

const totals = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];

console.log(totals);
/* 
const jonas = {
  firstName: "Amour",
  lastName: "Hounga",
  birthYear: 1997,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriverLicense: false,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.getSummary());
console.log(jonas);
*/

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const jonh = {
  fullName: "Jonh Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const higherBmi =
  mark.calcBMI() < jonh.calcBMI()
    ? `${jonh.fullName} BMI (${jonh.calcBMI()} is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`
    : `${mark.fullName} BMI (${mark.calcBMI()}) is higher than ${
        jonh.fullName
      }'s (${jonh.calcBMI()})!`;

console.log(higherBmi);

*/

/* let dice = Math.trunc(Math.random() * 6);
console.log(dice);

while (dice !== 6) {
  console.log(`Vous avez tiré ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
  */

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

/* const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = [];

for (i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));


*/

/* const calculInvestissement = function (mensualite, tauxAnnuel, nbreAnnee) {
  const tauxMensuel = tauxAnnuel / 12;
  let total = 0;

  for (let i = 0; i < nbreAnnee; i++) {
    total = total * (1 + tauxMensuel) + mensualite;
  }

  return total;
};

console.log(calculInvestissement(2000, 0.04, 25));


*/

// savoir comment calculer l'amplitude
// connaitre la valeur max
// connaitre la valeur min
// gérer les erreurs

const t1 = [10, 22, -16, 18];
const t2 = [0, -56, 10];

const temp = t1.concat(t2);

const calcAmplitude = function (array) {
  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") continue;

    if (max < array[i]) max = array[i];
    if (min > array[i]) min = array[i];
  }

  console.log(max, min);
  return max - min;
};

console.log(calcAmplitude(temp));

data;
