import { Nav, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Product(props){
    let navigate = useNavigate();
    let [isColoramaHover, setIsColoramaHover] = useState(false);

    return(
        <Col md={3}>
            <Nav.Link onClick={() => {
                navigate('/colorama/' + props.res[props.i])
            }} onMouseOver={()=>{setIsColoramaHover(true)}} onMouseOut={()=>{setIsColoramaHover(false)}} className="c1">
                <div className="product_img">
                    <img src={process.env.PUBLIC_URL +'/'+ (isColoramaHover ? props.ceramics.hoverimg : props.ceramics.imgUrl)} alt='item'/>
                </div>
                <p>{props.ceramics.title}</p>
                <p>{props.ceramics.price}</p>
            </Nav.Link>
        </Col>
    )
}

export default Product;