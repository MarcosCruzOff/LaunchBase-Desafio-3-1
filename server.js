const e = require('express')
const nunjucks = require('nunjucks')

const server = e()

server.use(e.static('public'))
server.set('view engine', 'njk')
nunjucks.configure('views', {
   autoescape: true,
   express: server,
   watch: true,
   noCache: true
})

//Redireciona a rota para a pasta instrutores
server.get('/', function (req, res) {
   return res.redirect('/courses')
})

server.get('/courses', function (req, res) {
   return res.render('conteudo/conteudo')
})

server.get('/about', function (req, res) {
   return res.render('conteudo/about')
})

server.use(function (req, res) {
   res.status(404).render('not-found')
})

server.listen(4000, function () {
   console.log('On')
})
