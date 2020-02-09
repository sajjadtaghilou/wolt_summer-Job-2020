import React from 'react';
import styles from './Card.module.css';
import { Blurhash } from "react-blurhash";

const Card = ({ restaurant }) => {
  return <div className={styles.container}>
    <Blurhash
      hash={restaurant.blurhash}
      width={"100%"}
      height={"100%"}
    />
    <img className={styles.card_img} src={restaurant.image} alt={restaurant.name} />
    <div className={styles.card_desc}>{restaurant.name}</div>
    <div className={styles.card_price}>delivery : € {restaurant.delivery_price}</div>
  </div>
}

export default Card;