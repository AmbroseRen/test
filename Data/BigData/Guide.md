

  <link rel="stylesheet" href="../../js/JQuery/treeview/jquery.treeview.css" type="text/css"/>
  <!--screen.css不要也可以-->
  <link rel="stylesheet" href="../../js/JQuery/treeview/screen.css" type="text/css"/>

  <script src="../../js/JQuery/jquery.min.js"></script>
  <!--jquery.cookie.js不要也可以-->
  <script src="../../js/JQuery/treeview/jquery.cookie.js"></script>
  <script src="../../js/JQuery/treeview/jquery.treeview.js" type="text/javascript"></script>

  <script type="text/javascript">
      $(document).ready(function(){
          $("#treeview").treeview({
              toggle: function() {
                  console.log("%s was toggled.", $(this).find(">span").text());
              }
          });
      });
  </script>

<div>

<div style="position：relative;float:left;width:25%;height:35px;"><a href="#参考站点">参考站点</a></div>

<div style="position：relative;float:left;width:25%;height:35px;"><a href="#Language">Language</a></div>

<div style="position：relative;float:left;width:25%;height:35px;"><a href="#PDF">PDF</a></div>

<div style="position：relative;float:left;width:25%;height:35px;"></div>

</div>

# AI(人工智能) Tree - [ai-ml-dl导论](https://github.com/neomatrix369/awesome-ai-ml-dl/blob/master/README-details.md#data) - [Why](https://en.wikipedia.org/wiki/Five_whys)/[批判性思维](https://www.callingbullshit.org/)/[业务流程](https://virgili0.github.io/Virgilio/paradiso/what-do-i-need-for-ml.html#the-three-elements) [←](index.md)

  <div id="main">
    <ul id="treeview" class="filetree">       
        <li><span class="folder">Jupyter</span>
            <ul>
                <li><span class="file"><a href="https://www.dataquest.io/blog/jupyter-notebook-tutorial/">Jupyter入门</a></span></li>
                <li><span class="file"><a href="https://jupyter.org/try">在线使用模板</a></span></li>
                <li><span class="file"><a href="https://hub.gke2.mybinder.org/user/ipython-ipython-in-depth-r7m1md4e/notebooks/binder/Index.ipynb"> Online Classic Notebook</a></span></li>
                <li><span class="file"><a href="https://jupyter.org/">官网</a></span></li>
                <li><span class="file"><a href="https://github.com/jupyter-guide/jupyter-guide">官网使用手册_待完善</a></span></li>
                <li><span class="file"><a href="https://github.com/jupyter-guide/ten-rules-jupyter">官网手册二</a></span></li>
            </ul>
        </li>        
        <li><span class="folder">Statistics(统计学)</span>
            <ul>
              <li><span class="file"><a href="https://www.wolframalpha.com/">公式在线解析器</a>——<a href="https://www.wolframalpha.com/widgets/view.jsp?id=54af80f0c43c8717d710f39be0642aaa">三元一次方程组</a>——<a href="https://www.wolframalpha.com/problem-generator/">使用练习</a>——<a href="https://www.wolframalpha.com/input/?i=plot%28+%2830+-+1%29+%2F+%28t+%2B+2%29%5E1.8%2C++%2860+-+1%29+%2F+%28t+%2B+2%29%5E1.8%2C+%28200+-+1%29+%2F+%28t+%2B+2%29%5E1.8+%29+where+t%3D0..24">示例</a></span></li>
              <li><span class="file">Calculus(微积分)——<a href="https://www.math.mcgill.ca/rags/JAC/dobson/dobson.html">练习一</a>——<a href="https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx">练习二</a></span></li>
              <li><span class="file"><a href="http://immersivemath.com/ila/index.html">线代</a>和<a href="https://textbooks.math.gatech.edu/ila/index.html">矩阵</a>概念参考</span></li>
              <li><span class="file"><a href="https://mml-book.github.io/">机器学习数学</a>——<a href="https://github.com/mml-book/mml-book.github.io">源址</a></span></li>
            </ul>
        </li>      
        <li><span class="folder">ML(机器学习)</span>
            <ul>
                <li><span class="file">Arithmetic(算法)</span>
                    <ul>
                        <li><span class="file">线性模型</span></li>
                        <li><span class="file">逻辑回归</span></li>
                        <li><span class="file">决策树模型</span></li>
                        <li><span class="file">支持向量机</span></li>
                        <li><span class="file">贝叶斯分类器</span></li>
                    </ul>
                </li>                  
                <li><span class="file">Classify(分类)</span>
                    <ul>
                        <li><span class="file">Supervised Learning(监督学习)</span></li>
                    </ul>
                </li>                  
                <li><span class="file">Model(模型)</span></li>
                <li><span class="file">DL(深度学习)</span></li>
                <li><span class="file">免费可用数据</span>
                    <ul>
                        <li><span class="file"><a href="https://www.kaggle.com/">kaggle</a></span></li>
                        <li><span class="file"><a href="https://archive.ics.uci.edu/ml/index.php">UCI</a></span></li>
                        <li><span class="file"><a href="https://www.data.gov/">data.gov.america</a></span></li>
                        <li><span class="file"><a href="https://data.gov.uk/">data.gov.uk</a></span></li>
                        <li><span class="file"><a href="https://data.europa.eu/euodp/en/data/">data.gov.england</a></span></li>
                        <li><span class="file"><a href="https://www.forbes.com/sites/bernardmarr/2016/02/12/big-data-35-brilliant-and-free-data-sources-for-2016/?sh=426d974db54d">data.forbes</a>
                          </span></li>
                        <li><span class="file"><a href="https://wiki.digitalmethods.net/Dmi/ToolDatabase">ToolDatabase</a></span></li>
                    </ul>
                </li>                  
                <li><span class="file">Neural Network(神经网络)</span>
                    <ul>
                        <li><span class="file">MLP(机器学习)</span></li>
                    </ul>
                </li>                  
                <li><span class="file">Territory(领域)</span>
                    <ul>
                        <li><span class="file">NLP(自然语言处理)</span></li>
                    </ul>
                </li>                  
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
    </ul>
  </div>

## 参考站点

| _ | _ | _ |
|:---:|:---:|:---:|
| [Virgilio](https://virgili0.github.io/Virgilio/)/[源项目](https://github.com/virgili0/Virgilio) | []() | []() |
| []() | []() | []() |
| []() | []() | []() |
| lucy | 25 | X |

## Language

| 传送门 | 描述 | 摘要 |
|:---:|:---:|:---:|
| [julialang](https://julialang.org/)/[源项目](https://github.com/JuliaLang/julia) | 构建ML专用语言 | [项目区](https://github.com/JuliaLang) - [手册](https://docs.julialang.org/en/v1/) - [blog](https://julialang.org/blog/) - [创建julia的意义](https://julialang.org/blog/2017/12/ml-pl-cn/#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%88%9B%E9%80%A0%E4%B8%80%E4%B8%AA%E6%96%B0%E8%AF%AD%E8%A8%80) |
| []() | O_O | Y |
| []() | O_O | Y |
| lucy | 25 | X |

## PDF

| _ | _ | _ |
|:---:|:---:|:---:|
| [Link Mining: A New Data Mining Challenge](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.93.1976&rep=rep1&type=pdf)链接挖掘：数据挖掘 | [Towards Photography Through Realistic Fog](https://web.media.mit.edu/~guysatat/fog/materials/TowardsPhotographyThroughRealisticFog.pdf)干扰识别 | []() |
| []() | []() | []() |
| []() | []() | []() |
| []() | []() | []() |
| []() | []() | []() |
| lucy | 25 | X |


