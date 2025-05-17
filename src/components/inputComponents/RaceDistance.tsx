import { defaultFormValues, ERaceDistances } from "@/config";
import { getFormTextFromEnum } from "@/utils";
import { useMemo } from "react";

type TRaceDistanceProps = {
  onChange: (value: ERaceDistances) => void;
};

export const RaceDistance = ({ onChange }: TRaceDistanceProps) => {
  const fields = useMemo(() => getFormTextFromEnum(ERaceDistances), []);

  return (
    <fieldset>
      <div className="race-distances">
        <legend>Race distance:</legend>
        {fields.map((field) => (
          <div key={field.value}>
            <input
              type="radio"
              id={`race-${field.value}`}
              name="race-distance"
              value={field.value}
              onChange={(e) => onChange(e.target.value as ERaceDistances)}
              defaultChecked={field.value === defaultFormValues.raceDistance}
            />
            <label htmlFor={`race-${field.value}`}>{field.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
