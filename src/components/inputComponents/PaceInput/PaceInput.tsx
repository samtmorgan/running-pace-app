import { useCallback } from "react";
// import styles from "./PaceInput.module.css";
import {
  ETimeInput,
  ETimeInputPlaceholder,
  EPaceLabels,
  EUnits,
} from "@/config";

export type TPaceInput = {
  minutes: number;
  seconds: number;
  units: EUnits;
};

type TPaceInputProps = {
  paceInput: TPaceInput;
  setPaceInput: (value: TPaceInput) => void;
  units: EUnits;
};

export const PaceInput = ({
  paceInput,
  setPaceInput,
  units,
}: TPaceInputProps) => {
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

  return (
    <fieldset>
      <div>
        <legend>
          Pace (
          {units === EUnits.KILOMETRES
            ? EPaceLabels.KILOMETRES
            : EPaceLabels.MILES}
          ):
        </legend>
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
