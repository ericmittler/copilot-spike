# Github Co-Pilot Spike

This is a sample application that I use to demo some uses of Copilot.

The princples and demonstration can be applied in most any tech stack from Oracle PLSQL, to Azure, to Java, to Javascript.

Pulling this repo will not teach you copilot. Eric just uses this as a real time dashboard to show how it can be used.

## The Stack
- 100% Javascript - largely ES6
- Node version 20.18.0
- [Meteor@3.0.4](https://v3-docs.meteor.com/) A full stack Javascript platform that embeds Mongo and a browser based "mini-mongo" that manages bi-directional data synchronization.
- React v18
- [Mui](https://mui.com/) for Javascriptable CSS. Material design based rapid UX development. Also allows for TDD for CSS, though I'm too lazy to do that.
- mocha, chai, puppeteer for test driving
- Visual Studio Code is used by Eric as an IDE. But I understand that JetBrains and others should have similar functionality.
- Also, this repo will use [Markdown](https://www.markdownguide.org/cheat-sheet/) all over the place. If you do not know what that is, look it up to make your life happier.


## Build / Run
- ***Meteor.js*** You will need to have [Meteor.js](https://v3-docs.meteor.com/) installed. It's just an npm. Check there website for the latest. This example code will use version 3. At the base of this repo run the command ```meteor``` to fire up the Meteor full stack web app. It defaults to port 3000.
- ***Separate Web Server*** For the web app to work perfectly, you will need to have a second simple web server running to display images. 
  - On the Mac, I juse run the command ```python3 -m http.server``` to quickly fire up an HTTP service on port 8000. This is used as a media server because keeping media (images, audio, video) assests out of the repo just makes sense.
- ***Testing*** There is no separated unit and integration testing for this example. 
    - ```meteortesting:mocha``` is used for testing (just a version of [Mocha](https://mochajs.org/)). 
    - [Chai](https://www.chaijs.com/) is used for expectations in a test driven development style. BDD style is not used (sort of). 
    - Multi-layer (React to Mongo) testing is done via [Puppeteer](https://pptr.dev/) using chai. It can be done headless or headful with a ```HEADLESS``` environment variable. 
    - Unit tests will run on port 3070 with the command ```meteor npm run unit-test``` (which is poorly named since it also runs integration-ish tests via Puppeteer).

