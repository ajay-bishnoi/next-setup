"use client";
import { COUNTRY_DATA } from "@/utils/helper";
import { useEffect, useState } from "react";

const Form = () => {
  const [inputData, setInputData] = useState("");
  console.log(inputData);

  const [getList, setGetList] = useState(COUNTRY_DATA);
  console.log(getList);

  const filterData = () => {
    const filteredData = getList.filter((obj) =>
      obj.country.toLowerCase().includes(inputData)
    );
    setGetList(filteredData);
  };
  useEffect(() => {
    filterData();
  }, [getList]);
  return (
    <div className="max-w-[1092px] mx-auto py-20">
      <div>
        <input
          type="search"
          placeholder="Search"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          className="border-2 border-black-90 outline-none"
        />
        <div>
          {getList.map((obj) => (
            <li>
              {obj.state.map((obj) => (
                <p>{obj}</p>
              ))}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
