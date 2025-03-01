import puppeteer, { Browser } from "puppeteer";
import node_path from 'node:path';

import GUI from './views/content/secondary/index.mjs';

const browser = await puppeteer.launch({
    args: [
        `--app=file:///${node_path.join(import.meta.dirname, 'index.html')}`,
        '--start-maximized'
        /* '--start-fullscreen' */// DEV_NOTE # start in fullscreen mode (optional)
    ],
    headless: false, //  DEV_NOTE# set to false to see the browser.
});

const pages = await browser.pages();
pages.at(0).evaluate(()=>{
    if (document){
        document.title = 'Puppetron'
    }
});

if (pages.at(0)){
    GUI.init({
        width: 300,
        height: 200,
    })
}

//await browser.close(); // close the browser when finished.