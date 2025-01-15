import chai, { expect } from 'chai'
import Cat from '/imports/api/Cats/cat'

describe.only('Cat Model', () => {
  it('should have a name property', () => {
    const cat = new Cat({ name: 'Whiskers' })
    expect(cat).to.have.property('name')
    expect(cat.name).to.equal('Whiskers')
  })

  it('should have an birthday property', () => {
    const birthday = new Date('2020-01-01')
    const cat = new Cat({ name: 'Whiskers', birthday })
    expect(cat).to.have.property('birthday')
    expect(cat.birthday).to.deep.equal(birthday)
  })

  it('should have a breed property')

  it('should have a method to meow')

  it('should have an age method calculated from the birtday')
})