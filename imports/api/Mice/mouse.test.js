import chai, { expect } from 'chai'
import Mouse from './mouse'

describe('Mouse model', () => {
  it('should exist', () => {
    const jerry = new Mouse({ name: 'Jerry' })
    expect(jerry.name).to.eql('Jerry')
    const mickey = new Mouse({ name: 'Mickey' })
    expect(mickey.name).to.eql('Mickey')
  })

  describe('squeak method', () => {
    it('should return "Squeak!"', () => {
      const mouse = new Mouse({ name: 'Jerry' })
      expect(mouse.squeak()).to.eql('Squeak!')
    })
  })
})