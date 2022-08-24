import React from 'react';
import SearchBar from './SearchBar';
import Item from './Item';
import { getInitialData, showFormattedDate } from '../utils/index';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }
    }
    
    render() {

        let notes = this.state.notes;
        
        return (
            <>
                <h1>Notes</h1>
                <SearchBar />
            </>
        );
    }
}

export default App;