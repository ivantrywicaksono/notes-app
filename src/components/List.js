import React from "react";
import Item from "./Item";

function List({items, onDelete, onArchive}) {
  return (
    <div className="notes-list">
      {
        items.map(note => (<Item key={note.id} {...note} onDelete={onDelete} onArchive={onArchive}/>))
      }
    </div>
  );
}

export default List;