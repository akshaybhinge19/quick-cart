import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Snackbar = () => {
    return (
        <div id="snackbar" className="icon-container">
            <IoMdCheckmarkCircleOutline/>
            <span>Product Added Successfully</span>
        </div>
    )
}

export default Snackbar;