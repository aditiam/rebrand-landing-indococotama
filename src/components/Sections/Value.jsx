import synergy_icon from "../../assets/img/icon/synergy-icon.png"

function value() {

    return (
        <section className="section-value">
            <article className="section-value-container">
                <h2 className="section-value-subtitle">indococotama value</h2>
                <h3 className="section-value-title">Synergy, Trust and Continous Improvement</h3>
                <div className="section-value-content">
                    <article className="value-card">
                        <img src={synergy_icon} className="value-icon" alt="synergy-icon" />
                        <h4 className="value-title"> Synergy </h4>
                        <p className="value-text">Synergy means an interaction or cooperation from each part involved to achieve a common goal that is greater than the simple sum of its parts.</p>
                    </article>
                    <article className="value-card">
                        <img src={synergy_icon} className="value-icon" alt="synergy-icon" />
                        <h4 className="value-title"> Trust </h4>
                        <p className="value-text">We are committed to always keeping the trust of our customers and partners by provide the best quality of our products and provide a good service.</p>
                    </article>
                    <article className="value-card">
                        <img src={synergy_icon} className="value-icon" alt="synergy-icon" />
                        <h4 className="value-title"> Continous Improvement</h4>
                        <p className="value-text">Continuous improvement means we are always developing and improving our business in order to fulfill our customer needs and satisfaction.</p>
                    </article>
                </div>
            </article>
        </section>


    )


}
export default value