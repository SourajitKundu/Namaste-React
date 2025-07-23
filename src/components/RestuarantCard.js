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

const RestuarantCard = (props) => {
  const { resData } = props;
  const { name, cuisine, rating, image } = resData?.info || {}; //saves crashing even if resData or resData.info is missing by returning empty array
  const distance = resData?.distance;

  return (
    <div className="res-card">
      <img alt="res-logo" className="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{cuisine.map((c) => c.name).join(", ")}</h4>
      <h4>{rating.aggregate_rating}</h4>
      <h4>{distance}</h4>
    </div>
  );
};

export default RestuarantCard;
