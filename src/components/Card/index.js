import React, { useState, useRef } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import { Container, Header, Add, Content, AddNewCard } from './styles';
import ClearIcon from '@material-ui/icons/Clear';

function Card({ name }) {
  const [cardContent, setCardContent] = useState('')
  const [isEdditing, setIsEdditing] = useState(true);
  const [card, setCard] = useState([])

  const textareaRef = useRef()

  const handleAddCard = () => {
    let value = cardContent
    value.trim().length > 0 && setCard([...card, {card: cardContent}])
    setCardContent("")
  }

  const onEnterPress = e => {
    console.log(e)
    if (e.code === 'Enter') {
      e.preventDefault();
      handleAddCard()
      return false;
    }
  }

  return (
    <Container>
      <Header>
        <h1>{name}</h1>
        <div className="icon">
          <MoreHorizIcon />
        </div>
      </Header>
      {
        card.map(item =>
          <Content>
            {item.card}
          </Content>  
        )
      }

      {
        isEdditing ? (
          <Add onClick={() => setIsEdditing(!isEdditing)}>
            <h1><AddIcon/> Add a card</h1>
          </Add>
        ) : (
          <AddNewCard>
            <textarea onKeyPress={e => onEnterPress(e)} value={cardContent} cols="10" ref={textareaRef} onChange={e => setCardContent(e.target.value)} spellCheck="false" placeholder="Enter a title for this card..."/>
            <div className="buttons">
              <button onClick={() => handleAddCard()}>Add Card</button>
              <ClearIcon onClick={() => setIsEdditing(!isEdditing)}/>
            </div>
          </AddNewCard>
        )
      }
    </Container>
  );
}

export default Card;