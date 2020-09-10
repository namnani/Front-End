import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
const sessionList = [
  { id: 1, title: "1회차: Overview" },
  { id: 2, title: "2회차: Redux 만들기" },
  { id: 3, title: "3회차: React 만들기" },
  { id: 4, title: "4회차: 컴포넌트 디자인 및 비동기" }
];

// ReactDOM.render(
//   <React.StrictMode>
//     <App store={{ sessionList }} />
//   </React.StrictMode>,
//   rootElement
// );


// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("33");
//   }, 1000)
// });

// p.then(function (r) {
//   console.log(r);
// });

// 얘를 generator라 함.
// 실제로는 코루틴처럼 동작하는 애임.
// 자바스크립트에서 코루틴을 차용해서 동작하는 컨셉임.
function* makeNumber() {
  let num = 1;

  while(true) {
    // yield는 return과는 달리, 함수를 종료하지 않고 값을 나가게 해준다. 다시 함수로 돌아오겠다는 약속임.
    // return은 함수를 나가버린다. 종료.
    // 여기서도 return을 해버리면 done이 true가 되버린다.
    // yield num++;

    const x = yield num++;
    console.log(x)
  }
}

const i = makeNumber();

// 다시 함수를 불러주는 구조임. done이 false기 때문에.
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());

// i.next();
// i.next('x');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* main() {
  console.log("시작");
  // yield 뒤에는 모든게 올 수 있다.
  yield delay(3000);
  console.log('3초 뒤입니다');
}

async function main2() {
  console.log("시작");
  // await 뒤는 promise만 와야 하는데,
  // 실제로 await도 제너레이터로 구현이 되어있다는데... 그 코드가 c로 되어있다나.
  await delay(3000);
  console.log("3초 뒤입니다.");
}

main2();

const it = main();

// { value: '', done: } 등이있는데.
// 구조 분해 연산자다.
// it.next().value()로 꺼내야 한다나, 이게 없으면..

const { value } = it.next();
// promise가 리턴됨. it.next()의 리턴으론.
// console.log(value);

// 비동기적인 코드도 동기적으로 풀수있게,
// 마치 순서대로 진행되는 듯이 조작할 수 있다는데?

// 야 어떤거 호출해서, 리턴보내고, 다시 호출 요청이 오면 다시 나한테 보내줘 하는게 redux-saga라는데?
// 제너레이션을 이용해서 할 수 있다고.


value.then(() => {
  it.next();
});

// delay(3000).then(() => {
//   console.log('3초 뒤');
// })


/*
promise, async, generator 모두 서로 밀접한 관련이 있고,
코드가 깔끔해지고, 고치기 쉬워진다 이런걸 쓰면...
*/

// 제너레이터는 iterable 한 객체 반환. 핑퐁이 가능한 이유  제너레이터의 메커니즘을 응용해서 비동기를 동기처럼 쓸 수 있다.
// generator와 레이지 호출이 핵심이었다.
