<%@ page  contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="basePath" value="${pageContext.request.contextPath}"></c:set>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<META HTTP-EQUIV="Pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-cache">
<META HTTP-EQUIV="Expires" CONTENT="0">
<title>Insert title here</title>

<link rel="stylesheet" href="${basePath}/bootstrap/css/bootstrap.min.css" />
<link rel="stylesheet" href="${basePath}/bootstrap/css/bootstrap-datepicker.min.css" />
<link rel="stylesheet" href="${basePath}/static/css/font-awesome.min.css">
<link rel="stylesheet" href="${basePath}/static/plugins/ztree/css/metroStyle/metroStyle.css">
<link rel="stylesheet" href="${basePath}/bootstrap/css/bootstrap-table.min.css">
<link rel="stylesheet" href="${basePath}/static/css/main.css">
<link rel="stylesheet" href="${basePath}/static/plugins/treegrid/jquery.treegrid.css">

<script src="${basePath}/jquery/jquery-3.2.1.min.js"></script>
<script src="${basePath}/jquery/jquery.validate.min.js"></script>
<script src="${basePath}/jquery/jquery.form.js"></script>
<script src="${basePath}/bootstrap/js/bootstrap.min.js"></script>
<script src="${basePath}/bootstrap/js/bootstrap-datepicker.min.js"></script>
<script src="${basePath}/bootstrap/js/bootstrap-table.min.js"></script>
<script src="${basePath}/static/plugins/layer/layer.js"></script>
<script src="${basePath}/static/plugins/treegrid/jquery.treegrid.min.js"></script>
<script src="${basePath}/static/plugins/treegrid/jquery.treegrid.bootstrap3.js"></script>
<script src="${basePath}/static/plugins/treegrid/jquery.treegrid.extension.js"></script>
<script src="${basePath}/static/plugins/treegrid/tree.table.js"></script>
<script src="${basePath}/static/plugins/ztree/jquery.ztree.all.min.js"></script>


</head>
<body>
 <%@ include file="menu.jsp" %>
 <!--动态的设置内容的容器 -->
 <div id="container"></div> 
 <!-- Modal(模态框) -->
 <div class="modal fade" id="modal-dialog" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
   <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <!-- 此位置放置具体页面的位置 -->
      <div class="modal-body"></div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary ok">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
  </div><!-- modal -->
</body>
</html>
