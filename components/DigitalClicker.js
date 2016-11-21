import React from 'react';

class DigitalClicker extends React.Component{
  constructor(){
    super();

    this.state = {
      timesClicked: 0
    }

    this.countClick = this.countClick.bind(this)
  }

  countClick() {
    var num = this.state.timesClicked
    num++
    this.setState({
      timesClicked: num
    })
  }

  render(){
    return (
      <button onClick={this.countClick}>{this.state.timesClicked}</button>
    )
  }
}

module.exports = DigitalClicker
