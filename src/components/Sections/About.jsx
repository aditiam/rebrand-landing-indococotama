import about_image from "../../assets/img/about-image.png"


function about() {

    return (

        <section className="section-about" id="about">
            <div className="section-about-content-1">
                <h3 className="section-about-subtitle">WHO WE ARE</h3>
                <h1 className="section-about-title">About Indococotama</h1>
                <p className="section-about-text">Indo Coco Tama is a trader company from Indonesia which supplies coconut derivative products. We provide coco fibers, coco peats, coconut charcoal briquette, and semi husked coconut to be exported overseas.
                    We are supported by Indonesian Coconut Farmers and supported by around 8 partners factory.
                </p>
                <a className="section-about-cta" href="google.con">Learn More</a>
            </div>
            <div className="section-about-content">
                <img src={about_image} className="about-image" alt="Farmer Cocoa" />
            </div>
        </section>
    )


}
export default about