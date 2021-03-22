import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Content } from './styles';

function Task({ item, index }) {
  return (
    <Draggable 
      key={item.id} 
      draggableId={item.id} 
      index={index} 
    >
      {(provided) => (
        <Content 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          innerRef={provided.innerRef}
        > 
          {item.data.cardItem}
        </Content>
      )}
    </Draggable>
  );
}

export default Task;