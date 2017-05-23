module.exports = {
  name : 'sitePage',
  load : (n, render) => {
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
  html : n => `
    ${n.render('menuSite')}
    <div><b>WELCOME TO MAINSITE</b></div>
    ${n.empty(n.state.msg)? n.render('articles', { state : n.state }) : n.state.msg}
 `
}