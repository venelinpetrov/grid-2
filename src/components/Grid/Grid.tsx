import React from 'react';
import './Grid.css';

export interface Column {
  key: string;
  displayName: string;
}

export interface Props {
  data: Array<{[dataKey: string]: string}>;
  columns: Column[];
  dataKey: string;
}

export const Grid: React.FC<Props> = ({
  data,
  dataKey,
  columns,
}) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map(({ key, displayName }) => <th key={key}>{displayName}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row[dataKey]}>
            {columns.map(({ key }) => <td>{row[key]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
