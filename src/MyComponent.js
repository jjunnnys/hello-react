import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, children }) => {
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

MyComponent.propTypes = {
  name: PropTypes.string,
};

export default MyComponent;
