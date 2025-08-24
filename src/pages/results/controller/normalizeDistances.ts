import type { Distances } from "../results";

export function normalizeDistances(distances: Distances): Distances {
    let maxDistance = -Infinity;

    for (const key1 in distances) {
      for (const key2 in distances[key1]) {
        maxDistance = Math.max(maxDistance, distances[key1][key2]);
      }
    }

    const normalized: Distances = {};
    for (const key1 in distances) {
      normalized[key1] = {};
      for (const key2 in distances[key1]) {
        normalized[key1][key2] =
          maxDistance === 0 ? 0 : (distances[key1][key2] / maxDistance) * 100;
      }
    }
    return normalized;
  }