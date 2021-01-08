import { useEffect, useState } from 'react';
import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { OrderLocationData, Product } from './Types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';


function Orders() {
const [products, setproducts]=useState<Product[]>([])
const [orderLocation, setOrderLocation] = useState <OrderLocationData>();

useEffect(() => {
  fetchProducts()
  .then(response => setproducts(response.data))
  .catch(error => console.log(error))
}, []);

    return (
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>        
        </div>
    )
    }
    
    export default Orders

