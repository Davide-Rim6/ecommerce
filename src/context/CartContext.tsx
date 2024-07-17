import React, { useContext, useState} from "react";
import Cart from "../interface/CartInterface";
import { Product } from "../interface/productinterface";



interface CartContextProps{
    cart: Cart[];
    totalItems: number;
    addToCart: ( product: Product, amount: number) =>void;
}

const CartContext = React.createContext<CartContextProps|undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode}) => {
     
    const [cart, setCart] = useState<Cart[]>([]);

    const addToCart = (product: Product, amount: number) => {

        setCart((prevCart) => {
            const existingCartItem = prevCart.find((item) => item.product.id === product.id);
            let updatedCart;
            if (existingCartItem) {
                updatedCart = prevCart.map((item) => 
                item.product.id === product.id
                ? { ...item, amount: item.amount + amount}
                    : item
                );
            } else{
                updatedCart = [...prevCart, { product, amount }];
            }


            return updatedCart;

        });
    };

const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

return(
  <CartContext.Provider value={{ cart, totalItems, addToCart}}>
    {children}
  </CartContext.Provider>
);
};
export const useCart = (): CartContextProps => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};