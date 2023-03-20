import './Colorama.css';
import best from '../data/best1';
import Info from '../component/Info';
import Title3 from '../component/Title3';
import Title4 from '../component/Title4';
import Best from '../component/Best';
import Product from '../component/Product';
import { addItem } from '../component/Store';

import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from 'react-redux';

function Colorama(props){
    let {id} = useParams();
    let [best1, setBest1] = useState(best);
    let amount = useRef();
    let dispatch = useDispatch();

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '">' + "</div>";
        },
    };

    return(
        <>
            <div className="c_wrap">
                <Container className="colorama">
                    <Row>
                        <Col md={6}>
                            <Swiper
                                pagination={pagination}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={process.env.PUBLIC_URL +'/img/colorama' + (Number(id) + 1) + '.jpg'}/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={process.env.PUBLIC_URL +'/img/colorama_hover' + (Number(id) + 1) + '.jpg'}/>
                                </SwiperSlide>
                            </Swiper>
                            <div className="info">
                                <Info />
                            </div>
                        </Col>
                        <Col md={6} className="right">
                            <span>{props.ceramics[id].collection}</span>
                            <h4>{props.ceramics[id].title}</h4>
                            <span>{props.ceramics[id].price}</span>
                            {/* <p>Quantity:</p>
                            <div className="count">
                                <button onClick={()=>{
                                    amount.current.value--;
                                }}>-</button>
                                <input type="text" className="quantity" name="quantity" value="1" ref={amount}/>
                                <button onClick={()=>{
                                    amount.current.value++;
                                }}>+</button>
                            </div> */}
                            <Button variant="outline-dark" className="add" onClick={()=>{
                                dispatch(addItem({id:props.ceramics.id, name:props.ceramics.title, count:1}))
                            }}>ADD TO CART</Button>
                            <div className="from">
                                <ul>
                                    <li>Handmade in Turkey.</li>
                                    <li>Our products are made by fusing glass onto heavy-gauge steel.</li>
                                    <li>Every piece in our collections is handmade individually.</li>
                                    <li>The patterns may differ on each item showing the marks of its journey.</li>
                                </ul>
                                <img src={process.env.PUBLIC_URL + "/img/info.jpg"} width="100%" />
                            </div>
                            <div className="share">
                                <span>SHARE</span>
                                <FaFacebookF className="sns" />
                                <FaTwitter className="sns" />
                                <FaPinterest className="sns" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="like">
                <Title3/>

                <Container>
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
            </div>

            <div className="recently">
                <Title4 />

                <Container>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {
                            props.ceramics.map((a, i) => {
                                return (
                                    <SwiperSlide>
                                        <Product ceramics={props.ceramics[i]} i={i} res={props.res} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </Container>
                
                {/* <Row>
                        
                </Row> */}
                
            </div>
        </>
    )
}

export default Colorama;