import React from "react";
import styles from "./SortableTable.module.scss";


interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: any[];
}
export function sortData<T>(
   tableData: T[],
   sortKey: keyof T,
   reverse: boolean
 ): T[] {
   const sortedData = tableData.sort((a, b) => {
     return a[sortKey] > b[sortKey] ? 1 : -1;
   });
 
   if (reverse) {
     return sortedData.reverse();
   }
 
   return sortedData;
 }

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <table className={styles.sortableTable}>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key} className={styles.tableHeader}>
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {headers.map((header) => (
            <td key={header.key} className={styles.tableCell}>
              {row[header.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default SortableTable;