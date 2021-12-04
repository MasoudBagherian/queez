function shiftCharForward(char) {
  if (char === 'z') {
    return 'a';
  }
  return String.fromCharCode(char.charCodeAt(0) + 1);
}
function shiftWordForward(word) {
  return word
    .split('')
    .map((char) => shiftCharForward(char))
    .join('');
}
function moveLastCharToStart(word) {
  const lastChar = word.charAt(word.length - 1);
  let wordArray = word.split('');
  wordArray.pop();
  wordArray = wordArray.join('');
  const result = lastChar + wordArray;
  return result;
}
function encodeOnce(word) {
  return shiftWordForward(moveLastCharToStart(word));
}
export function encoder({ inputString, repeatCount }) {
  let result = null;
  let temp = inputString;
  for (let i = 1; i <= repeatCount; i++) {
    result = encodeOnce(temp);
    temp = result;
  }
  return result;
}
