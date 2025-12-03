import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Loading from "./components/Loading";

const BookList = lazy(() => import("./pages/BookList"));
const BookDetail = lazy(() => import("./pages/BookDetail"));
const BookSave = lazy(() => import("./pages/BookSave"));
const BookUpdate = lazy(() => import("./pages/BookUpdate"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="books/:categoryName" element={<BookList />} />
        <Route path="detail/:id" element={<BookDetail />} />
        <Route path="save" element={<BookSave />} />
        <Route path="update/:id" element={<BookUpdate />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </Suspense>
);

export default App;
