const http = require('http');

var index = "index";
const server = http.createServer((req,res)=>{
    const url = req.url;

    if (url === '/') {
          res.writeHead(200,{'Content-Type':'text/html'});
          res.write(`<h2>${index} sayfasina hosgeldiniz</h2>`);
    }
    else if(url === '/hakkimda'){
          res.writeHead(200,{'Content-Type':'text/html'});
          paths = url.slice(1,);
          res.write(`<h2>${paths} sayfasina hosgeldiniz</h2>`);
    }
    else if(url === '/iletisim'){
          res.writeHead(200,{'Content-Type':'text/html'});
          paths = url.slice(1,);
          res.write(`<h2>${paths} sayfasina hosgeldiniz</h2>`);
    }

    res.end();
})

const port = 5000;
server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
