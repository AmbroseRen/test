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
| [Chat GPT](https://chat.openai.com/auth/login) | O_O | [learning prompt](https://learningprompt.wiki/) | Y | Y |
| [Midjourney](https://www.midjourney.com/) | AI绘画 | [Prompts Tool](https://prompt.noonshot.com/)/[Prompt Hero](https://prompthero.com/) | Y | Y |
| []() | O_O | Y | Y | Y |
| lucy | 25 | X | X | X |