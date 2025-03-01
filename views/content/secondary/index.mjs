import puppeteer from "puppeteer";
import node_path from 'node:path';

export default class {

    static async init({width = 300, height = 200}){

        const browser = await puppeteer.launch({
            args: [
                `--app=file:///${node_path.join(import.meta.dirname, 'index.html')}`,
                `--window-size=${width},${height}`,
            ],
            headless: false, // set to false to see the browser.
        });
        
        const pages = await browser.pages();
        pages.at(0).evaluate(()=>{
            if (document){
                document.title = 'Picture-in-Picture'
            }
        });
        
        //await browser.close(); // close the browser when finished.

    }

}