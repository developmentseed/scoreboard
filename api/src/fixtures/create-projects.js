const fs = require('fs')
const projects = require('./sampleprojects.json')
const features = projects.features

features.forEach((feature, index) => {
  feature.id = index

  const properties = feature.properties
  properties.changeset_comment = `#project-${index}`
  properties.description = '---\r\nHow you can help\r\n=====\r\n1. Check out a cell for editing from the Tasking Manager.\r\n2. Edit data using the web-based ID-Editor or Java-based JOSM.\r\n3. Collect transportation and urban features according to the [features](https://wiki.openstreetmap.org/wiki/Map_Features) tagging documentation.'

  properties.author = 'marc'
  properties.priority = parseInt(Math.random() * 3)
  properties.done = Math.random() * 100
  properties.validated = Math.random() * 100
  properties.status = 1
  properties.instructions = 'Map the data'
  properties.name = `Project ${index}`

  feature.properties = Object.assign({}, properties)
})

projects.features = features

fs.writeFileSync('./sampleprojects.json', JSON.stringify(projects))
