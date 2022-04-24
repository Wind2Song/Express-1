var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

function staticRoot(StaticPath,req,res){
  console.log('StaticPath:'+StaticPath)
  
  console.log(req.url)
  var pathObj = url.parse(req.url, true)
  // console.log('pathObj:'+pathObj)
  
  
  if(pathObj.pathname === '/'){
    pathObj.pathname += 'index.html'
  }
  var filepath= path.join(StaticPath,pathObj.pathname)
  console.log('filepath:'+filepath)
  var fileContent = fs.readFileSync(filepath,'binary')
  res.write(fileContent,'binary')
  res.end()
}

console.log('__dirname:'+__dirname)
console.log('path.resolve(__dirname,'+'static1):::'+path.resolve(__dirname,'static1'))
var server = http.createServer(function(req,res){
  staticRoot(path.resolve(__dirname,'static1'),req,res) // 获取要访问的那些文件所在文件夹的位置，这个文件夹和server.js在同一根目录下
  // console.log('__dirname'+__dirname+'/n')
})

server.listen(8080)
console.log('请打开端口localhost:8080')