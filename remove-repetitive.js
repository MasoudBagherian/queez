export function removeRepetitive(string) {
  let result = null;
  const stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i++) {
    const startIndex = i;
    let j = startIndex + 1;
    while (stringArray[j] === stringArray[startIndex]) {
      j++;
    }
    for (let k = startIndex + 1; k < j; k++) {
      stringArray[k] = null;
    }
    i = j - 1;
  }
  result = stringArray.filter((item) => item !== null).join('');
  return result;
}
