<html>
<body>
<div class="table-tooltip">
        <table border="1">
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>张三</td>
                    <td>24</td>
                </tr>
            </tbody>
        </table>
 </div>
<div class="tooltip-wp"></div>

<style type="text/css">

table{
       border-collapse: collapse;
 }
tooltip-wp{
      width: 200px;
      position: fixed;
      z-index: 100;
      display: none;
 }
.tooltip-wp:after{
      content: attr(data-title);
      position: absolute;
      left: 0;
      top: 0;
      max-width: 500px;
      background: blue;
      padding: 2px 5px;
      color: #fff;
      border-radius: 5px;
      word-break: break-all;
 }

</style>
 
<script type="text/javascript">

$(document).ready(function(){
      //鼠标滑过表格单元格显示浮动框
        var showFloatTimer=null;
        $('.table-tooltip tbody tr td').hover(
            function(event){
                clearTimeout(showFloatTimer);
                showFloatTimer=setTimeout(function(e){
                    $('.tooltip-wp').attr('data-title', event.currentTarget.innerHTML); //动态设置data-title属性
                    $('.tooltip-wp').fadeIn(200);//浮动框淡出
                },300);
            }
        );
 
        $('.table-tooltip tbody tr td').mouseout(function(){
            $('.tooltip-wp').hide();
            clearTimeout(showFloatTimer);//鼠标滑出时清除函数去抖中的定时事件
        });
 
        $('.table-tooltip tbody tr td').mousemove(floatMove());
        //floatMove()运行后返回一个函数对象，或什么都不返回
 
        function floatMove(){//节流函数
            var canRun=true;
            return function(e){//e是mousemove的event参数
                if(!canRun){return;}//如果有一个定时方法，直接返回
                canRun=false;
                setTimeout(function(){
                    var top = e.pageY+5;
                    var left = e.pageX+5;
                    $('.tooltip-wp').css({
                        'top' : top + 'px',
                        'left': left+ 'px'
                    });
                    canRun=true;
                },150);
            }
        }
    });

</script>

</body>
</html>
