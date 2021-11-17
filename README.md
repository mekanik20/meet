# meet app

Objective
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

App features/scenarios:

*Feature 2: Show/hide an event's details*
-As a user, I should be able to show or hide an event's details so that I can choose how much information is visible.

Scenario 1: 
-Given a user is on the homepage
-When an event is displayed
-Then event details will be hidden

Scenario 2:
-Given a user has a list of events
-When a user clicks on a specific event
-Then a user can see details of the chosen event

Scenario 3:
-Given a user has selected an event's details
-When a user selects to hide an event's details
-Then the event details will no longer be visible

*Feature 3: Specify number of events*
-As a user, I should be able to specify the number of events I want to view so that I can see more or less events.

Scenario 1: 
-Given a user is on the homepage
-When a user has not selected a specific number of events to view
-Then 32 events will be displayed by default

Scenario 2:
-Given a user is on the homepage
-When a user has specified a number of events to view
-Then user's specified number of events is displayed

*Feature 4: Use the app when offline*
As a user, I should be able to use the app when offline so that I can still view events.

Scenario 1: 
-Given a user is offline
-When a user opens the app
-Then previous data/session will render on screen

Scenario 2:
-Given a user is offline
-When a user tries to change the settings
-Then user receives an error message

*Feature 5: Data visualization*
As a user, I should be able to see the number of events in each city so that I know what events are in what city.

Scenario 1:
-Given a user in on the homepage
-When a user wants to see locations of events
-Then user is given a visual of the cities and events happening in each city
