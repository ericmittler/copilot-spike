import chai, { expect } from 'chai'
import puppeteer from 'puppeteer-core'

const headless = process.env.HEADLESS === 'true'
const websiteURLBase = 'http://localhost:3333'


describe('App.jsx', () => {
  let browser
  let page

  before(async () => {
    browser = await puppeteer.launch({
      executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      headless,
      slowMo: headless ? 0 : 50
    })
    page = await browser.newPage({})
  })

  after(async () => {
    await browser.close()
  })

  it('should have the correct title', async () => {
    await page.goto(websiteURLBase)
    const title = await page.title()
    expect(title).to.eql('Cat Adoption Center')
    const h1Text = await page.$eval('h1', el => el.textContent)
    expect(h1Text).to.eql('Welcome to the Cat Adoption Center!')
  })

})
