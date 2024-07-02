import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"
// LOGIC FOR ADD TO CART WAS DONE IN THIS COMPONENT

export const ShopContext = createContext(null);

const getDefaultCart = () =>{//THIS FUNCTIONS SET ALL THE ITEMS IN THE CART TO ZERO
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {//why was +1 added to length
        cart[i] = 0;//SINCE CART IS AN OBJECT THE INDEX WILL BE USED ASS KEY(PRODUCT ID) WHILE VALUE WILL BE ZERO(ALSO THE NUMBER OF ITEMS ADDED FOR THAT PARTICULAR PRODUCT ID)
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart());//THIS CALL THE GET DEFAULTCART FUNCTION AND ASSIGN THE RETURN VALUE TO CartItems

    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))//so itemId is the index(and key), while prev[itemId]+1 will udate the value of the object whenever the fuction is called will ,setCartItems will take the prev value of the cart using the spread(...)and then update the value of the prev object with the itemId passed as a parameter as its key
        // console.log(cartItems);
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmount=0;
        for(const item in cartItems){//ITEM HERE REPRESENTS THE INDEX(ITS ALSO THE KEY OF EACH OBJECT IN THE ARRAY cartItems)
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0
        for(const item in cartItems){//ITEM HERE REPRESENTS THE INDEX(ITS ALSO THE KEY OF EACH OBJECT IN THE ARRAY cartItems)
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};//WITH THE SHOPCONTEXT HOOK YOU CAN PASS THE CART TO ANY COMPONENT YOU WANT

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}



export default ShopContextProvider;