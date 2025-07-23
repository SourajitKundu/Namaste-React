import resList from "../utils/mockData";
import RestuarantCard from "./RestuarantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestuarantCard resData={resList[1]} />
        {resList.map((res) => (
          <RestuarantCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
