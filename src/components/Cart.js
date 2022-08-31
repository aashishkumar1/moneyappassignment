import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getDiscount, removeDataFromCartHandler, totalAmoun } from '../Redux/Products/action';
import styles from './Cart.module.css'

const Cart = () => {
  const cart = useSelector(state=> state.cart);
  const coupon = useSelector(state=> state.coupon);
  const totalAmount = useSelector(state=> state.totalAmount);
  const dispatch = useDispatch();
  if(cart.length ===0)
  {
    const ctx = ()=>{
      dispatch(totalAmoun())
    }
    ctx();
  }

  return (
    <div className={styles.cart}>
      <div className={styles.boxes}>
        {cart.length === 0 ?  <div>Empty Cart</div> : cart.map((item)=>{
        return (
        <div key={item.id}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={()=>{dispatch(removeDataFromCartHandler(item))}}>Delete</button>
        </div>
         )
        })}
      </div>
      <div className={styles.orderSummary}>
        <div>ORDER SUMMARY</div>
        {cart.length > 0 && (
          <div className={styles.discount}>
            <div>Get Discount of $10: </div>
            <div>{coupon === true? "Coupon code applied" : <button onClick={()=>{dispatch(getDiscount())}}>MONEYYAPP</button>}</div>
          </div>
        )}
        <div>TOTAL AMOUNT: {cart.length === 0 ? 0 : totalAmount.toFixed(2)}</div>
      </div>
    </div>
  )
}

export default Cart