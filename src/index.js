import app from "./app"

app.listen(app.get('port'))

console.log('Hello World', app.get('port'))
