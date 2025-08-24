import GradientBar from "../gradientBar/gradientBar";
import './hydrophobicityDifference.css';

type hydrophobicityDifferenceProps = {
  aa1: string;
  aa2: string;
};

const kdHydrophobicity: Record<string, number> = {
  I: 4.5,
  V: 4.2,
  L: 3.8,
  F: 2.8,
  C: 2.5,
  M: 1.9,
  A: 1.8,
  G: -0.4,
  T: -0.7,
  S: -0.8,
  W: -0.9,
  Y: -1.3,
  P: -1.6,
  H: -3.2,
  E: -3.5,
  Q: -3.5,
  D: -3.5,
  N: -3.5,
  K: -3.9,
  R: -4.5,
};

function HydrophobicityDifference({ aa1, aa2 }: hydrophobicityDifferenceProps) {
  const h1 = kdHydrophobicity[aa1 as keyof typeof kdHydrophobicity];
  const h2 = kdHydrophobicity[aa2 as keyof typeof kdHydrophobicity];

  const diff = Math.abs(h1 - h2);
  const maxHydro = Math.max(...Object.values(kdHydrophobicity));
  const valuePercent = (diff / maxHydro) * 100;

  return (
    <div>
      <p>Hydrophobicity difference: {(h1 - h2).toFixed(1)}</p>
      <GradientBar value={valuePercent} />
      <div className="line"/> </div>
  );
}

export default HydrophobicityDifference;
