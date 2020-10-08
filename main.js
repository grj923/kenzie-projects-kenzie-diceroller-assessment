let NumberOfDice = document.querySelector("#NumberOfDice");
let Roll = document.querySelector("#Roll");
let Total = document.querySelector("#Total");
let ShowAllRolls = document.querySelector("#ShowAllRolls");
let Dice = document.querySelector("#Dice");
let ResetButton = document.querySelector("#Reset");
let NumberOfSidesButton = document.querySelector("#DiceSides");
let NumberOfDiceSides = document.querySelector("#SideToDice");
let dieRolls = [];
let NewDice = [];
let index = 0;
let NumberRolled = 0;
let ArrayTotal = 0;

DiceSides.addEventListener("click", function () {
  y = NumberOfDiceSides.value;
  console.log("Sides on Dice");
  console.log("Dice has " + y + " Sides");
});

Roll.addEventListener("click", function () {
  console.log("Dice Rolled");
  x = NumberOfDice.value;
  console.log("Dice to Role is " + x);

  while (index < x) {
    y = NumberOfDiceSides.value;
    let NumberRolled = 1 + Math.floor(Math.random() * y);
    console.log("Dice Value " + NumberRolled);
    ShowAllRolls.addEventListener("click", function () {
      let NewDice = '<li class="Dice">' + NumberRolled + "</li>";
      Dice.innerHTML += NewDice;
    });

    dieRolls.push(NumberRolled);
    index++;
    Total.innerHTML = dieRolls.reduce((a, b) => a + b, 0);
    // let ArrayTotal = dieRolls.reduce((a, b) => a + b);
  }
});
ResetButton.addEventListener("click", function () {
  console.log("I want to play again");
  Total.innerHTML = 0;
  document.getElementById("NumberOfDice").value = null;
  NewDice = null;
  document.getElementById("Dice").innerHTML = "";
  document.getElementById("SideToDice").value = "";
});
// ShowAllRolls.addEventListener("click", function () {
// console.log("Show me What I rolled");
// });

console.log(dieRolls);
// console.log(ArrayTotal);
