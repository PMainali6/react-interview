import { useEffect, useReducer } from 'react';
import reducers, { initialState } from './reducers';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

import "./main.css";

/*
  if action is getting called twice, its coz of <React.StrictMode>, in index.js
*/
const CostCalculator = () => {
    const [ state, dispatch ] = useReducer(
        reducers,
        initialState
    )

    useEffect(() => {
        async function fetchProdcuts () {
            try {
                const res = await fetch('https://dummyjson.com/products');
                const data = await res.json();
                return data.products;
            } catch(error) {
                throw new Error(error)
            }
        }

        fetchProdcuts().then(products => {
            console.log("data: ", products);
            dispatch({ type: 'ADD_PRODUCTS', payload: products })
        });
    }, [])

    return(
        <div className="container">
            <ProductList state={state} dispatch={dispatch} />
            <Cart state={state} dispatch={dispatch} />
        </div>
        
    )
}

export default CostCalculator;


