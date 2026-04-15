'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  // write code here
  let sum = 0;

  function makeAdder(...arg) {
    if (arg.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    }

    sum = arg.reduce((acc, num) => acc + num, sum);

    return makeAdder;
  }

  return makeAdder;
}

module.exports = makeInfinityAdder;
