import { Product } from "../interface/productinterface";
import RoundedButton from "./RoundedButton";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../css/GridCard.css"

export default function ProductCard({ product }: { product: Product}){
    const [amount, setAmount] = useState(1);
    const { addToCart } = useCart();
    return (
        <>
        <div className="cardcss">
        <div className="product.card">
            <img src={product.image} alt={product.name}/>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
        <div className="button">
            <RoundedButton label="Aggiungi al carrello" 
            onClick={() => {
                addToCart(product, amount);
                setAmount(1);
            }} />
        </div>
        
        </div>
        </>
    );
}