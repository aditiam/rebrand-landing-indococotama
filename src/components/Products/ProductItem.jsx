import React, { useEffect } from "react";
import { useLocation } from "react-router-dom"
import listProducts from '../../utils/data'

const ProductItem = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        listProducts.map((data, key) => {

            console.log(data)

            return location.pathname === data.slug ?
                <section key={key} className="section-product-item" id="product-item">
                    <div className="product-item-info">
                        <h2 className="product-item-title">
                            {data.productName}
                        </h2>
                        <div className="img-product-item">
                            <img src={data.productImg} alt={data.productName} />
                        </div>
                        <p className="product-item-subtitle">{data.productDesc}</p>
                        {/* <div className="product-item-info-content">
                            <div className="product-item-item">
                                <h4 className="contact-type">Mail :</h4>
                                <p className="contact-type-text">marketing@indococotama.com</p>
                            </div>
                            <div className="product-item-item">
                                <h4 className="contact-type">Phone :</h4>
                                <p className="contact-type-text">+62 81313355535</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="contact-form-section">

                    </div>
                </section>

                : <div key={key}></div>


        })
    )
}
export default ProductItem