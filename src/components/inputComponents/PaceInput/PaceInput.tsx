import { useCallback, useMemo, useState } from "react";
import {
  ETimeInput,
  ETimeInputPlaceholder,
  EUnits,
  defaultFormValues,
} from "@/config";
import { getFormTextFromEnum } from "@/utils";

export type TPaceInput = {
  minutes: number;
  seconds: number;
  units: EUnits;
};

type TPaceInputProps = {
  paceInput: TPaceInput;
  setPaceInput: (value: TPaceInput) => void;
};

export const PaceInput = ({ paceInput, setPaceInput }: TPaceInputProps) => {
  const [units, setUnits] = useState<EUnits>(defaultFormValues.units);

  const changeHandler = useCallback(
    (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      const updatedPaceInput = { ...paceInput };
      updatedPaceInput.units = units;

      switch (field) {
        case ETimeInput.MINUTES:
          updatedPaceInput.minutes = value;
          break;
        case ETimeInput.SECONDS:
          if (value > 59) {
            updatedPaceInput.seconds = 59;
          } else {
            updatedPaceInput.seconds = value;
          }
          break;
        default:
          break;
      }

      setPaceInput(updatedPaceInput);
    },
    [paceInput, setPaceInput, units]
  );

  const unitFields = useMemo(() => getFormTextFromEnum(EUnits), []);

  return (
    <fieldset>
      <div>
        <legend>Pace:</legend>
        {unitFields.map((field) => (
          <div key={field.value}>
            <input
              type="radio"
              id={`calc-${field.value}`}
              name="units"
              value={field.value}
              onChange={(e) => setUnits(e.target.value as EUnits)}
              defaultChecked={field.value === defaultFormValues.units}
            />
            <label htmlFor={`calc-${field.value}`}>{field.label}</label>
          </div>
        ))}
        <div className="fields">
          {[
            {
              value: paceInput.minutes,
              name: ETimeInput.MINUTES,
              placeholder: ETimeInputPlaceholder.MINUTES,
            },
            {
              value: paceInput.seconds,
              name: ETimeInput.SECONDS,
              placeholder: ETimeInputPlaceholder.SECONDS,
            },
          ].map((field, index) => (
            <div className="inputContainer" key={index}>
              <label className="label" htmlFor={field.name}>
                {field.name}
              </label>
              <input
                className="input"
                value={field.value || ""}
                onChange={(e) => changeHandler(field.name, e)}
                id={field.name}
                type="number"
                min={0}
                step={1}
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
      </div>
    </fieldset>
  );
};
