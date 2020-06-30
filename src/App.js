import React, { Component } from 'react';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        {/* 초기 렌더링 시 scrollToBottom 값이 undefind이므로 새로운 함수를 만들어 준다. */}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          {' '}
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
