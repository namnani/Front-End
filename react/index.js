import { createStore } from "./redux";

// 걍 기법.
const INCREMENT = "increment"
const RESET = "reset";

// reducer란 상태를 바꿔주는 애임.
function reducer(state = {}, action) {
  // if -else보다는 switch로도 많이 쓴다.
  if(action.type === INCREMENT) {
    return {
      ...state,
      count: state.count ? state.count + 1 : 1 
    };
  } else if (action.type === RESET) {
    return {
      // 이렇게 펼쳐야, 오버라이딩 순서가 바로되기 때문에.
      ...state,
      count: action.resetCount,
    }
  }
  // if (action.type === 'abc') {
  //   // 제발 리턴하는 객체를 새로운 객체로 만들어서 리턴해주는 게 간절한 약속.
  //   return {
  //     ...state,
  //     abc: 'OK' //state 속성에 abc라는게 있다면 오버라이드가 됨.
  //   }
  // } else if(action.type === "increment") {
  //   return {
  //     ...state,
  //     count: state.count ? state.count + 1 : 1 
  //   }
  // }
}

// 왜 dispatch라는 한번 더 감싸주는 도구가있는건지 이해가 안된다.

const store = createStore(reducer);

function update() {
  console.log(store.getState());
}

store.subscribe(update);
// store.dispatch({ type: "abc"})

// helper 함수를 만들자.
function actionCreator(type, data) {
  return {
    ...data,
    type: type,
  };
}

// 이것도 기법. 타입 하나 더 쓰기 싫고, 중복코드 줄이기 싫어서.
function increment() {
  store.dispatch(actionCreator(INCREMENT));
}

function reset() {
  store.dispatch(actionCreator(RESET, {resetCount: 10}));
}

increment();
increment();
increment();
increment();
increment();
reset();

// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));
// store.dispatch(actionCreator(INCREMENT));

// store.dispatch({ type: "increment"});
// store.dispatch({ type: "increment"});

// console.log(store.getState())
