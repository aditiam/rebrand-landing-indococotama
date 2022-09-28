import logo from "../assets/img/logo-indococotama.svg"

const Footer = () => {
    return(
        <footer className="footer-section">
            <section className="footer-section-container">
                <div className="footer-column-1">
                    <img src={logo} alt="indococotama logo"/>
                    <h1 className="footer-title"> Leading Supplier of Coconut Product. Coconut from Indonesia</h1>
                </div>
                <div className="footer-column-menu">
                    <h3 className="footer-column-title">Our product</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-items">
                            Coco Peat
                        </li>
                        <li className="footer-menu-items">
                            Coco Fiber
                        </li>
                        <li className="footer-menu-items">
                            Charcoal Briquette
                        </li>
                        <li className="footer-menu-items">
                            Semi Husked Coconut
                        </li>
                    </ul>
                </div>
                <div className="footer-column-menu">
                <h3 className="footer-column-title">Legal</h3>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-items">
                            Term of Use
                        </li>
                        <li className="footer-menu-items">
                            Term & Condition
                        </li>
                        <li className="footer-menu-items">
                            Privacy & Cookies
                        </li>
                    </ul>
                </div>
                <div className="footer-column-menu">
                    <ul className="footer-menu-list">
                        <li className="footer-menu-items">
                            <h3 className="footer-column-title"> Mail :</h3>
                            marketing@indococotama.com
                        </li>
                        <li className="footer-menu-items">
                            <h3 className="footer-column-title"> Phone :</h3>
                            +62 81313355535
                        </li>
                    </ul>
                </div>

            </section>
        </footer>
    )
}

export default Footer