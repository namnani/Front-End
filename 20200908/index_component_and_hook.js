import React, {useState} from "react";
import ReactDOM from "react-dom";

// class component.
// 상태를 가질 수 있다.
// 라이프 사이클이 있음.
// 새로운 객체를 만드는 건 불필요하니까, 필요할 때만 다시 그리는 식으로 라이프 사이클 메소드가 존재한다.
class Hello extends React.Component {
  constructor(props) {
    super(props);

   this.state = {
      count: 1
    }
  }

  componentDidMount() {
    // 이렇게 쑤셔넣는건, 리액트가 알지 못한다.
    // this.state.count = 100; 

    // 이렇게 리액트한테 알리면, 자기 자신의 render()를 호출하는 것과 마찬가지라고도 볼 수 있음.
    this.setState({ count: this.state.count + 1 })
  }
  
  // 반드시 render 함수를 구현해야 한다. 왜? react component는 ui부분을 가지고 있지 않으니까.
  // render()는, 자기 자신이 재귀적으로 부르는게 아니고,
  // 바깥쪽에서 react가 부르는거다.
  render() {
    return <p>안녕하세요!</p>
  }
}

// functional component.
// 함수형 컴포넌트는 상태를 가질 수 없다.
// 왜냐면 함수는 stack으로 쌓였다가 사라지니까.
// 외부로부터 props로만 상태를 넘겨 받는다면, 함수형 컴포넌트로 작성하는게 초기 리액트 컨벤션이였음.
// 상대적으로, 함수형 컴포넌트는, 다시그려? 업데이트? 새로만드는거?나 새로 그리는 호출하는 구조라서, 라이프 사이클이 없음.
// 함수는 반드시 js component를 리턴해야함.
function App() {
  const [counter, setCounter ] = useState(1); // 오른쪽이 배열이면, 구조분해할당 가능.
  // const result = useState(77);
  // const counter = result[0];
  // const setCounter = result[1];

  // console.log(result);

  // 훅의 메카니즘에 대해 설명해주셨음.
  return (
    <div>
      <h1 onClick={ () => setCounter(counter + 1) }>상태 { counter }</h1>
      <Hello />
    </div>
  )
}

// 리액트는 내부적으로 대문자로 시작하는 애면, 함수로 인식해서, 호출한다!
ReactDOM.render(<App />, document.getElementById("root"));
