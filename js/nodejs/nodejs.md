# nginx+nodejs构建webpack项目  [←](index.md)
```
start nginx

npm init -y
npm i express

```

create server.js
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

nginx添加proxy
> root/conf/nginx.conf
```
    server {
        listen       80;
        server_name  localhost;
	
	#证书配置(略)
	listen       443 ssl;
	ssl_certificate  /etc/nginx/ssl/server.crt;
	ssl_certificate_key /etc/nginx/ssl/server.key; 

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
	    
	    #代理端口配置
	    proxy_pass http://localhost:3000;
	    proxy_http_version 1.1;
	    proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
	    proxy_set_header Host $host;
	    proxy_cache_bypass $http_upgrade;			
        }
	
	#静态资源块文件路径配置
	# URL:http://localhost/public/somepath/file.html ==> NGINX_URL:/usr/local/var/www/public/somepath/file.html
	location /public {
	  root /usr/local/var/www;
	}	
    }
```

run
```
node server.js
```
