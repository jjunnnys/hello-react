import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 떈 this.state로 조회
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값:{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState(
              (prevState) => {
                return {
                  number: prevState.number + 1,
                };
              }, // 콜백함수 지정
              () => {
                console.log("setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}
