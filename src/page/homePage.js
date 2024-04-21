import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/search";
import Pictures from "../components/pictures";

export default function HomePage() {
  let [input , setInput]=useState("")
  let [data, setData] = useState([]); //取得圖片資訊
  const auth = "gkGMM2II5X8GsEqZ5zyegDSMBcdOVN1byJ4Vdc9K3qEdT4ap3uzasdR9";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=15`

  // 使用axios連接API
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    // console.log(result);
    setData(result.data.photos);
  };
  // 初次render時顯示精選圖片
  useEffect(()=>{
    search(initialURL)
  },[])

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search search={()=>{search(searchURL)}} setInput={setInput}/>
      <div className="pictures">
        {/* 因為data預設是[]，所以沒有資料的時候不會顯示東西。
      使用 && (logical operator) 去比較左右兩邊，如果左邊是true就會運算左邊的東西;如果是false會運算右手邊的東西 */}
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
    </div>
  );
}
