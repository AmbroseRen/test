列表内容显示
var reg=/<[^<>]+>/g;//js过滤html代码
"<p>"+m.DYNAMICCONTEXT.replace(reg,'').substring(0,150)+"..."+"</p>"+
css实现：
<c:if test="${fn:length(hotList.DYNAMICTITLE)>'4'}">					                  
${fn:substring(hotList.DYNAMICTITLE,0,4)}...
</c:if>
-----------------
