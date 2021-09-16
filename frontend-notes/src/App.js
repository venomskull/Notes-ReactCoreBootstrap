import React from 'react';
import './App.css';
import { NewNoteModal } from './components/NoteModal';
import {NotesTable} from './components/NotesTable';

const App = () => {
  return (
    <div className="App">
      <h3>My Notes</h3>
      <div style={{margin: 'auto', maxWidth: '70%'}}>
        <div style={{textAlign: 'right', marginBottom: 10}}>
          <NewNoteModal  />
        </div>
        <NotesTable />
      </div>
    </div>
  );
}

export default App;
