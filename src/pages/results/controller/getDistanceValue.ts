import { Distances } from "../results";

export function getDistanceValue(
  distances: Distances,
  aa1: string,
  aa2: string
): number | undefined {
  if (distances[aa1]?.[aa2] !== undefined) {
    return distances[aa1][aa2];
  }
  if (distances[aa2]?.[aa1] !== undefined) {
    return distances[aa2][aa1];
  }
  return undefined;
}
