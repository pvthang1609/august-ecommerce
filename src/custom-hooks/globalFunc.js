import { customAlphabet } from "nanoid";

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

export const convertTel = (tel) => {
  const arr = Array.from(tel);
  const newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    j = j + 1;
    if (j % 3 === 0 && i !== 0) {
      newArr.unshift(arr[i]);
      if (j % 9 !== 0) {
        newArr.unshift(" ");
      }
    } else {
      newArr.unshift(arr[i]);
    }
  }
  return newArr.join("");
};

export const convertNumberCard = (tel) => {
  const arr = Array.from(tel);
  const newArr = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    j = j + 1;
    if (j % 4 === 0 && i !== 0) {
      newArr.unshift(arr[i]);
      if (j % 16 !== 0) {
        newArr.unshift(" ");
      }
    } else {
      newArr.unshift(arr[i]);
    }
  }
  return newArr.join("");
};

export const sum = (listCart) => {
  let sum = 0;
  listCart.forEach((item) => (sum = sum + item.price * item.quantity));
  return sum;
};

export const getNo = () => {
  const nanoid = customAlphabet("1234567890abcdef", 4);
  const no = nanoid();
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${dd}${mm}${yyyy}-${no}`;
};

export const removeVietnameseTones = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  return str;
};

export const getTimeStamp = (year, month, date) => {
  const start = new Date(year, month - 1, date);

  return start.getTime();
};

export const twoDigit = (value) => {
  return ("0" + value).slice(-2);
};

export const getDateByDatestring = (string) => {
  const date = new Date(string);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${twoDigit(day)}-${twoDigit(month)}-${year}`;
};
