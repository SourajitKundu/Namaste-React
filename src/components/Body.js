import resList from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.rating.aggregate_rating > 4.5
            );
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restuarants
        </button>
      </div>

      <div className="res-container">
        {listOfRes.map((res) => (
          <RestuarantCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
