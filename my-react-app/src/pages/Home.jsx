import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Header from '../common/Header';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/mainContext';

function Home() {
  const [count, setCount] = useState(0);
  let [products, setProducts] = useState([]);
 

  let getData = () => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        return res.data;
      })
      .then((finalResponse) => {
        setProducts(finalResponse.products);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (

    <>
        <Header />
      <div className="mt-3 ms-3 "></div>
      <div className="container">
        <div className="row"></div>
      </div>
      <Container fluid>
        <Container className="max-w-[1320] mx-auto">
          <h1 className="text-[40px] font-bold text-center py-5">Our Products</h1>
          <Row>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;

function ProductCard({ product }) {

  let { thumbnail, price, title,id } = product;
  let{cart,setCart}=useContext(cartContext)
  const [itemId, setItemId] = useState(null);
  
  let addTocart=()=>{
    let cartObj ={
      title,
      thumbnail,
      price,
      id,
      qty:1,
    }
    setItemId(cartObj.id)
    
    setCart([...cart,cartObj]) 
  
  }
  
  

  
  return (
    <div>
      {/* <Link to={`/product-details/${id}`}> */}
      <Link to={`/product-details/`}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt={title}
          src={thumbnail}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
      </Link>
      {   
      cart.forEach(cart=>{cart.id == itemId ? `<h3 className="mt-4 text-sm text-gray-700">{title}</h3>` : `<h3 className="mt-4 text-sm text-gray-700">{title}</h3>`})
      }
      <Button onClick={addTocart}>Add to Cart</Button>
      
    </div>
  );
}
