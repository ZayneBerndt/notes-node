var addNote = (title, body) => {
  console.log('Adding Note', title, body);
};

var getAll = () => {
  console.log('Getting all  notes');
};

var getNote = (title) => {
    console.log('Getting notes', title);
};

var removeNote = (title) => {
  console.log ('Removed note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
