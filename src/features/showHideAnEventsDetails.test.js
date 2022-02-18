import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  let AppWrapper;

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('the user is on the main page of the app,', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
    });

    when('an event is displayed,', () => {
      expect(AppWrapper.find('.event__details-btn')).toHaveLength(3);
    });

    then('the event details will be collapsed.', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details.', ({ given, when, then }) => {
    given('the user is displayed with a list of events,', async () => {
      AppWrapper = await mount(<App />);
    });

    when('the user clicks on an individual event,', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event__details-btn')).toHaveLength(3);
      AppWrapper.find('.event__details-btn').at(0).simulate('click');
    });

    then('the event details will be displayed.', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });

  test('User can collapse an event to hide its details.', ({ given, when, then }) => {
    given('The user has clicked on an event to display details,', async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.event__details-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });

    when('the user clicks on “close” button,', () => {
      AppWrapper.find('.event__details-btn').at(0).simulate('click');
    });

    then('the event details will hide.', () => {
      expect(AppWrapper.find('.event__Details')).toHaveLength(0);
    });
  });
});