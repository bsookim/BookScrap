import React, { useState } from "react";
import axios from "axios";
import type { BookUrlRequest } from "../model/Book";
import { useNavigate } from "react-router-dom";

const BookSave: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    const requestData: BookUrlRequest = { currentUrl };
    try {
      await axios.post("http://localhost:8080/book/save", requestData);
   
      navigate("/")
    } catch (error) {
      console.error("에러", error);
    }
  };

  return (
    <div>
      <center>
        <h2>Book 저장하기</h2>
        <input
          type="text"
          value={currentUrl}
          onChange={(e) => setCurrentUrl(e.target.value)}
          placeholder="URL 입력"
        />
        <button onClick={handleSave}>저장</button>
      </center>
    </div>
  );
};

export default BookSave;
