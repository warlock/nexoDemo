//const io =  require('socket.io-client')
//const socket = io(`http://${window.location.hostname}:8084`)
const n = require('nexo')

// Pages
n.load([
  require('./pages/login.js'),
  require('./pages/site.js')
])

// Webcomponents
n.load([
  require('./comp/menusite')
])

n.on('search', data => {
})

n.on('login', token => {
  n.cookies.set('xtoken', token, 2)
  n.render('sitePage', 'root')
})

n.on('logout', () => {
  n.cookies.set('xtoken', "")
  n.render('loginPage','root')
})

n.ready(() => {
  if (n.cookies.get('xtoken') !== "") n.render('sitePage', 'root')
  else n.render('loginPage','root')
})
