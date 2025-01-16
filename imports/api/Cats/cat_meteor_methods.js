import { Cats } from '/imports/api/Cats/cat'

export const Cat_insert = new ValidatedMethod({
  name: 'Cat_insert',
  validate: null,
  async run() {
    return Cats.insertAsync({ name: 'Rename Me' })
  }
})

export const Cat_update = new ValidatedMethod({
  name: 'Cat_update',
  validate: null,
  async run({ cat, delta }) {
    return Cats.updateAsync({ _id: cat._id }, { $set: delta })
  }
})

export const Cat_remove = new ValidatedMethod({
  name: 'Cat_remove',
  validate: null,
  async run({ cat }) {
    return Cats.removeAsync({ _id: cat._id })
  }
})