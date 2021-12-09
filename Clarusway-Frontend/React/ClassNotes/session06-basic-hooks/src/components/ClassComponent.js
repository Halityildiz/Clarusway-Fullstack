import React from 'react'

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div className="class">
        <h2>Class Component</h2>
        <p>count: {this.state.count}</p>
        <button onClick={this.increase}>increase</button>
      </div>
    )
  }
}

export default ClassComponent
