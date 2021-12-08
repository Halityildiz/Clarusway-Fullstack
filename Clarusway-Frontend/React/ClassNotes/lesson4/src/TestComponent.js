import React, { Component } from "react";
var myT;
export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Halit",
      color: "blue",
      count: 0,
    };
    console.log("Hello from TestComponent constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Hello from TestComponent getDerivedStateFromProps");
    // console.log("Props: ", props);
    console.log("State: ", state);
    return null;
    // return {
    //   color: "red",
    // };
  }
  componentDidMount() {
    console.log("Hello from TestComponent componentDidMount");
    myT = setTimeout(() => {
      this.setState({ count: this.state.count + 1 });
    }, 3000);
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate!....");
    // return true;
    return this.state.count < 3 ? true : false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("TestComp componentDidUpdate");
    console.log("PrevProps :", prevProps);
    console.log("PrevState :", prevState);
  }
  componentWillUnmount() {
    console.log("component GULE GULE!..");
    clearTimeout(myT);
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("Hello from TestComponent render");
    return (
      <div>
        <p>This is a Class component</p>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>artir</button>
      </div>
    );
  }
}
