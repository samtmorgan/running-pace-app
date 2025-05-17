"use client";

import { useCallback, useState } from "react";
import {
  CalculationType,
  RaceDistance,
  Units,
  PaceInput,
  GoalInput,
  ResultsTable,
  TPaceInput,
} from "@/components";
import { ECalculationTypes, ERaceDistances, EUnits } from "@/config";
import { calculateGoal, calculatePace, TPace } from "../utils";

function App() {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [results, setResults] = useState<TPace[]>([]);
  const [calculationType, setCalculationType] = useState<ECalculationTypes>(
    ECalculationTypes.PACE
  );
  const [distance, setDistance] = useState<ERaceDistances>(
    ERaceDistances.FIVE_KM
  );
  const [units, setUnits] = useState<EUnits>(EUnits.KILOMETRES);
  const [paceInput, setPaceInput] = useState<TPaceInput>({
    minutes: 0,
    seconds: 0,
    units: EUnits.KILOMETRES,
  });

  const handleSubmit = useCallback(() => {
    if (calculationType === ECalculationTypes.PACE) {
      const result = calculatePace({
        distance,
        hours,
        minutes,
        seconds,
      });
      setResults((prev) => [...prev, result]);
      console.log("result", result);
    }
    if (calculationType === ECalculationTypes.GOAL) {
      const goalTime = calculateGoal({
        distance,
        pace: paceInput,
      });
      const result: TPace = {
        kmPace: paceInput.minutes + ":" + paceInput.seconds,
        mPace: "",
        distance,
        goal: goalTime,
      };
      setResults((prev) => [...prev, result]);
      console.log("result", result);
    }
  }, [calculationType, distance, hours, minutes, paceInput, seconds]);

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>Get your race pace or goal time</h1> */}
        <h1>
          **** next; add a calculate function that takes all the raw input and
          is responsible for generating all the values we need *****
        </h1>
      </header>
      <section>
        <form>
          <CalculationType onChange={setCalculationType} />
          <RaceDistance onChange={setDistance} />
          <Units onChange={setUnits} />
          {calculationType === ECalculationTypes.PACE ? (
            <GoalInput
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              setHours={setHours}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
            />
          ) : (
            <PaceInput
              paceInput={paceInput}
              setPaceInput={setPaceInput}
              units={units}
            />
          )}

          <button type="button" onClick={handleSubmit}>
            calculate
          </button>
        </form>
      </section>
      {results.length > 0 && (
        <section className="paces">
          <h2>Your Paces</h2>
          <ResultsTable paces={results} />
        </section>
      )}
    </div>
  );
}

export default App;
