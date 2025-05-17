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
        <h1>Sit tight, this is going to be a great running pace calculator!</h1>
      </header>
    </div>
  );
}

export default App;
