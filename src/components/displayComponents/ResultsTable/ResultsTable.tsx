import styles from "./ResultsTable.module.css";
import { TCalculationResult } from "@/utils";

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <th className={styles.tableHeader}>{children}</th>;
};

export const ResultsTable = ({
  results,
}: {
  results: TCalculationResult[];
}) => {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader>Distance</TableHeader>
          <TableHeader>Goal Time</TableHeader>
          <TableHeader>Pace (km)</TableHeader>
          <TableHeader>Pace (miles)</TableHeader>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.distance}</td>
            <td>{result.goalString}</td>
            <td>{result.kmPaceString}</td>
            <td>{result.mPaceString}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
