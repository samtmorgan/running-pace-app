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
      <p>Choose your race distance</p>
      <div>
        <div className="radio-pill-group">
          {fields.map((field) => (
            <span key={field.value}>
              <input
                type="radio"
                id={`race-${field.value}`}
                name="race-distance"
                value={field.value}
                onChange={(e) => onChange(e.target.value as ERaceDistances)}
                defaultChecked={field.value === defaultFormValues.raceDistance}
              />
              <label className="pill" htmlFor={`race-${field.value}`}>
                {field.label}
              </label>
            </span>
          ))}
        </div>
      </div>
    </fieldset>
  );
};
