const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 6060

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/.well-known/apple-app-site-association', function(req, res) {
    const aasa = path.join(__dirname, 'apple-app-site-association')

    res.set('Content-Type', 'application/pkcs7-mime')
    res.status(200)
    res.sendFile(aasa)
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
