import React, { Component } from 'react';

class Com extends Component { //继承时不用写react
  constructor (props) {
    super(props);
    this.state = {
      msg:'hello world'
    }
  }
  render () {
    return (
      <div>
       { this.state.msg }
        <button onClick = { () => {
          this.setState({
            msg: 'hello msg'
          })
        } }>修改</button>
      </div>
    )
  }
}
export default Com
