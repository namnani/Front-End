// import React from 'react'
// import ReactDOM from 'react-dom'

// 어떤게 리액트가 해주는거고, 어떤게 트랜스파일러가 해주는거고,
// 어떤게 컴파일타임에 일어나는 거고, 어떤게 런타임에 일어나는 건지 명확하게 알아야 한다.
/* @jsx createElement */

/*
const vdom = {
  type: 'ul',
  props: { },
  children: [
    { type: 'li', props: { className: "item" }, children: 'React' },
    { type: 'li', props: { className: "item" }, children: 'Redux' },
    { type: 'li', props: { className: "item" }, children: 'TypeScript' },
    { type: 'li', props: { className: "item" }, children: 'mobX' }
  ]
};
*/

function renderElement(node) {

  if (typeof node === "string")  {
    return document.createTextNode(node);
  }

  const el = document.createElement(node.type);

  node.children.map(renderElement).forEach(element => {
    el.appendChild(element);
  });
  return el;
}

function render(vdom, container) {
  // let vdom;
  // vdom과 newVdom의 바뀐 부분만 착착착 집어넣는 비교 로직이 들어갈거다.

  container.appendChild(renderElement(vdom))
}

function createElement(type, props = {}, ...children) {
  if (typeof type === "function") {
    return type.apply(null, [props, ...children]);
  }
  return { type, props, children }
}

function Row(props) {
  return <li>{ props.label }</li>
}

// 이게 컴파일타임에 ㅚㄴ다. 태그명은 typ, 나머지 태그들은 props로, 하위애들은 children으로.
function StudyList(props) {
  return (
      <ul>
        <Row label="하하하 음메" />
        <li className="item" label="haha">React</li>
        <li className="item">Redux</li>
        <li className="item">TypeScript</li>
        <li className="item">mobx</li>
      </ul>
  );
}

// 리액트 사용자 컴포넌트는 왜 대문자로 시작해야하는가? 펑션은 대문자로 받기로 해서.


function App() {
  // const vdom = createElement('ul', {}, createElement('li', {}, 'React'));

  // console.log(vdom);

  return (
    <div>
      <h1>Hello?</h1>
      <StudyList item="abcd" id="hoho" />
    </div>
  );
}

console.log(<App />);
render(<App />, document.getElementById('root'));


// 이거를 위에서 virtualDom으로 하고 있는 거임.
// const ul = document.createElement('ul');

// document.body.appendChild(ul);

// ReactDOM.render(<App />, document.getElementById("root"));
