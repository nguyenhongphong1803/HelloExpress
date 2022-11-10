const express = require('express');
const app = express();
// app.use((req,res)=>{
//     console.log('WE GOT A NEW REQUEST!')
//     res.send('<h1>This is my webpage!</h1>')
// })
app.get('/cats', (req,res)=>{
   console.log('cat request')
    
   res.send('meow!')
})

app.get('/search',(req,res)=>{
    const {q} = req.query;
    res.send(`<h1> Search results for:${q}</h1>`)
})
// app.get('*',(req,res)=>{
//     res.send('I dont know that path!')
// })
app.get('/r/:read',(req,res)=>{
    res.send('Hello men')
})
app.post('/cats',(req,res)=>{
    res.send('POST REQUEST TO /cats!!!')
})
// console.dir(app)
app.listen(8080,()=>{
    console.log('listening')
})