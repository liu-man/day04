import React, { Component } from 'react';

class Com extends Component { //继承时不用写react
  constructor (props) {
    super(props);
    console.log('1',this);
  }

  btnClickFn () {
    console.log('2',this)
  }
  render () {
    return (
      <div>
        <button onClick = { this.btnClickFn.bind(this) }>react按钮</button>
      </div>
    )
  }
}
export default Com
