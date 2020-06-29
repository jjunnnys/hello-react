import React from "react";

const MyComponent = (props) => {
  const { name, children } = props;
  return (
    <div>
      나의 이름은 {name}이다. <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "???",
};

export default MyComponent;
