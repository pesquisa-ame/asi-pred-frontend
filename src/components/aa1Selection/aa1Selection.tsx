import { aminoAcids } from "../../data/aminoacids-list"
import { handleAa1Active } from "../../pages/useAsiPred/controller/handleAa1Active";
import './aa1Selection.css';

interface aa1SelectionProps {
  aa1: string;
  aa1Active: boolean;
  setAa1: (aa: string) => void;
  setAa1Active: (active: boolean) => void;
}


export const Aa1Selection = ({
  aa1,
  aa1Active,
  setAa1,
  setAa1Active,
}: aa1SelectionProps) => {
  return (
    <div className="aa1-selection grid-container">
      <section className="title-section">
        <h2>STEP 2 - Select AA1:</h2>
        <p>
          *AA1 corresponds to the amino acid you plan to replace for another.
        </p>
      </section>
      <section className="aa-btn-section">
        {aminoAcids.map((aa) => (
          <button
            className={`${aa1 === aa.code && aa1Active ? 'active' : "" }`}
            aria-label={aa.name}
            key={aa.code}
            onClick={() =>
              handleAa1Active({ aa: aa.code, setAa1, setAa1Active })
            }
          >
            {aa.code}
            <br />
            {aa.name}
          </button>
        ))}
      </section>
    </div>
  );
};
