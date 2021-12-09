import React from 'react'

class ClassComponent extends React.Component {
  constructor() {
    super()
    this.state = { count: 0 }
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 })
  }
  componentDidMount() {
    console.log('class comp mounted')
  }
  componentDidUpdate() {
    console.log('class comp updated')
  }
  componentWillUnmount() {
    console.log('class comp unmounted')
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
