# Redis FAQ  [←](index.md)

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

> Key操作命令

```
127.0.0.1:6379> ping
PONG

keys *  //获取所有键
dbsize  //获取键总数

127.0.0.1:6379> exists javastack java  //查询键是否存在
(integer) 2

del java javastack  //删除键
type javastack  //查询键类型
move key db  //移动键位置
ttl javastack  //查询key的生命周期（秒）
expire javastack 60  //设置过期时间（s）
persist javastack  //设置永不过期
rename javastack javastack123  //更改键名称

set javastack 666  //设置键值
get javastack  //获取键值
incr javastack  //自动递增（数字类型）

> 语法：mset key value [key value ...]
mset java1 1 java2 2 java3 3  //批量存放键值

> mget key [key ...]
mget java1 java2  //批量获取键值

strlen javastack  //获取值长度
append javastack hi  //追加（拼接）内容
getrange javastack 0 4  //获取部分字符
```
