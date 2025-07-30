//Before Optimisation and Destructuring

/*const RestuarantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img className="res-img" src={resData.info.image.url} />
      <h3 className="res-name">{resData.info.name}</h3>
      <h3 className="star-rating">{resData.info.rating.aggregate_rating}</h3>
      <h3 className="cuisine">
        {resData.info.cuisine.map((c) => c.name).join(", ")}
      </h3>
    </div>
  );
}*/

//After Optimising
import { constUrl } from "../utils/constants";

const RestuarantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info || {}; //saves crashing even if resData or resData.info is missing by returning empty array

  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={constUrl + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{areaName}</h4>
    </div>
  );
};

export default RestuarantCard;
