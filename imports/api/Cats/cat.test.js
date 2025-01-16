import chai, { expect } from 'chai'
import Cat from './cat'

describe('Cat model', () => {
  it('should exist', () => {
    const olaf = new Cat({ name: 'Olaf' })
    expect(olaf.name).to.eql('Olaf')
    const daisy = new Cat({ name: 'Daisy' })
    expect(daisy.name).to.eql('Daisy')
  })

  describe('meow method', () => {
    it('should return "Meow!"')
  })

})