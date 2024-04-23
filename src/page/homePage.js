import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../components/search";
import Pictures from "../components/pictures";

export default function HomePage() {
  let [input, setInput] = useState("");
  let [data, setData] = useState([]); //取得圖片資訊
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "gkGMM2II5X8GsEqZ5zyegDSMBcdOVN1byJ4Vdc9K3qEdT4ap3uzasdR9";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=15`;

  // 使用axios連接API
  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
   
    // console.log(result);
    setData(result.data.photos);
    setCurrentSearch(input);
  };
  // 點選more會往下加載圖片
  /* 遇到問題1. 圖片加載第2頁，page=${page}還是1，但react狀態有改成2。
    是因為“閉包“，抓到最外面的page*/
  /* 問題2. 如果在input打字，沒有按收尋，但是點選more會出現收尋的圖片。
     所以要把input狀態和搜尋狀態分開 */
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${
        page + 1
      }`;
    }
    console.log(newURL);
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    // 保留原本的圖片往下加載圖片
    setData(data.concat(result.data.photos));
  };
  // 初次render時顯示精選圖片
  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
        input={input}
        initialURL={initialURL}
      />
      <div className="pictures">
        {/* 因為data預設是[]，所以沒有資料的時候不會顯示東西。
      使用 && (logical operator) 去比較左右兩邊，如果左邊是true就會運算左邊的東西;如果是false會運算右手邊的東西 */}
        {data &&
          data.map((d) => {
            return <Pictures data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>more</button>
      </div>
    </div>
  );
}
