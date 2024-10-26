# 软件<压力/负载/性能>测试流程  [←](index.md)

压力测试（StressTesting），也称为强度测试，通过模拟实际应用的软硬件环境及用户使用过程的系统负荷，长时间或超大负荷地运行测试软件，来测试被测系统的性能、可靠性、稳定性等。压力测试需要确定一个系统的瓶颈或者不能接收的性能点，来获得系统能提供的最大的服务级别。通俗地讲，压力测试是为了发现在什么条件下您的应用程序的性能会变得不可接受。

负载测试（Load Testing）通常被定义为给被测系统加上它所能操作的最大任务数的过程，负载测试有时也会被称为“容量测试”或者“耐久性测试/持久性测试”，其目标是确定并确保系统在超出最大预期工作量的情况下仍能正常运行。对于WEB应用来讲，负载则是并发用户或者HTTP连接的数量。负载测试通过测试系统在资源超负荷情况下的表现，以发现设计上的错误或验证系统的负载能力。在这种测试中，将使测试对象承担不同的工作量，以评测和评估测试对象在不同工作量条件下的性能行为，以及持续正常运行的能力。

性能测试（PerformanceTesting）的目的不是去找系统Bugs，而是排除系统的性能瓶颈，并为回归测试建立一个基准。而性能测试的操作，实际上就是一个非常小心受控的测量分析过程：“运行负载试验->测度性能->调试系统”。在理想的情况下，被测应用在这个时候已经是足够稳定，所以这个过程得以顺利进行。性能测试还有另一个目标就是建立一组被测系统的基准数据。应用在网络上的性能测试重点是利用成熟先进的自动化技术进行网络应用性能监控、网络应用性能分析和网络预测。

1.[参考](https://blog.csdn.net/moonpure/article/details/72674374) - [jmeter](https://jmeter.apache.org/usermanual/get-started.html)内网压测/[使用参考](https://www.jianshu.com/p/0e4daecc8122)·[一](https://www.cnblogs.com/stulzq/p/8971531.html)·[二](https://www.cnblogs.com/tankxiao/p/4045439.html)

2.远程压测

[akamai_cloudtest](https://www.akamai.com/cn/zh/products/performance/cloudtest.jsp)国内受限 - [LoadRunner](https://www.microfocus.com/zh-cn/portfolio/performance-engineering/overview) - [压测宝](http://www.yacebao.com/)

3.
