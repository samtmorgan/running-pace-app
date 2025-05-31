import { useCallback } from "react";
import { ETimeInput, ETimeInputPlaceholder } from "@/config";

export type TGoalInput = {
  hours: number;
  minutes: number;
  seconds: number;
};

type TGoalInputProps = {
  goalInput: TGoalInput;
  setGoalInput: (value: TGoalInput) => void;
};

export const GoalInput = ({ goalInput, setGoalInput }: TGoalInputProps) => {
  const changeHandler = useCallback(
    (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      const updatedGoalInput: TGoalInput = { ...goalInput };

      switch (field) {
        case ETimeInput.HOURS:
          updatedGoalInput[ETimeInput.HOURS] = value;
          break;
        case ETimeInput.MINUTES:
          if (value > 59) {
            updatedGoalInput[ETimeInput.MINUTES] = 59;
          } else {
            updatedGoalInput[ETimeInput.MINUTES] = value;
          }
          break;
        case ETimeInput.SECONDS:
          if (value > 59) {
            updatedGoalInput[ETimeInput.SECONDS] = 59;
          } else {
            updatedGoalInput[ETimeInput.SECONDS] = value;
          }
          break;
        default:
          break;
      }

      setGoalInput(updatedGoalInput);
    },
    [goalInput, setGoalInput]
  );
  return (
    <fieldset>
      <p>Enter goal time: </p>
      <div>
        <div className="time-input-group">
          {[
            {
              value: goalInput[ETimeInput.HOURS],
              name: ETimeInput.HOURS,
              placeholder: ETimeInputPlaceholder.HOURS,
            },
            {
              value: goalInput[ETimeInput.MINUTES],
              name: ETimeInput.MINUTES,
              placeholder: ETimeInputPlaceholder.MINUTES,
            },
            {
              value: goalInput[ETimeInput.SECONDS],
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
    </fieldset>
  );
};
