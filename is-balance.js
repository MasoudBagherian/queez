Array.prototype.getIndex = function (value) {
  return this.findIndex((item) => item === value);
};

export function isBalance(input) {
  let result;
  const specialChars = '[](){}'.split('');
  console.log('======== input ===========');
  console.log(input);
  const stack = [];
  for (let i = 0; i < input.length; i++) {
    const charIndex = specialChars.getIndex(input[i]);
    // current char in input is opening char
    // push this opening char into the stack
    if (charIndex % 2 === 0) {
      stack.push(input[i]);
    }
    // current char in input is closing char
    else {
      // index ==> index of last stack character in specialChars
      const index = specialChars.getIndex(stack[stack.length - 1]);
      if (charIndex === index + 1) {
        stack.pop();
      } else {
        return false;
      }
    }
    console.log(`==== step ${i + 1} ====`);
    console.log(stack);
  }
  result = stack.length ? false : true;
  return result;
}
