import React, { Component } from 'react';

class Com extends Component { //继承时不用写react
  constructor (props) {
    super(props);
    console.log('1',this);
  }

  btnClickFn (event, id) {
    console.log(id, this);
  }
  render () {
    const _this = this
    return (
      <div>
        <button onClick = { function (e) { return _this.btnClickFn(e, 11) } }>react按钮</button>
        <button onClick = { (e) => this.btnClickFn(e,22) }>react按钮</button>
      </div>
    )
  }
}
export default Com
