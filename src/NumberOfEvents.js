import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: value,
        infoText: 'Error: Input needs to be between 1-32.',
      });
    } else {
      this.setState({
        numberOfEvents: value,
        infoText: ''
      });
    }
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert text={this.state.infoText} />
        <input
          type='number'
          className='number-input'
          value={this.state.numberOfEvents}
          onChange={e => this.handleInputChanged(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;