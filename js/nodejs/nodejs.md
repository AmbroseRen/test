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
