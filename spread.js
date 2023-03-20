const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
console.log(...arr);

const obj = {
  name: '송민영',
  status: '졸림',
};

console.log(obj);
console.log({ ...obj });

const smyData = {
  name: 'smy',
  age: 25,
};

const smyInfo = {
  nickName: '0',
  status: '짜증',
};

const smy = {
  ...smyData,
  ...smyInfo,
};

console.log(smy);

const arr1 = [1, 2, 3];
const arr2 = ['4', '5', '6'];

const merge = [...arr1, ...arr2];

console.log(merge);

const str = 'test';
console.log(...str);

const young2 = {
  name: '최인영',
  gender: 'F',
  nickName: 'young2',
  email: 'choi1211@naver.com',
};

const { name, ...restInfo } = young2;
console.log(name, restInfo);

const arr3 = [1, 2, 3, 4, 5, 6, 7];
const [first, ...rest] = arr3;
console.log(first, rest);

function spread(first, second, ...rest) {
  console.log(first);
  console.log(second);
  console.log(rest);
}

spread(1, 2, 3, 4, 5, 6, 7, 8);
