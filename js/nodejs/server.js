//引入http模块
var http = require("http") ;
function start(){
    //通过http提供的端口监听方法，来对3000端口进行监听
    http.createServer(function(request,response){
        //当本地的3000端口被访问时，回调该匿名函数
        console.log("hi");
    }).listen(3000) ;
}

//声明start方法可被外部调用
exports.start  = start ;
