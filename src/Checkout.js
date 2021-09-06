import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Flip/JuneEOSS/Federal_EOSS/FED-ILM-640x45._CB664021917_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item =>
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                    />)}

                </div>
            </div>
            
            <div className="checkout__right">
                <Subtotal />
                
            </div>
        </div>
    )
}

export default Checkout
