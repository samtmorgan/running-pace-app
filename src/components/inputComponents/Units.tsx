import { defaultFormValues, EUnits } from "@/config";
import { getFormTextFromEnum } from "@/utils";
import { useMemo } from "react";

type TUnitsProps = {
  onChange: (value: EUnits) => void;
};

export const Units = ({ onChange }: TUnitsProps) => {
  const fields = useMemo(() => getFormTextFromEnum(EUnits), []);

  return (
    <fieldset>
      <div className="units">
        <legend>Units:</legend>
        {fields.map((field) => (
          <div key={field.value}>
            <input
              type="radio"
              id={`calc-${field.value}`}
              name="units"
              value={field.value}
              onChange={(e) => onChange(e.target.value as EUnits)}
              defaultChecked={field.value === defaultFormValues.units}
            />
            <label htmlFor={`calc-${field.value}`}>{field.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
