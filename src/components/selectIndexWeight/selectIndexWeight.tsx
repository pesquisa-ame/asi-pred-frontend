import WeightSelector from "../weightSelector/weightSelector";
import './selectIndexWeight.css';

interface SelectIndexWeightProps {
  handleWeightChange: (
    event: React.ChangeEvent<HTMLSelectElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => void;

  setExperimentalExchangeabilityWeight: React.Dispatch<
    React.SetStateAction<string>
  >;
  setMiyataWeight: React.Dispatch<React.SetStateAction<string>>;
  setEpsteinsWeight: React.Dispatch<React.SetStateAction<string>>;
  setSneathWeight: React.Dispatch<React.SetStateAction<string>>;
  setGranthamWeight: React.Dispatch<React.SetStateAction<string>>;
  setDisulfideBondWeight: React.Dispatch<React.SetStateAction<string>>;
  hasAnyDisulfideBond: boolean;
}

export const SelectIndexWeight = ({
  hasAnyDisulfideBond,
  handleWeightChange,
  setGranthamWeight,
  setSneathWeight,
  setEpsteinsWeight,
  setMiyataWeight,
  setExperimentalExchangeabilityWeight,
  setDisulfideBondWeight,
}: SelectIndexWeightProps) => {
  return (
    <div className="index-grid-container">
      <section className="step-4">
        <h2>
          STEP 4 – Select the index
          {hasAnyDisulfideBond && " and disulfide bond (if applicable)"} weight.
        </h2>
        <p>
          Select the weight to apply to each index
          {hasAnyDisulfideBond && " and disulfide bond (if applicable)"}. The
          total must add up to 1.
        </p>
      </section>

      <section className="weight-selector-section">
        <WeightSelector
          label="Grantham"
          onChange={(e) => handleWeightChange(e, setGranthamWeight)}
        />

        <WeightSelector
          label="Sneath"
          onChange={(e) => handleWeightChange(e, setSneathWeight)}
        />
        <WeightSelector
          label="Epsteins"
          onChange={(e) => handleWeightChange(e, setEpsteinsWeight)}
        />
        <WeightSelector
          label="Miyata"
          onChange={(e) => handleWeightChange(e, setMiyataWeight)}
        />
        <WeightSelector
          label="E. Exchangeability"
          onChange={(e) => handleWeightChange(e, setExperimentalExchangeabilityWeight)}
        />
        {hasAnyDisulfideBond && (
          <WeightSelector
            label="Dissulfide Bond"
            onChange={(e) => handleWeightChange(e, setDisulfideBondWeight)}
            defaultValue="0.0"
          />
        )}
      </section>
    </div>
  );
};
