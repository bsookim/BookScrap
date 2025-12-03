import React from "react";
import { BookCategoryResponse } from "../model/Book";
import { useNavigate } from "react-router-dom";

interface Props {
  categories: BookCategoryResponse[];
}

const BookCategoryList: React.FC<Props> = ({ categories }) => {
  const navigate = useNavigate();

  const handleClick = (categoryName: string) => {
    navigate(`/books/${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="category-list">
      {categories.map((c) => (
        <div
          key={c.id}
          className="category-item"
          onClick={() => handleClick(c.categoryName)}
        >
          {c.categoryName}
        </div>
      ))}
    </div>
  );
};

export default BookCategoryList;
