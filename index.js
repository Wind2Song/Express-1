var http = require('http') // 创建服务器，使用NodeJS的http模块

function Static(request, response){
    response.setHeader('contentType', 'text/html;charset:utf-8');
    response.write('我是服务器');

    response.end();
}

var server = http.createServer(function(request, response){
    Static()
})


server.listen(8888)
console.log('监听8888  成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:8888')