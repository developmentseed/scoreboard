import PDFDocument from '../vendor/pdfkit'
import blobStream from '../vendor/blob-stream'
import { saveAs } from 'file-saver'
import join from 'url-join'
import { APP_URL_PREFIX } from '../../api/src/config'

function encode (input) {
  var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  var output = ''
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4
  var i = 0

  while (i < input.length) {
    chr1 = input[i++]
    chr2 = i < input.length ? input[i++] : Number.NaN // Not sure if the index
    chr3 = i < input.length ? input[i++] : Number.NaN // checks are needed here

    enc1 = chr1 >> 2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
    enc4 = chr3 & 63

    if (isNaN(chr2)) {
      enc3 = enc4 = 64
    } else if (isNaN(chr3)) {
      enc4 = 64
    }
    output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
              keyStr.charAt(enc3) + keyStr.charAt(enc4)
  }
  return output
}

// fetch fonts & images on init for use in PDF
let baseFont, subTitleFont, Logo

fetch('static/fonts/Abel-Regular.ttf')
  .then(response => response.arrayBuffer())
  .then(font => {
    subTitleFont = font
  })

fetch('static/fonts/Heebo-Bold.ttf')
  .then(response => response.arrayBuffer())
  .then(font => {
    baseFont = font
  })

fetch('static/android-chrome-192x192.png')
  .then(response => response.arrayBuffer())
  .then(logo => {
    Logo = logo
  })

function drawPageBorders (doc, options) {
  // Draw page rectangle
  doc.rect(20, 20, options.pageWidth - 40, options.pageHeight - 40).strokeColor(options.baseColor).stroke()

  // Place logo with white background in center top
  doc.rect(options.pageWidth / 2 - 40, 0, 80, 80).fill('#ffffff')
  doc.image(Logo, options.pageWidth / 2 - 30, 10, { width: 60 })

  // Knock out border corners
  doc.rect(0, 0, 50, 50).fill('#ffffff')
  doc.rect(options.pageWidth - options.margin, 0, 50, 50).fill('#ffffff')
  doc.rect(0, options.pageHeight - options.margin, 50, 50).fill('#ffffff')
  doc.rect(options.pageWidth - options.margin, options.pageHeight - options.margin, 50, 50).fill('#ffffff')
}

async function printBadges (doc, options, badges) {
  return Promise.all(badges.map((earnedBadge, i) => {
    // set a counter that resets to reset when i surpases 5: use counter to set each badge horizontally, and start at beginning again at 5
    let colCount = i % 5
    let xPos = (colCount * options.badgeSize) + options.margin
    // set counter to create a new row when i surpases 5; use counter to create a new row every 5 badges
    let rowCount = 1
    if ((i / 5) >= rowCount) {
      rowCount += Math.floor(i / 5)
    }
    let yPos = (options.badgeSize + options.margin) * rowCount
    // WARNING! For some strange reason, deleting the below console.log messes ups the order of the printBadges function. Do not delete.
    console.log('earnedBadge is: ' + earnedBadge + 'i is: ' + i + ' and rowCount is: ' + rowCount + 'yPos is ' + yPos + ' and xPos is ' + xPos)
    // Extract Badge Image name without svg extension, then pull from png folder
    const badgeImageName = earnedBadge['badgeImage'].substring(0, earnedBadge['badgeImage'].lastIndexOf('.'))
    const imgSrc = join(APP_URL_PREFIX, `../static/badges/png/${badgeImageName}.png`)
    return fetch(imgSrc).then(response => response.arrayBuffer())
      .then(img => {
        return doc.image('data:image/png;base64,' + encode(new Uint8Array(img)), xPos, yPos, { fit: [options.badgeSize, options.badgeSize], align: 'center', valign: 'center' })
          .fillColor(options.baseFontColor)
          .font(baseFont)
          .fontSize(12)
          .text(earnedBadge.name, xPos, (yPos + options.badgeSize), {
            width: options.badgeSize,
            align: 'center'
          })
      })
  })
  )
}

export default async function generatePDF (name, earnedBadges) {
  const doc = new PDFDocument({
    size: 'letter',
    layout: 'landscape'
  })
  const stream = doc.pipe(blobStream())

  const options = {
    pageWidth: 792, // Letter; http://www.a4papersize.org/a4-paper-size-in-pixels.php
    pageHeight: 612,
    baseFontColor: '#292929',
    secondaryFontColor: '#595757',
    baseColor: '#4FCA9E',
    margin: 50,
    badgeSize: 140
  }
  doc.font(baseFont)
  // // HEADER
  // User Name
  doc.fillColor(options.baseFontColor)
    .font(baseFont)
    .fontSize(42)
    .text(name)

  // Subtitle
  doc.fillColor(options.secondaryFontColor)
    .font(subTitleFont)
    .fontSize(18)
    .text('SCOREBOARD BADGES')

  let newBadges = Object.assign({}, earnedBadges)
  Object.keys(earnedBadges).forEach(key => {
    newBadges[key + 'new'] = Object.assign({}, earnedBadges[key])
    newBadges[key + 'new 2'] = Object.assign({}, earnedBadges[key])
    newBadges[key + 'new 3'] = Object.assign({}, earnedBadges[key])
  })

  let pages = []
  let badgeArray = Object.values(newBadges)

  while (badgeArray.length > 0) {
    pages.push(badgeArray.splice(0, 10))
  }
  await Promise.all(pages.map(async function (page) {
    await printBadges(doc, options, page)
    drawPageBorders(doc, options)
    doc.addPage()
  }))
  doc.end()

  stream.on('finish', function () {
    saveAs(stream.toBlob('application/pdf'), 'badges.pdf')
  })
}
