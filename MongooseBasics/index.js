const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('CONNECTION OPEN!!!')
})
.catch(err =>{
    console.log('OH NO ERROR!!!!')
    console.log(err)
})
{
    title: 'Amadeus';
    year : 1986;
    score: 9.2;
    rating: 'R'

};

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String

})

const Movie = mongoose.model('Movie',movieSchema);
new Movie ({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})