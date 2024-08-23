import React from 'react'
import Header from '../common/Header'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../index.css';
export default function Cart() {
  return (
    <>
    <Header />
    <div>
        <Container fluid className="border border-dark my-6">
            
            <Row className='m-4'>
                <Col md={8} className='mb-4  border-bottom d-flex justify-content-between'>
                    <h3 className='font-bold'>Shopping Cart</h3>
                    <h3 className='font-bold'>_ Items</h3>
                    
                </Col>
                <Col md={4} className='mb-4  border-bottom d-flex justify-center'>
                    <h2 className='font-bold'>Order Summary</h2>
                </Col>
               
                <Col md={12} className='d-flex justify-content-between  m-3 p-2 '>
                <Row className=''>
                        <h5>Product Details</h5>
                        <div className='mx-3 font-extrabold pt-5'>
                        <img src="https://via.placeholder.com/150" className="img-small" alt="Sample Image" />
                        </div>
                </Row>
                <Row className=''>
                        <h5>Quantity</h5>
                        <div className='mx-3 font-extrabold'>      
                        <h3>3</h3>
                        </div>
                </Row>
                <Row className=''>        
                        <h5>Price</h5>
                        <div className='mx-3 font-extrabold'>      
                        699
                        </div>
                </Row>
                <Row className=''>
                        <h5>Total</h5>
                        <div className='mx-3 font-extrabold'>      
                        699
                        </div>
                </Row>
                <Row className=''>
                        <h5>Items</h5>
                        <div className='mx-3 font-extrabold'>      
                            3
                        </div>
                </Row>
                <Row className='mx-3 font-extrabold'>
                        <h5>Total amount</h5>
                        <div className='my-5'>  
                            500    
                        </div>
                </Row>
            
                </Col>

            </Row>
            <Row>
            <Col md={8} className='border-bottom d-flex justify-content-between'>
                <h6>Continue Shopping</h6>
                </Col>
                <Col md={3} className='mb-4 d-flex justify-center'>
                 <h4 className='font-bold'>Promo Code</h4>
                 <input />
                 <button />
                </Col>
            </Row>
     
           
           </Container >
    </div>

    </>
  )
}
