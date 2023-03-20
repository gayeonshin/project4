import './Cart.css';

import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, removeCount, sortName } from '../component/Store';

const Cart=()=>{
    let state = useSelector((state) => state)
    console.log(state.cart[0].name);
    let dispatch = useDispatch()
    
    return(
        <div>
            <Container className="cart_wrap">
                <Table>
                    <thead colspan={5}>Shopping Cart</thead>
                    <tbody>
                        {
                            state.cart.map((v, i) =>
                                <tr key={i}>
                                    <td><img src={state.cart[i].imgUrl} className="image" /></td>
                                    <td>{state.cart[i].name}</td>
                                    <td>{state.cart[i].count}</td>
                                    <td>
                                        <div className="count">
                                            <div onClick={() =>
                                                dispatch(addCount(state.cart[i].id))
                                            } className="amount">UP</div>
                                            <div onClick={() =>
                                                dispatch(removeCount(state.cart[i].id))
                                            } className="amount">DOWN</div>
                                        </div>
                                    </td>
                                    <td>{state.cart[i].price}</td>
                                    <td>
                                        <u>REMOVE</u>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <Button variant="outline-primary" onClick={() => {
                    dispatch(sortName(state.cart.Name))
                }}>SORT</Button>{''}
            </Container>
        </div>
    )
}

export default Cart;