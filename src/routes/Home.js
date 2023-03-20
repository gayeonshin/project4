import { Container, Col, Row, Button } from 'react-bootstrap';
import { useState } from 'react';
import best from '../data/best1';

import CarouselFadeExample from '../component/Carousel';
import Title from '../component/Title';
import Title2 from '../component/Title2';
import Product from '../component/Product';
import Best from '../component/Best';
import axios from 'axios';

function Home(props) {
    let [best1, setBest1] = useState(best);
    let [count, setCount] = useState(1);

    return (
        <div>
            <CarouselFadeExample />

            <div className="introduce">
                <Container>
                    <Col md={6}>
                        <div className="enamelware">
                            <h2>PIONEER OF ARTISANAL ENAMELWARE</h2>
                            <p>We take our inspiration from the fascinating history of enamelware and by using traditional manufacturing techniques that dates back to the 15th century, we design and produce modern, unique, hand crafted pieces to help keep these skills alive.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="madein">
                            <div className="turkey">
                                <img src={process.env.PUBLIC_URL + '/img/turkey.jpg'} alt="turkey" />
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>

            <Title />

            <Button variant="outline-dark" className="sort" onClick={()=>{
                let copy=[...props.ceramics].sort((a,b)=>a.title>b.title ? 1 : -1)

                props.setCeramics(copy);
                
                let res1=[];
                for(let i in copy){
                    res1.push(copy[i].id)
                }

                props.setRes(res1);
            }}>ALPHABETICALLY, A-Z</Button>{''}

            <Button variant="outline-dark" className="sort" onClick={() => {
                let copy = [...props.ceramics].sort((a, b) => a.price > b.price ? 1 : -1)

                props.setCeramics(copy);

                let res1 = [];
                for (let i in copy) {
                    res1.push(copy[i].id)
                }

                props.setRes(res1);
            }}>PRICE, LOW TO HIGH</Button>{''}

            <Button variant="outline-dark" className="sort" onClick={() => {
                let copy = [...props.ceramics].sort((a, b) => a.price < b.price ? 1 : -1)

                props.setCeramics(copy);

                let res1 = [];
                for (let i in copy) {
                    res1.push(copy[i].id)
                }

                props.setRes(res1);
            }}>PRICE, HIGH TO LOW</Button>{''}

            <Container>
                <Row>
                    {
                        props.ceramics.map((a, i) => {
                            return (
                                <Product ceramics={props.ceramics[i]} i={i} res={props.res} />
                            )
                        })
                    }
                </Row>    
            </Container>
            
            <Button variant="dark" className="collectionBtn">SHOP THIS COLLECTION</Button>{' '}

            <div className="collection">
                <Row>
                    <Col md={6}>
                        <div className="newMarble">
                            <div className="type">
                                <h2>NEW MARBLE</h2>
                                <Button variant="outline-dark" className="now">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="islandBreeze">
                            <div className="type">
                                <h2>ISLAND BREEZE</h2>
                                <Button variant="outline-dark" className="now">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="kidsFamily">
                            <div className="type">
                                <h2>KIDS & FAMILY</h2>
                                <Button variant="outline-dark" className="now">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="candles">
                            <div className="type">
                                <h2>CANDLES</h2>
                                <Button variant="outline-dark" className="now">SHOP NOW</Button>
                            </div>
                        </div>
                    </Col>
                </Row>                
            </div>

            <Title2 />

            <Container className='best'>
                <Row>
                    {
                        best1.map((ele,i)=>{
                            return(
                                <Best best1={best1[i]} />
                            )
                        })
                    }
                </Row>
            </Container>

            <Button variant="outline-dark" className='more' onClick={()=>{
                if (count === 1) {
                    axios.get('https://gayeonshin.github.io/project4_best/best2.json').then((result)=>{
                        let copy = [...best1, ...result.data];
                        setBest1(copy);
                        setCount(2);
                    })
                } else if (count === 2) {
                    axios.get('https://gayeonshin.github.io/project4_best/best3.json').then((result)=>{
                        let copy = [...best1, ...result.data];
                        setBest1(copy);
                        setCount(3);
                    })                    
                } else {
                   alert("There are no more products."); 
                }
            }}> + MORE</Button>{' '}
        </div>
    )
}

export default Home;