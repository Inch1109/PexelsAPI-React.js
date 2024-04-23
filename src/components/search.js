import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Search({
  search = () => {},
  setInput = () => {},
  input = "",
}) {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" type="text" onChange={inputHandler} />
      {/* 當input未輸入文字，點擊btn會跳出404 */}
      <button onClick={search} disabled={input === "" ? true : false}>
        <FaSearch />
      </button>
    </div>
  );
}
