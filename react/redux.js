export function createStore(reducer) {
  let state;
  const listeners = [];
  // 이렇게 하면 state를 얕은 복사해줌. ...를 통해 펼쳐서 새로운 걸 만든다 이거임.
  // 개발자들이 막 상태를 바꾸면 안되니까,
  const getState = () => ({ ...state });
  const dispatch = (action) => {
    state = reducer(state,action);
    listeners.forEach(fn => fn());
  }
  const subscribe = (fn) => {
    listeners.push(fn);
  }
  // // 내가 현재 상태를 넘겨줄게,
  // state = reducer(state, {
  //   type: 'abc'
  // });

  return {
    getState,
    dispatch,
    subscribe,
  };
}
