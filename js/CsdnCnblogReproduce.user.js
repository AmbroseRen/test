// ==UserScript==
// @name         CSDN,CNBLOG博客文章一键转载插件 
// @version      3.10
// @description  CSDN博客文章转载插件 可以实现CSDN上的文章一键转载
// @author       By Jackie http://csdn.admans.cn/
// @match        *://blog.csdn.net/*/article/details/*
// @match        *://mp.csdn.net/postedit*
// @match        *://mp.csdn.net/postedit?opt=1
// @match        *://mp.csdn.net/console/editor/html?opt=1
// @match        *://www.cnblogs.com/*/p/*.html
// @match        *://www.cnblogs.com/*/articles/*.html
// @match        *://www.cnblogs.com/*/archive/*/*/*/*.html
// @match        *://i.cnblogs.com/EditArticles.aspx?opt=1
// @match        *://i.cnblogs.com/EditPosts.aspx?opt=1
// @match        *://i-beta.cnblogs.com/posts/edit?opt=1
// @require      https://unpkg.com/turndown/dist/turndown.js
// @grant    GM_addStyle
// @namespace https://greasyfork.org/users/164689
// @supportURL   https://github.com/JackieZheng/CsdnCnblogReproduce/issues/
// ==/UserScript==
GM_addStyle("#ReproduceBtn{position: absolute;float: right;right: 0px;width: auto;background: #0f962191;z-index: 9999;color: white;text-align: center;margin: 5px;padding: 5px;border-radius: 5px;cursor: pointer;line-height: 100%;}"); (function() {
    'use strict';
    //document.domain="csdn.net";  
    var cnblog = location.href.indexOf("cnblogs.com") > -1 ? true: false;
    if (cnblog) {
        document.domain = "cnblogs.com";
    } else {
        document.domain = "csdn.net";
    }
    //文章查看窗口
    if (location.href.indexOf("article/details") > -1 || location.href.indexOf("www.cnblogs.com") > -1) {
        var divBtn = document.createElement("div");
        divBtn.setAttribute("id", "ReproduceBtn");
        divBtn.innerHTML = '转载';
        if (cnblog) {
            divBtn.style.marginTop = "-40px";
            divBtn.style.position = "relative";
        }
        var article = document.getElementsByClassName('article_content')[0] || document.getElementsByClassName('postBody')[0] || document.getElementsByClassName('blogpost-body')[0];
        article.insertBefore(divBtn, article.childNodes[0]);
        var posteditUrl = cnblog ? "https://i-beta.cnblogs.com/posts/edit?opt=1": "https://mp.csdn.net/console/editor/html?opt=1";

        divBtn.onclick = function() {
            window.open(posteditUrl);
        }
    } else //文章发布窗口
    {
        document.onreadystatechange = function(e) {
            if (document.readyState == 'complete') {
                setTimeout(function() {
                    if (window.opener && location.href.indexOf("?opt=1") > -1) {
                        var contentDocumentbody = document.getElementsByTagName("iframe")[0] == undefined ? null: document.getElementsByTagName("iframe")[0].contentDocument.body;
                        var authorName = "";
                        if (window.opener.document.getElementsByClassName('follow-nickName').length > 0) {
                            authorName = window.opener.document.getElementsByClassName('follow-nickName')[0].innerText;
                        } else if (window.opener.document.getElementById('profile_block')) {
                            authorName = window.opener.document.getElementById('profile_block').childNodes[1].innerText;
                        } else if (window.opener.document.getElementById('author_profile_detail')) {
                            authorName = window.opener.document.getElementById('author_profile_detail').childNodes[1].innerText;
                        }
                        var blogContent = (window.opener.document.getElementById('content_views') || window.opener.document.getElementById('cnblogs_post_body')).innerHTML + "<br>---------------------" + "<br>作者：" + authorName + "<br>来源：" + (cnblog == true ? "CNBLOGS": "CSDN") + "<br>原文：" + window.opener.location.href + "<br>版权声明：本文为作者原创文章，转载请附上博文链接！" + "<br>内容解析By：<a href=https://greasyfork.org/zh-CN/scripts/381053-csdn-cnblog%E5%8D%9A%E5%AE%A2%E6%96%87%E7%AB%A0%E4%B8%80%E9%94%AE%E8%BD%AC%E8%BD%BD%E6%8F%92%E4%BB%B6 target=_blank>CSDN,CNBLOG博客文章一键转载插件</a>";
                        var input_title = (document.getElementById('txtTitle') || document.getElementById('Editor_Edit_txbTitle') || document.querySelector('input.cnb-input'));
                        if (input_title) {
                            var aTitle = "[转]" + window.opener.document.title.split('_')[0];
                            aTitle = aTitle + "(转载请删除括号里的内容)";
                            input_title.value = aTitle;
                        }

                        if (contentDocumentbody) {
                            var aContent = blogContent.replace(/<ul class=\"pre-numbering\"[^>]*>(.*?)<\/ul>/g, '').replace(/<div class=\"hljs-ln-line hljs-ln-n\"[^>]*>(.*?)<\/div>/g, '').replace(/<div class=\"hljs-ln-numbers\"[^>]*>(.*?)<\/div>/g, '').replace(/<div class=\"cnblogs_code_toolbar\"[\s\S].*?<\/div>/g, '').replace(/<a[\s\S].*class=\"toolbar_item[\s\S].*>?<\/a>/g, '').replace(/\n/g, '').replace(/<nobr aria-hidden=\"true\">(.*?)<\/nobr>/g, '').replace(/<script type=\"math\/tex\"[^>]*>(.*?)<\/script>/g, '');
                            if (cnblog) {
                                aContent = "(转载请删除括号里的内容)" + aContent;
                            } else {
                                /*处理csdn代码*/
                                var rePre = /<pre[^>]*>(.*?)<\/pre>/gi;
                                //aContent=aContent.replace(/\n/g,'');
                                var arrMactches = aContent.match(rePre);
                                if (arrMactches != null && arrMactches.length > 0) {

                                    for (var i = 0; i < arrMactches.length; i++) {

                                        var preText = '';
                                        var codeTag = window.opener.document.getElementsByTagName('pre')[i];
                                        
                                        if(codeTag){  
                                            if(codeTag.querySelector("ul[class*='pre-numbering']")){
                                             codeTag.querySelector("ul[class*='pre-numbering']").remove();
                                            }
                                            var eles = codeTag.getElementsByTagName('li');
                                            if (eles.length > 0) {
                                                for (var j = 0; j < eles.length; j++) {
                                                    preText += eles[j].innerText;
                                                }
                                            } else {
                                                preText += codeTag.innerText;
                                            }
                                        }
                                        var preCodeHtml = "<pre><code class=\"hljs\">" + preText.replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</code></pre>";

                                        aContent = aContent.replace(arrMactches[i], preCodeHtml);
                                        

                                    }

                                }
                             
                             
                             
                            }
                            contentDocumentbody.innerHTML = aContent;
                            if (contentDocumentbody.children.ReadBtn) contentDocumentbody.children.ReadBtn.remove();
                            if (contentDocumentbody.children.ReproduceBtn) contentDocumentbody.children.ReproduceBtn.remove();
                            let mathspace=contentDocumentbody.querySelectorAll("[width*='thickmathspace']");                              
                              mathspace.forEach(function(ele){
                               ele.outerHTML=" ";
                              });
                            let mathspan=contentDocumentbody.querySelectorAll("[class*='MathJax']");                              
                            mathspan.forEach(function(ele){
                               let innerText= ele.innerText;
                               ele.outerHTML="<span>"+innerText+"</span>";
                              });
                            
                        }
                        //if(document.getElementById("selType"))document.getElementById("selType").value="2";
                         if (document.getElementsByClassName("textfield")) document.getElementsByClassName("textfield")[0].options[2].selected = true;
                         if (document.querySelector("[class^='ipt-box']")) document.querySelector("[class^='ipt-box']").querySelector("[class^='el-input__inner']").value = window.opener.location.href.split('?')[0];
                         if (document.querySelector("[class^='el-checkbox__original']")) document.querySelector("[class^='el-checkbox__original']").checked = true;
                         if(document.querySelectorAll("[class*='copyright-box']"))
                         {
                           document.querySelectorAll("[class*='copyright-box']")[0].style.display="";
                           document.querySelectorAll("[class*='copyright-box']")[1].style.display="";
                         }

                        var cnblogsMDeditor = document.getElementById("Editor_Edit_EditorBody");
                        if (cnblogsMDeditor) {
                            var htmlContent = blogContent.replace(/<ul class=\"pre-numbering\"[\s\S].*<\/ul>/g, '');
                            htmlContent = htmlContent.replace(/<div class=\"cnblogs_code_toolbar\"[\s\S].*?<\/div>/g, '');
                            htmlContent = htmlContent.replace(/<a[\s\S].*class=\"toolbar_item[\s\S].*>?<\/a>/g, '');
                            htmlContent = htmlContent.replace(/<div id=\"ReproduceBtn\"[\s\S].*?<\/div>/g, '');
                            htmlContent = htmlContent.replace(/<div id=\"ReadBtn\"[\s\S].*?<\/div>/g, '');
                            htmlContent = htmlContent.replace(/<div class=\"line[\s\S].*>\d+?<\/div>/g, '');
                            var turndownService = new TurndownService();
                            var mdContent = turndownService.turndown(htmlContent);
                            cnblogsMDeditor.value = mdContent;
                        } else {
                            if (input_title) {
                                input_title.onchange = function() {
                                    if (document.getElementsByClassName("textfield")) document.getElementsByClassName("textfield")[0].options[2].selected = true;
                                    if (document.querySelector("[class^='ipt-box']")) document.querySelector("[class^='ipt-box']").querySelector("[class^='el-input__inner']").value = window.opener.location.href.split('?')[0];
                                    if (document.querySelector("[class^='el-checkbox__original']")) document.querySelector("[class^='el-checkbox__original']").checked = true;
                                    if(document.querySelectorAll("[class*='copyright-box']"))
                                    {
                                      document.querySelectorAll("[class*='copyright-box']")[0].style.display="";
                                      document.querySelectorAll("[class*='copyright-box']")[1].style.display="";
                                    }
                                }
                            }
                        }

                    }
                },
                3000);

            }
        }

    }

})();
