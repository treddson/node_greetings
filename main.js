
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// const greetings = require("./greeting");
// const response = require("./greeting_response");



const argv = yargs.argv
let command = argv._[0];
console.log('Command:', command);
console.log('Yargs:', argv);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title already taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNote(argv.title);
} else if (command === 'delete') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}