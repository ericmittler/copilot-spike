import { Cats } from '/imports/api/Cats/cat'

// Meteor.publish('cats', function ({ } = {}) {
//   return Cats.find({})
// })
Meteor.publish('cats', function () { return Cats.find({}) })


console.log('Finished loading publications')