function contact (){

    return(
        <section className="section-contact" id="contact">
            <div className="contact-info">
                <h2 className="contact-title">
                    Get in Touch With Us
                </h2>
                <p className="contact-subtitle">If you have any question or need any assitance after business hours please get in touch.</p>
                <div className="contact-info-content">
                    <div className="contact-item">
                        <h4 className="contact-type">Mail :</h4>
                        <p className="contact-type-text">marketing@indococotama.com</p>
                    </div>
                    <div className="contact-item">
                        <h4 className="contact-type">Phone :</h4>
                        <p className="contact-type-text">+62 81313355535</p>
                    </div>
                </div>
            </div>
            <div className="contact-form-section">
                <form>
                    <article className="form-body">
                    <label className="form-label">
                        Your Name
                        <input className="form-input" type="text" placeholder="John Doe"/>
                    </label>
                    <label className="form-label">
                        Your Email
                        <input className="form-input" type="email" placeholder="johndoe@company.com"/>
                    </label>
                    <label className="form-label">
                        Your Message or Inquery
                        <input className="form-input" maxLength="250" type="text" rows="2" placeholder="if you have any question or need any assitance or inquiry"/>
                    </label>
                    <input type="submit" value="Send us message or inquiry"/>
                    </article>
                </form>
            </div>
        </section>

    )


}
export default contact

