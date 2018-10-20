const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8888;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'src/views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cover', (req, res) => res.render('pages/cover'))
  .get('/download', (req, res) => res.render('pages/download'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
