let firstNumberInput=document.getElementById("firstNumber");
let secondNumberInput=document.getElementById("secondNumber");
let userInputEle=document.getElementById("userInput");
let gameResultInput=document.getElementById("gameResult");
let tryAgain="Please Try Again!";
let success="Congratulations! You got it Right..";
function onRestartButton(){
  let firstNumberRandom=Math.random()*100;
  let secondNumberRandom=Math.random()*100;
  firstNumberInput.textContent=Math.ceil(firstNumberRandom)*100;
  secondNumberInput.textContent=Math.ceil(secondNumberRandom)*100;
  gameResultInput.textContent="";
  userInputEle.value="";
}
onRestartButton();
function onCheckButton(){
  let firstNumberIn=parseInt(firstNumberInput.textContent);
  let secondNumberIn=parseInt(secondNumberInput.textContent);
  let userIn=parseInt(userInputEle.value);
  let score=firstNumberIn+secondNumberIn;
  if(parseInt(userIn)===score){
      gameResultInput.textContent=success;
      gameResultInput.style.backgroundColor="#028a0f";
  }
  else{
      gameResultInput.textContent=tryAgain;
      gameResultInput.style.backgroundColor="#1e217c";
  }
}