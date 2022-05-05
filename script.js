const books = require('./books.json')
const http = require('http')
const url = require('url')
const static = require('node-static')
const file = new static.Server('.') 



function accept(req, res) {
    file.serve(req, res)

    if(req.url === '/get_date_info') {

        const response = {
            text: 'Your vote is accepted: ' + new Date()
        }
        res.writeHead(200)
        res.end(JSON.stringify(response))
    }

    if(req.url === '/get_file_info') {
        res.writeHead(200)
        res.end(JSON.stringify(books))
    }
}

http.createServer(accept).listen(8080)
console.log("Started");
