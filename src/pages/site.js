module.exports = {
  name : 'sitePage',
  load : (n, data, render) => {
    fetch(`http://localhost:3000/protected?ztoken=${n.cookies.get('xtoken')}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      render(data)
    })
    .catch(err => {
      render({ msg : err })
    })
  },
  html : (n, data) => {
    if (!n.empty(data) && !n.empty(data.msg)) {
      return `${n.get('menuSite')}<br>
      ERROR: ${data.msg}`
    } else {
      var text = `<div><b>WELCOME TO MAINSITE</b></div>`
      data.forEach(art => {
        text += `<div id="${art.id}">${art.title}</div>`
      })
      return text
    }
  },
  ready : (n, data) => {
    if (!n.empty(data) && !n.empty(data.msg)) {
      console.log(data.msg)
    } else {
      data.forEach(art => {
        n.on(`#${art.id}`, 'click', () => {
          console.log(art.title)
        })
      })
    }
  }
}