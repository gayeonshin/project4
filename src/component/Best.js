import { Nav, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Best(props){
    let navigate = useNavigate();
    let [isBestHover, setIsBestHover] = useState(false);
       
    return(
        <Col md={3}>
            <Nav.Link onClick={() => {
                navigate('/best/' + props.res[props.i])
            }} onMouseOver={()=>{setIsBestHover(true)}} onMouseOut={()=>{setIsBestHover(false)}} className="c1">
                <div className="best_img">
                    <img src={process.env.PUBLIC_URL +'/'+ (isBestHover ? props.best1.hoverimg : props.best1.imgUrl)} width='80%' margin='0 10%' alt='item2' />
                </div>
                <p>{props.best1.title}</p>
                <p>{props.best1.price}</p>
            </Nav.Link>
        </Col>
    )
}

export default Best;