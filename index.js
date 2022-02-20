"use strict";

function printNumber(from, to, interval) {
  if (
    typeof from !== "number" ||
    Number.isNaN(from) ||
    !Number.isInteger(from) ||
    typeof to !== "number" ||
    Number.isNaN(to) ||
    !Number.isInteger(to) ||
    typeof interval !== "number" ||
    Number.isNaN(interval) ||
    !Number.isInteger(interval)
  ) {
    throw new TypeError("from, to and interval must be integer number");
  }
  if (to < from) {
    throw new RangeError("to must be large then from");
  }
  if (interval < 0) {
    throw new RangeError("interval must be large then 0");
  }
  const idInterval = setInterval(() => {
    if (from >= to) {
      clearInterval(idInterval);
    }
    console.log(from++);
  }, interval);
}

try {
  printNumber(5, 10, 1000);
} catch (e) {
  console.log("e :>> ", e);
}


function printNumber2(from, to, interval) {

  let idInterval2 = setTimeout(function tick() {
    console.log(from++);
    idInterval2 = setTimeout(tick, interval);
    if (from > to) {
      clearInterval(idInterval2);
    }
  }, interval);

  
}
printNumber2(5, 10, 1000);
