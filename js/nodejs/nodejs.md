# nginx+nodejs构建webpack项目

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
        location / {
            root   html;
            index  index.html index.htm;
			
			proxy_pass http://localhost:3000;
			proxy_http_version 1.1;
			proxy_set_header Upgrade $http_upgrade;
			proxy_set_header Connection 'upgrade';
			proxy_set_header Host $host;
			proxy_cache_bypass $http_upgrade;			
        }
```
