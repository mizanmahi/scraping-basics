//const debug = require('debug')('app');
//require('dotenv').config()
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

async function main(){
    const data = await axios('https://bikroy.com/').then(res => res.data);
    const dom = new JSDOM(data);
    const { document } = dom.window;
    console.log(document.querySelector('h1').innerHTML);

}

main()