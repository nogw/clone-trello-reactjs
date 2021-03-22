import React, { useState, useRef, useEffect, useContext } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { Container, Header, Add, Content, AddNewCard, ContentContainer } from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import db from '../../firebase'
import firebase from 'firebase';
import { Context } from '../../ContextProvider';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function Card({ name, id }) {
  const [cardContent, setCardContent] = useState('')
  const [isEdditing, setIsEdditing] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [cards, setCards] = useState([])
  const [user, setUser] = useContext(Context);
  const textareaRef = useRef()

  const autoResize = e => {
    textareaRef.current.style.height = `auto`;
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    setCardContent(e.target.value)
  }

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

  const handleAddCard = () => {
    if ( cardContent.length > 0 ) {
      db.collection("accounts").doc(user.uid).collection("boards").doc(id).collection('cards').add({
        cardItem: cardContent,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })

      setCardContent("") 
    }
  }

  const onEnterPress = e => {
    console.log(e)
    if (e.code === 'Enter') {
      e.preventDefault();
      handleAddCard()
      textareaRef.current.style.height = `auto`;
      return false;
    }
  }

  const handleOnDragEnd = (result) => {

    if (!result.destination) return;

    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
  }

  const removeItem = (idRemove) => {
    db.collection("accounts").doc(user.uid).collection("boards").doc(id).collection('cards').doc(idRemove).delete();
  }

  const removeCard = (idRemove2) => {
    db.collection("accounts").doc(user.uid).collection("boards").doc(idRemove2).delete();
    setIsActive(!isActive)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActive(true)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [isActive])

  return (
    <DragDropContext onDragEnd={e => handleOnDragEnd(e)}>
      <Container>
        <Header>
          <h1>{name}</h1>
          <div className="icon">
            {
              isActive ? (
                <MoreHorizIcon onClick={() => setIsActive(!isActive)}/>
              ) : (
                <DeleteIcon className="trash" onClick={() => removeCard(id)}/>
              )
            }
          </div>
        </Header>
        
        <Droppable droppableId={`draggable-${id}`}>
            {(provided) => (
              <div className="listCards" ref={provided.innerRef}>
                {
                  cards.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index} >
                      {(provided, snapshot) => (
                        <Content ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
                          {item.data.cardItem}
                          <DeleteIcon className="trash" onClick={() => removeItem(item.id)}/>
                        </Content>
                      )}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>

        {
          isEdditing ? (
            <Add onClick={() => setIsEdditing(!isEdditing)}>
              <h1><AddIcon/> Add a card</h1>
            </Add>
          ) : (
            <AddNewCard>
              <textarea onKeyPress={e => onEnterPress(e)} value={cardContent} cols="10" ref={textareaRef} maxLength="255" onChange={e => autoResize(e)} spellCheck="false" placeholder="Enter a title for this card..."/>
              <div className="buttons">
                <button onClick={() => handleAddCard()}>Add Card</button>
                <ClearIcon onClick={() => setIsEdditing(!isEdditing)}/>
              </div>
            </AddNewCard>
          )
        }
      </Container>
    </DragDropContext>
  );
}

export default Card;