import React from "react";
import "./product-component.css";
import { IProduct } from "../dashboard-component/dashboard-component";

const ProductComponent = ()=>{
    return(
        <div className="product-container">
            <div className="product-heading">Tide Powder</div>
            <div>
                {/* <img src="../../../public/assets/Tide_Logo.png" alt="tide image"/> */}
            </div>
            <div className="product-description">
            Tide is an American brand of laundry detergent manufactured and marketed by Procter & Gamble. Introduced in 1946, it is the highest-selling detergent brand in the world, with an estimated 14.3 percent of the global market
            </div>
            <div>
                <button/>
            </div>
        </div>
    )
}

export default ProductComponent;