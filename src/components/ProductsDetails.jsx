import React from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();

  return <div>ProductsDetails {id}</div>;
};

export default ProductsDetails;
