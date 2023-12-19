import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';

const OrderCard = (props) => {
    const [theme] = useThemeHook();
    const {
        items,
        cartTotal,
    } = useCart();

    const current = new Date();
    const deliveryDate = `${current.getDate()+ 7}`;
    const deliveryMonths = `${current.getMonth()}`;
    const deliveryYear = `${current.getFullYear()}`;

    return (
       <Card className={`${theme? 'bg-light-black text-light' : 'bg-light-primary text-black'} mb-3`} border={theme? 'primary' : 'warning'}>
            <Card.Header>
                <b>{props.orderDate}</b>
                <small className="float-end">Order ID: {props.orderId}</small>
            </Card.Header>
            {items.map((item, index)=>{
                return(
                    <Row className="p-2" key={index}>
                        <Col>
                            <img src={item.image} style={{ width: '6rem'}} alt={item.title}  className='rounded mx-3'/>
                        </Col>
                        <Col className='py-3'>
                            {item.title}
                        </Col>
                        <Col className='py-3'>
                            Rs. {item.price}
                        </Col>
                        <Col className='py-3'>
                            Quantity ({item.quantity})
                        </Col>
                    </Row>
                )
            })}
            <Row>
                <Col>
                    <h5 className="px-4 py-3">Total Price: Rs. {cartTotal}</h5>
                </Col>
                <Col>
                            <Card.Body>
                                <Card.Title>{props.title}</Card.Title>
                                <Card.Text>
                                    <Badge pill bg="success">
                                        Delivery on- {deliveryDate} : {deliveryMonths} : {deliveryYear}
                                    </Badge>
                                </Card.Text>
                            </Card.Body>
                        </Col>
            </Row>
       </Card>
    );
};

export default OrderCard;