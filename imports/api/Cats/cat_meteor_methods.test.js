import { Meteor } from 'meteor/meteor'
import { Random } from 'meteor/random'
import { Cats } from '/imports/api/Cats/cat'
import { Cat_insert, Cat_remove } from '/imports/api/Cats/cat_meteor_methods'
import { expect } from 'chai'

describe('cat_meteor_methods.js', () => {
  beforeEach(async () => {
    await Cats.removeAsync({})
  })

  it('can insert a cat', async () => {
    // Given
    let cats = await Cats.find({}).fetchAsync()
    expect(cats.length).to.equal(0)
    // When
    const _id = await Cat_insert.call()
    // Then
    const cat = await Cats.findOneAsync(_id)
    expect(cat.name).to.equal('Rename Me')
    cats = await Cats.find({}).fetchAsync()
    expect(cats.length).to.equal(1)
  })

  it('can remove a cat', async () => {
    // Given
    const _id = await Cats.insertAsync({ name: 'Test Cat' })
    // When
    await Cat_remove.call({ cat: { _id } })
    // Then
    const cat = await Cats.findOneAsync(_id)
    expect(cat).to.be.undefined
  })
})
