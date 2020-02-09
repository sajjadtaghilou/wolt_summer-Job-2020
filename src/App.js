import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './App.module.css';
import { restaurants } from "./data/restaurants.json";
import Card from "./Components/Card";

const sortTypes = [
  "Delivery price",
  "Name"
]
const sortAlgos = [
  (rest1, rest2) => {
    return rest1.delivery_price - rest2.delivery_price;
  },
  (rest1, rest2) => {
    return String(rest1.name).localeCompare(rest2.name);
  }
];
const mapTypeToAlgo = new Map();
sortTypes.forEach((s, i) => mapTypeToAlgo.set(s, sortAlgos[i]));

function App() {
  const [Asc, setAsc] = useState(true);
  const [sortType, setSortType] = useState("Name");
  const [sorted, setSorted] = useState(restaurants);
  useEffect(() => {
    const res = [...sorted].sort(mapTypeToAlgo.get(sortType));;
    setSorted(Asc ? res : res.reverse());
  }, [Asc, sortType]);
  return (
    <div className="container">
      <div className={styles.header}>Wolt</div>
      <div className={styles.sort_container}>
        <select value={sortType} className={styles.select} onChange={e => setSortType(e.target.value)}>
          {sortTypes.map(s => (
            <option value={s}>{s}</option>
          ))}
        </select>
        <button className={styles.button} onClick={() => setAsc(s => !s)}>{Asc ? "↑" : "↓"}</button>
      </div>
      <div className="row">
        {sorted.map(r => (
          <div className="col-6 col-md-3">
            <Card restaurant={r} key={r.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
