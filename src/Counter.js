import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    // state 초기 값 설정
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state; // state를 조회할 떈 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <button
          // onclick을 통해 버튼이 클릭되었을 떄 호출할 함수를 지정
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있음
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
