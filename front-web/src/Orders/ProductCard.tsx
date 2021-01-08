
import { Product } from './Types';

type Props = {
    product: Product;
}

function formatPrice(price: number) {
 const formatter = new Intl.NumberFormat ('pt-BR',{
     style: 'currency',
     currency: 'BRL',
 });

 return formatter.format(price)
}

function ProductsCard({product}:Props) {
    return (
        <div className="order-card-container">
          <h3 className="order-card-title">
              {product.name}
          </h3>
          <img 
            src={product.imageUri}
            className="order-card-image"
            alt={product.name}
            />
          <h3 className="order-card-proce">
              {formatPrice(product.price)}
          </h3>
          <div className="order-card-description">
              <h3>Descrição</h3>
              <p>
              Descrição:
              {product.description}
              </p>
          </div>
         </div>
    )
    
    }
    
    export default ProductsCard