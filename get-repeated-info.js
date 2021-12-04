function getDigitCount(number, digit) {
  return number
    .toString()
    .split('')
    .filter((item) => +item === digit).length;
}
function mkNumericString(digit, repeat) {
  return new Array(repeat).fill(digit).join('');
}
export function getRepeatedInfo(number) {
  let result = null;
  result = {};
  '123456789'.split('').forEach((digit) => {
    if (getDigitCount(number, +digit) !== 0) {
      result[digit] = mkNumericString(
        digit,
        getDigitCount(number, +digit) * digit
      );
    }
  });
  return result;
}
