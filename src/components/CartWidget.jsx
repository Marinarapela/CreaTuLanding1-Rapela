import { ShoppingBag } from "lucide-react";
import "../App.css";

function CartWidget (){
    return(
<div className="cart-container">
        <ShoppingBag size={24} />
        <span className="cart-counter">
        1
        </span>
</div>

    )
}
export default CartWidget