import React from "react";

class ClassComp extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <h1>Welcome to ReactJS from Class Component</h1>
        <p>Age: {this.props.old} </p>
        <p>Car: {this.props.car} </p>
      </div>
    );
  }
}
export default ClassComp;
