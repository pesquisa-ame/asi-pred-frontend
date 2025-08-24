interface handleAddCombinationProps {
  setAa1Active: React.Dispatch<React.SetStateAction<boolean>>;
  setAa2Active: React.Dispatch<React.SetStateAction<boolean>>;
  setAa1: React.Dispatch<React.SetStateAction<string>>;
  setAa2: React.Dispatch<React.SetStateAction<string>>;
  setId: React.Dispatch<React.SetStateAction<string>>;
  setCombinations: React.Dispatch<
    React.SetStateAction<[string, string, string, string][]>
  >;
  disulfideBond: boolean;
  aa1: string;
  aa2: string;
  id: string;
}

export function handleAddCombination ( { aa1, aa2, id, disulfideBond, setAa1, setAa2, setAa1Active, setAa2Active, setId, setCombinations } : handleAddCombinationProps) {
    if (aa1 && aa2 && id) {
        setAa1Active(false);
        setAa2Active(false);
        setAa1("");
        setAa2("");
        setId("");
        setCombinations((prev) => [
            ...prev,
            [
                id,
                aa1,
                aa2,
                disulfideBond ? 'true' : 'false'
            ],
        ]);
        window.scrollTo({ top: 0, behavior: 'smooth'});

    } else {
        alert('Please choose an ID and select AA1 and AA2 before adding a combination.');
    }

    
}