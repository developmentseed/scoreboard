function TemplatePlugin (properties) {
  this.id = 'template'
  this.reg = /{{\s*([\S]+?)\s*}}/
  this.properties = properties

  this.hook = (md) => {
    md.inline.ruler.after('text', this.id, this.parse.bind(this))
    md.renderer.rules[this.id] = this.render.bind(this)

    const original_link_open = md.renderer.rules.link_open
    md.renderer.rules.link_open = function () {
      const link = original_link_open.apply(md, arguments)
      const match = this.reg.exec(link)
      if (!match) return link
      const property = match[1]
      const value = this.properties[property]
      return link.replace(match[0], value)
    }.bind(this)
  }
}

TemplatePlugin.prototype.parse = function (state) {
  let match
  let property

  if (state.src.substring(state.pos, state.pos + 2) === '{{') {
    match = this.reg.exec(state.src.slice(state.pos))

    if (!match) return false

    state.pos += match[0].length
    property = match[1]

    var token = {
      type: this.id,
      level: state.level,
      content: {
        property,
        match
      }
    }

    state.push(token)
    return true
  } else {
    return false
  }
}

TemplatePlugin.prototype.render = function (tokens, idx, opts) {
  var token = tokens[idx]
  var property = token.content.property
  var meta = token.content.meta

  if (!this.properties.hasOwnProperty(property)) {
    return meta
  }

  return this.properties[property]
}

module.exports = (variables) => {
  let initializedPlugin
  const plugin = new TemplatePlugin(variables)

  return (md, options) => {
    if (!initializedPlugin) {
      initializedPlugin = {
        render: plugin.render.bind(md),
        hook: plugin.hook(md, options)
      }
    }

    return initializedPlugin.hook
  }
}
