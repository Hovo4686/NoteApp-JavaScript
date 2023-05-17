const but = document.getElementById('but');
const bot = document.getElementById('bot');

function  createNoteEl (id, content) {
    const element = document.createElement ('textarea');
    element.classList.add('note');
    element.placeholder = 'Empty Note';
    element.value = content;

    element.addEventListener ('dblclick', () => {
        const warning = confirm('Do you want to delete this note?');
        if (warning) {
            deleteNote(id, element);
        }
    });
    element.addEventListener("input", () => {
    updateNote(id, element.value);
    });
    return element;  
}
function deleteNote(id, element) {
    const notes = getNotes().filter((note)=>note.id != id)
    but.removeChild(element)
}
function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
 }
 function addNote() {
    const notes = getNotes();
    const noteObj = {
      id: Math.floor(Math.random() * 100000),
      content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    but.insertBefore(noteEl, bot);
  
    notes.push(noteObj);
  }
  function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
  }
  
  function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
  }
  
  bot.addEventListener("click", addNote);