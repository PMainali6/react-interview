import React, { useEffect, useState } from 'react';
import './flexbox.css';

const array = Array(20).fill("");

function FlexBox() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = array.map((prod, i) => `Product ${i+1}`)
        setProducts(products);
    }, []);

    return(
        <div className="container">
            {!!products && 
            products.map(prod => <div key={prod} className="product">
                <h3>{prod}</h3>
                <input className="input" type="text" value="" />
                <input className="input" type="text" value="" />
                <button>SUBMIT</button>
            </div>)}
        </div>
    )
}

export default FlexBox;