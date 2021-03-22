import React from 'react';
import CardContainer from '../../components/CardsContainer';
import Navbar from '../../components/Navbar';

function cards() {
  return (
    <>
      <Navbar />
      <div style={{minHeight:"50px"}}/>
      <CardContainer/>
    </>
  );
}

export default cards;