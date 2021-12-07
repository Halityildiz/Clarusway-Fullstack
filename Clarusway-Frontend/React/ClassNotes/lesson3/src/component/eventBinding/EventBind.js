import { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Selam!" };
    // this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   this.setState({ message: "Goodbye!" });
  //   // alert("hello");
  //   console.log(this);
  // } // bind in render birinci metot
  handleClick = () => {
    this.setState({ message: "Goodbye!" });
    // alert("hello");
    console.log(this);
  }; // bind in render birinci metot
  render() {
    return (
      <div>
        {/**
         * 1. Binding in render method
         * 2. Binding in render method using arrow function
         * 3. Binding in the constructor
         * 4. Class property as an arrow function
         */}
        <p>{this.state.message}</p>
        <h2>EventBinding</h2>
        {/* <button onClick={this.handleClick.bind(this)}>Click1</button>
        1.metot */}
        {/* <button onClick={() => this.handleClick()}>Click2</button>
        2.metot */}
        {/* <button onClick={this.handleClick}>Click3</button>
        3.metot */}
        <button onClick={this.handleClick}>Click4</button>
        {/* 4.metot */}
      </div>
    );
  }
}
