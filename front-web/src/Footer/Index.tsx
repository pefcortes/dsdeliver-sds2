import './styles.css';
import {ReactComponent as YouTubeIcon} from './youtube.svg';

function Footer() {
    return (
        <footer className="main-footer">
         App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
         <div className="footer-icons">
             <a href="https://www.youtube.com/c/Devsuperior" target="_new"> 
             <YouTubeIcon />
             </a>

         </div>
         </footer>
    )
    }
    export default Footer