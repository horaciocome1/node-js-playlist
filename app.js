// console.log("Hello Ninjas")

// var time = 0
// var timer = setInterval(() => {
    // time += 2
    // console.log(time + " seconds has passed")
    // if (time >= 5) clearInterval(timer)
// }, 2000);

// console.log(__dirname)
// console.log(__filename)

// var sayHi = function() { console.log("Hi") }
// sayHi()

// function callFunction(fun) {
    // fun()
// }

// callFunction(() => {
    // console.log("hi")
// })

// var stuff = require('./stuff')


// console.log(counter(['shaun']))
// console.log(stuff.counter(['shaun', 'cristal', "uay"]))

// console.log(stuff.adder(stuff.pi, 32))

// console.log(stuff.pi);


// const events = require('events')

// const util = require('util')

// class Person extends events.EventEmitter {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }

// // util.inherits(Person, events.EventEmitter)
// util.inherits(Person, events)

// var james = new Person('James')
// var andre = new Person('Andre')
// var filipa = new Person('Filipa')

// var people = [james, andre, filipa]

// people.forEach((person) => {
//     person.on('speak', (mssg) => {
//         console.log(`${person.name} said: ${mssg}`)
//     })
// })

// james.emit('speak', 'Hey dudes')
// filipa.emit('speak', 'Who run the world?')


// var myEmitter = new events.EventEmitter()

// myEmitter.on('someEvent', (mssg) => {
//     console.log(mssg);
    
// })

// myEmitter.emit('someEvent', 'The event was emitted')

// const fs = require('fs')

// fs.readFile('readMe.txt', 'utf8', (err, data) => {
//     fs.writeFile('writeMe.txt', data)
// })


// fs.writeFileSync('writeMe.txt', readMe)


// const http = require('http')
// const server = http.createServer((requestObject, responseObject) => {
    // console.log(`Request was made: ${requestObject.url}`);
    // 
    // responseObject.writeHead(200, {'Content-Type': 'text/plain'})
    // responseObject.end('Hey ninjas')
// })

// server.listen(3000, '127.0.0.1')
// console.log('Now listening to port 3000, on localhost');


// ----------------

// const fs = require('fs')

// var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
// var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt')

// readStream.on('data', (chunk) => {
//     console.log('New chunk received')
//     // console.log(chunk)
//     writeStream.write(chunk)
//     console.log('Chunk wrote')
// })

// ------------------

// const fs = require('fs')

// var readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8')
// var writeStream = fs.createWriteStream(__dirname + '/writeMe.txt')
// readStream.pipe(writeStream)

// ---------------

// const http = require('http')
// const fs = require('fs')


// const server = http.createServer((requestObject, responseObject) => {
//     console.log(`Request was made: ${requestObject.url}`);
//     responseObject.writeHead(200, {'Content-Type': 'text/html'})
    
//     var readStream = fs.createReadStream(__dirname + '/index.html', 'utf8')
//     readStream.pipe(responseObject)
// })

// server.listen(3000, '127.0.0.1')
// console.log('Now listening to port 3000, on localhost')



// ---------------

// const http = require('http')
// const fs = require('fs')


// const server = http.createServer((requestObject, responseObject) => {
//     console.log(`Request was made: ${requestObject.url}`)
//     responseObject.writeHead(200, {'Content-Type': 'application/json'})

//     var person = {
//         name: 'Hilmeu',
//         job: 'Ninja',
//         age: 24
//     }
    
//     responseObject.end(JSON.stringify(person))
// })

// server.listen(3000, '127.0.0.1')
// console.log('Now listening to port 3000, on localhost')

// ---------------

const http = require('http')
const fs = require('fs')


const server = http.createServer((requestObject, responseObject) => {
    console.log(`Request was made: ${requestObject.url}`)

    if (requestObject.url === '/home' || requestObject.url === '/') {
        responseObject.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/index.html').pipe(responseObject)
    } else if (requestObject.url === '/contact') {
        responseObject.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/contact.html').pipe(responseObject)
    } else if (requestObject.url === '/api/ninjas') {
        var ninjas = [
            {
                name: 'Ryu',
                age: 26
            },
            {
                name: 'Yoshi',
                age: 32
            },
            {
                name: 'Andre',
                age: 12
            }
        ]
        responseObject.writeHead(200, {'Content-Type': 'application/json'})
        responseObject.end(JSON.stringify(ninjas))
    } else {
        responseObject.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream(__dirname + '/404.html').pipe(responseObject)
    }
})

server.listen(3000, '127.0.0.1')
console.log('Now listening to port 3000, on localhost')