import chai, { expect } from 'chai'
import puppeteer from 'puppeteer'

describe('App.jsx', () => {
  let browser
  let page

  before(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
  })

  after(async () => {
    await browser.close()
  })

  it('should have the correct title', async () => {
    await page.goto('http://localhost:3000')
    const title = await page.title()
    expect(title).to.eql('Cat Adoption Center')
    const h1Text = await page.$eval('h1', el => el.textContent)
    expect(h1Text).to.eql('Welcome to the Cat Adoption Center!')
  })

})
