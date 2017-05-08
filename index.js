
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

const port = 3000
const token = '08215mvc4085m2ckwsd0984'

const checksec = (req, res, next) => {
  if (req.query.ztoken === token || req.cookies.xtoken === token) next()
  else res.status(401).json({ msg : 'Unauthorized' })
}

app.use('/', express.static('web'))

app.get('/iden', (req, res) => {
  if (req.query.user === 'aaa' && req.query.password === 'bbb') {
    res.json({ token : token })
  } else res.json({ msg : 'Unauthorized' })
})

app.use(checksec)

app.get('/protected', (req, res) => {
  res.json([
    { id : "art1", title : "Title 1"},
    { id : "art2", title : "Title 2"}
  ])
})

app.listen(port, () => {
  console.log(`HTTP SERVER: http://localhost:${port}`)
})