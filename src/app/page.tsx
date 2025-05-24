"use client";

import { useCallback, useState } from "react";
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get your race pace or goal time</h1>
      </header>
      <section>
        <form>
          <RaceDistance onChange={setDistance} />
          <CalculationType onChange={setCalculationType} />
          {calculationType === ECalculationTypes.PACE ? (
            <GoalInput goalInput={goalInput} setGoalInput={setGoalInput} />
          ) : (
            <PaceInput paceInput={paceInput} setPaceInput={setPaceInput} />
          )}

          <button type="button" onClick={handleSubmit}>
            calculate
          </button>
        </form>
      </section>
      {results.length > 0 && (
        <section className="paces">
          <h2>Your Paces</h2>
          <ResultsTable results={results} />
        </section>
      )}
    </div>
  );
}

export default App;
