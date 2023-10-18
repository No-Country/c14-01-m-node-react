import { useEffect, useMemo, useState } from "react";
import locations from "../../data/locations.json";
import CardProperty from "./CardProperty";
import { useParams } from "react-router";
import "./styles.css";
import { getFilterCategory } from "../../utils/getFilters";

const ListProperties = () => {
  const params = useParams();
  const { categoria } = params;
  const locationsFiltered = useMemo(() => {
    if (categoria) {
      const filtered = getFilterCategory(categoria, locations);
      return filtered;
    } else {
      return locations;
    }
  }, [categoria]);
  {
    console.log(locationsFiltered);
  }
  return (
    <div className="container-cards">
      {locationsFiltered != [] ? (
        locationsFiltered.map((item) => (
          <CardProperty key={item.id} location={item} />
        ))
      ) : (
        <div>{"Is not locations avaliables in this category"}</div>
      )}
    </div>
  );
};

export default ListProperties;
