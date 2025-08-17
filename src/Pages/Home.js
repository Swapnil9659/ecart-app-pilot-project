import React, { useEffect, useState } from 'react';
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { BiSearch } from 'react-icons/bi';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const Home = () => {
  const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState('');
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProductData(data);
  }

  const filteredData = productData.filter(item =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="pt-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <InputGroup className={theme ? 'border-primary rounded' : 'border border-warning rounded'}>
            <InputGroup.Text className={theme ? 'bg-black text-dark-primary' : 'bg-white text-light-primary'}>
              <BiSearch size="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search Products"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className={theme ? 'bg-light-black text-light' : 'bg-light-primary text-black'}
            />
          </InputGroup>
        </Col>

        <Row className="justify-content-center">
          {filteredData.map((item, i) => (
            <ProductCard data={item} key={i} />
          ))}
        </Row>
      </Row>
      <Footer />
    </div>
  );
};

export default Home;
