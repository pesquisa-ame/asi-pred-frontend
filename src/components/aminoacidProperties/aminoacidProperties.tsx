import { aminoacidsFq } from "../../data/aminoacids-fq";

interface aminoacidPropertiesProps {
  aa: string;
}

export const AminoacidProperties = ({ aa }: aminoacidPropertiesProps) => {
  const aaData = aminoacidsFq.find((item) => item.code === aa);

  const aaPolarity = aaData?.polarity;
  const aaCharge = aaData?.charge;
  const aaSize = aaData?.size;

  return (
    <div>
      <p className="text-asi-color">Polarity: {aaPolarity}</p>
      <p className="text-asi-color">Charge: {aaCharge}</p>
      <p className="text-asi-color">Size: {aaSize}</p>
    </div>
  );
};
