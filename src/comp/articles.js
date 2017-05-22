module.exports = {
  name: 'articles',
  html: n => {
    var text = ""
    n.model('articles').get().forEach(art => {
      text += `<div id="${art.id}">${art.title}</div>`
    })
    return text
  },
  ready: n => {
    n.model('articles').get().forEach(art => {
      n.on(`#${art.id}`, 'click', () => {
        console.log(art.title)
      })
    })
  }
}