import { Container, Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer(){
    let fcss={
        marginTop:'5%',
        borderTop:'1px solid #ccc'
    }

    return(
        <div style={fcss}>
            <Container>
                <div className="footer_top">
                    <div className="inner">
                        <h2>STORE</h2>
                        <ul>
                            <li><a href="#">WHOLESALE</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="inner">
                        <h2>NEWSLETTER</h2>
                        <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                        <input type="text" id="email" name="email" placeholder="Enter your email address"/>
                        <Button variant="outline-dark" className="subscribe">SUBSCRIBE</Button>{' '}
                    </div>
                    <div className="inner">
                        <h2>CONTACT US</h2>
                        <p>hello@bornn.com.tr</p>
                        <p>Cemil Topuzlu Cad 33 34726 Kadikoy Istanbul</p>
                        <FaFacebookF className="icon"/>
                        <FaInstagram className="icon"/>
                    </div>
                    <div className="inner">
                        <h2>COLLECTIONS</h2>
                        <ul>
                            <li><a href="#">Colorama</a></li>
                            <li><a href="#">Island Breeze</a></li>
                            <li><a href="#">New Marble</a></li>
                            <li><a href="#">Kids & Family</a></li>
                            <li><a href="#">Candles</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_bottom">
                    <a href="#">© BORNN ENAMELWARE</a>
                </div>
            </Container>
        </div>
    )
}

export default Footer;