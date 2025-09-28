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

# AI Service

| [<font color="#ff0000">传送门</font>](../../navigation.md) | 描述 | 摘本 | 摘录 | 摘引 |
|:---:|:---:|:---:|:---:|:---:|
| [Chat GPT](https://chat.openai.com/auth/login) | O_O | [openai](https://openai.com/) - [forum](https://forum.openai.com/) - [learning prompt](https://learningprompt.wiki/) | Y | Y |
| [gemini](https://gemini.google.com/) | O_O | [grok](https://grok.com/) | Y | Y |
| [Midjourney](https://www.midjourney.com/) | AI绘画 | [Prompts Tool](https://prompt.noonshot.com/)/[Prompt Hero](https://prompthero.com/) | Y | Y |
| [文心一言](https://yiyan.baidu.com/) | O_O | [天工](https://search.tiangong.cn/) - [通义千问](https://tongyi.aliyun.com/qianwen/) - [SparkDesk](https://xinghuo.xfyun.cn/desk) | Y | Y |
| [DeepSeek](https://www.deepseek.com/) | O_O | Y | Y | Y |
| [豆包](https://www.doubao.com/chat/) | ByteDance | Y | Y | Y |
| []() | O_O | Y | Y | Y |
| lucy | 25 | X | X | X |
