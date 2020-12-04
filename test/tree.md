<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <title>Insert title here</title>
    
    <link rel="stylesheet" href="css/jquery.treeview.css" type="text/css"/>
    <!--screen.css不要也可以-->
    <link rel="stylesheet" href="css/screen.css" type="text/css"/>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
    <!--jquery.cookie.js不要也可以-->
    <script src="js/jquery.cookie.js"></script>
    <script src="js/jquery.treeview.js" type="text/javascript"></script>

    <script type="text/javascript">
        $(document).ready(function(){
            $("#treeview").treeview({
                toggle: function() {
                    console.log("%s was toggled.", $(this).find(">span").text());
                }
            });
        });
    </script>
  </head>

  <div id="main">
    <ul id="treeview" class="filetree">
        <li><span class="folder">密码修改</span>
            <ul>
            <li><span class="file">密码修改</span></li>
            </ul>
        </li>
        <li><span class="folder">系统管理</span>
            <ul>
            <li><span class="file">系统管理</span></li>
            </ul>
        </li>
        <li><span class="folder">行政部门</span>
            <ul>
                <li><span class="file">合同管理</span></li>
                <li><span class="file">加班信息</span></li>
                <li><span class="file">业绩报告</span></li>
            </ul>
        </li>
        <li><span class="folder">考勤部门</span>
            <ul>
                <li><span class="file">考勤信息</span></li>
            </ul>
        </li>
        <li><span class="folder">人力资源部</span>
            <ul>
                <li><span class="file">添加员工</span></li>
                <li><span class="file">删除员工</span></li>
                <li><span class="file">信息跟踪</span></li>
                <li><span class="file">修改员工信息</span></li>
                <li><span class="file">员工信息查询</span></li>
                <li><span class="file">合同过期查询</span></li>
            </ul>
        </li>
        <li><span class="folder">请假管理</span>
            <ul>
                <li><span class="file">请假审批</span></li>
            </ul>
        </li>
        <li><span class="folder">招聘管理</span>
            <ul id="tree">
                <li><span class="folder">求职者信息管理</span>
                    <ul>
                        <li><span class="file">添加</span></li>
                        <li><span class="file">查询</span></li>
                    </ul>
                </li>
                <li><span class="file">添加招聘信息</span></li>
                <li><span class="file">修改招聘信息</span></li>
            </ul>
        </li>
        <li><span class="folder">财务部门</span>
            <ul>
                <li><span class="file">密码修改</span></li>
                <li><span class="file">薪资管理</span></li>
                <li><span class="file">加班信息</span></li>
                <li><span class="file">考勤信息</span></li>
                <li><span class="file">业绩报告</span></li>
                <li><span class="file">固定薪资</span></li>
            </ul>
        </li>
        <li><span class="folder">培训管理</span>
            <ul>
                <li><span class="file">添加培训</span></li>
                <li><span class="file">修改培训信息</span></li>
            </ul>
        </li>
    </ul>
  </div>
</html>
