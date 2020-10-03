#!/usr/bin/env node
var path = require('path');
var ncp=require('ncp').ncp
let to = path.resolve('.')
var exec = require('child_process').exec;
var toCopy=['public','views','routes','app.js']
ncp.limit = 0;
toCopy.forEach(e => {
    ncp(__dirname + '\\'+e, to+'\\'+e, (err) => {
        console.log(e +' is copied')
    })
})
exec('npm init --yes')
exec('npm i express hbs ')


