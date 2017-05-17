import React from 'react';

class DelayedButton extends React.Component {
  constructor() {
    super();
    this.onDelayedClick = this.onDelayedClick.bind(this);
    // this.props.delay = this.delay.bind(this);
  }

  onDelayedClick(e) {
    e.persist()
    setTimeout(() = { this.props.onDelayedClick(e) }, this.props.delay)
    // debugger
  }

  render(){
    return(
      <div>
        <p>Delayed Button</p>
        <button onClick={this.onDelayedClick}>Submit</button>
      </div>
    );
  }
}

export default DelayedButton

// onDelayedClick(e) {
//   e.persist()
//   setTimeout(this.props.onDelayedClick, this.props.delay, e)
//   // debugger
// }
//
// render(){
//   return(
//     <div>
//       <p>Delayed Button</p>
//       <button onClick={this.onDelayedClick}>Submit</button>
//     </div>
//   );
// }
