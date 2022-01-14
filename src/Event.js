import React, { Component } from "react";

class Event extends Component {
  state = { showDetails: false };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    const handleClick = () => {
      this.setState({ showDetails: !this.state.showDetails });
    };

    return (
      <div className='event'>
        <h1 className='summary'>{event.summary}
        </h1>
        <h2 className='location'>{event.location}
        </h2>
        <p className='start-date'>{new Date(event.start.dateTime).toString()}
        </p>
        <button className='event-details' onClick={handleClick}>
          {showDetails ? 'Hide' : 'Show Details'}
        </button>
        {showDetails && (
          <p className='event-description'>{event.description}
          </p>
        )}
      </div>
    );
  }
}

export default Event;