import { useState } from "react";
import "./App.css";

function App() {
  const [csCount, setCsCount] = useState("");
  const [sumNumber, setSumNumber] = useState("");
  const [shortestIndexes, setShortestIndexes] = useState([]);

  const handleChange = (e) => setCsCount(e.target.value);
  const handleChangeSum = (e) => setSumNumber(e.target.value);

  const showSumNumber = () => {
    const arr = csCount.split(",").map(Number);
    const target = Number(sumNumber);

    let n = arr.length;
    let result = [];

    for (let start = 0; start < n; start++) {
      let current_sum = 0;
      let tempIndexes = [];

      for (let end = start; end < n; end++) {
        current_sum += arr[end];
        tempIndexes.push(end);

        if (current_sum === target) {
          if (result.length === 0 || tempIndexes.length < result.length) {
            result = [...tempIndexes];
          }
        }
      }
    }

    setShortestIndexes(result);
  };

  const numbers = csCount.split(",").map(Number);

  return (
    <>
      <h1 className="text-black text-medium text-[32px]">Time 2Hr</h1>

      <div className="flex gap-[10px] pt-[50px]">
        <input
          className="border w-[300px] p-[5px]"
          type="text"
          value={csCount}
          placeholder="Add comma separated numbers"
          onChange={handleChange}
        />

        <input
          className="border p-[5px]"
          type="text"
          value={sumNumber}
          placeholder="Target Sum"
          onChange={handleChangeSum}
        />

        <button className="border px-[10px]" onClick={showSumNumber}>
          Find
        </button>
      </div>

      <div className="flex justify-center items-center pt-[50px] gap-[5px]">
        {numbers.map((num, i) => (
          <div
            key={i}
            className={`w-[50px] h-[50px] flex items-center justify-center 
            text-[18px] font-bold border
            ${shortestIndexes.includes(i) ? "bg-yellow-300" : "bg-[#f0f0f0]"}`}
          >
            {num}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
