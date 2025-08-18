import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartPlus } from 'react-icons/bs';
import { Link } from  "react-router-dom";

const ProductCard = (props) => {
    let { image, price, title, id} = props.data;
    const [theme] = useThemeHook();
    const { addItem } = useCart();

    const addToCart = () =>{
        addItem(props.data);
    }
    return (
        <Card 
            style={{ width: '18rem', height: 'auto' }}
            className={`${theme? 'bg-light-black border-bottom border border-primary': 'bg-light-primary border-bottom border border-warning'} text-center p-0 overflow-hidden shadow mx-auto mb-4`}
        >
            <Link to={`/product-details/${id}`}>
                <div style={{ background: 'white', height: '15rem', overflow: 'hidden', display: 'flex',
                justifyContent: 'center', alignItems: 'center', marginBottom: 'inherit' }}>
                    <div style={{ width: '9rem'}}>
                        <Card.Img variant="top" src={image} className="img-fluid" />
                    </div>
                </div>
            </Link>
            <Card.Body className={theme? 'bg-light-black text-dark-primary': 'bg-light-primary text-light-primary'}>
                <Card.Title style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                    {title}
                </Card.Title>
                <Card.Title>
                    Rs. <span className="h3">{price}</span>
                </Card.Title>
                <Button
                    onClick={()=> addToCart()}
                    className={`${theme? 'bg-light-black text-dark-primary': 'bg-light-primary text-light-primary' } d-flex align-item-center m-auto border-2 border-white shadow-lg`}
                >
                    <BsCartPlus size="1.8rem" />
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;