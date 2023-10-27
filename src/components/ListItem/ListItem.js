import React from 'react';
import '../ToDoList/ToDoList.css';

const ListItem = ({ toDo, onDelete }) => {
  return (
    <div className="listItemSection">
      <span>{toDo.text}</span>
      <button class="buttonDelete" onClick={() => onDelete(toDo.id)}>Delete</button>
    </div>
  );
};

export default ListItem;
