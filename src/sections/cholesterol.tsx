import React, { useState } from "react";
import FormField from "../components/formField";
import { ReactComponent as Swap } from "../assets/swap.svg";
import { ReactComponent as Reset } from "../assets/reset.svg";

const CholesterolSection: React.FC = () => {
  const [totalCholesterolMg, setTotalCholesterolMg] = useState<string>("");
  const [totalCholesterolMmol, setTotalCholesterolMmol] = useState<string>("");
  const [swap, setSwap] = useState<boolean>(false);

  const handleTotalCholesterolChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.currentTarget.name === "mmol") {
      setTotalCholesterolMmol(e.currentTarget.value);

      if (e.currentTarget.value === "") return setTotalCholesterolMg("");

      const result = Math.round(parseInt(e.currentTarget.value) * 38.6);
      setTotalCholesterolMg(result.toString());
    }

    if (e.currentTarget.name === "mg") {
      setTotalCholesterolMg(e.currentTarget.value);

      if (e.currentTarget.value === "") return setTotalCholesterolMmol("");

      const result = (parseInt(e.currentTarget.value) / 38.6).toFixed(1);
      setTotalCholesterolMmol(result.toString());
    }
  };

  const resetForm = () => {
    setTotalCholesterolMg("");
    setTotalCholesterolMmol("");
  };

  const swapFields = () => {
    setSwap((prevState: boolean) => !prevState);
  };

  return (
    <div className="section">
      <div className="subsection">
        <h2>Total Cholesterol</h2>
        <div className="form">
          <div className="form__fields">
            <div
              style={{ order: swap ? 2 : 1, marginBottom: !swap ? "2rem" : "" }}
            >
              <FormField
                placeholder="mmol/l"
                name="mmol"
                onChange={handleTotalCholesterolChange}
                value={totalCholesterolMmol}
              />
            </div>
            <div style={{ order: swap ? 1 : 2, marginBottom: swap ? "2rem" : "" }}>
              <FormField
                placeholder="mg/dl"
                name="mg"
                onChange={handleTotalCholesterolChange}
                value={totalCholesterolMg}
              />
            </div>
          </div>
          <div className="form__icons">
            <Swap title="Swap" onClick={swapFields} />
            <Reset title="Reset" onClick={resetForm} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CholesterolSection;
