const fs = require('fs')
const URL = require('url').URL
const download = require('download')
const scrape = require('html-metadata')
const softwaresData = require('../data/softwares.json')

const getLogos = async function(links) {
  console.log('[Get Logos] - Starting') // eslint-disable-line
  for (const link of links) {
    const path = './static' + link.image
    const url = link.url
    if (!isLogoAlreadyDownloaded(path)) {
      console.log('[Get Logo] - Downloading logo from ' + url) // eslint-disable-line
      try {
        const urlLogo = await getLogoUrl(url)
        download(urlLogo)
          .then((data) => {
            fs.writeFileSync(path, data)
            console.log('[Get Logo] - Logo saved in ' + path) // eslint-disable-line
          })
          .catch((e) => {
            console.log('[Get Logo] - Download error of ' + urlLogo) // eslint-disable-line
          })
      } catch (error) {
        console.log('[Get Logo] - Failed') // eslint-disable-line
      }
    }
  }
}

const isLogoAlreadyDownloaded = function(path) {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
}

const getLogoUrl = async function(url) {
  const metadata = await scrape(url)
  const imageUrl = metadata.general.icons[0].href
  const host = new URL(url).origin
  return imageUrl.includes('http') ? imageUrl : host + '/' + imageUrl
}

getLogos(softwaresData.softwares)
