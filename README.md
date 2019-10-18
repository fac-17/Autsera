[![Netlify Status](https://api.netlify.com/api/v1/badges/fd680fa0-964e-4a7b-80c5-dadaf5c80364/deploy-status)](https://app.netlify.com/sites/autsera/deploys) ![travis](https://travis-ci.com/crianonim/autsera.svg?branch=master) [![codecov](https://codecov.io/gh/crianonim/autsera/branch/master/graph/badge.svg)](https://codecov.io/gh/crianonim/autsera)

A progressive web app to help children with high-functioning autism learn social skills.  

## Live Version

Deployed on netlify at [autsera.netlify.com](https://autsera.netlify.com)

Note: The current version is optimised for tablet use only. If you view it in your browser, please set the display to ipad landscape.

## Local Installation Instructions (for developers)

For detailed installation instructions view our [wiki on installation](https://github.com/fac-17/Autsera/wiki/Installation)

<details>
<summary> Short Installation instructions </summary>
1. Clone this repo onto your local machine
```
git clone https://github.com/fac-17/Autsera.git
```

2. Install dependencies
```
npm i
```

3. Start local server

```
npm start
```

4. Open your browser to **localhost:3000**
5. Optional: run tests

```
npm test
```
</details>


## About

### The Problem
Children with high-functioning autism struggle with social communication including inference or "reading between the lines". There are books and board games that address this issue, but there is a lack of digital and interactive social communication training tools for children with ASD.

### The Solution
An interactive game that makes social communication training for children with Autism effective, accessible, affordable and fun.

### The Client
Founded by Inas Ismail and Omar Massoud, Autsera is a social-impact startup that uses technology to support children with autism develop their social skills. They are supported by WeinSocialTech, Google and Innovate UK.
[Autsera](https://www.autsera.io/)

### The Team
- DevOps Lead: [Jan Skowronski](https://github.com/crianonim)
- QA Lead: [Victor Masson](https://github.com/victormasson21)
- Scrum Master: [Reuben George Thomas](https://github.com/reubengt)
- UX/UI Lead: [Leonie Zorzi](https://github.com/LaLeonie)

## Tech Stack
* Built with React (create-react-app)
* React Router
* Styled with Sass
* Tested with Jest and react-testing-library
* Installable as a Progressive Web App (PWA) using workbox
* Deployed on Netlify
* Continuous Integration with Travis
* Code coverage report by CodeCov


## The App
Currently the app is a Minimum Viable Product (MVP) for tablet use only, focussing on three places with up to five interactions each. The codebase includes a data.js file which allows the product owner to add places and interactions easily.

The game requires the user to navigate through different places, collecting stars along the way by decoding social interactions.

## User Journey

As a user, I want to be able to read facial expressions, understand how other people feel & respond to them so that I can connect socially.

## User Stories

- [x] As a user I want to see the progress of the game.
- [x] As a user I want to play in different scenes that I am familiar with (playground, school, birthday party).
- [x] As a user I want structure, repetition and consistency, with a clear beginning and a clear end.
- [x] As a user I want to have options, but not too many. (show one interaction first, then unlock more as they finish).
- [x] As a user I want a helper avatar to give me hints when I'm stuck, explain the game to me and keep me motivated.
- [x] As a user, I want access to an explainer page at the start (featuring an explainer video and/or bullet points).
- [x] As a user I want to decide my own path within the lower level scene (playground etc).
- [x] As a user, I want to play the game on a tablet.

## Consequence Scanning
### Positives, to focus on:
• Improve social skills and ability to understand other people's feelings.
• Learn social cues and facial expressions.

### Negatives, to mitigate:
• Failure to progress in the game, feeling "like a loser".
• Unable to generalise the skills learnt, bring them to the real world.

## Prototype
Prototype was built with [Figma](https://www.figma.com/file/PdTO0F33I70uCgKALUClCc/Autsera-Prototype?node-id=80%3A159)

<details>
  <summary>Prototype is based on these original user stories</summary>
As a user, I want to ....

* be able to access instructions from the start screen
* be able to immediately start the game from the start screen
* go back to the onboarding screen after I've read the instructions
* be able to start the game from the instructions screen

* be able to go back to the onboarding screen
* see and interact with all the places I have access to
* see the progress on all places (stars)
* see new places automatically unlock when I have enough stars
* see a linear route between places that have been unlocked
* be able to go back to place I have already completed
* clearly see when a new place is available (for instance through glow, movement, sound)


* be able to navigate back to the map
* see how many stars are available to pick in this location
* see the progress so far (filled-in stars)
* be able to navigate to any of the interactions that are unlocked
* clearly see when a new interaction is available (for instance through glow, movement, sound)

* be presented with all the options for the interaction, and see them highlighted when correct
* be notified when all correct options are selected in the interaction and I completed the interaction
* be able to navigate back to the place
* start from scratch whenever I re-enter an interaction
* see the answers in a different order whenever I re-enter an interaction
* delete my progress on the interaction whenever I hit the Go Back button
* be awarded a star permanently when interaction is completed


* see a helper-avatar on the bottom of the screen
* get a reaction from the avatar (hint, motivation, etc) whenever I click it

* get instructions from the helper-avatar when I get to the map
* get a motivational phrase from the helper-avatar in regular intervals (i.e. how many stars do I need to unlock)
* get a new reaction from the helper-avatar (hint, motivation, etc) whenever I click on it.
* see indications from the helper-avatar on what to do next (interact with x or y)


* be shown feedback from the helper-avatar on every answer selection
* be able to click the helper-avatar for a hint.
* be able to see a hint when I select the wrong option.
</details>

<details>
  <summary>Prototype was refined based on these user testing results</summary>

* Users were very intuitive and quick in playing the game
* Users didn’t pause to read avatar text - trial and error approach rather than reading instructions Us
* Interaction screen: the fact that you could/should choose more then one answer wasn’t clear
* Users requested more complexity and features (particularly on map)
* Users suggested having animations
* Users were very keen to collect stars
* Suggestion of a video tutorial
* Avatar text was seen as unnecessary by some users
* When on the map, users click on the circle and not on the name
</details>

## Design  
Our design was inspired by [Otsimo](https://otsimo.com/en/), Autsera's branding and digital assets provided by Autsera.

### Design Inspiration
![](https://i.imgur.com/8W2nwUP.png)

### Moodboard
![](https://i.imgur.com/dgZoxyK.png)

### Sample assets
![](https://i.imgur.com/OS5aqyG.png)


Assets were partyly sourced online and partly created by UX/UI lead.


## Progressive Web Application

We wanted to have our app fully available offline once installed, and took the required steps to bring the app to PWA standards: configured the built-in Service Worker and JSON manifest, added various icon sizes and made it possible to cache the whole app.

One of the requirements is to have all the static assets cached, but assets filenames are coming from a data object therefore unknown at build time. We solved it by creating an index of all the assets linking their reference in the scenario object file to the relevant components.


## Testing

- Using Jest, react-testing-library and Codecov.
- Focused on interaction testing rather than functional testing.
- For each component, we aimed to test each possibility offered to the user, so that each of our user journeys get tested.
- Achieved an overall 78% code coverage.
- Wrapping routed components in `<Router />`.


<details>
  <summary>Check the full list of tests:</summary>
- **App**
App renders without crashing
User journey from initial App render
**404**
The 404 Page renders
- **RouterLink**
RouterLink renders
- **HelpPage**
The Help Page renders
The Pause Button renders
The Play Button renders

- **HomePage**
The HomePage should render
The HomePage should include the Buttons (both)
The HomePage should not include Continue buttons

- **StartButton**
startButton is rendered
startButton calls the passed in onClick function

- **MapPage**
The Map Page renders
MapPage includes a Go Back Button
MapPage includes a Playground Button
Places rendered on the map match places available on data
Locked places render with locked class
Click on locked place has no effect
**PlaceCircle**
if placeCircle renders when given a place
if placeCircle renders the text of the place correctly
if placeCircle renders the right link

- **Stars**
if it renders stars
if it renders stars correct number of filled stars
if it renders stars correct number of empty stars
if it renders stars correct number of  stars

- **PlacePage**
The Place Page renders
PlacePage has links to all interactions
Locked interactions render with locked class
**InteractionCircle**
The InteractionCircle renders
InteractionCircle includes the name of the interaction
InteractionCircle includes the link to the interaction

- **InteractionPage**
The Interaction Page renders
Game starts from scratch when user re-enters page
Selecting an answer changes the class to 'selected'
Test if there is a back button with correct link'
Test if setCompleted gets called with the right argument
if clicking on answer gives the right response from avatar
if clicking on avatar gives the right hint

- **Avatar**
Helper renders with the right text
Helper image appears when there is no speech provided
Helper component shows the helpText when clicked
if speechText and helpText both passed in -> helpText replaces speechText when helper is clicked
if speechText and helpText both passed in -> helpText stays visible after multiple clicks
speechText disappears after timeOut
helpText disappears after timeOut expires
</details>

## Stretch Goals
If we had more time, we would ...

* Add user authentication.
* Build a 'choose your avatar' feature.
* Add an Autsera Land leaderboard.
* Add parental control functionalities: playing time limit, progress review.
* Add audio content.
