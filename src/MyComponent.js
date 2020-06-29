import React from "react";

const MyComponent = (props) => {
  return <div>나의 이름은 {props.name}이다.</div>;
};

MyComponent.defaultProps = {
  name: "???",
};

export default MyComponent;
