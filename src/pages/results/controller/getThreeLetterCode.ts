import { aminoAcids } from "../../../data/aminoacids-list";

export function getThreeLetterCode(code: string): string {
  const aa = aminoAcids.find((a) => a.code === code);
  return aa ? aa.threeLetterCode : code;
}
