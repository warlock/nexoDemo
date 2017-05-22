module.exports = {
  name: 'menuSite',
  html: n => `
  <div id="menuSite" class="menuSite">
    <button id="logout">Logout</button>
  </div>
  `,
  ready: n => {
    n.on('#logout', 'click', () => {
      n.emit('logout')
    })
  }
}