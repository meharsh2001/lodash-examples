const domain = require('domain');
const http = require('http');
const serverUsingDomain = domain.create();
 
serverUsingDomain.run(() => {
  http.createServer((req, res) => {
 
    /* The server is created in the scope of
    serverUsingDomain. Req, and res is also
    created in the scope of serverUsingDomain.
    However, it's a good idea to first create
    a separate domain for each request and
    then add req and res to it. */
    const reqdomain = domain.create();
    reqdomain.add(req);
    reqdomain.add(res);
    reqdomain.on('error', (error) => {
      console.error('Error', error, req.url);
      try {
        res.writeHead(500).end('Some Error occurred.');
      } catch (error2) {
        console.error('Error is sending 500', error2, req.url);
      }
    });
  }).listen(5000, () => {
   console.log("Server is running on PORT 5000");
  });
});