// // 배열 구조 분해
// const arr = [1, 2, 3];

// const one = arr[0];
// const two = arr[1];
// const three = arr[2];

// console.log(one, two, three);

// // 배열구조분해 사용
// const [deOne, deTwo, deThree] = arr;

// console.log(deOne, deTwo, deThree);

// // 날짜
// const today = new Date();
// console.log(today);

// const formatDay = today.toISOString().substring(0, 10);
// console.log(formatDay);

// // const todayArr = formatDay.split('-');
// // console.log(todayArr);

// const [year, month, day] = formatDay.split('-');

// // const year = formatDay.split('-')[0];

// console.log(year, month, day);

// 객체 구조 분해 할당 전
const obj = { firstName: 'my', lastName: 's' };

// const firstName = obj.firstName;
// const lastName = obj.lastName;

// console.log(lastName, firstName);

const { firstName, lastName } = obj;

console.log(firstName, lastName);

const person = {
  name: 'lee',
  address: {
    zipCode: '03068',
    city: 'seoul',
  },
};

const {
  address: { zipCode, city },
} = person;

console.log(city, zipCode);
