import { Distances } from "../results";

export function getDistanceValueOrder(
  distances: Distances,
  aa1: string,
  aa2: string
): number | undefined {
  if (distances[aa1]) {
    if (distances[aa1][aa2] !== undefined) {
      return distances[aa1][aa2];
    }
  }
  return undefined;
}