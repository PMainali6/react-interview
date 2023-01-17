import { useEffect, useState } from 'react';
import "./cart.css";

const Cart = ({ state, dispatch }) => {
    const [total, setTotal] = useState(0);
    
    const handleQuantityChange = (id, type) => {
        if(type === '+') {
            dispatch({
                type: 'INCREASE_QUANTITY',
                payload: id
            })
        } else {
            dispatch({
                type: 'DECREASE_QUANTITY',
                payload: id
            })
        }
    }

    useEffect(() => {
        const reduceTotal = (state, { price, quantity }) => {
            return state + price*quantity
        }
        setTotal(state.cart.reduce(reduceTotal, 0))
    }, [state.cart])

    return (
        <div className="cart-container">
            <div className="header">
                <div>Cart</div>
                <div>SubTotal: $ {total}</div>
            </div>
            <div className="cart-product-list">
                {state.cart.map(({id, title, thumbnail, price, quantity}) => {
                    return (
                        <div key={id} id={id} className="cart-product">
                            <img src={thumbnail} alt={title} 
                            style={{height: 50, width: 50, objectFit: "cover"}} 
                            />
                            <div className="price-action-container">
                                <div style={{ marginRight: 10 }}><b>{price}</b></div>
                                <div className="quantity-selector">
                                    <button style={{ padding: 10 }} onClick={() => handleQuantityChange(id, '+')}>
                                        <h1>+</h1>
                                    </button>
                                    <div style={{ margin: 15 }}>{quantity} </div>
                                    <button disabled={quantity === 1 } style={{ padding: 10 }} onClick={() => handleQuantityChange(id, '-')}>
                                        <h1>-</h1>
                                    </button>
                                </div>
                            </div>

                        </div>
                    )
                    })}
            </div>
        </div>
    )
}

export default Cart;