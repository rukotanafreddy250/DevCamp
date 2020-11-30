const http = require('http');

const todo = [
    {
        id: '1',
        text: 'Todo ONE'
    }
]


const server = http.createServer( (req, res) => {
    const { headers, url, method } = req;
    console.log(  headers, url, method );
    res.setHeader('content-type', 'application/json');
    res.setHeader('x-power-by', 'Node.js')

    res.end(JSON.stringify({
        success: true,
        data: todo
    }));
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
});