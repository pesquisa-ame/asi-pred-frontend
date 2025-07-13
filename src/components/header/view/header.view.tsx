
import asiLogo from "../../../assets/asi-logo.jpeg";
import { Button } from "../../button/view/button.view";
import "./header.view.css";

export const Header = () => {


  return (
    <section className="header-section">
      <img src={asiLogo} alt="Logo ASI-PRED" />
      <h1>ASI-PRED</h1>
      <h4>AMINO-ACID SIMILARITY INDEX PREDICTION</h4>
      <div className="grid-container">
        <Button btnText="HOME" path="/" />
        <Button btnText="USE ASI-PRED" path="/use-asi-pred" />
        <Button btnText="HOW TO USE" path="/how-to-use"/>
        <Button btnText="ABOUT US - THEORY" path="/about-us"/>
        <Button btnText="HOW TO CITE US" path="/how-to-cite"/>
      </div>
    </section>
  );
};
