# Github Co-Pilot Spike

This is a sample application that I use to demo some uses of Copilot.

The princples and demonstration can be applied in most any tech stack from Oracle PLSQL, to Azure, to Java, to Javascript.

This demo stack is
- 100% Javascript - largely ES6
- node version 20.18.0
- [METEOR@3.0.4](https://v3-docs.meteor.com/) A full stack Javascript platform that embeds Mongo and a browser based "mini-mongo" that manages bi-directional data synchronization.
- React v18
- mocha, chai, puppeteer for test driving


## Build / Run
- You will need to have [METEOR@3.0.4](https://v3-docs.meteor.com/) installed. It's just an npm. Check there website for the latest. This example code will use version 3.
- For the web app to work perfectly, you will need to have a second simple web server running to display images. On the Mac, I juse run the command ```python3 -m http.server``` to quickly fire up an HTTP service on port 8000.
- at the base of this repo run the command ```meteor``` to fire up the Meteor full stack web app. It defaults to port 3000.