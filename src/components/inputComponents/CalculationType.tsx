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
      <div className="calculation-type">
        <legend>Calculate:</legend>
        {fields.map((field) => (
          <div key={field.value}>
            <input
              type="radio"
              id={`calc-${field.value}`}
              name="calculation-type"
              value={field.value}
              onChange={(e) => onChange(e.target.value as ECalculationTypes)}
              defaultChecked={field.value === defaultFormValues.calculationType}
            />
            <label htmlFor={`calc-${field.value}`}>{field.label}</label>
          </div>
        ))}
      </div>
    </fieldset>
  );
};
