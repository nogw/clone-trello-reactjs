import React, { useState } from 'react';
import Card from '../Card';
import { Container, AddNewList, AddNewListActive, Cards, Wrapper, CardsContainer, CardToAdd } from './styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import { CSSTransition } from 'react-transition-group';

function CardContainer() {
  const [MenuNow, setMenuNow] = useState('main')
  const [isActive, setIsActive] = useState(false)
  const [listName, setListName] = useState('')
  const [list, setList] = useState([
    {name: 'Today'},
    {name: 'Week'},
    {name: 'Doing'},
  ])

  const handleNewList = () => {
    listName.length > 0 && setList([...list, {name: listName}])
    setListName("")
  }

  return (
    <Container>
      <CardsContainer>
        <Cards>
          {
            list.map(item => 
              <Wrapper>
                <Card name={item.name} />  
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