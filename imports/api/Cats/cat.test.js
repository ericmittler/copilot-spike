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
    it('should return "Meow!"', () => {
      const cat = new Cat({ name: 'Olaf' })
      expect(cat.meow()).to.eql('Meow!')
    })
  })

  describe('sortByName method', () => {
    it('should sort cats by their names', () => {
      const cat1 = new Cat({ name: 'Olaf' })
      const cat2 = new Cat({ name: 'Bella' })
      const cat3 = new Cat({ name: 'Charlie' })
      const sortedCats = Cat.sortByName([cat1, cat2, cat3])
      expect(sortedCats.map(cat => cat.name)).to.eql(['Bella', 'Charlie', 'Olaf'])
    })
  })
})