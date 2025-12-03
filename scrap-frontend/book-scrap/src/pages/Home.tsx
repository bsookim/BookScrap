import React from "react";
import { useParams } from "react-router-dom";

const Home: React.FC = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h1>Home</h1>
      {categoryName && <p>현재 카테고리: {categoryName}</p>}
    </div>
  );
};

export default Home;
