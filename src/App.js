import React from 'react';

function App() {
  const name = 'react';
  return (
    <>
      {name === 'react' ? <h1>리액트 입니다.</h1> : <h2>리액트가 아닙니다.</h2>}
    </>
  );
}

export default App;
