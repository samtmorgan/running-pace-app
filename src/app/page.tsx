"use client";

import { useCallback, useMemo, useState } from "react";
import {
  CalculationType,
  RaceDistance,
  GoalInput,
  ResultsTable,
  TGoalInput,
  PaceInput,
  TPaceInput,
} from "@/components";
import { defaultFormValues, ECalculationTypes, ERaceDistances } from "@/config";
import { getResult, TCalculationResult } from "@/utils";

function App() {
  const [results, setResults] = useState<TCalculationResult[]>([]);
  const [calculationType, setCalculationType] = useState<ECalculationTypes>(
    ECalculationTypes.PACE
  );
  const [distance, setDistance] = useState<ERaceDistances>(
    ERaceDistances.FIVE_KM
  );
  const [paceInput, setPaceInput] = useState<TPaceInput>(
    defaultFormValues.paceInput
  );
  const [goalInput, setGoalInput] = useState<TGoalInput>(
    defaultFormValues.goalInput
  );

  const handleSubmit = useCallback(() => {
    const result = getResult({
      calculationType,
      distance,
      paceInput,
      goalInput,
    });
    console.log("result", result);
    setGoalInput(defaultFormValues.goalInput);
    setPaceInput(defaultFormValues.paceInput);
    if (result) {
      setResults((prev) => [...prev, result]);
    }
  }, [calculationType, distance, goalInput, paceInput]);

  const disableSubmit = useMemo(
    () =>
      (calculationType === ECalculationTypes.PACE &&
        goalInput.hours === 0 &&
        goalInput.minutes === 0 &&
        goalInput.seconds === 0) ||
      (calculationType === ECalculationTypes.GOAL &&
        paceInput.minutes === 0 &&
        paceInput.seconds === 0),
    [calculationType, goalInput, paceInput]
  );

  return (
    <div className="app">
      <header>
        <h1>Pace a Run</h1>
      </header>
      <main>
        <section>
          <h2>Calculate a pace or goal time</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <RaceDistance onChange={setDistance} />
            <CalculationType onChange={setCalculationType} />
            {calculationType === ECalculationTypes.PACE ? (
              <GoalInput goalInput={goalInput} setGoalInput={setGoalInput} />
            ) : (
              <PaceInput paceInput={paceInput} setPaceInput={setPaceInput} />
            )}

            <button disabled={disableSubmit} type="submit">
              Calculate
            </button>
          </form>
        </section>
        <section>
          <h2>Calculation results</h2>
          <div className="paces">
            <ResultsTable results={results} />
          </div>
          <button
            className="reset-button"
            type="button"
            onClick={() => setResults([])}
            disabled={results.length === 0}
          >
            Clear Results
          </button>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()}, S T Morgan</p>
      </footer>
    </div>
  );
}

export default App;
