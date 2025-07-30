import { useState } from "react";
import { Input } from "../../components/input/view/input.view";

import { Aa1Selection } from "../../components/aa1Selection/aa1Selection";
import "./useAsiPred.css";
import { Aa2Selection } from "../../components/aa2Selection/aa2Selection";

export const UseAsiPred = () => {
    const [aa1, setAa1] = useState('');
    const [aa2, setAa2] = useState("");
    const [aa1Active, setAa1Active] = useState(false);
    const [aa2Active, setAa2Active] = useState(false);

    return (
      <div className="use-asi-pred-page">
        <Input handleInputChange={() => {}} />
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
      </div>
    );
}