function lastIndexOf(arr, ind) {
  let temp = [],
    lastIndex;
  if (arr != "") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ind) {
        temp.push(i);
      }
    }
    if (temp.length >= 1) {
      lastIndex = temp.pop();
      return lastIndex;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}

const test = [0, 1, 4, 1, 2];
const b = lastIndexOf(test, 3);
console.log(b);
