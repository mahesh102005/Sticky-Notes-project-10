document.getElementById('add-note').addEventListener('click', addNote);

function addNote() {
    const noteText = document.getElementById('note-input').value;
    if (!noteText) return;

    const noteElement = createNoteElement(noteText);
    document.getElementById('notes').appendChild(noteElement);
    document.getElementById('note-input').value = '';
}

function createNoteElement(text) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.addEventListener('change', () => {
        textarea.value = textarea.value.trim();
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        noteDiv.remove();
    });

    noteDiv.appendChild(textarea);
    noteDiv.appendChild(deleteButton);

    return noteDiv;
}
