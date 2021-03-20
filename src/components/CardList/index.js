import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../../ContextProvider';
import db from '../../firebase'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container, Content } from './styles';

function CardList({ id }) {
  const [cards, setCards] = useState([])
  const [user, setUser] = useContext(Context);

  useEffect(() => {
    if (id) {
      db.collection("accounts").doc(user.uid).collection("boards").doc(id).collection('cards').orderBy("timestamp","asc").onSnapshot(snapshot => {
        setCards(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data()
          }      
        )
       ))
      })
    }
  }, [id])

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  }

  return (
    <>
      {
        cards.map((item, index) => {
          <Draggable 
            key={item.id}
            draggableId={item.id} 
            index={index}
          >
            {(provided) => (
              <Content 
                id={item.id}
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
              >
                {item.data.cardItem}
              </Content>
            )}
          </Draggable>
        })
      }
    </>
  );
}

export default CardList;