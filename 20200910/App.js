import React from "react";

const SessionItem = ({ title }) => <li>{title}</li>;

// class ClassApp extends React.Component {
//   constructor(props) {
//     super(props);

//     // this 가 다르기 때문에, 이렇게 바인딩해주는 코드를 추가해줬었다.
//     // this.onToggleDisplayOrder = this.onToggleDisplayOrder.bind(this);

//     this.state = {
//       displayOrder: "ASC"
//     };
//   }

//   // function은 소유권이 이전되기 때문에, this 바인딩 해주는 작업이 필요함.
//   // onToggleDisplayOrder() {
//   //   this.setState({
//   //     displayOrder: displayOrder === 'ASC' ? 'DESC' : 'ASC'
//   //   });
//   // }

//   // 얘는 this가 고정된다. 그래서 arrow를 많이 쓴다.
//   toggleDisplayOrder = () => {
//     this.setState({
//       displayOrder: displayOrder === "ASC" ? "DESC" : "ASC"
//     });
//   };

//   // 반드시 render를 구현해야함.
//   render() {
//     return (
//       <div>
//         여기여기
//         <button onClick={this.onToggleDisplayOrder}>정렬</button>
//       </div>
//     );
//   }
// }

const App = (props) => {
  // 함수도 상태를 가지게 하는게 hook이다.
  const [displayOrder, toggleDisplayOrder] = React.useState("ASC");
  const { sessionList } = props.store;
  const orderedSessionList = sessionList.map((session, i) => ({
    ...session,
    order: i
  }));

  // let displayOrder = "ASC";
  // const { sessionList } = props.store;
  // const orderedSessionList = sessionList.map((session, i) => ({
  //   ...session,
  //   order: i
  // }));

  console.log(sessionList, orderedSessionList);

  const onToggleDisplayOrder = () => {
    toggleDisplayOrder(displayOrder === "ASC" ? "DESC" : "ASC");
  };

  return (
    <div>
      <header>
        <h1>React and TypeScript</h1>
      </header>
      <p> 전체 세션 갯수: 4개 {displayOrder}</p>
      <button onClick={onToggleDisplayOrder}>재정렬</button>
      <ul>
        {orderedSessionList.map((session) => (
          <SessionItem title={session.title} />
        ))}
      </ul>
    </div>
  );
};

export default App;
