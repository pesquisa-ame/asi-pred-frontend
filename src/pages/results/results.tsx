import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { aminoAcidImages } from "../../data/aminoacids-images";
import { getThreeLetterCode } from "./controller/getThreeLetterCode";
import { GoArrowRight } from "react-icons/go";
import { normalizeDistances } from "./controller/normalizeDistances";
import granthamDistances from "../../data/distances/grantham.json";
import sneathDistances from "../../data/distances/sneath.json";
import miyataDistances from "../../data/distances/miyata.json";
import epsteinsDistances from "../../data/distances/epsteins.json";
import experimentalExchangeabilityDistances from "../../data/distances/experimentalExchangeability.json";
import { AminoacidProperties } from "../../components/aminoacidProperties/aminoacidProperties";
import GradientBar from "../../components/gradientBar/gradientBar";
import { invertPercentages } from "./controller/invertPercentages";
import { getDistanceValue } from "./controller/getDistanceValue";
import { getDistanceValueOrder } from "./controller/getDistanceValueOrder";
import HydrophobicityDifference from "../../components/hydrophobicityDifference/hydrophobicituDifference";
import "./results.css";

export type Distances = {
  [key: string]: {
    [key: string]: number;
  };
};

export type CombinationType = [string, string, string, string];

export const Results = () => {
  const location = useLocation();

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { combinations }: { combinations?: CombinationType[] } =
    location.state || {};

  const { combinationsWeight }: { combinationsWeight?: string[] } =
    location.state || {};

  const numericCombinationWeight: number[] = combinationsWeight
    ? combinationsWeight.map((str) => parseFloat(str))
    : [];

  const normalizedGrantham = normalizeDistances(granthamDistances);
  const normalizedEpsteins = normalizeDistances(epsteinsDistances);
  const normalizedMiyata = normalizeDistances(miyataDistances);
  const normalizedExperimental = normalizeDistances(
    experimentalExchangeabilityDistances
  );

  const invertedGrantham = invertPercentages(normalizedGrantham);
  const invertedMiyata = invertPercentages(normalizedMiyata);

  const [data, setData] = useState<{
    id: string[];
    combinacoes: (string | React.ReactNode)[];
    grantham: number[];
    sneath: number[];
    miyata: number[];
    epsteins: number[];
    experimental: number[];
    averageResult: number[];
  }>({
    id: [],
    combinacoes: [],
    grantham: [],
    sneath: [],
    miyata: [],
    epsteins: [],
    experimental: [],
    averageResult: [],
  });

  const [results, setResults] = useState<{
    id: string[];
    combinacoes: (string | React.ReactNode)[];
    grantham: number[];
    sneath: number[];
    miyata: number[];
    epsteins: number[];
    experimental: number[];
    averageResult: number[];
  }>({
    id: [],
    combinacoes: [],
    grantham: [],
    sneath: [],
    miyata: [],
    epsteins: [],
    experimental: [],
    averageResult: [],
  });

  useEffect(() => {
    if (!combinations) return;
    if (!numericCombinationWeight) return;

    const computedResults = combinations
      .map((combination) => {
        const idResult = combination[0];
        const aa1 = combination[1];
        const aa2 = combination[2];

        const granthamValue = getDistanceValue(invertedGrantham, aa1, aa2);
        const granthamResult =
          granthamValue !== undefined
            ? parseFloat(granthamValue.toFixed(2))
            : undefined;

        const sneathValue = getDistanceValue(sneathDistances, aa1, aa2);
        const sneathResult =
          sneathValue !== undefined
            ? parseFloat(sneathValue.toFixed(2))
            : undefined;

        const epsteinsValue = getDistanceValueOrder(
          normalizedEpsteins,
          aa1,
          aa2
        );
        const epsteinsResult =
          epsteinsValue !== undefined
            ? parseFloat(epsteinsValue.toFixed(2))
            : undefined;

        const miyataValue = getDistanceValue(invertedMiyata, aa1, aa2);
        const miyataResult =
          miyataValue !== undefined
            ? parseFloat(miyataValue.toFixed(2))
            : undefined;

        const experimentalValue = getDistanceValueOrder(
          normalizedExperimental,
          aa1,
          aa2
        );

        const experimentalExchangeabilityResult =
          experimentalValue !== undefined
            ? parseFloat(experimentalValue.toFixed(2))
            : undefined;

        if (
          granthamResult === undefined ||
          sneathResult === undefined ||
          miyataResult === undefined ||
          epsteinsResult === undefined ||
          experimentalExchangeabilityResult === undefined
        ) {
          alert("One or more results are Undefined");
          return null;
        }

        const averageResult = parseFloat(
          (
            (granthamResult +
              sneathResult +
              miyataResult +
              epsteinsResult +
              experimentalExchangeabilityResult) /
            5
          ).toFixed(2)
        );

        const combinationNames = (
          <>
            {getThreeLetterCode(combination[1])}
            <GoArrowRight className="arrow-right" />
            {getThreeLetterCode(combination[2])}
          </>
        );

        const disulfideResult = numericCombinationWeight[5];

        return {
          id: idResult,
          aa1: aa1,
          aa2: aa2,
          combinacoes: combinationNames,
          grantham: granthamResult,
          sneath: sneathResult,
          miyata: miyataResult,
          epsteins: epsteinsResult,
          experimental: experimentalExchangeabilityResult,
          averageResult: averageResult,
          disulfide: disulfideResult,
        };
      })
      .filter(
        (result): result is NonNullable<typeof result> => result !== null
      );

    const formattedResults = {
      id: computedResults.map((result) => result.id),
      aa1: computedResults.map((result) => result.aa1),
      aa2: computedResults.map((result) => result.aa2),
      combinacoes: computedResults.map((result) => result.combinacoes),
      grantham: computedResults.map((result) => result.grantham),
      sneath: computedResults.map((result) => result.sneath),
      miyata: computedResults.map((result) => result.miyata),
      epsteins: computedResults.map((result) => result.epsteins),
      experimental: computedResults.map((result) => result.experimental),
      averageResult: computedResults.map((result) => result.averageResult),
      imgs: combinations,
    };

    const formattedData = {
      id: computedResults.map((result) => result.id),
      aa1: computedResults.map((result) => result.aa1),
      aa2: computedResults.map((result) => result.aa2),
      combinacoes: computedResults.map((result) => result.combinacoes),
      grantham: computedResults.map(
        (result) => result.grantham * numericCombinationWeight[0]
      ),
      sneath: computedResults.map(
        (result) => result.sneath * numericCombinationWeight[1]
      ),
      miyata: computedResults.map(
        (result) => result.miyata * numericCombinationWeight[2]
      ),
      epsteins: computedResults.map(
        (result) => result.epsteins * numericCombinationWeight[3]
      ),
      experimental: computedResults.map(
        (result) => result.experimental * numericCombinationWeight[4]
      ),
      averageResult: computedResults.map((result) => result.averageResult),
      disulfide: computedResults.map((result) => result.disulfide),
    };

    setData(formattedData);
    setResults(formattedResults);
  }, [combinations]);

  const printResults = Object.values(results);

  const fetchClusterImage = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://asi-pred-backend.onrender.com/cluster",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blob = await response.blob();

      const imageUrl = URL.createObjectURL(blob);

      setImageSrc(imageUrl);
    } catch (error: any) {
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="results-page">
      <div>
        {printResults[0].map((_, index) => (
          <div key={index}>
            <p className="id">ID: {printResults[0][index]}</p>
            <p className="aminoacid-identification">
              Aminoacids: {printResults[3][index]}
            </p>
            {combinations && combinations[index][3] === "true" && (
              <p className="aminoacid-identification">
                Disulfide bond disruption
              </p>
            )}
            <div className="image-grid-container">
              {combinations && combinations[index] && (
                <div>
                  <img
                    src={
                      aminoAcidImages[
                        combinations[index][1] as keyof typeof aminoAcidImages
                      ]
                    }
                    alt={combinations[index][1]}
                  />
                  <AminoacidProperties aa={combinations[index][1]} />
                </div>
              )}
              {combinations && combinations[index] && (
                <div>
                  <img
                    className=" h-40 mx-auto"
                    src={
                      aminoAcidImages[
                        combinations[index][2] as keyof typeof aminoAcidImages
                      ]
                    }
                    alt={combinations[index][2]}
                  />
                  <AminoacidProperties aa={combinations[index][2]} />
                </div>
              )}
            </div>
            <p>Index based on Grantham's Score : {printResults[4][index]}</p>
            <GradientBar value={Number(printResults[4][index])} />
            <p>Index based on Sneath's index: {printResults[5][index]}</p>
            <GradientBar value={Number(printResults[5][index])} />
            <p>Index based on Miyata: {printResults[6][index]}</p>
            <GradientBar value={Number(printResults[6][index])} />
            <p>
              Index based on Epstein's coefficient of difference:{" "}
              {printResults[7][index]}
            </p>
            <GradientBar value={Number(printResults[7][index])} />
            <p>
              Index based on Experimental Exchangeability data:{" "}
              {printResults[8][index]}
            </p>
            <GradientBar value={Number(printResults[8][index])} />
            <p>Average Result: {printResults[9][index]}</p>
            <GradientBar value={Number(printResults[9][index])} />
            <p>
              <HydrophobicityDifference
                aa1={String(printResults[1][index])}
                aa2={String(printResults[2][index])}
              />
            </p>
          </div>
        ))}
      </div>

      <div className="hca-section">
        <button onClick={fetchClusterImage} disabled={loading}>
          {loading ? "Loading..." : "Generate Cluster Image"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {imageSrc ? (
          <>
            <img id="cluster-image" src={imageSrc} alt="Cluster Dendrogram" />
            <a
              href={imageSrc}
              download="cluster.png"
              className="bg-asi-color m-10 p-3 shadow-asi-color shadow-sm hover:bg-asi-white hover:text-asi-color cursor-pointe rounded font-bold h-12 w-40"
            >
              Download Image
            </a>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Results;
