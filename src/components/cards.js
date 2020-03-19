import React from 'react'
import CardsItem from './cardsItem';
import CountrySelector from './countrySelector';

const Cards = () => {

  return (
    <section>
      <div className="container">
        
        <div className="cards v-center">
          
          
          <div className="cards__left">
          <h2>Latest Result</h2>
            <CardsItem url="https://covid19.mathdro.id/api" />
          </div>

          
          <div className="cards__right">
            <CountrySelector />
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Cards;
