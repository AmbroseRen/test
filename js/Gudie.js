/*引用粒子特效JS
https://raw.githubusercontent.com/AmbroseRen/test/master/js/particle.js
https://blog-static.cnblogs.com/files/xiaokang01/js.js
*/
<script id="c_n_script" src="https://raw.githubusercontent.com/AmbroseRen/test/master/js/particle.js" color="240,230,140" opacity="1" count="75" zindex="-2">
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

} else {

}
</script>

/*引用鼠标点击特效JS*/
<script type="text/javascript">
/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");
        var $i = $("<span></span>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});
</script>
