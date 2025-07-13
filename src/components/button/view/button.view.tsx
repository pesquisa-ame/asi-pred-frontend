
import { useNavigate } from "react-router";
import type { ButtonProps } from "../interfaces/button.interface";
import "./button.view.css";

export const Button = ({ btnText, path }: ButtonProps) => {
  const navigate = useNavigate();

  function handleClick(path: string) {
    navigate(path);
  }
  return (
    <section className="button-header">
      <button onClick={() => {
        handleClick(path)
      }}>{btnText}</button>
    </section>
  );
};
