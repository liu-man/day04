import React, { Component } from 'react';

class Com extends Component { //继承时不用写react
  constructor (props) {
    super(props);
    console.log('1',this)
    this.state = {
      msg:'hello world'
    }
  }

  changeDate () {
    console.log(this)
    this.setState({
      msg:'hello msg'
    })
  }
  render () {
    const _this = this
    return (
      <div>
       { this.state.msg }
        <button onClick = {this.changeDate.bind(this) }>修改</button>
      </div>
    )
  }
}
export default Com
