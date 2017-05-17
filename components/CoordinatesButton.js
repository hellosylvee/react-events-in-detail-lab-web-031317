import React from 'react';

class CoordinatesButton extends React.Component {
  constructor(){
    super();
    this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this);
  }

  onReceiveCoordinates(e) {
    // console.log("hey there! This should be logged out");
    var xCoord = e.clientX;
    var yCoord = e.clientY;
    var coordinates = this.props.onReceiveCoordinates
    coordinates([xCoord, yCoord])
    // debugger

    // const coords = [e.clientX, e.clientY]
    // this.props.onReceiveCoordinates(coords)
  }

  render(){
    return(
      <div>
        <p>Coordinates Button</p>
        <button onClick={this.onReceiveCoordinates}>Submit</button>
      </div>
    );
  }
}

export default CoordinatesButton
// export default () => {
//   return <div></div>
// }  // export a function that returns a JSX element
