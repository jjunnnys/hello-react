import React from 'react';

function App() {
  const name = 'react';
  return <>{name === 'react' ? <h1>리액트 입니다.</h1> : null}</>;
}

export default App;
