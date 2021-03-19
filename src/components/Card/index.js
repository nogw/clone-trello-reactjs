import React, { useState, useRef, useEffect, useContext } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add';
import { Container, Header, Add, Content, AddNewCard } from './styles';
import ClearIcon from '@material-ui/icons/Clear';
import db from '../../firebase'
import firebase from 'firebase';
import { Context } from '../../ContextProvider';

function Card({ name, id }) {
  const [cardContent, setCardContent] = useState('')
  const [isEdditing, setIsEdditing] = useState(true);
  const [cards, setCards] = useState([])
  const [user, setUser] = useContext(Context);
  const textareaRef = useRef()

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
        cards.map(item =>
          <Content key={item.id} id={item.id}>
            {item.data.cardItem}
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