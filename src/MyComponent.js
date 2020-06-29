import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        나의 이름은 {name}이다. <br />
        children 값은 {children} <br />
        좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "???",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
