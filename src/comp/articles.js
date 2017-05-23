module.exports = {
  name: 'articles',
  html: n => {
    var text = ""
    n.data.forEach(art => {
      text += `<div id="${art.id}">${art.title}</div>`
    })
    return text
  },
  ready: n => {
    n.data.forEach(art => {
      n.on(n.id(art.id), 'click', () => {
        console.log(art.title)
      })
    })
  }
}