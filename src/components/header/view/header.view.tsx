import asiLogo from '../../../assets/asi-logo.jpeg';
import './header.view.css';

export const Header = () => {
    return (
        <section className="header-section">
            <img src={asiLogo} alt="Logo ASI-PRED"/>
            <h1>ASI-PRED</h1>
            <h4>AMINO-ACID SIMILARITY INDEX PREDICTION</h4>
            <div className='grid-container'>

            </div>
        </section>
    )
}