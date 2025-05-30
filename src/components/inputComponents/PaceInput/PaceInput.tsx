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

  const unitFields = useMemo(
    () => [
      { value: EUnits.KILOMETRES, label: "min/km" },
      { value: EUnits.MILES, label: "min/mile" },
    ],
    []
  );

  return (
    <fieldset>
      <p>Enter pace</p>
      <div>
        {/* <legend>Enter pace</legend> */}
        {/* <div className="pace-input-container"> */}
        <div className="radio-pill-group">
          {unitFields.map((field) => (
            <span key={field.value}>
              <input
                type="radio"
                id={`calc-${field.value}`}
                name="units"
                value={field.value}
                onChange={(e) => setUnits(e.target.value as EUnits)}
                defaultChecked={field.value === defaultFormValues.units}
              />
              <label className="pill" htmlFor={`calc-${field.value}`}>
                {field.label}
              </label>
            </span>
          ))}
        </div>
        <div className="time-input-group">
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
            <div className="time-input-field" key={index}>
              <label htmlFor={field.name}>{field.name}</label>
              <input
                value={field.value || ""}
                onChange={(e) => changeHandler(field.name, e)}
                id={field.name}
                type="number"
                min={0}
                step={1}
                placeholder={field.placeholder}
                onKeyDown={(e) => {
                  if (
                    e.key === "e" ||
                    e.key === "E" ||
                    e.key === "+" ||
                    e.key === "-" ||
                    e.key === "."
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </fieldset>
  );
};
