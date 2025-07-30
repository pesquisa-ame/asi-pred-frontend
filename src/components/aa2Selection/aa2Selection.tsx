import { aminoAcids } from "../../data/aminoacids-list";
import { handleAa2Active } from "../../pages/useAsiPred/controller/handleAa2Active";
import "./aa2Selection.css";

interface aa2SelectionProps {
  aa2: string;
  aa2Active: boolean;
  setAa2: (aa: string) => void;
  setAa2Active: (active: boolean) => void;
}

export const Aa2Selection = ({
  aa2,
  aa2Active,
  setAa2,
  setAa2Active,
}: aa2SelectionProps) => {
  return (
    <div className="aa2-selection grid-container">
      <section className="title-section">
        <h2>STEP 3 - Select AA2:</h2>
        <p>
          *AA2 corresponds to the amino acid that will substitute the first one.
        </p>
      </section>
      <section className="aa-btn-section">
        {aminoAcids.map((aa) => (
          <button
            className={`${aa2 === aa.code && aa2Active ? "active" : ""}`}
            aria-label={aa.name}
            key={aa.code}
            onClick={() =>
              handleAa2Active({ aa: aa.code, setAa2, setAa2Active })
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
