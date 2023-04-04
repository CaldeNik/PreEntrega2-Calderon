import React, { useContext } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import styles from "./CartComponent.module.css"
import { CartContext } from '../../context'

export const CartComponent = () => {

  const {itemCount} = useContext(CartContext);
  
  return (
    <div className={styles.cartContainer}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon}/>
        <span className={styles.itemCount}>{itemCount.qtyItems}</span>
    </div>
  )
}
