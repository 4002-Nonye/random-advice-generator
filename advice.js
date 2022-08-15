"use strict";
let adviceId = document.querySelector(".id");
const dice = document.querySelector(".dice_btn");
const adviceHolder = document.querySelector(".advice");

//USING FETCH METHOD

const fetchAdvice = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((advicee) => {
      const { id, advice } = advicee.slip;
      adviceId.innerHTML = id;
      adviceHolder.innerHTML = advice;
      console.log(advice, id);
    });
};
dice.addEventListener("click", fetchAdvice);
