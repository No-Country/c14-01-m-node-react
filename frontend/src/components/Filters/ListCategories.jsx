import { useParams } from "react-router-dom";

const ListCategories = () => {
  const params = useParams();
  console.log(params);
  return <div></div>;
};

export default ListCategories;
