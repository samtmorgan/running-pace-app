import { defaultFormValues, ECalculationTypes } from "@/config";
import { getFormTextFromEnum } from "@/utils";
import { useMemo } from "react";

type TCalculationTypeProps = {
  onChange: (value: ECalculationTypes) => void;
};

export const CalculationType = ({ onChange }: TCalculationTypeProps) => {
  const fields = useMemo(() => getFormTextFromEnum(ECalculationTypes), []);

  return (
    <fieldset>
      <legend>2. Choose what to calculate</legend>
      <div className="radio-pill-group">
        {fields.map((field) => (
          <span key={field.value}>
            <input
              type="radio"
              id={`calc-${field.value}`}
              name="calculation-type"
              value={field.value}
              onChange={(e) => onChange(e.target.value as ECalculationTypes)}
              defaultChecked={field.value === defaultFormValues.calculationType}
            />
            <label className="pill" htmlFor={`calc-${field.value}`}>
              {field.label}
            </label>
          </span>
        ))}
      </div>
    </fieldset>
  );
};
