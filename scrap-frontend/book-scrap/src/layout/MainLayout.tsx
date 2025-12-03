import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import BookCategoryList from "../pages/BookCategoryList";
import { BookCategoryResponse } from "../model/Book";
import axios from "axios";
import "../css/MainLayout.css";

const MainLayout: React.FC = () => {
  const [categories, setCategories] = useState<BookCategoryResponse[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/bookCategory/findAll")
        .then((res) => setCategories(res.data))
        .catch((err) => console.error(err));
  }, []);

  return (
    <div className="layout">
      <aside className="layout-aside">
        <h2>카테고리</h2>
        <BookCategoryList categories={categories} />
      </aside>

      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
