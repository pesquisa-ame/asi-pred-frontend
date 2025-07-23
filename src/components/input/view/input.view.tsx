import './input.view.css';

interface InputProps {
    id: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ id, handleInputChange }: InputProps) => {
    return (
      <section className="input-section">
        <h2>STEP 1 - </h2>
        <label htmlFor="id">
          Input your aminoacid substitution identification:
        </label>
        <input
          required
          id="id"
          name="id"
          type="text"
          placeholder="Choose the prediction ID..."
          value={id}
          onChange={handleInputChange}
        />
      </section>
    );
}