/**
*js tools note
**/
d = d.replace(/\"/g, ""); //js去掉双引号

/**计算代码运行时间*/
var beginTime = +new Date();
var endTime = +new Date();
console.log("排序用时共计"+(endTime-beginTime)+"ms");
/**Java计算代码运行时间*/
long startTime=System.currentTimeMillis();   //获取开始时间  
doSomeThing();  //测试的代码段  
long endTime=System.currentTimeMillis(); //获取结束时间  
System.out.println("程序运行时间： "+(end-start)+"ms");

