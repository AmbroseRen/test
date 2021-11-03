<script src="../../js/JQuery/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript" charset="utf-8">
  // Creating custom :external selector
  $.expr[':'].external = function(obj){
      return !obj.href.match(/^mailto\:/)
              && (obj.hostname != location.hostname);
  };    
  
  $(function(){
    // Add 'external' CSS class to all external links
    $('a:external').addClass('external');

    // turn target into target=_blank for elements w external class
    $(".external").attr('target','_blank');

  })
</script>

# WebGL Data Lists  [←](../index.md)

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [Three.js 入门指南](https://cdn.jsdelivr.net/gh/AmbroseRen/test@master/Library/WebGL/Three.js_入门指南.pdf) | 对接API | [Revit API](Revit/index.md) |
| [threejs官方组件库](https://threejs.org/examples/) | O_O | [geometry_extrude_shapes](https://threejs.org/examples/#webgl_geometry_extrude_shapes) - [轨道控制器OrbitControls.js](https://blog.csdn.net/qq_37338983/article/details/78575333#commentBox) |
| [中文文档库](http://www.hewebgl.com/article/articledir/2) | O_O | [3D模型的加载与使用](http://www.hewebgl.com/article/getarticle/126) - []() |
| [基础模型加载](https://www.hangge.com/blog/cache/detail_1785.html) | O_O | Y |
| [模型几何变换](http://www.yanhuangxueyuan.com/Three.js_course/transformation.html) | O_O | Y |
| [坐标系统](https://learnopengl-cn.readthedocs.io/zh/latest/01%20Getting%20started/08%20Coordinate%20Systems/) | O_O | [世界坐标](https://blog.csdn.net/qq_30621091/article/details/61205645) |
| [bimface官方文档](https://bimface.com/developer-jsdemo#931) | O_O | Y |
| []() | O_O | Y |
| []() | O_O | Y |
| 太多不写了…… | O_O | Y |
| lucy | 25 | X |

