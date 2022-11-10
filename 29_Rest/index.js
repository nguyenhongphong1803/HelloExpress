const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid')

// const {read} = require('fs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname,'views'))
app.set('view engine','ejs')

let comments = [
    {
        id: uuid(),
        username: 'Toddsgsdgd',
        comment: 'loljjjhgfdol'
    },
    {
        id: uuid(),
        username: 'Tohgjsdhfddd',
        comment: 'lolofhtjl'
    },
    {
        id: uuid(),
        username: 'Thdhodd',
        comment: 'lololhdhdhd'
    },
    {
        id: uuid(),
        username: 'Thdhdodd',
        comment: 'lolol'
    },
]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new');
})

app.post('/comments',(req,res)=>{
    const {username, comment}=req.body;
    comments.push({username,comment, id: uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const comment=  comments.find(c=>c.id ===id);
    res.render('comments/show',{comment})
})

app.get('/comments/:id/edit', (req,res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})


app.patch('/comments/:id',(req,res)=>{
    const {id} = req.params;
    const newCommentText =req.body.comment;
    const foundComment=  comments.find(c=>c.id===id);
    foundComment.comment =newCommentText
    res.redirect('/comments')
    
})

app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params;
    // const foundComment = comments.find(c => c.id ===id)
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments')
})

app.get('/tacos',(req,res)=>{
    res.send('Xin chao')
    // GET /tacos response'
})
app.set('view engine','ejs')
app.post('/tacos',(req,res)=>{
    const {meat,qty }=req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)

})
// app.post('/tacos',(req,res)=>{
//     res.send('POST /tacos response')
// })

app.listen(3000,()=>{
    console.log('ON PORT 3000')
})