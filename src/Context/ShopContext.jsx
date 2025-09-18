import React, { createContext } from 'react'
import all_product from '../Assets/all_product';

const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextvalue = {all_product};

    return(
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider
export {ShopContext};