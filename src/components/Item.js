import React from "react";
import {showFormattedDate} from "../utils/index"

function Item({id, title, body, createdAt, archived, onDelete, onArchive }) {
  const onDeleteItem = () => onDelete(id);
  const onArchiveItem = () => onArchive(id);

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={onDeleteItem}>Hapus</button>
        <button className="note-item__archive-button" onClick={onArchiveItem}>{archived ? "Pindahkan" : "Arsipkan"}</button>
      </div>
    </div>
  );
}

export default Item;