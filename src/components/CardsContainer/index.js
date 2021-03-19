import React, { useState, useEffect } from 'react';
import Card from '../Card';
import { Container, AddNewList, AddNewListActive, Cards, Wrapper, CardsContainer, CardToAdd } from './styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { CSSTransition } from 'react-transition-group';
import db from '../../firebase'

function CardContainer() {
  const [MenuNow, setMenuNow] = useState('main')
  const [isActive, setIsActive] = useState(false)
  const [listName, setListName] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    const getBoard = db.collection("boards").onSnapshot(snapshot => (
      setList(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }      
      )
      ))
    ));

    return () => {
      getBoard();
    }
  }, [])

  const handleNewList = () => {
    if ( listName.length > 0 ) {
      db.collection("boards").add({
        boardName: listName
      })

      setListName("") 
    }
  }

  return (
    <Container>
      <CardsContainer>
        <Cards>
          {
            list.map(item => 
              <Wrapper>
                <Card name={item.data.boardName} id={item.id}/>  
              </Wrapper>
            )
          }
        </Cards>
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
  );
}

export default CardContainer;