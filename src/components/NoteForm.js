import React from "react";

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onTitleChange(event) {
    this.setState({title: event.target.value});
  }

  onBodyChange(event) {
    this.setState({body: event.target.value});
  }

  onSubmitForm(event) {
    event.preventDefault();
    
    this.props.onAdd({...this.state});
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input onChange={this.onTitleChange} className="note-input__title" type="text" placeholder="Tuliskan judul catatan ..." required value={this.state.title}/>
        <textarea onChange={this.onBodyChange} className="note-input__body" placeholder="Tuliskan catatanmu di sini ..." required value={this.state.body}/>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteForm;