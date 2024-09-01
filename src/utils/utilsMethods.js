import { useDispatch } from "react-redux";
import { addToCart, updateQuantity, removeFromCart } from "./cartSlice"

const useSomeMethods = () => {
    const dispatch = useDispatch();
    
    const handdleUpdateQuantity = (id,quantity) => dispatch(updateQuantity({id,quantity}));
    const handleRemoveCart = (id) => dispatch(removeFromCart(id));
    
    
    const handleAddToCart = (e, product) => {
        e.preventDefault();
        dispatch(addToCart(product));
        const snackbar = document.getElementById("snackbar");
        snackbar.className = "show";
        setTimeout(()=> snackbar.className = snackbar.className.replace("show", ""), 3000);
    }
    return { handleAddToCart, handdleUpdateQuantity, handleRemoveCart }
}

export default useSomeMethods;
