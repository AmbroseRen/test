# Redis FAQ

> 启动报错

```
指定启动
redis-server.exe redis.windows.conf
Redis启动报错调整
config set requirepass 123456
AUTH 123456
```

> 清除缓存

```
redis-server.exe  //启动
redis-cli.exe     //启动
flushall          //清空整个 Redis 服务器的数据 > 一般不执行
flushdb           //清空当前库中的所有 key > 一般执行
```
