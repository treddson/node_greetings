
const fs = require('fs');

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('note-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
   fs.writeFileSync('note-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
   let notes = fetchNotes();
   let note = {
       title,
       body
   };
   
   let duplicateNotes = notes.filter(note => note.title === title);

   if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
   } 
};

let getAll = () => {
    console.log('Getting all notes');
};

let readNote = (title) => {
    console.log('Reading all notes', title);
}

let removeNote = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
}