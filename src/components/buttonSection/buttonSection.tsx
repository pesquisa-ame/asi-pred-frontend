import { handleAddCombination } from "../../pages/useAsiPred/controller/handleAddCombination";
import './buttonSection.css';

interface ButtonSectionProps {
  setAa1Active: React.Dispatch<React.SetStateAction<boolean>>;
  setAa2Active: React.Dispatch<React.SetStateAction<boolean>>;
  setAa1: React.Dispatch<React.SetStateAction<string>>;
  setAa2: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setCombinations: React.Dispatch<
    React.SetStateAction<[string, string, string, string][]>
  >;
  setDisulfideBond: React.Dispatch<React.SetStateAction<boolean>>;
  aa1: string;
  aa2: string;
  id: string;
  totalWeights: number;
  disulfideBond: boolean;
  onContinue: () => void;
}

export const ButtonSection = ({
  aa1,
  aa2,
  id,
  totalWeights,
  disulfideBond,
  setDisulfideBond,
  onContinue,
  setAa1,
  setAa1Active,
  setAa2,
  setAa2Active,
  setId,
  setCombinations,
}: ButtonSectionProps) => {
  return (
    <>
      <section className="button-section">
        <input
          type="checkbox"
          id="disulfide"
          checked={disulfideBond}
          onChange={(e) => {
            setDisulfideBond(e.target.checked);
          }}
        />
        <label htmlFor="disulfide">Disulfide bond disruption</label>
        <button
          aria-label="Continue with next steps"
          type="button"
          onClick={onContinue}
        >
          Continue with next steps
        </button>
        <button
          aria-label="Add more combinations"
          type="button"
          onClick={() => {
            if (aa1 && aa2 && totalWeights === 1) {
              handleAddCombination({
                aa1,
                aa2,
                id,
                disulfideBond,
                setAa1,
                setAa2,
                setAa1Active,
                setAa2Active,
                setId,
                setCombinations,
              });
            } else {
              alert(
                "Error: Ensure all fields are selected and weight sum up to 1."
              );
            }
          }}
        >
          Add more combinations
        </button>
      </section>
    </>
  );
};
