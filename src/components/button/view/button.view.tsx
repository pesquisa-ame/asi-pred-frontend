import type { ButtonProps } from "../interfaces/button.interface";
import './button.view.css'

export const Button = ({ btnText }: ButtonProps) => {
    return (
        <section className="button-header">
            <button>{btnText}</button>
        </section>
    )
}