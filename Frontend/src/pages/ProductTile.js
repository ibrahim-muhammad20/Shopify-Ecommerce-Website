import React from "react";



const ProductTile = (product) => {
   
    console.log("product", product.product);
    return (
      <div className="flex w-52 h-20">
        <div className="flex flex-row mb-2 m-0">
            <img src={product.product.img} width='20px' height='20px' className="flex w-20 h-20"></img>
            {/* <text> Dummy Product Name</text> */}
            <text> 100$</text>
        </div>
      </div>
    );
};


export default ProductTile