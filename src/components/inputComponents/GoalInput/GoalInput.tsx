import { useCallback } from "react";
import { ETimeInput, ETimeInputPlaceholder } from "@/config";

type TGoalInputProps = {
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
  setHours: (value: number) => void;
  setMinutes: (value: number) => void;
  setSeconds: (value: number) => void;
};

export const GoalInput = ({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
}: TGoalInputProps) => {
  const changeHandler = useCallback(
    (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      switch (field) {
        case ETimeInput.HOURS:
          setHours(value);
          break;
        case ETimeInput.MINUTES:
          if (value > 59) {
            setMinutes(59);
            return;
          }
          setMinutes(value);
          break;
        case ETimeInput.SECONDS:
          if (value > 59) {
            setSeconds(59);
            return;
          }
          setSeconds(value);
          break;
        default:
          break;
      }
    },
    [setHours, setMinutes, setSeconds]
  );
  return (
    <fieldset>
      <div>
        <legend>Goal time: </legend>

        <div className="fields">
          {[
            {
              value: hours,
              name: ETimeInput.HOURS,
              placeholder: ETimeInputPlaceholder.HOURS,
            },
            {
              value: minutes,
              name: ETimeInput.MINUTES,
              placeholder: ETimeInputPlaceholder.MINUTES,
            },
            {
              value: seconds,
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
