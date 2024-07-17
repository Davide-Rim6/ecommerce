import { Product } from "../interface/productinterface";
import RoundedButton from "./RoundedButton";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: Product}){
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCart();
    return (
        <>
        <div>
        <div>
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
        <div>
            <RoundedButton label="Add to cart" 
            onClick={() => {
                addToCart(product, amount);
                setAmount(1);
            }} />
        </div>
        
        </div>
        </>
    );
}