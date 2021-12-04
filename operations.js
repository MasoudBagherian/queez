function addNums(numbers) {
  let sum = 0;
  for (const item of numbers) {
    sum += item;
  }
  return sum;
}

function isOperator(item) {
  return ['D', '+', 'R'].includes(item);
}
export function operations(ops) {
  let result;
  let numbers = [];
  const opsArray = ops.split(' ').filter((item) => item !== '');
  console.log(opsArray);
  for (let i = 0; i < opsArray.length; i++) {
    const item = opsArray[i];
    // if item is number
    if (!isOperator(item)) {
      numbers.push(+item);
      continue;
    }
    // if item is operator
    if (item === 'D') {
      if (numbers.length) {
        numbers.push(numbers[numbers.length - 1] * 2);
      }
    }
    if (item === '+') {
      if (numbers.length >= 2) {
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
      }
    }
    if (item === 'R') {
      if (numbers.length) {
        numbers.pop();
      }
    }
    console.log(numbers);
  }
  result = addNums(numbers);
  return result;
}
