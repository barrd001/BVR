import React, { Component } from "react";
import Data from "../../Data";
import "./Card.css";
import moment from "moment";

class Card extends Component {
  state = Data;

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.livestock.map((livestock, index) => (
          <div className='card' key={index}>
            <div className='flipcard'>
              <div className='flipcardFront'>
                <img className='cardImage' src={livestock.image} alt='' />
                <h2>{livestock.name}</h2>
              </div>
              <div className='flipcardBack'>
                <h1 className='cardName'>{livestock.name}</h1>
                <ul className='info'>
                  <li>Born: {livestock.birthdate}</li>
                  <li>Age: {moment(livestock.birthdate).fromNow(true)}</li>
                  <li>Height: {livestock.height} </li>
                  <li>Weight: {livestock.weight} </li>
                  <li>Breed: {livestock.breed} </li>
                  <li>Chondro: {livestock.chondro} </li>

                  <li>Temperament: {livestock.temperament}</li>
                  <li>Dam: {livestock.dam} </li>
                  <li>Sire: {livestock.sire} </li>
                  <li>Sex: {livestock.sex} </li>
                  <li>Color: {livestock.color} </li>
                  <li>{livestock.bio} </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
