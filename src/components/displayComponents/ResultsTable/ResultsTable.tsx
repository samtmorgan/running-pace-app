import { TPace } from "@/utils/calculatePace";
import styles from "./ResultsTable.module.css";

const TableHeader = ({ children }: { children: React.ReactNode }) => {
  return <th className={styles.tableHeader}>{children}</th>;
};

export const ResultsTable = ({ paces }: { paces: TPace[] }) => {
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
        {paces.map((pace, index) => (
          <tr key={index}>
            <td>{pace.distance}</td>
            <td>{`${pace.goal.hours}h ${pace.goal.minutes}m ${pace.goal.seconds}s`}</td>
            <td>{pace.kmPace}</td>
            <td>{pace.mPace}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
