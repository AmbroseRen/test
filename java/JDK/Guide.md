# Guide  [←](../index.md)

| _ | _ | _ |
|:---:|:---:|:---:|
| [Oracle Java JDK 6u45](https://www.oracle.com/java/technologies/javase-java-archive-javase6-downloads.html) | [Oracle Java JDK 7u80](https://www.oracle.com/java/technologies/javase/javase7-archive-downloads.html) | [Oracle Java JDK 8u271](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) |
| [java-jdk-7u80/8u231-windows-x64.exe](https://pan.baidu.com/s/14G2bVjUSJz-Xy-GxSDHCaQ):rsja | []() | []() |
| []() | []() | []() |
| lucy | 25 | X 

## 配置[参考](https://www.cnblogs.com/qianguyihao/p/3788534.html)

(1)新建->变量名"JAVA_HOME"，变量值"C:\Java\jdk1.8.0_05"（即JDK的安装路径）

(2)编辑->变量名"Path"，在原变量值的最后面加上“;%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin”

(3)新建->变量名“CLASSPATH”,变量值“.;%JAVA_HOME%\lib;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar”

## 测试DOS
```
java，javac，java -version
```

