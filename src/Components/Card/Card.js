import React, { Component } from "react";
import Data from "../../Data";
import "./Card.css";
import moment from "moment";
import image from "../../Images/ferdinand.jpg";

class Card extends Component {
  state = Data;

  render() {
    console.log(this.state);
    return (
      <>
        {this.state.livestock.map((livestock, index) => (
          <div className='card' key={index}>
            <img className='cardImage' src={image} alt='' />
            <h2>{livestock.name}</h2>
            <div className='cardContainer'>
              <ul>
                <li className='left'>Born: {livestock.birthdate}</li>
                <li className='left'>
                  Age: {moment(livestock.birthdate).fromNow(true)}
                </li>
                <li className='left'>Height: {livestock.height} </li>
                <li className='left'>Weight: {livestock.weight} </li>
                <li className='left'>Breed: {livestock.breed} </li>
                <li className='left'>Chondro: {livestock.chondro} </li>

                <li className='right'>Temperament: {livestock.temperament} </li>
                <li className='right'>Dam: {livestock.dam} </li>
                <li className='right'>Sire: {livestock.sire} </li>
                <li className='right'>Sex: {livestock.sex} </li>
                <li className='right'>Color: {livestock.color} </li>
                <li className='right'>Bio: {livestock.bio} </li>
              </ul>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Card;
