import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { Product } from './Types';
import { fetchProducts } from '../api';


function Orders() {
const [products, setproducts]=useState<Product[]>([])

useEffect(() => {
  fetchProducts()
  .then(response => setproducts(response.data))
  .catch(error => console.log(error))
}, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />        
        </div>
    )
    }
    
    export default Orders

