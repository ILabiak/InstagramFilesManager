'use strict';

var fs = require('fs')


let linesArray = fs.readFileSync('Instagram.txt', 'utf8').split('\n');
let res = [];
let ditectory = __dirname;
const regexp = /S - .../
const sortfn = (arr) => {


    for (const el of arr) {
        res.push(el);
    }
    return res;
}
const moveFiles = (arr) => {
    for (const el of arr) {
        if (el.includes('PROFILE')) {
            let name = el.slice(40).replace(' || PHONE_VERIF - True || SUBSCRIBERS', '')
                .replace(' || PHONE_VERIF - False || SUBSCRIBERS', '').slice(0, -1).concat('.txt')

            let temp = res[res.indexOf(el) + 1].replace('Cookie:', `${ditectory}\\`)
                .split("\\").join("/")
                .slice(0, -1);

            let index = temp.lastIndexOf('/');
            let temp1 = ditectory.split("\\").join("/").concat('/res/', name)

            console.dir(temp);
            console.dir(temp1);
            fs.rename(temp, temp1, function(err) {
                if (err) console.log('not found')
                console.log('Successfully renamed - AKA moved!')
            })
        }
    }
}
sortfn(linesArray);
moveFiles(res);




















//