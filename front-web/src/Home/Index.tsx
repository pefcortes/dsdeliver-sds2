import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer/Index';

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-action">
                        <h1 className="home-title">
                            Faça seu pedido <br /> que entregamos pra vôce!!!
                  </h1>
                        <h3 className="home-subtitle">
                            Escolha seu pedido em poucos
                            minutos levaremos a sua porta.
                  </h3>
                        <a href="orders" className="home-btn-order">
                            FAZER PEDIDO
                  </a>
                    </div>
                    <div className="">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )

}

export default Home