import { Distances } from "../results";

export function invertPercentages(distances: Distances): Distances {
  const inverted: Distances = {};

  for (const key1 in distances) {
    inverted[key1] = {};
    for (const key2 in distances[key1]) {
      inverted[key1][key2] = 100 - distances[key1][key2];
    }
  }

  return inverted;
}