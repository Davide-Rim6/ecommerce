import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import RoundedButton from "./RoundedButton";
import "../css/Header.css";
import CartIcon from "../asset/Immagini/Image20240719110258.png"

export function Header() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className="header">
      <h1>CIBO AMERICANO DU ZU' DAVIDE E ZU' JOSHUA</h1>
      <div className="right-buttons">
        <RoundedButton
          label={totalItems > 0 ? totalItems.toString() : "0"}
          icon={CartIcon}
          onClick={() => navigate("/cart")}
        />
      </div>
    </div>
  );
}