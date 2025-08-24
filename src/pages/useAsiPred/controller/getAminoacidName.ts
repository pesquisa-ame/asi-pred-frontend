import { aminoAcids } from "../../../data/aminoacids-list"

export const getAminoacidName = (code: string) => {
    const aminoAcid = aminoAcids.find((aa) => aa.code === code);
    return aminoAcid ? aminoAcid.name : code;
}