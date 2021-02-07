export const convertPrice = (number) => {
  const arr = Array.from(String(Math.round(number) * 1000), Number);
  const newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    j = j + 1;
    if (j % 3 === 0 && i !== 0) {
      newArr.unshift(arr[i]);
      newArr.unshift(".");
    } else {
      newArr.unshift(arr[i]);
    }
  }
  return newArr.join("");
};
