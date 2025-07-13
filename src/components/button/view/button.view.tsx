import { useHandleClick } from "../controller/useHandleClick";
import type { ButtonProps } from "../interfaces/button.interface";
import "./button.view.css";

export const Button = ({ btnText, path }: ButtonProps) => {
  const handleClick = useHandleClick(); 

  return (
    <section className="button-header">
      <button onClick={() => handleClick(path)}>{btnText}</button>
    </section>
  );
};
