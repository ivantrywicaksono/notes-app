import React from "react";
import Item from "./Item";

function List({notes, onDelete}) {
  return (
    <div className="notes-list">
      {
        notes.map(note => (<Item key={note.id} {...note} onDelete={onDelete}/>))
      }
    </div>
  );
}

export default List;