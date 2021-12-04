import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { student: "Yusuf", counter: 0 };
  }
  // state = { student: " Joseph" };
  incCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    const { old, car } = this.props;
    return (
      <div>
        {" "}
        <h1>Welcome to ReactJS from Class Component</h1>
        <p>Age: {old} </p>
        <p>Car: {car} </p>
        <p>Student:{this.state.student} </p>
        <p>Counter:{this.state.counter} </p>
        <button onClick={this.inCounter}>Increase</button>
        <button onClick={this.decCounter}>Decrement</button>
      </div>
    );
  }
}
export default ClassComp;
