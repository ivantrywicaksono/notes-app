import React from 'react';
import ConditionalRender from './ConditionalRender'
import SearchBar from './SearchBar';
import Item from './Item';
import { getInitialData, showFormattedDate } from '../utils/index';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTitle: "",
      notes: getInitialData(),
    }

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    console.log("delete");
    console.log(this.state.notes);
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
    console.log(this.state.notes);
  }
    
  render() {

    let notes = this.state.notes;

    let activeNotes = notes.filter(note => !note.archived)
    let archivedNotes = notes.filter(note => note.archived)
        
      return (
        <>
          <div className='note-app__header'>
            <h1>Notes</h1>
            <SearchBar />
          </div>

          <div className='note-app__body'>
            <section>
              <h2>Active Notes</h2>
              <ConditionalRender condition={activeNotes.length > 0}>
                <List notes={activeNotes} onDelete={this.onDeleteEventHandler}/>
              </ConditionalRender>
            </section>

            <section>
              <h2>Archive</h2>
              <ConditionalRender condition={archivedNotes.length > 0}></ConditionalRender>
            </section>
          </div>
        </> 
      );
    }
}

export default App;