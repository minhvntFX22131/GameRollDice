`use strict`;
const random = document.querySelector(`.random`);
const dot11 = document.querySelector(`.dot11`);
const dot21 = document.querySelector(`.dot21`);
const dot22 = document.querySelector(`.dot22`);
const dot31 = document.querySelector(`.dot31`);
const dot32 = document.querySelector(`.dot32`);
const dot33 = document.querySelector(`.dot33`);
const dot41 = document.querySelector(`.dot41`);
const dot42 = document.querySelector(`.dot42`);
const dot43 = document.querySelector(`.dot43`);
const dot44 = document.querySelector(`.dot44`);
const dot51 = document.querySelector(`.dot51`);
const dot52 = document.querySelector(`.dot52`);
const dot53 = document.querySelector(`.dot53`);
const dot54 = document.querySelector(`.dot54`);
const dot55 = document.querySelector(`.dot55`);
const dot61 = document.querySelector(`.dot61`);
const dot62 = document.querySelector(`.dot62`);
const dot63 = document.querySelector(`.dot63`);
const dot64 = document.querySelector(`.dot64`);
const dot65 = document.querySelector(`.dot65`);
const dot66 = document.querySelector(`.dot66`);
const left = document.querySelector(`.left`);
const right = document.querySelector(`.right`);
const currentPoint = document.querySelectorAll(`.state-current-point`);
const summaryPoint = document.querySelectorAll(`.sum-point`);
const btnNewGame = document.querySelector(`.btn-new`);
const btnRollDice = document.querySelector(`.btn-dice`);
const btnHold = document.querySelector(`.btn-hold`);
const overlay = document.querySelector(`.overlay`);
const btnRule = document.querySelector(`.btn-rule`);
const boxRule = document.querySelector(`.box-rule`);
const btnClose = document.querySelector(`.btn-close`);
const iconClose = document.querySelector(`.close-icon`);
let summaryPlayer1 = 0;
let summaryPlayer2 = 0;
let sumCurrentPlayer1 = 0;
let sumCurrentPlayer2 = 0;
let i = 0;
const win = 100;
