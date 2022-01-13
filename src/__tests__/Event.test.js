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

  test('Show details button is rendered', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('By default, event elements are collapsed', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('Clicking show details renders more details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('Clicking hide details hides event details', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hide-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

})