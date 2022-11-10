const franc = require('franc');
// console.log(franc('Alle menslike wesens word vry'));
// import {franc, francAll} from 'franc';
const langs = require('langs')
const langCode = franc('Considerando ser essencial que os direitos humanos')

const language = langs.where('3',langCode);
console.log(language)
