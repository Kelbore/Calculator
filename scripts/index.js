"use strict";

window.onload = init;

function init() {
    const addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked;
    const subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = onSubtractBtnClicked;
    const multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = onMultiplyBtnClicked;
    const divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = onDivideBtnClicked;
}

   const numberOne = document.getElementById("number1Field");
   const numberTwo = document.getElementById("number2Field");
   const answerField = document.getElementById("answerField");

function onAddBtnClicked() {
    const answer = Number(numberOne.value) + Number(numberTwo.value);
    answerField.value = answer;
}

function onSubtractBtnClicked() {
    const answer = Number(numberOne.value) - Number(numberTwo.value);
    answerField.value = answer;
}

function onMultiplyBtnClicked() {
    const answer = Number(numberOne.value) * Number(numberTwo.value);
    answerField.value = answer;
}

function onDivideBtnClicked() {
    const answer = Number(numberOne.value) / Number(numberTwo.value);
    answerField.value = answer;
}

