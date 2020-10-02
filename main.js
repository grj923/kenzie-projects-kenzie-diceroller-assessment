let NumberOfDice = document.querySelector("#NumberOfDice");
let Roll = document.querySelector("#Roll");
let Total = document.querySelector("#Total");
let ShowAllRolls = document.querySelector("#ShowAllRolls");
let Dice = document.querySelector("#Dice");
let dieRolls = [];
let NewDice = [];
let index = 0;
let NumberRolled = 0;
let ArrayTotal = 0;

Roll.addEventListener("click", function () {
  console.log("Dice Rolled");
  x = NumberOfDice.value;
  console.log("Dice to Role is " + x);

  while (index < x) {
    let NumberRolled = 1 + Math.floor(Math.random() * 6);
    console.log("Dice Value " + NumberRolled);
    let NewDice = '<li class="Dice">' + NumberRolled + "</li>";
    Dice.innerHTML += NewDice;
    dieRolls.push(NumberRolled);
    index++;
    let ArrayTotal = dieRolls.reduce((a, b) => a + b);
  }
});

ShowAllRolls.addEventListener("click", function () {
  console.log("Show me What I rolled");
});

console.log(dieRolls);
console.log(ArrayTotal);
