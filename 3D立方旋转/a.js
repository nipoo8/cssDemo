const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
var htmlFile = `<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
        }
        
        ul {
            width: 200px;
            height: 200px;
            margin: 100px auto;
            position: relative;
            transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
            animation: move 4s linear 0s infinite alternate;
            transform-style: preserve-3d;
        }
        
        ul li {
            width: 200px;
            height: 200px;
            list-style: none;
            font-size: 60px;
            text-align: center;
            line-height: 200px;
            position: absolute;
            left: 0;
            top: 0;
        }
        
        ul li:nth-child(1) {
            background-color: red;
            transform: rotateX(90deg) translateZ(100px);
        }
        
        ul li:nth-child(2) {
            background-color: blue;
            transform: rotateX(180deg) translateZ(100px);
        }
        
        ul li:nth-child(3) {
            background-color: yellow;
            transform: rotateX(270deg) translateZ(100px);
        }
        
        ul li:nth-child(4) {
            background-color: green;
            transform: rotateX(360deg) translateZ(100px);
        }
        
        ul li:nth-child(5) {
            background-color: pink;
            transform: translateX(100px) rotateY(90deg);
        }
        
        ul li:nth-child(6) {
            background-color: tomato;
            transform: translateX(-100px) rotateY(90deg);
        }
        
        @keyframes move {
            from {
                transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
            }
            to {
                transform: rotateY(345deg) rotateX(345deg) rotateZ(260deg);
            }
        }
    </style>
</head>

<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
    </ul>
</body>

</html>`
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');

res.end(htmlFile);
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});


