//const debug = require('debug')('app');
//require('dotenv').config()
const axios = require('axios');
const cheerio = require('cheerio');

async function main(){
    const data = await axios('https://bikroy.com/').then(res => res.data);
    const $ = cheerio.load(data); 
    console.log($('h1').text())

}

main()

