//const io =  require('socket.io-client')
//const socket = io(`http://${window.location.hostname}:8084`)
const n = require('nexo')
const modules = require('./modules')
n.load(modules)

n.on('search', data => {
})

n.on('login', token => {
  n.cookies.set('xtoken', token, 2)
  n.render('sitePage', { element : '#root' })
})

n.on('logout', () => {
  n.cookies.set('xtoken', "")
  n.render('loginPage',{ element : '#root' })
})

n.ready(() => {
  if (n.cookies.get('xtoken') !== "") n.render('sitePage', { element : '#root' })
  else n.render('loginPage', { element : '#root' })
})
