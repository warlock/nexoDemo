module.exports = {
  name : 'loginPage',
  html : () => `
    <h1>Login</h1>
    <div id="alert"></div>
    <input type="text" id="username"><br>
    <input type="text" id="password"><br>
    <button id="loginBtn">Login</button>
  `,
  action : n => {
    n.on('#loginBtn', 'click', () => {
      fetch(`${window.location.href}iden?user=${n.id('username').value}&password=${n.id('password').value}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        if (res.token === undefined) {
          n.id('alert').innerHTML = `ERROR: ${JSON.stringify(res)}`
          setTimeout(() => {
            if (n.id('alert') !== undefined) n.id('alert').innerHTML = ""
          }, 3000)
        } else n.emit('login', res.token)
      })
      .catch(err => {
        n.id('alert').innerHTML = `ERROR: ${JSON.stringify(err)}`
        setTimeout(() => {
          n.id('alert').innerHTML = ""
        }, 3000)
      })
    })
  }
}