const e = require('express')
const nunjucks = require('nunjucks')
const aulas = require('./cursos')

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
   return res.redirect('/content')
})

server.get('/content', function (req, res) {
   return res.render('conteudo/conteudo', { items: aulas })
})

server.get('/curso/:id', function (req, res) {
   const id = req.params.id

   const aula = aulas.find(function (aula) {
      if (aula.id === id) {
         return true
      }
   })

   if (!aula) {
      return res.send('curso não encontrado')
   }

   return res.render('conteudo/curso', { item: aula })
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
