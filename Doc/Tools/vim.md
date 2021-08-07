# Linux-vim Editor Guide [←](index.md)

- [X] vim打开文件

```
vi filename :打开或新建文件,并将光标置于第一行首
vi n filename ：打开文件,并将光标置于第n行首
vi filename ：打开文件,并将光标置于一行首
vi /pattern filename：打开文件,并将光标置于第一个与pattern匹配的串处
vi -r filename ：在上次正用vi编辑时发生系统崩溃,恢复filename
vi filename....filename ：打开多个文件,依次进行编辑
```

- [X] 复制
```
「yw」：将光标所在之处到字尾的字符复制到缓冲区中。 
「#yw」：复制#个字到缓冲区 
「yy」：复制光标所在行到缓冲区。 
「#yy」：例如，「6yy」表示拷贝从光标所在的该行"往下数"6行文字。 
「p」：将缓冲区内的字符贴到光标所在位置。注意：所有与"y"有关的复制命令都必须与"p"配合才能完成复制与粘贴功能。 
```

- [X] 退出及保存

按ESC键 跳到命令模式，然后：

```
:w   保存文件但不退出vi
:w file 将修改另外保存到file中，不退出vi
:w!   强制保存，不推出vi
:wq  保存文件并退出vi
:wq! 强制保存文件，并退出vi
q:  不保存文件，退出vi
:q! 不保存文件，强制退出vi
:e! 放弃所有修改，从上次保存文件开始再编辑
```
