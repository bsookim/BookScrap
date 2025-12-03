import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { BookResponse } from "../model/Book";

const BookList: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [books, setBooks] = useState<BookResponse[]>([]);
  const [page, setPage] = useState<number>(0);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    if (categoryName) {
      axios
        .get(
          `http://localhost:8080/book/findByCategoryName/${encodeURIComponent(
            categoryName
          )}`,
          { params: { page } }
        )
        .then((res) => {
          setBooks(res.data.content);
          setTotalPage(res.data.totalPages);
        })
        .catch((err) => console.error(err));
    }
  }, [categoryName, page]);

  if (!categoryName) return <div>카테고리를 선택해주세요.</div>;

  return (
    <div className="book-list">
      <h2>카테고리: {categoryName}</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/detail/${book.id}`}>
              <center>
                <img src={book.thumbNail} alt={book.title} />
                <div>{book.title}</div>
                <div>{book.price}원</div>
                <div>재고: {book.stock}</div>
              </center>
            </Link>
          </li>
        ))}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPage }, (_, i) => (
          <button
            key={i}
            className={page === i ? "active" : ""}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookList;
