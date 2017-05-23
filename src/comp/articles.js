module.exports = {
  name: 'articles',
  html: n => {
    var text = ""
    n.state.forEach(art => {
      text += `<div id="${art.id}">${art.title}</div>`
    })
    return text
  },
  ready: n => {
    n.state.forEach(art => {
      n.on(`#${art.id}`, 'click', () => {
        console.log(art.title)
      })
    })
  }
}