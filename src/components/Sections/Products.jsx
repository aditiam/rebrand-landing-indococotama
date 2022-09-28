import ProductCard from "../Products/ProductCard"

const Product = () =>{
    return(
        <section className="section-product" id="product">
            <h2 className="section-product-title">Our Product</h2>
            <h3 className="section-product-subtitle">We Supply Best Coconut Products from Indonesia</h3>
            <section className="product-carousel">
                <ProductCard></ProductCard>
            </section>
        </section>
    )
}
export default Product