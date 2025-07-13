import asiLogo from '../../../assets/asi-logo.jpeg';
import { Button } from '../../button/view/button.view';
import './header.view.css';

export const Header = () => {
    return (
      <section className="header-section">
        <img src={asiLogo} alt="Logo ASI-PRED" />
        <h1>ASI-PRED</h1>
        <h4>AMINO-ACID SIMILARITY INDEX PREDICTION</h4>
        <div className="grid-container">
          <Button btnText="HOME" />
          <Button btnText="USE ASI-PRED" />
          <Button btnText="HOW TO USE" />
          <Button btnText="ABOUT US - THEORY" />
          <Button btnText="HOW TO CITE US" />
        </div>
      </section>
    );
}