import SimpleSchema from 'simpl-schema'

class Cat {
  constructor(attrs) {
    let cleaned = Cat.schema.clean(attrs || {})
    _.extend(this, cleaned)
  }

  imageUrl() {
    return `http://localhost:8000/${this._id}.png`
  }
}

Cat.schema = new SimpleSchema({
  _id: { type: String, optional: true },
  name: { type: String, optional: true },
  birthday: { type: Date, optional: true },
})

export const Cats = new Mongo.Collection('cats', {
  transform: (attrs) => new Cat(attrs)
})

export default Cat

