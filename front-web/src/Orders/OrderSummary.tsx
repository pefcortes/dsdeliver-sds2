import { formatPrice } from './helpers';
import './styles.css';

type Props = {
    amount: number
    totalPrice: number;
    onSubmit: () => void;
}
function OrderSummary({amount, totalPrice, onSubmit}: Props) {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <span className="amount-selected-container">
                    <strong className="amount-selected">{amount} itens selecionados
                    </strong>
                </span>
                <span className="order-summary-total">
                    <strong className="amount-selected">Valor total de
                         {formatPrice(totalPrice)} </strong>
                </span>
                <button 
                    className="order-summary-make-order"
                    onClick={onSubmit}
                >
                    FAZER PEDIDO!
                </button>
            </div>
        </div>
    )
    }
    export default OrderSummary