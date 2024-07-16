import { useEffect } from "react";
import "./App.css";

import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import { useRef } from "react";
import { FaDollarSign } from "react-icons/fa";

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeBill = (e) => {
    setBill(Number(e.target.value));
  };
  const onChangeTip = (e) => {
    setTip(Number(e.target.value));
  };
  const onChangePeople = (e) => {
    setPeople(Number(e.target.value));
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");

    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill && tip && people) {
      setTipAmount((bill * tip) / 100 / people);
      setTotal(bill / people + (bill * tip) / 100 / people);
    }
  }, [bill, tip, people]);

  return (
    <>
      <div className="w-full text-center mt-4 text-[26px]">
        <h1>
          SPLI
          <br />
          TTER
        </h1>
      </div>

      <div className="w-[1000px] lg:h-[29.875rem] h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-[2.375rem] bg-white text-center rounded-t-3xl lg:rounded-b-3xl gap-[3rem]">
        <div className="flex flex-col justify-between h-full row-span-2 lg:row-auto">
          <div className="w-full flex flex-col items-start gap-3">
            <div className="flex justify-between w-full">
              <h2>Bill</h2>
              <p className={`text-[#c6a295] ${bill === 0 ? "" : "hidden"}`}>
                Can't be zero
              </p>
            </div>
            <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
              <span className="absolute w-4 h-4 top-[15px] left-[20px]">
                <FaDollarSign />
              </span>
              <input
                type="number"
                className={`bg-transparent w-full h-full text-right  text-[25px]  px-[15px] py-[10px] n  ${
                  bill === 0 ? "outline-[#c6a295]" : "outline-[#c6a295]"
                }`}
                placeholder="0"
                value={bill}
                onChange={onChangeBill}
              />
            </div>
          </div>

          <div className="flex justify-between w-full">
            <h2>Select Tip %</h2>
            <p></p>
          </div>
          <div className="grid gap-3 grid-cols-3 grid-rows-2 text-white text-[20px]">
            <button
              className="py-[10px] bg-[#00474b] rounded-md cursor-pointer"
              onClick={() => setTip(5)}
            >
              5%
            </button>
            <button
              className="py-[10px] bg-[#00474b] rounded-md cursor-pointer"
              onClick={() => setTip(10)}
            >
              10%
            </button>
            <button
              className="py-[10px] bg-[#00474b] rounded-md cursor-pointer"
              onClick={() => setTip(15)}
            >
              15%
            </button>
            <button
              className="py-[10px] bg-[#00474b] rounded-md cursor-pointer"
              onClick={() => setTip(25)}
            >
              25%
            </button>
            <button
              className="py-[10px] bg-[#00474b] rounded-md cursor-pointer"
              onClick={() => setTip(50)}
            >
              50%
            </button>
            <input
              type="number"
              className="text-center py-[.3125rem] bg-slate-100 rounded-md outline-[#c6a295] text-black appearance-none"
              placeholder="Custom"
              value={tip}
              onChange={onChangeTip}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-3">
            <div className="flex justify-between w-full">
              <h2 className="text-black">Number of people</h2>
              <p className={`text-orange-600 ${people === 0 ? "" : "hidden"}`}>
                Can't be zero
              </p>
            </div>
            <div className="relative w-full bg-slate-100 rounded-md h-[45px]">
              <span className="absolute w-4 h-4 top-[15px] left-[15px]">
                <IoPersonSharp />
              </span>
              <input
                type="number"
                className={`bg-transparent w-full h-full text-right  text-[25px] text-black px-[15px] py-[] pl-[2.5rem]  no-spinners ${
                  people === 0 ? "outline-orange-600" : "outline-[#c6a295]"
                }`}
                placeholder="0"
                value={people}
                onChange={onChangePeople}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-[#00474b] w-full h-full p-[40px]  rounded-2xl">
          <div className="flex flex-col gap-[30px] mt-[5px]">
            <div className="flex justify-between">
              <div className="text-start">
                <h3 className="text-white text-[25px] ">Tip Amount</h3>
                <p className="text-[13px] text-[#21c3ac]">/ Person</p>
              </div>
              <p className="text-[45px] leading-none text-[#21c3ac]">
                ${tipAmount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="text-start">
                <h3 className="text-white text-[25px]">Total</h3>
                <p className="text-[13px] text-[#21c3ac]">/ Person</p>
              </div>
              <p className="text-[45px] leading-none text-[#21c3ac]">
                ${total.toFixed(2)}
              </p>
            </div>
          </div>
          <button
            className={`w-full py-[15px] rounded-md text-[18px] bg-[#a6ded7] ${
              (bill && tip && people) == ""
                ? "cursor-not-allowed "
                : "cursor-pointer  hover:bg-[#6bd4c8]"
            }`}
            onClick={handleReset}
            disabled={(bill && tip && people) == ""}
          >
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
