import React from 'react';
import ConditionalRender from './ConditionalRender'
import List from './List';
import NoteForm from './NoteForm';
import { getInitialData } from '../utils/index';

// Menampilkan items: X
// Menghapus items: X
// Menambahkan items: X
// Pakai Bahasa Indonesia: X

// Limit Karakter Input Judul: 
// Fitur Pencarian: 
// Archive: 
// SVG Delete, Archive: 
// Buat button component

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onAddEventHandler = this.onAddEventHandler.bind(this);
    this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
  }

  onAddEventHandler({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            title,
            body,
            id: Date.now(),
            archived: false,
            createdAt: new Date().toISOString(),
          }
        ]
      }
    });
  }

  onDeleteEventHandler(id) {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  onArchiveEventHandler(id) {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.archived = !note.archived;
          return note;
        }

        return note;
      })
    });
  }
    
  render() {

    let notes = this.state.notes;

    let activeNotes = notes.filter(note => !note.archived)
    let archivedNotes = notes.filter(note => note.archived)
        
      return (
        <>
          <div className='note-app__header'>
            <h1>Notes</h1>
          </div>

          <div className='note-app__body'>
            <div className='note-input'>
              <h2>Buat Catatan</h2>
              <NoteForm onAdd={this.onAddEventHandler}/>
            </div>
            <section>
              <h2>Catatan Aktif</h2>
              <ConditionalRender condition={activeNotes.length > 0}>
                <List items={activeNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler}/>
              </ConditionalRender>
            </section>

            <section>
              <h2>Arsip</h2>
              <ConditionalRender condition={archivedNotes.length > 0}>
                <List items={archivedNotes} onDelete={this.onDeleteEventHandler} onArchive={this.onArchiveEventHandler}/>
              </ConditionalRender>
            </section>
          </div>
        </> 
      );
    }
}

export default App;