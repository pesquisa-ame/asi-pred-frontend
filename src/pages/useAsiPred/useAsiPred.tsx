import { useEffect, useMemo, useState } from "react";
import { Input } from "../../components/input/view/input.view";
import { Aa2Selection } from "../../components/aa2Selection/aa2Selection";
import { handleAddCombination } from "./controller/handleAddCombination";
import { handleInputChange } from "./controller/handleInputChange";
import { ButtonSection } from "../../components/buttonSection/buttonSection.tsx";
import { Aa1Selection } from "../../components/aa1Selection/aa1Selection";
import { GoArrowRight } from "react-icons/go";

import "./useAsiPred.css";
import { getAminoacidName } from "./controller/getAminoacidName.ts";
import { SelectIndexWeight } from "../../components/selectIndexWeight/selectIndexWeight.tsx";
import { handleWeightChange } from "./controller/handleWeightChange.ts";
import { handleSubmit } from "./controller/handleSubmit.ts";
import { useNavigate } from "react-router";

export type CombinationWeightType = [
  string,
  string,
  string,
  string,
  string,
  string?
];

export const UseAsiPred = () => {
    const [aa1, setAa1] = useState('');
    const [aa2, setAa2] = useState("");
    const [id, setId] = useState('');
    const [aa1Active, setAa1Active] = useState(false);
    const [aa2Active, setAa2Active] = useState(false);
    const [combinations, setCombinations] = useState<[string, string, string, string][]>([]);
    const [disulfideBondWeight, setDisulfideBondWeight] = useState("");
    const [disulfideBond, setDisulfideBond] = useState(false);
    const [granthamWeight, setGranthamWeight] = useState('0.2');
    const [sneathWeight, setSneathWeight] = useState("0.2");
    const [epsteinsWeight, setEpsteinsWeight] = useState("0.2");
    const [miyataWeight, setMiyataWeight] = useState("0.2");
    const [
      experimentalExchangeabilityWeight,
      setExperimentalExchangeabilityWeight,
    ] = useState("0.2");

    const [showWeights, setShowWeights] = useState(false);
    const [hasAnyDisulfideBond, setHasAnyDisulfideBond] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [combinationsWeight, setCombinationsWeight] =
      useState<CombinationWeightType>(["", "", "", "", "", undefined]);

    useEffect(() => {
      const hasBond = combinations.some(
        (combination) => combination[3] === "true"
      );
      setHasAnyDisulfideBond(hasBond);
    }, [combinations]);


    const totalWeights = useMemo(() => {
      return (
        parseFloat(granthamWeight) +
        parseFloat(sneathWeight) +
        parseFloat(epsteinsWeight) +
        parseFloat(miyataWeight) +
        parseFloat(experimentalExchangeabilityWeight)
      );
    }, [
      granthamWeight,
      sneathWeight,
      epsteinsWeight,
      miyataWeight,
      experimentalExchangeabilityWeight,
    ]);

    const navigate = useNavigate();
    
    useEffect(() => {
      if (submitted) {
        navigate("/results", { state: { combinations, combinationsWeight } });
        setSubmitted(false);
      }
    }, [combinations, combinationsWeight, submitted]);

      return (
        <div className="use-asi-pred-page">
          <Input id={id} handleInputChange={handleInputChange(setId)} />
          <Aa1Selection
            aa1={aa1}
            aa1Active={aa1Active}
            setAa1={setAa1}
            setAa1Active={setAa1Active}
          />
          <Aa2Selection
            aa2={aa2}
            aa2Active={aa2Active}
            setAa2={setAa2}
            setAa2Active={setAa2Active}
          />
          <ButtonSection
            aa1={aa1}
            aa2={aa2}
            id={id}
            setAa1={setAa1}
            setAa1Active={setAa1Active}
            setAa2={setAa2}
            setAa2Active={setAa2Active}
            setCombinations={setCombinations}
            setId={setId}
            setDisulfideBond={setDisulfideBond}
            totalWeights={totalWeights}
            disulfideBond={disulfideBond}
            onContinue={() => {
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
              setShowWeights(true);
            }}
          />
          <div className="selected-combinations">
            {combinations.map((combination, index) => (
              <p key={index}>
                Selected combination: {combination[0]} (
                {getAminoacidName(combination[1])}
                <GoArrowRight />
                {getAminoacidName(combination[2])})
                {combination[3] === "true" && (
                  <span> with disulfide bond disruption.</span>
                )}
              </p>
            ))}
          </div>

          {showWeights && (
            <>
              <SelectIndexWeight
                handleWeightChange={handleWeightChange}
                setExperimentalExchangeabilityWeight={
                  setExperimentalExchangeabilityWeight
                }
                setGranthamWeight={setGranthamWeight}
                setSneathWeight={setSneathWeight}
                setEpsteinsWeight={setEpsteinsWeight}
                setMiyataWeight={setMiyataWeight}
                setDisulfideBondWeight={setDisulfideBondWeight}
                hasAnyDisulfideBond={hasAnyDisulfideBond}
              />
            
            <div className="submit-button-section">
              <button
                aria-label="Submit button"
                className="submit-button"
                onClick={() =>  {
                  handleSubmit({
                    combinations,
                    totalWeights,
                    granthamWeight,
                    sneathWeight,
                    epsteinsWeight,
                    miyataWeight,
                    experimentalExchangeabilityWeight,
                    disulfideBondWeight,
                    setCombinationsWeight,
                    setSubmitted,
                  });
                }}
              >
                Submit
              </button>
                <a 
                  href="terms-and-conditions"
                  aria-label="Link to terms and conditions page."
                >Terms and Conditions</a>
            </div>

            </>
          )}
          

        </div>
      );
}