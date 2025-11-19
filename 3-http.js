
const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url == '/about'){
        res.end('welcome to about page')
    }
    else if(req.url == '/'){
 res.end('welocme to our home page')
    }
   res.end('opps no site found')
})


server.listen(5000, () => {
    console.log("Server is listening on port 5000...")
})
