import React, { useState, useEffect, useContext } from 'react';
import Card from '../Card';
import { Container, AddNewList, AddNewListActive, Cards, Wrapper, CardsContainer, CardToAdd } from './styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { CSSTransition } from 'react-transition-group';
import db from '../../firebase'
import { Context } from '../../ContextProvider';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function CardContainer() {
  const [MenuNow, setMenuNow] = useState('main')
  const [isActive, setIsActive] = useState(false)
  const [listName, setListName] = useState('')
  const [list, setList] = useState([])
  const [user, setUser] = useContext(Context);

  useEffect(() => {
    if (user.uid) {
      db.collection("accounts")
      .doc(user.uid)
      .collection("boards")
      .onSnapshot(snapshot => {
        console.log(snapshot.docs)
        setList(snapshot.docs.map(doc => (
          {
            id: doc.id,
            data: doc.data()
          }      
        )
       ))
    });
  }
  }, [user.uid])

  const handleNewList = () => {
    if ( listName.length > 0 ) {
      db.collection("accounts").doc(user.uid).collection("boards").add({
        boardName: listName
      })

      setListName("") 
    }
  }

  const onDragStart = tmp => {};

  const onDragEnd = result => {
    if (!result.destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setList(items);
  };

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <Container>
        <CardsContainer>
          <Droppable droppableId="board" type="COLUMN" direction="horizontal">
            {provided => (
              <Cards ref={provided.innerRef} {...provided.droppableProps}>
                {
                  list.map(item => 
                    <Wrapper key={item.data.boardName}>
                      <Card name={item.data.boardName} id={item.id}/>  
                    </Wrapper>
                  )
                }
              </Cards>
            )}
          </Droppable>
        </CardsContainer>
        <CardToAdd>
                <CSSTransition 
                  in={MenuNow === 'main'}
                  unmountOnExit 
                  timeout={500} 
                  classNames="menu-primary"
                >
                  <AddNewListActive>
                    <input value={listName} onChange={e => setListName(e.target.value)} placeholder="Enter list title..."/>
                    <div className="buttons">
                      <button onClick={() => handleNewList()}>
                        Add list
                      </button>
                      <ClearIcon onClick={() => setMenuNow('second')}/>
                    </div>
                  </AddNewListActive>
                </CSSTransition>
                <CSSTransition 
                  in={MenuNow === 'second'}
                  unmountOnExit 
                  timeout={500} 
                  classNames="menu-secondary"
                >
                  <AddNewList  onClick={() => setMenuNow('main')}>
                    <AddIcon/>
                    Add another list
                  </AddNewList>
                </CSSTransition>
        </CardToAdd>
      </Container>
    </DragDropContext>
  );
}

export default CardContainer;