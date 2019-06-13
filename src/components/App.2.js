import React, { Component } from 'react';

class Com extends Component { //继承时不用写react
  constructor (props) {
    super(props);
    this.btnClickFun = this.btnClickFn.bind(this);
    console.log('1',this);
  }

  btnClickFn () {
    console.log('2',this)
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFun }>react按钮</button>
      </div>
    )
  }
}
export default Com
