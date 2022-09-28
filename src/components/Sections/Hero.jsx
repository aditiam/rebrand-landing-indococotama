import header_video from "../../assets/videos/header.mp4"

function Hero() {
    return(

        <section className="hero">
            <video className="video" src={header_video} autoPlay loop muted/>
                <div className="header-overlay">
                   <article className="hero-content">
                        <article>
                            <h2 className="hero-heading-text">Indococotama</h2>
                            <h1 className='hero-heading-text'>Leading Supplier of Coconut Product. <br/> Coconut from Indonesia</h1> 
                        </article>
                        <a href="#product" className='hero-button'>Browse Product</a>
                    </article>
                </div>
        </section>
    )
}

export default Hero