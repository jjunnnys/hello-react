import React from 'react';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black', // 카멜케이스로 작성
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // 단위 생략하면 px로 설정
  };
  return <div style={style}>{name}</div>;
}

export default App;
