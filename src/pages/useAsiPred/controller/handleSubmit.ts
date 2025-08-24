import type { CombinationWeightType } from "../useAsiPred";

interface handleSubmitProps {
  combinations: [string, string, string, string][];
  totalWeights: number;
  granthamWeight: string;
  sneathWeight: string;
  epsteinsWeight: string;
  miyataWeight: string;
  experimentalExchangeabilityWeight: string;
  disulfideBondWeight: string;
  setCombinationsWeight: React.Dispatch<
    React.SetStateAction<CombinationWeightType>
  >;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

export function handleSubmit({
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
}: handleSubmitProps) {
  if (combinations.length > 0 && Math.round(totalWeights) === 1) {
    alert(
      "By continuing you declare that you agree with our terms and conditions."
    );
    const weights: CombinationWeightType = [
      granthamWeight,
      sneathWeight,
      epsteinsWeight,
      miyataWeight,
      experimentalExchangeabilityWeight,
      disulfideBondWeight || undefined,
    ];

    setCombinationsWeight(weights);

    setSubmitted(true);
  } else {
    alert("Error: Ensure all fields are selected and weights sum up to 1");
  }
};