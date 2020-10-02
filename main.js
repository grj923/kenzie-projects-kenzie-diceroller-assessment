let NumberOfDice = document.querySelector("#NumberOfDice");
let Roll = document.querySelector("#Roll");
let Total = document.querySelector("#Total");
let ShowAllRolls = document.querySelector("#ShowAllRolls");
let dieRolls = [];
let index = 0;
let RolledDice = 0;
let ArrayTotal = 0;

Roll.addEventListener("click", function () {
  console.log("Dice Rolled");
  x = NumberOfDice.value;
  console.log("Dice to Role is " + x);

  while (index < x) {
    let RolledDice = 1 + Math.floor(Math.random() * 6);
    console.log("Rolling Dice " + RolledDice);
    dieRolls.push(RolledDice);
    index++;
  }
});
console.log(dieRolls);
console.log(ArrayTotal);
