//  10-homework Tub sonlar

let arr = [1, 4, 5, 7, 8, 11];
for (let i = 0; i <= arr[arr.length - 1]; i++) {
  let val = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      val = false;
      break;
    }
  }
  if (i > 1 && val == true) {
    console.log(i);
  }
}
