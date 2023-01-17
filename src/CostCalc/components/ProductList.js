const ProductList = ({ state, dispatch }) => {
    const addToCart = (prod) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: prod,
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id,
        })
    }

    return (
        <div className="product-container">
            {state.products.map((prod) => {
                const {id, title, price, thumbnail} = prod;
            return (
                <div key={id} id={id} className="product">
                    <img src={thumbnail} alt={title} 
                    style={{height: 200, objectFit: "cover"}} 
                    />
                    <div className="price">
                        <div>{title}</div>
                        <b>$ {price}</b>
                    </div>
                    { state.cart.some(cartItem => cartItem.id === id) ? 
                        <button onClick={() => removeFromCart(id)}>REMOVE FROM CART</button> : 
                        <button onClick={() => addToCart(prod)}>ADD TO CART</button>
                    }
                </div>
            )
            })}
        </div>
    )
}

export default ProductList;