import React from "react";
import "./Country.css";

const Country = (props) => {
  const { area, region, name, population, flags } = props.country;
  return (
    <div className="country">
      <h3>Name:{name.common}</h3>
      <h4>Region:{region}</h4>
      <p>Area:{area}</p>
      <p>Population:{population}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
