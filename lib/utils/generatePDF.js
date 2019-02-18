import PDFDocument from '../vendor/pdfkit'
import blobStream from '../vendor/blob-stream'
import { saveAs } from 'file-saver'

export default function generatePDF (badges) {
  const doc = new PDFDocument()
  const stream = doc.pipe(blobStream())
  // draw some text

  doc.fontSize(25).text('Here are some vector graphics...', 100, 80)

  // some vector graphics
  doc
    .save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF3300')

  doc.circle(280, 200, 50).fill('#6600FF')

  // an SVG path
  doc
    .scale(0.6)
    .translate(470, 130)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore()

  doc.end()

  stream.on('finish', function () {
    saveAs(stream.toBlob('application/pdf'), 'badges.pdf')
  })
}
