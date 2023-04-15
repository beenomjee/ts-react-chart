import React, { FC } from "react";
import styles from "./BottomCard.module.css";

interface IEntry {
  vendor: string;
  date: string;
  transferredTo: string;
  amount: number;
}

const genEntries = (count: number): IEntry[] => {
  const entries: IEntry[] = [];
  for (let i = 0; i < count; i++) {
    let amount: number = Math.floor(Math.random() * 2000) + 1000;
    entries.push({
      amount,
      date: "03-04-23",
      transferredTo: "Paypal",
      vendor: "Vendor Business",
    });
  }
  return entries;
};

const data: IEntry[] = genEntries(5);

const BottomCard: FC = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Transferred to</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.vendor}</td>
              <td>{entry.transferredTo}</td>
              <td>{entry.date}</td>
              <td>${entry.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BottomCard;
