import './App.css';
import { Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import colorama from './data/colorama_data.js';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from './routes/Home';
import Colorama from './routes/Colorama';
import Cart from './routes/Cart';
import Footer from './Footer';

function App() {
  let [res, setRes] = useState([0,1,2,3,4,5,6,7]);
  let [ceramics, setCeramics] = useState(colorama);
  let navigate = useNavigate();
  
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="navbar">
        <Container>
          <Navbar.Brand onClick={()=>{
          navigate('/')}}>
            <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="bornn" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="COLLECTIONS" id="collections">
                <NavDropdown.Item onClick={()=>{
                navigate('/COLORAMA/0')}}>COLORAMA</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/ISLAND BREEZE')}}>ISLAND BREEZE</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/NEW MARBLE')}}>NEW MARBLE</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/KIDS & FAMILY')}}>KIDS & FAMILY</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/CANDLES')}}>CANDLES</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="PRODUCTS" id="products">
                <NavDropdown.Item onClick={()=>{
                navigate('/MUGS & TUMBLERS')}}>MUGS & TUMBLERS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/PLATES')}}>PLATES</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/BOWLS')}}>BOWLS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/BAKING DISHES & TRAYS')}}>BAKING DISHES & TRAYS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/TEA POTS & JARS')}}>TEA POTS & JARS</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/SOAP DISHES')}}>SOAP DISHES</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/CANDLES')}}>CANDLES</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{
                navigate('/VIEW ALL')}}>VIEW ALL</NavDropdown.Item>
              </NavDropdown> 
            </Nav>
            <Nav>
              <Nav.Link onClick={()=>{
              navigate('/ACCOUNT')}}>ACCOUNT</Nav.Link>
              <Nav.Link onClick={()=>{
              navigate('/SEARCH')}}>SEARCH</Nav.Link>
              <Nav.Link onClick={()=>{
              navigate('/CART')}}>CART</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/Colorama">Colorama</Link> */}

      <Routes>
        <Route path="/" element={<Home ceramics={ceramics} setCeramics={setCeramics} res={res} setRes={setRes}/>} />
        <Route path="/Colorama/:id" element={<Colorama ceramics={ceramics}/>}/>
        <Route path="/Island Breeze" element={<div>Island Breeze</div>}/>
        <Route path="/New Marble" element={<div>New Marble</div>}/>
        <Route path="/Kids & Family" element={<div>Kids & Family</div>}/>
        <Route path="/Candles" element={<div>Candles</div>}/>
        <Route path="/Mugs & Tumblers" element={<div>Mugs & Tumblers</div>}/>
        <Route path="/Plates" element={<div>Plates</div>}/>
        <Route path="/Bowls" element={<div>Bowls</div>}/>
        <Route path="/Baking Dishes & Trays" element={<div>Baking Dishes & Trays</div>}/>
        <Route path="/Tea Pots & Jars" element={<div>Tea Pots & Jars</div>}/>
        <Route path="/Soap Dishes" element={<div>Soap Dishes</div>}/>
        <Route path="/VIEW ALL" element={<div>VIEW ALL</div>}/>
        <Route path="/ACCOUNT" element={<div>ACCOUNT</div>}/>
        <Route path="/SEARCH" element={<div>SEARCH</div>}/>
        <Route path="/CART" element={<Cart/>}/>
        <Route path="*" element={<div>없는 페이지입니다.</div>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
