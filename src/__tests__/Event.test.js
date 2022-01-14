import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data'

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test('Location is displayed', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('Summary of event displayed', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('Start date and time are displayed', () => {
    expect(EventWrapper.find('.start-date')).toHaveLength(1);
  });

  test('More details are shown when user clicks details button', () => {
    EventWrapper.find('.event-details').simulate('click');
    expect(EventWrapper.find('.event-description')).toHaveLength(1);
    expect(EventWrapper.find('.event-details').text()).toBe('Hide');
  });
})