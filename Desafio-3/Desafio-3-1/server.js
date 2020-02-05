const express = require('express');
const nunjucks = require('nunjucks')
const server = express();
const cursos = require('./data');

server.use(express.static('public'))
server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server
})

server.listen(7000, function() {
    console.log("server is running")
});

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/conteudos", function(req, res) {
    return res.render("conteudos", { items: cursos })
})

server.use(function(req, res) {
    res.status(404).render("notFound");
});