import React, { Component } from "react";

class Keypad extends Component {

    handleKeyPress = () => {
        console.log("Entering password...")
    }

    render() {
        return (
          <div>
           <input type="password" onKeyUp={this.handleKeyPress}/>
          </div>
        )

    }
}
export default Keypad;